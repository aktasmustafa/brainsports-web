import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Phone, Mail, MapPin } from 'lucide-react';
import { siteData } from '../data/content';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--color-primary)', color: 'white', paddingTop: '5rem', paddingBottom: '2rem' }}>
      <div className="container grid grid-4" style={{ marginBottom: '4rem' }}>
        
        {/* Brand */}
        <div>
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', color: 'white', fontWeight: '600', fontSize: '1.4rem', fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em', marginBottom: '1.2rem' }}>
            <BookOpen size={28} color="var(--color-accent)" />
            {siteData.global.title}
          </Link>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: '1.7', fontWeight: '300' }}>
            {siteData.global.subtitle}
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.1rem', fontFamily: 'var(--font-heading)', textTransform: 'uppercase', letterSpacing: '1px' }}>Bağlantılar</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><Link to="/hakkimizda" className="footer-link">Hakkımızda</Link></li>
            <li><Link to="/proje" className="footer-link">TÜBİTAK 1001 Projesi</Link></li>
            <li><Link to="/fiziksel-uygunluk" className="footer-link">Fiziksel Uygunluk</Link></li>
            <li><Link to="/is-birlikleri" className="footer-link">İş Birliklerimiz</Link></li>
          </ul>
        </div>

        {/* Research Areas */}
        <div>
          <h4 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.1rem', fontFamily: 'var(--font-heading)', textTransform: 'uppercase', letterSpacing: '1px' }}>Alanlarımız</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {siteData.researchAreas.map(area => (
              <li key={area.id}>
                <Link to={area.id === 'fiziksel-uygunluk' ? '/fiziksel-uygunluk' : `/arastirma/${area.id}`} className="footer-link">
                  {area.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.1rem', fontFamily: 'var(--font-heading)', textTransform: 'uppercase', letterSpacing: '1px' }}>İletişim</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', color: 'rgba(255,255,255,0.7)' }}>
              <Phone size={18} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: '2px' }}/>
              <span style={{ fontSize: '0.95rem' }}>{siteData.global.phone}</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', color: 'rgba(255,255,255,0.7)' }}>
              <Mail size={18} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: '2px' }}/>
              <span style={{ fontSize: '0.95rem' }}>{siteData.global.email}</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', color: 'rgba(255,255,255,0.7)' }}>
              <MapPin size={18} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: '2px' }}/>
              <span style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>{siteData.global.address}</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="container" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', textAlign: 'center', color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>
        <p>&copy; {new Date().getFullYear()} BrainSportsLab. Tüm hakları saklıdır.</p>
      </div>

      <style>{`
        .footer-link {
          color: rgba(255,255,255,0.7);
          transition: color 0.2s ease;
        }
        .footer-link:hover {
          color: var(--color-accent);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
