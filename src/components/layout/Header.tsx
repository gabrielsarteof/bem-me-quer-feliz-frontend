'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { MenuItem } from '@/types';
import { Menu, X, Search } from 'lucide-react';

interface HeaderProps {
  logo: string;
  menuItems: MenuItem[];
  primaryCTA: { label: string; href: string };
  showAnnouncement?: boolean;
}

export default function Header({
  logo,
  menuItems,
  primaryCTA,
  showAnnouncement = true,
}: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Aplica classe dark no <html>
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-gray-900 shadow-sm transition-colors">
      {/* Announcement Bar */}
      {showAnnouncement && (
        <div className="bg-gradient-primary text-white text-xs sm:text-sm py-2 px-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-1">
              <Image
                src="assets/icons/svg/mail.svg"
                alt="Email"
                height={16}
                width={0}
                className="w-auto h-6"
              />
              <span>contato@bemmequer.com.br</span>
            </div>
            <div className="flex items-center gap-1">
              <Image
                src="assets/icons/svg/home.svg"
                alt="Localização"
                height={16}
                width={0}
                className="w-auto h-6"
              />
              <span>João Sátirio de Almeida, Cachoeiro de Itapemirim | ES</span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-1">
              <Image
                src="assets/icons/svg/clock.svg"
                alt="Horário"
                height={16}
                width={0}
                className="w-auto h-6"
              />
              <span>Seg-Sex: 10h - 21h</span>
            </div>
            <div className="flex items-center gap-3">
              <Link href="#" aria-label="Facebook">
                <Image
                  src="assets/icons/svg/facebook.svg"
                  alt="Facebook"
                  height={16}
                  width={0}
                  className="w-auto h-4 hover:opacity-80 transition-opacity"
                />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Image
                  src="assets/icons/svg/instagram.svg"
                  alt="Instagram"
                  height={16}
                  width={0}
                  className="w-auto h-4 hover:opacity-80 transition-opacity"
                />
              </Link>
              <Link href="#" aria-label="WhatsApp">
                <Image
                  src="assets/icons/svg/whatsapp.svg"
                  alt="WhatsApp"
                  height={16}
                  width={0}
                  className="w-auto h-4 hover:opacity-80 transition-opacity"
                />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Navbar */}
      <nav className="section-container flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logo}
            alt="Logo"
            height={40}
            width={0}
            className="w-auto h-10"
          />
          <span className="font-semibold text-lg dark:text-white">
            bem me quer feliz
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center">
          {menuItems.map(item => (
            <li key={item.label} className="relative group">
              <Link
                href={item.href}
                className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
              {item.children && (
                <ul className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white dark:bg-gray-800 shadow-lg rounded-md p-2 min-w-max">
                  {item.children.map(sub => (
                    <li key={sub.label}>
                      <Link
                        href={sub.href}
                        className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 rounded transition-colors"
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button
            aria-label="Buscar"
            className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <Search className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle Theme"
            className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {darkMode ? (
              <Image
                src="assets/icons/svg/sun-light.svg"
                alt="Dark Mode"
                height={20}
                width={0}
                className="w-auto h-5"
              />
            ) : (
              <Image
                src="assets/icons/svg/sun-dark.svg"
                alt="Light Mode"
                height={20}
                width={0}
                className="w-auto h-5"
              />
            )}
          </button>
          <Link href={primaryCTA.href} className="btn-primary">
            {primaryCTA.label}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? (
            <X className="w-6 h-6 text-gray-700 dark:text-gray-200" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700 dark:text-gray-200" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t shadow-md">
          <ul className="flex flex-col p-4 space-y-2">
            {menuItems.map(item => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="block py-2 text-gray-700 dark:text-gray-200 hover:text-primary transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="ml-4 space-y-1">
                    {item.children.map(sub => (
                      <li key={sub.label}>
                        <Link
                          href={sub.href}
                          className="block py-1 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="p-4 flex flex-col gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded bg-gray-100 dark:bg-gray-800 self-start transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
              aria-label="Toggle Theme Mobile"
            >
              {darkMode ? (
                <Image
                  src="/icons/moon.svg"
                  alt="Dark Mode"
                  height={20}
                  width={0}
                  className="w-auto h-5"
                />
              ) : (
                <Image
                  src="/icons/sun.svg"
                  alt="Light Mode"
                  height={20}
                  width={0}
                  className="w-auto h-5"
                />
              )}
            </button>
            <Link href={primaryCTA.href} className="btn-primary text-center">
              {primaryCTA.label}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
