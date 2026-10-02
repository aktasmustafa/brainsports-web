import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowLeft, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import { siteData } from '../data/content';

const ResearchArea = () => {
  const { id } = useParams();
  const areaData = siteData.researchAreas.find(area => area.id === id);

  if (!areaData) return <Navigate to="/" />;

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div>
      {/* Hero */}
      <section style={{ position: 'relative', minHeight: '50vh', display: 'flex', alignItems: 'center', overflow: 'hidden', paddingTop: '80px' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: -1 }}>
          <img src={areaData.image} alt={areaData.title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.3)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--color-bg), transparent)' }}></div>
        </div>
        
        <div className="container hero-content">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Link to="/" style={{ color: 'var(--color-accent)', display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '2rem', fontSize: '0.9rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
              <ArrowLeft size={16} /> Ana Sayfaya Dön
            </Link>
            <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', color: 'white', marginBottom: '1rem', lineHeight: '1.1' }}>
              {areaData.title}
            </h1>
            <p style={{ fontSize: '1.3rem', color: 'rgba(255,255,255,0.8)', maxWidth: '800px', fontWeight: '300' }}>
              {areaData.shortDesc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container">
          <div className="grid" style={{ gridTemplateColumns: '1fr 350px', gap: '4rem', alignItems: 'start' }}>
            
            {/* Main Content Column */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ padding: '3rem', borderRadius: '24px', backgroundColor: 'var(--color-bg-alt)', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', color: 'var(--color-accent)' }}>
                <Activity size={32} />
                <h2 style={{ fontSize: '2rem', margin: 0, color: 'white' }}>Araştırma Detayları</h2>
              </div>
              <div style={{ color: 'var(--color-text)', fontSize: '1.2rem', lineHeight: '1.8', fontWeight: '300' }}>
                <p>{areaData.content}</p>
              </div>
            </motion.div>

            {/* Sidebar */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="glass-panel" style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'white' }}>Diğer Alanlar</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <li>
                    <Link to="/fiziksel-uygunluk" style={{ color: 'var(--color-text-muted)', display: 'block', fontSize: '1rem', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--color-accent)'} onMouseOut={e => e.currentTarget.style.color = 'var(--color-text-muted)'}>
                      Fiziksel Uygunluk
                    </Link>
                  </li>
                  {siteData.researchAreas.filter(a => a.id !== id && a.id !== 'fiziksel-uygunluk').map(area => (
                    <li key={area.id}>
                      <Link to={`/arastirma/${area.id}`} style={{ color: 'var(--color-text-muted)', display: 'block', fontSize: '1rem', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--color-accent)'} onMouseOut={e => e.currentTarget.style.color = 'var(--color-text-muted)'}>
                        {area.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="glass-panel" style={{ padding: '2rem', border: '1px solid var(--color-accent)', boxShadow: '0 0 20px rgba(204,255,0,0.1)' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'white' }}>Bizimle Çalışın</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', marginBottom: '2rem', lineHeight: '1.6' }}>
                  Laboratuvarımızda yürütülen çalışmalara katılmak veya iş birliği yapmak için bizimle iletişime geçin.
                </p>
                <Link to="/iletisim" className="btn btn-accent" style={{ width: '100%' }}>
                  İletişime Geç
                </Link>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
      
      {/* Quick CSS for sidebar layout on mobile */}
      <style>{`
        @media (max-width: 900px) {
          .grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default ResearchArea;
