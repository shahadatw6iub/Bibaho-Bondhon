"use client";
import { ReactNode, Suspense, useEffect, useRef, useState } from 'react';
import { WalletButton } from '../solana/solana-provider';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AccountChecker } from '../account/account-ui';
import { ClusterChecker, ClusterUiSelect, ExplorerLink } from '../cluster/cluster-ui';
import toast, { Toaster } from 'react-hot-toast';

export function UiLayout({
  links,
}: {
  links: { label: string; path: string }[];
}) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <div className="flex flex-col h-full">
      <div className="navbar bg-slate-900 text-neutral-content flex flex-col md:flex-row relative">
        <div className="flex justify-between items-center p-4">
          <Link className="btn btn-ghost normal-case text-xl" href="/">
            <img className="h-40 -mt-10" alt="Logo" src="/logo.png" />
          </Link>
          <button
            className="md:hidden px-2 py-1 text-white"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <div className="hidden md:flex md:items-center md:space-x-2">
          <ul className="menu menu-horizontal px-1 space-x-2">
            {links.map(({ label, path }) => (
              <li key={path}>
                <Link
                  className={pathname && pathname.startsWith(path) ? 'active' : ''}
                  href={path}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex-none space-x-2 px-10">
            <WalletButton />
            <ClusterUiSelect />
          </div>
        </div>
        <div
          className={`fixed top-0 right-0 h-full bg-gray-800 bg-opacity-75 z-40 transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}
          style={{ width: '50%', maxWidth: '300px' }}
        >
          <div className="flex flex-col p-4 h-full bg-slate-900 text-neutral-content">
            <button className="self-end text-white" onClick={toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <ul className="mt-4 space-y-2">
              {links.map(({ label, path }) => (
                <li key={path}>
                  <Link
                    className={`block ${pathname && pathname.startsWith(path) ? 'text-yellow-500' : ''}`}
                    href={path}
                    onClick={toggleMenu}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <WalletButton />
              <ClusterUiSelect />
            </div>
          </div>
        </div>
      </div>
      <ClusterChecker>
        <AccountChecker />
      </ClusterChecker>
    </div>
  );
}

export function AppModal({
  title,
  hide,
  show,
  submit,
  submitDisabled,
  submitLabel,
  children,
}: {
  title: string;
  hide: () => void;
  show: boolean;
  submit?: () => void;
  submitDisabled?: boolean;
  submitLabel?: string;
  children?: ReactNode; // Accept children as a prop
}) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (!dialogRef.current) return;
    if (show) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [show]);

  return (
    <dialog className="modal" ref={dialogRef}>
      <div className="modal-box space-y-5">
        <h3 className="font-bold text-lg">{title}</h3>
        <div>{children}</div> {/* Render children inside the modal */}
        <div className="modal-action">
          <div className="join space-x-2">
            {submit && (
              <button
                className="btn btn-xs lg:btn-md btn-primary"
                onClick={submit}
                disabled={submitDisabled}
              >
                {submitLabel || 'Save'}
              </button>
            )}
            <button onClick={hide} className="btn">
              Close
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}

export function AppHero({
  title,
  subtitle,
  children,
}: {
  title: ReactNode;
  subtitle: ReactNode;
  children?: ReactNode; // Accept children as a prop

}) {
  return (
    <div className="hero py-[64px]">
      <div className="hero-content text-center">
        <div className="max-w-2xl">
          {typeof title === 'string' ? (
            <h1 className="text-5xl font-bold">{title}</h1>
          ) : (
            title
          )}
          {typeof subtitle === 'string' ? (
            <p className="py-6">{subtitle}</p>
          ) : (
            subtitle
          )}
        </div>
        <div>{children}</div> {/* Render children inside the modal */}
      </div>
    </div>
  );
}

export function ellipsify(str = '', len = 4) {
  if (str.length > 30) {
    return (
      str.substring(0, len) + '..' + str.substring(str.length - len, str.length)
    );
  }
  return str;
}

export function useTransactionToast() {
  return (signature: string) => {
    toast.success(
      <div className={'text-center'}>
        <div className="text-lg">Transaction sent</div>
        <ExplorerLink
          path={`tx/${signature}`}
          label={'View Transaction'}
          className="btn btn-xs btn-primary"
        />
      </div>
    );
  };
}
