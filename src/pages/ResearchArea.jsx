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
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(11,36,71,0.85)', zIndex: 1 }}></div>
          <img src={areaData.image} alt={areaData.title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(30%)', zIndex: 0 }} />
        </div>
        
        <div className="container hero-content">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Link to="/" style={{ color: 'white', display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '2rem', fontSize: '0.95rem', fontWeight: '500', background: 'rgba(255,255,255,0.1)', padding: '0.5rem 1rem', borderRadius: '4px', backdropFilter: 'blur(5px)' }}>
              <ArrowLeft size={16} /> Ana Sayfaya Dön
            </Link>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white', marginBottom: '1rem', lineHeight: '1.2' }}>
              {areaData.title}
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.9)', maxWidth: '800px', fontWeight: '300' }}>
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
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ padding: '3.5rem', borderRadius: '8px', backgroundColor: 'var(--color-bg-alt)', boxShadow: 'var(--shadow-sm)', border: '1px solid rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', color: 'var(--color-primary)' }}>
                <Activity size={32} />
                <h2 style={{ fontSize: '2rem', margin: 0, color: 'var(--color-primary)' }}>Araştırma Detayları</h2>
              </div>
              <div style={{ color: 'var(--color-text)', fontSize: '1.15rem', lineHeight: '1.9', fontWeight: '400' }}>
                <p>{areaData.content}</p>
              </div>
            </motion.div>

            {/* Sidebar */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="glass-panel" style={{ padding: '2.5rem' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Diğer Alanlar</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <li>
                    <Link to="/fiziksel-uygunluk" style={{ color: 'var(--color-text-muted)', display: 'block', fontSize: '1rem', transition: 'color 0.2s', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '0.8rem' }} onMouseOver={e => e.currentTarget.style.color = 'var(--color-accent)'} onMouseOut={e => e.currentTarget.style.color = 'var(--color-text-muted)'}>
                      Fiziksel Uygunluk
                    </Link>
                  </li>
                  {siteData.researchAreas.filter(a => a.id !== id && a.id !== 'fiziksel-uygunluk').map(area => (
                    <li key={area.id}>
                      <Link to={`/arastirma/${area.id}`} style={{ color: 'var(--color-text-muted)', display: 'block', fontSize: '1rem', transition: 'color 0.2s', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '0.8rem' }} onMouseOver={e => e.currentTarget.style.color = 'var(--color-accent)'} onMouseOut={e => e.currentTarget.style.color = 'var(--color-text-muted)'}>
                        {area.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="glass-panel" style={{ padding: '2.5rem', backgroundColor: 'var(--color-primary)', color: 'white' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'white' }}>Bizimle Çalışın</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', marginBottom: '2rem', lineHeight: '1.6' }}>
                  Laboratuvarımızda yürütülen çalışmalara katılmak veya akademik iş birliği yapmak için bizimle iletişime geçin.
                </p>
                <Link to="/iletisim" className="btn btn-accent" style={{ width: '100%' }}>
                  İletişime Geç
                </Link>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
      
      <style>{`
        @media (max-width: 900px) {
          .grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default ResearchArea;
