"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "../../utils/cn";
import Link from "next/link";
import services from "../../data/services.json";
import { BackgroundBeams } from "../ui/background-beams";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item={"Home"} />
        </Link>

        <MenuItem setActive={setActive} active={active} item={"Our Services"}>
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/services">All Services</HoveredLink>
            {services.services.map((service) => (
              <HoveredLink key={service.id} href={`/services/${service.slug}`}>
                {service.title}
              </HoveredLink>
            ))}
          </div>
        </MenuItem>

        <Link href={"/contact"}>
          <MenuItem setActive={setActive} active={active} item={"Contact"} />
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
