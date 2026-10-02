import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Activity } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteData } from '../data/content';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        backgroundColor: scrolled ? 'rgba(5, 5, 5, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
        zIndex: 1000,
        height: '80px',
        display: 'flex',
        alignItems: 'center',
        transition: 'all 0.3s ease'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'white', fontWeight: '800', fontSize: '1.4rem', fontFamily: 'var(--font-heading)', letterSpacing: '1px' }}>
          <Activity size={28} color="var(--color-accent)" />
          {siteData.global.title}
        </Link>

        {/* Desktop Menu */}
        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }} className="desktop-menu">
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Ana Sayfa</NavLink>
          <NavLink to="/hakkimizda" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Hakkımızda</NavLink>
          <NavLink to="/proje" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Proje (1001)</NavLink>
          
          {/* Dropdown */}
          <div 
            style={{ position: 'relative', cursor: 'pointer' }}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontWeight: '600', fontFamily: 'var(--font-heading)', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '1px' }}>
              Araştırma Alanları <ChevronDown size={16} color="var(--color-accent)" />
            </div>
            
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '0',
                    backgroundColor: 'var(--color-bg-alt)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                    padding: '1rem 0',
                    minWidth: '240px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                    boxShadow: 'var(--shadow-glass)',
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

          <NavLink to="/is-birlikleri" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>İş Birlikleri</NavLink>
          <Link to="/iletisim" className="btn btn-accent" style={{ padding: '0.6rem 1.5rem', fontSize: '0.8rem' }}>İletişim</Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={toggleMenu} 
          className="mobile-toggle"
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none', color: 'white' }}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      <style>{`
        .dropdown-item {
          padding: 0.75rem 1.5rem;
          display: block;
          color: var(--color-text-muted);
          font-family: var(--font-body);
          font-size: 0.95rem;
          transition: all var(--transition-fast);
        }
        .dropdown-item:hover {
          color: white;
          background-color: rgba(255,255,255,0.05);
          padding-left: 2rem;
          border-left: 2px solid var(--color-accent);
        }
        @media (max-width: 900px) {
          .desktop-menu { display: ${isOpen ? 'flex' : 'none'} !important; flex-direction: column; position: absolute; top: 80px; left: 0; width: 100%; background: var(--color-bg-alt); padding: 2rem; border-bottom: 1px solid rgba(255,255,255,0.1); align-items: flex-start !important; gap: 1.5rem !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;
