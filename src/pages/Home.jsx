import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Activity, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import { siteData } from '../data/content';

const Home = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section style={{ 
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '70px',
        overflow: 'hidden'
      }}>
        {/* Abstract dark tech background */}
        <div style={{ position: 'absolute', inset: 0, zIndex: -1 }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(204, 255, 0, 0.15), transparent 40%)' }}></div>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(0, 180, 216, 0.1), transparent 40%)' }}></div>
          <div style={{ position: 'absolute', inset: 0, background: 'url("https://www.transparenttextures.com/patterns/cubes.png")', opacity: 0.05 }}></div>
        </div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer}
            style={{ maxWidth: '900px' }}
          >
            <motion.div variants={fadeUp} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '100px', marginBottom: '2rem', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '1px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-accent)', boxShadow: '0 0 10px var(--color-accent)' }}></span>
              {siteData.project.badge}
            </motion.div>
            
            <motion.h1 variants={fadeUp} style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', color: 'white', marginBottom: '1.5rem', textTransform: 'uppercase', lineHeight: '1' }}>
              AI <span style={{ color: 'var(--color-text-muted)' }}>x</span> NEUROSCIENCE <br/><span style={{ color: 'var(--color-accent)', textShadow: 'var(--shadow-neon)' }}>x SPORTS</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', marginBottom: '3rem', maxWidth: '600px', fontWeight: '400' }}>
              Futbolcuların fiziksel performans düzeylerini makine öğrenmesi, EEG ve göz takip sistemleri ile analiz eden öncü araştırma laboratuvarı.
            </motion.p>
            
            <motion.div variants={fadeUp} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/proje" className="btn btn-accent">
                Projeyi İncele <ArrowRight size={20} />
              </Link>
              <Link to="/hakkimizda" className="btn btn-outline">
                Hakkımızda
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Project Highlight */}
      <section className="section section-alt">
        <div className="container text-center">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="section-title">TÜBİTAK 1001</motion.h2>
            <motion.p variants={fadeUp} className="section-subtitle">
              Multidisipliner bir yaklaşımla, sporcu performansını yapay zeka ile yeniden boyutlandırıyoruz.
            </motion.p>
            
            <motion.div variants={fadeUp} className="glass-panel" style={{ padding: '4rem', maxWidth: '1000px', margin: '0 auto', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '2rem', position: 'relative', overflow: 'hidden' }}>
              {/* Decorative accent line */}
              <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', backgroundColor: 'var(--color-accent)', boxShadow: 'var(--shadow-neon)' }}></div>
              
              <h3 style={{ fontSize: '1.8rem', lineHeight: '1.4' }}>{siteData.project.title}</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>
                {siteData.project.description}
              </p>
              <div>
                <Link to="/proje" style={{ color: 'var(--color-accent)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  Detayları Gör <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Research Areas (Image Cards) */}
      <section className="section">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center">
            <motion.h2 variants={fadeUp} className="section-title">Odak Alanlarımız</motion.h2>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} 
            className="grid grid-2" style={{ marginTop: '4rem' }}
          >
            {siteData.researchAreas.map((area, index) => (
              <motion.div variants={fadeUp} key={area.id} className="card" style={{ minHeight: '400px' }}>
                <div className="card-image-wrapper" style={{ height: '100%', position: 'absolute', inset: 0 }}>
                  <img src={area.image} alt={area.title} />
                  <div className="card-image-overlay"></div>
                </div>
                
                <div className="card-content" style={{ justifyContent: 'flex-end', height: '100%', paddingTop: '150px' }}>
                  <h3 className="card-title" style={{ fontSize: '2rem', color: 'white' }}>{area.title}</h3>
                  <p className="card-text" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem' }}>{area.shortDesc}</p>
                  <Link to={area.id === 'fiziksel-uygunluk' ? '/fiziksel-uygunluk' : `/arastirma/${area.id}`} style={{ color: 'var(--color-accent)', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '8px', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '1rem' }}>
                    İncele <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
