import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronDown, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteData } from '../data/content';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.05)' : '1px solid transparent',
        boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
        zIndex: 1000,
        height: '80px',
        display: 'flex',
        alignItems: 'center',
        transition: 'all 0.4s ease'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: scrolled ? 'var(--color-primary)' : 'white', fontWeight: '600', fontSize: '1.4rem', fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em', transition: 'color 0.4s ease' }}>
          <BookOpen size={28} color="var(--color-accent)" />
          {siteData.global.title}
        </Link>

        {/* Desktop Menu */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-menu">
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} style={{ color: scrolled ? 'var(--color-text)' : 'white' }}>Ana Sayfa</NavLink>
          <NavLink to="/hakkimizda" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} style={{ color: scrolled ? 'var(--color-text)' : 'white' }}>Hakkımızda</NavLink>
          <NavLink to="/proje" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} style={{ color: scrolled ? 'var(--color-text)' : 'white' }}>Proje (1001)</NavLink>
          
          {/* Dropdown */}
          <div 
            style={{ position: 'relative', cursor: 'pointer' }}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontWeight: '500', fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: scrolled ? 'var(--color-text)' : 'white', transition: 'color 0.4s ease' }}>
              Araştırma Alanları <ChevronDown size={16} color="var(--color-accent)" />
            </div>
            
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '0',
                    backgroundColor: 'var(--color-bg-alt)',
                    border: '1px solid rgba(0,0,0,0.05)',
                    borderRadius: '8px',
                    padding: '0.5rem 0',
                    minWidth: '220px',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: 'var(--shadow-lg)',
                    marginTop: '1rem'
                  }}>
                  <Link to="/fiziksel-uygunluk" className="dropdown-item">Fiziksel Uygunluk</Link>
                  {siteData.researchAreas.filter(a => a.id !== 'fiziksel-uygunluk').map(area => (
                    <Link key={area.id} to={`/arastirma/${area.id}`} className="dropdown-item">
                      {area.title}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink to="/is-birlikleri" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} style={{ color: scrolled ? 'var(--color-text)' : 'white' }}>İş Birlikleri</NavLink>
          <NavLink to="/sss" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} style={{ color: scrolled ? 'var(--color-text)' : 'white' }}>S.S.S.</NavLink>
          <Link to="/iletisim" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>İletişim</Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={toggleMenu} 
          className="mobile-toggle"
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none', color: scrolled ? 'var(--color-primary)' : 'white' }}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      <style>{`
        .dropdown-item {
          padding: 0.75rem 1.5rem;
          display: block;
          color: var(--color-text);
          font-family: var(--font-body);
          font-size: 0.9rem;
          transition: all var(--transition-fast);
        }
        .dropdown-item:hover {
          color: var(--color-primary);
          background-color: var(--color-bg);
          padding-left: 2rem;
          border-left: 2px solid var(--color-accent);
        }
        @media (max-width: 900px) {
          .desktop-menu { display: ${isOpen ? 'flex' : 'none'} !important; flex-direction: column; position: absolute; top: 80px; left: 0; width: 100%; background: var(--color-bg-alt); padding: 2rem; border-bottom: 1px solid rgba(0,0,0,0.1); align-items: flex-start !important; gap: 1.5rem !important; box-shadow: var(--shadow-md); }
          .desktop-menu .nav-link, .desktop-menu div { color: var(--color-text) !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;
