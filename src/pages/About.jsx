import React from 'react';
import { motion } from 'framer-motion';
import { siteData } from '../data/content';
import { ArrowRight, Target, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div>
      <section style={{ position: 'relative', minHeight: '50vh', display: 'flex', alignItems: 'center', overflow: 'hidden', paddingTop: '80px', backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container hero-content text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <h1 style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', color: 'white', marginBottom: '1.5rem' }}>
              Hakkımızda
            </h1>
            <p style={{ fontSize: '1.3rem', color: 'var(--color-text-muted)', maxWidth: '800px', margin: '0 auto', fontWeight: '300' }}>
              Spor bilimleri, nörobilim ve yapay zeka kesişiminde sınırları zorluyoruz.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ gap: '5rem', alignItems: 'center' }}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', color: 'var(--color-accent)', fontWeight: '700', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem' }}>
                <Target size={18} /> Misyonumuz
              </div>
              <h2 style={{ fontSize: 'clamp(2rem, 3vw, 3rem)', color: 'white', marginBottom: '1.5rem', lineHeight: '1.1' }}>
                Performansı Bilimle Yeniden Tanımlamak
              </h2>
              <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', lineHeight: '1.8', marginBottom: '2rem', fontWeight: '300' }}>
                {siteData.about.mission}
              </p>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="glass-panel" style={{ padding: '4rem', position: 'relative' }}>
              {/* Neon accent */}
              <div style={{ position: 'absolute', top: 0, right: 0, width: '100px', height: '100px', background: 'radial-gradient(circle, var(--color-accent-glow) 0%, transparent 70%)', filter: 'blur(20px)', opacity: 0.5 }}></div>
              
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', color: 'var(--color-accent)', fontWeight: '700', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem', position: 'relative', zIndex: 1 }}>
                <Shield size={18} /> Vizyonumuz
              </div>
              <p style={{ fontSize: '1.4rem', color: 'white', lineHeight: '1.6', fontWeight: '500', position: 'relative', zIndex: 1 }}>
                "{siteData.about.vision}"
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '100px', height: '100px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--color-accent)', marginBottom: '2.5rem' }}>
              <Zap size={48} />
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '1.5rem', maxWidth: '800px', margin: '0 auto 1.5rem auto', color: 'white' }}>
              Bilimsel araştırmalarımızın merkezine insanı koyuyoruz
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', marginBottom: '4rem', maxWidth: '700px', margin: '0 auto 4rem auto', fontWeight: '300' }}>
              Disiplinlerarası ekibimiz ve yürütmekte olduğumuz TÜBİTAK projeleri ile spor bilimlerinde yenilikçi adımlar atıyoruz.
            </p>
            <Link to="/proje" className="btn btn-accent" style={{ padding: '1.2rem 2.5rem', fontSize: '1rem' }}>
              Ekibimizi ve Projemizi İnceleyin <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
