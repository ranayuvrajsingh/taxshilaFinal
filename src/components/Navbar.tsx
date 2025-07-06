"use client";

import {
  Navbar as NavContainer,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "../components/ui/resizable-navbar";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
    { name: "Blog", link: "/blog" },
  ];

  return (
    <div className="fixed w-full z-50 bg-black">
      <NavContainer className="bg-black text-white">
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />

          <NavItems
            items={navItems.map((item) => ({
              name: item.name,
              link: item.link,
              className:
                pathname === item.link
                  ? "text-orange-500 font-semibold"
                  : "text-white hover:text-orange-500 transition-colors duration-300",
            }))}
          />
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            className="bg-black"
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 text-lg font-medium ${
                  pathname === item.link
                    ? "text-orange-500"
                    : "text-white hover:text-orange-500"
                }`}
              >
                {item.name}
              </a>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </NavContainer>
    </div>
  );
}
