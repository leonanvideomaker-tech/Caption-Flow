'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(40);

  const links = [
    { label: 'Funcionalidades', href: '#funcionalidades' },
    { label: 'Como funciona', href: '#como-funciona' },
    { label: 'Preços', href: '#offer' },
  ];

  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const isPill = scrolled && !open;

  return (
    <>
      {/* Wrapper fixo que sempre ocupa 100% da largura centralizado */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: 'flex',
        justifyContent: 'center',
        pointerEvents: 'none',
      }}>
        <motion.header
          initial={false}
          animate={isPill ? {
            scale: 0.97,
            marginTop: 12,
            borderRadius: 20,
            maxWidth: 820,
            background: 'rgba(14,14,14,0.85)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
          } : {
            scale: 1,
            marginTop: 0,
            borderRadius: 0,
            maxWidth: 1400,
            background: 'rgba(14,14,14,0)',
            boxShadow: '0 0px 0px rgba(0,0,0,0)',
          }}
          transition={{ type: 'spring', stiffness: 200, damping: 30, mass: 0.8 }}
          style={{
            width: '100%',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderBottom: isPill ? '1px solid rgba(72,72,71,0.15)' : '1px solid transparent',
            pointerEvents: 'auto',
            overflow: 'hidden',
          }}
        >
          <nav className="flex h-14 w-full items-center justify-between px-5">
            <a href="/" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1rem', letterSpacing: '-0.01em', color: '#fff', textDecoration: 'none' }}>
              Caption<span style={{ color: '#FF6D29' }}>Flow</span>
            </a>

            <div className="hidden items-center gap-1 md:flex">
              {links.map((link, i) => (
                <a key={i} href={link.href}
                  className="rounded-lg px-3 py-2 text-sm transition-colors hover:text-white"
                  style={{ color: '#adaaaa', textDecoration: 'none', fontFamily: "'Inter', sans-serif" }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#adaaaa')}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <a href="#offer"
              className="inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm font-bold transition-all hover:opacity-90 active:scale-95"
              style={{ background: 'linear-gradient(135deg,#ff9063,#FF6D29)', color: '#fff', textDecoration: 'none', fontFamily: "'Space Grotesk', sans-serif", boxShadow: '0 4px 16px rgba(255,109,41,0.25)' }}
            >
              Comprar agora →
            </a>

            <button onClick={() => setOpen(!open)}
              className="hidden h-9 w-9 items-center justify-center rounded-lg text-white"
              style={{ border: '1px solid rgba(72,72,71,0.25)', background: 'rgba(255,255,255,0.04)' }}
              aria-label="Menu"
            >
              <MenuToggleIcon open={open} className="size-4" duration={300} />
            </button>
          </nav>
        </motion.header>
      </div>

      {/* Mobile menu */}
      <div className={cn(
        'fixed top-14 right-0 bottom-0 left-0 z-40 flex flex-col md:hidden',
        open ? 'block' : 'hidden',
      )} style={{ background: 'rgba(14,14,14,0.97)', backdropFilter: 'blur(20px)' }}>
        <div className="flex h-full w-full flex-col justify-between gap-y-2 p-5">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a key={link.label} href={link.href} onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium transition-colors hover:text-white"
                style={{ color: '#adaaaa', textDecoration: 'none', fontFamily: "'Inter', sans-serif" }}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pb-6">
            <a href="#offer" onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-base font-bold text-white"
              style={{ background: 'linear-gradient(135deg,#ff9063,#FF6D29)', textDecoration: 'none', fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Comprar agora →
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
