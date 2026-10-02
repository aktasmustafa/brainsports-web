import React from 'react';
import { motion } from 'framer-motion';
import { siteData } from '../data/content';
import { ArrowRight, Target, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div>
      <section style={{ position: 'relative', minHeight: '50vh', display: 'flex', alignItems: 'center', overflow: 'hidden', paddingTop: '80px', backgroundColor: 'var(--color-primary)' }}>
        <div className="container hero-content text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', color: 'white', marginBottom: '1.5rem' }}>
              Hakkımızda
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.8)', maxWidth: '800px', margin: '0 auto', fontWeight: '300', lineHeight: '1.8' }}>
              Spor bilimleri, nörobilim ve yapay zeka kesişiminde sınırları zorluyoruz.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ gap: '5rem', alignItems: 'center' }}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', color: 'var(--color-accent)', fontWeight: '600', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem', fontFamily: 'var(--font-body)' }}>
                <Target size={18} /> Misyonumuz
              </div>
              <h2 style={{ fontSize: 'clamp(2rem, 3vw, 2.8rem)', color: 'var(--color-primary)', marginBottom: '1.5rem', lineHeight: '1.2' }}>
                Performansı Bilimle Yeniden Tanımlamak
              </h2>
              <p style={{ fontSize: '1.15rem', color: 'var(--color-text)', lineHeight: '1.9', marginBottom: '2rem', fontWeight: '400' }}>
                {siteData.about.mission}
              </p>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="glass-panel" style={{ padding: '4rem', position: 'relative' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', color: 'var(--color-primary)', fontWeight: '600', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem', position: 'relative', zIndex: 1 }}>
                <Shield size={18} /> Vizyonumuz
              </div>
              <p style={{ fontSize: '1.4rem', color: 'var(--color-primary)', lineHeight: '1.7', fontWeight: '500', position: 'relative', zIndex: 1, fontStyle: 'italic' }}>
                "{siteData.about.vision}"
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '90px', height: '90px', borderRadius: '50%', backgroundColor: 'var(--color-bg)', border: '1px solid rgba(0,0,0,0.05)', color: 'var(--color-accent)', marginBottom: '2.5rem', boxShadow: 'var(--shadow-sm)' }}>
              <Zap size={40} />
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.5rem', maxWidth: '800px', margin: '0 auto 1.5rem auto', color: 'var(--color-primary)' }}>
              Bilimsel araştırmalarımızın merkezine insanı koyuyoruz
            </h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', marginBottom: '4rem', maxWidth: '700px', margin: '0 auto 4rem auto', fontWeight: '400', lineHeight: '1.8' }}>
              Disiplinlerarası ekibimiz ve yürütmekte olduğumuz TÜBİTAK projeleri ile spor bilimlerinde yenilikçi adımlar atıyoruz.
            </p>
            <Link to="/proje" className="btn btn-primary" style={{ padding: '1.1rem 2.5rem' }}>
              Ekibimizi ve Projemizi İnceleyin <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
