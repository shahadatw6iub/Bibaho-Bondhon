use anchor_lang::prelude::*;
use anchor_lang::solana_program::clock::Clock;

declare_id!("YourProgramIDHere");

#[program]
pub mod marriage_and_divorce {
    use super::*;

    pub fn propose_marriage(
        ctx: Context<ProposeMarriage>,
        bride_nid: u64,
        groom_nid: u64,
    ) -> Result<()> {
        let marriage_account = &mut ctx.accounts.marriage_account;
        let clock = Clock::get().unwrap();

        marriage_account.bride = ctx.accounts.bride.key();
        marriage_account.groom = ctx.accounts.groom.key();
        marriage_account.bride_nid = bride_nid;
        marriage_account.groom_nid = groom_nid;
        marriage_account.date = clock.unix_timestamp;
        marriage_account.is_divorced = false;
        marriage_account.bride_signed = false;
        marriage_account.groom_signed = false;
        marriage_account.judge_signed_divorce = false;

        emit!(MarriageProposed {
            marriage_id: marriage_account.id,
            bride: ctx.accounts.bride.key(),
            groom: ctx.accounts.groom.key(),
            bride_nid,
            groom_nid,
            date: marriage_account.date,
        });

        Ok(())
    }

    pub fn sign_marriage(ctx: Context<SignMarriage>) -> Result<()> {
        let marriage_account = &mut ctx.accounts.marriage_account;

        require!(
            ctx.accounts.signer.key() == marriage_account.bride || ctx.accounts.signer.key() == marriage_account.groom,
            ErrorCode::UnauthorizedSigner
        );

        if ctx.accounts.signer.key() == marriage_account.bride {
            marriage_account.bride_signed = true;
        } else if ctx.accounts.signer.key() == marriage_account.groom {
            marriage_account.groom_signed = true;
        }

        if marriage_account.bride_signed && marriage_account.groom_signed {
            // Call NFT minting logic here

            emit!(MarriageRegistered {
                marriage_id: marriage_account.id,
                bride: marriage_account.bride,
                groom: marriage_account.groom,
                date: marriage_account.date,
            });
        }

        Ok(())
    }

    pub fn propose_divorce(ctx: Context<ProposeDivorce>) -> Result<()> {
        let marriage_account = &mut ctx.accounts.marriage_account;

        require!(
            ctx.accounts.signer.key() == marriage_account.bride || ctx.accounts.signer.key() == marriage_account.groom,
            ErrorCode::UnauthorizedSigner
        );

        if ctx.accounts.signer.key() == marriage_account.bride {
            marriage_account.bride_signed = true;
        } else if ctx.accounts.signer.key() == marriage_account.groom {
            marriage_account.groom_signed = true;
        }

        if marriage_account.bride_signed && marriage_account.groom_signed {
            // Automatically finalize divorce once both parties have signed
            finalize_divorce(ctx)?;
        }

        Ok(())
    }

    pub fn finalize_divorce(ctx: Context<FinalizeDivorce>) -> Result<()> {
        let marriage_account = &mut ctx.accounts.marriage_account;

        require!(marriage_account.bride_signed && marriage_account.groom_signed, ErrorCode::IncompleteSignatures);

        marriage_account.is_divorced = true;
        marriage_account.judge_signed_divorce = true;

        // Call divorce NFT minting logic here

        emit!(DivorceRegistered {
            marriage_id: marriage_account.id,
            date: marriage_account.date,
        });

        Ok(())
    }
}

#[derive(Accounts)]
pub struct ProposeMarriage<'info> {
    #[account(init, payer = payer, space = 8 + Marriage::LEN)]
    pub marriage_account: Account<'info, Marriage>,
    #[account(mut)]
    pub bride: Signer<'info>,
    #[account(mut)]
    pub groom: Signer<'info>,
    #[account(mut)]
    pub payer: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct SignMarriage<'info> {
    #[account(mut, has_one = bride, has_one = groom)]
    pub marriage_account: Account<'info, Marriage>,
    pub signer: Signer<'info>,
}

#[derive(Accounts)]
pub struct ProposeDivorce<'info> {
    #[account(mut, has_one = bride, has_one = groom)]
    pub marriage_account: Account<'info, Marriage>,
    pub signer: Signer<'info>,
}

#[derive(Accounts)]
pub struct FinalizeDivorce<'info> {
    #[account(mut, has_one = bride, has_one = groom)]
    pub marriage_account: Account<'info, Marriage>,
    pub signer: Signer<'info>,
}

#[account]
pub struct Marriage {
    pub id: u64,
    pub bride: Pubkey,
    pub groom: Pubkey,
    pub bride_nid: u64,
    pub groom_nid: u64,
    pub date: i64,
    pub is_divorced: bool,
    pub bride_signed: bool,
    pub groom_signed: bool,
    pub judge_signed_divorce: bool,
}

impl Marriage {
    pub const LEN: usize = 8 + 32 + 32 + 8 + 8 + 8 + 1 + 1 + 1 + 1;
}

#[error_code]
pub enum ErrorCode {
    #[msg("Only the bride or groom can sign.")]
    UnauthorizedSigner,
    #[msg("Both parties must sign to proceed.")]
    IncompleteSignatures,
}

#[event]
pub struct MarriageProposed {
    pub marriage_id: u64,
    pub bride: Pubkey,
    pub groom: Pubkey,
    pub bride_nid: u64,
    pub groom_nid: u64,
    pub date: i64,
}

#[event]
pub struct MarriageRegistered {
    pub marriage_id: u64,
    pub bride: Pubkey,
    pub groom: Pubkey,
    pub date: i64,
}

#[event]
pub struct DivorceRegistered {
    pub marriage_id: u64,
    pub date: i64,
}
