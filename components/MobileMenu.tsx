'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import SmartLink from '@/components/SmartLink';

type Item = { label: string; href: string };

/**
 * Hamburger menu for viewports below `md`, where the primary nav is hidden.
 * Strings and links are passed in from the server Header so the dictionaries
 * never reach the client bundle.
 */
export default function MobileMenu({
  items,
  menuLabel,
}: {
  items: Item[];
  menuLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close after navigating (internal links are client-routed).
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Escape to close, and stop the page scrolling behind the panel.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={menuLabel}
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="grid h-10 w-10 place-items-center rounded-full text-ink transition-colors hover:bg-black/5 md:hidden"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
          {open ? (
            <>
              <path d="M6 6l12 12" />
              <path d="M18 6L6 18" />
            </>
          ) : (
            <>
              <path d="M3 6h18" />
              <path d="M3 12h18" />
              <path d="M3 18h18" />
            </>
          )}
        </svg>
      </button>

      {open && (
        <>
          <div
            className="fixed inset-x-0 bottom-0 top-20 z-40 bg-black/30 md:hidden"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <nav
            id="mobile-menu"
            className="absolute inset-x-0 top-20 z-50 border-t border-black/10 bg-white px-5 pb-4 shadow-lg md:hidden"
          >
            {items.map((item) => (
              <SmartLink
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block border-b border-black/5 py-4 text-base font-semibold text-ink transition-colors last:border-0 hover:text-teal"
              >
                {item.label}
              </SmartLink>
            ))}
          </nav>
        </>
      )}
    </>
  );
}
