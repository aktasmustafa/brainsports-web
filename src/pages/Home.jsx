import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Activity, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import { siteData } from '../data/content';

const Home = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
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
        backgroundColor: 'var(--color-primary)',
        overflow: 'hidden'
      }}>
        {/* Academic subtle background */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(to right, rgba(11,36,71,0.9) 0%, rgba(11,36,71,0.6) 100%)', zIndex: 1 }}></div>
          <img src={siteData.project.image} alt="Background" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(30%)' }} />
        </div>
        
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer}
            style={{ maxWidth: '900px' }}
          >
            <motion.div variants={fadeUp} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '0.4rem 1rem', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(5px)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '4px', marginBottom: '2rem', fontSize: '0.85rem', fontWeight: '500', color: 'white', letterSpacing: '0.5px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-accent)' }}></span>
              {siteData.project.badge} Destekli Araştırma Projesi
            </motion.div>
            
            <motion.h1 variants={fadeUp} style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', color: 'white', marginBottom: '1.5rem', lineHeight: '1.1', fontWeight: '500' }}>
              Performansın <br/><span style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>Bilimsel ve Nörolojik</span> <br/>Temelleri
            </motion.h1>
            
            <motion.p variants={fadeUp} style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.8)', marginBottom: '3rem', maxWidth: '650px', fontWeight: '300', lineHeight: '1.8' }}>
              Futbolcuların fiziksel performans düzeylerini makine öğrenmesi, EEG ve göz takip sistemleri ile analiz eden öncü akademik araştırma laboratuvarı.
            </motion.p>
            
            <motion.div variants={fadeUp} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/proje" className="btn btn-accent">
                Araştırmayı İncele <ArrowRight size={18} />
              </Link>
              <Link to="/hakkimizda" className="btn btn-outline" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>
                Hakkımızda
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Project Highlight */}
      <section className="section">
        <div className="container text-center">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="section-title">TÜBİTAK 1001 Projesi</motion.h2>
            <motion.p variants={fadeUp} className="section-subtitle">
              Multidisipliner bir yaklaşımla, sporcu performansını yapay zeka ile yeniden boyutlandırıyoruz.
            </motion.p>
            
            <motion.div variants={fadeUp} className="glass-panel" style={{ padding: '4rem', maxWidth: '1000px', margin: '0 auto', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '2rem', position: 'relative' }}>
              {/* Decorative accent line */}
              <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', backgroundColor: 'var(--color-accent)' }}></div>
              
              <h3 style={{ fontSize: '1.8rem', lineHeight: '1.4', color: 'var(--color-primary)' }}>{siteData.project.title}</h3>
              <p style={{ color: 'var(--color-text)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                {siteData.project.description}
              </p>
              <div>
                <Link to="/proje" style={{ color: 'var(--color-accent)', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  Detayları Gör <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Research Areas (Image Cards) */}
      <section className="section section-alt">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center">
            <motion.h2 variants={fadeUp} className="section-title">Araştırma Alanlarımız</motion.h2>
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
                  <h3 className="card-title" style={{ fontSize: '2rem', color: 'white', fontFamily: 'var(--font-heading)' }}>{area.title}</h3>
                  <p className="card-text" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', fontWeight: '300' }}>{area.shortDesc}</p>
                  <Link to={area.id === 'fiziksel-uygunluk' ? '/fiziksel-uygunluk' : `/arastirma/${area.id}`} style={{ color: 'var(--color-accent)', fontWeight: '500', display: 'inline-flex', alignItems: 'center', gap: '8px', marginTop: '1rem' }}>
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
