import React from 'react';
import { motion } from 'framer-motion';
import { siteData } from '../data/content';

const Project = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.15 } }
  };

  return (
    <div>
      {/* Hero with Parallax-like Image Background */}
      <section style={{ position: 'relative', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: -1 }}>
          <img src={siteData.project.image} alt="Project" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.3) grayscale(50%)' }} />
        </div>
        
        <div className="container text-center" style={{ position: 'relative', zIndex: 1, marginTop: '70px' }}>
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.span variants={fadeUp} style={{ display: 'inline-block', padding: '0.5rem 1.5rem', backgroundColor: 'rgba(204,255,0,0.1)', color: 'var(--color-accent)', border: '1px solid var(--color-accent)', borderRadius: '50px', fontWeight: '700', marginBottom: '2rem', fontSize: '0.9rem', letterSpacing: '1px' }}>
              {siteData.project.badge}
            </motion.span>
            <motion.h1 variants={fadeUp} style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'white', maxWidth: '1100px', margin: '0 auto', lineHeight: '1.2' }}>
              {siteData.project.title}
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="section">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ maxWidth: '900px', margin: '0 auto 5rem auto' }}>
            <p style={{ fontSize: '1.4rem', color: 'var(--color-text)', textAlign: 'center', lineHeight: '1.8', fontWeight: '300' }}>
              {siteData.project.description}
            </p>
          </motion.div>

          <div className="grid grid-2" style={{ gap: '2rem', maxWidth: '1100px', margin: '0 auto' }}>
            {siteData.project.sections.map((section, index) => (
              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
                key={section.id} 
                className="glass-panel" 
                style={{ padding: '3rem', position: 'relative', overflow: 'hidden' }}
              >
                <div style={{ position: 'absolute', top: '-20px', right: '-20px', fontSize: '8rem', fontWeight: '800', color: 'rgba(255,255,255,0.03)', lineHeight: '1', zIndex: 0 }}>
                  0{index + 1}
                </div>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'white' }}>{section.title}</h2>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.8', fontSize: '1.1rem' }}>
                    {section.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Team */}
      <section className="section section-alt">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center" style={{ marginBottom: '5rem' }}>
            <h2 className="section-title">Proje Ekibi</h2>
            <p className="section-subtitle">Multidisipliner ve alanında uzman araştırmacı kadromuz.</p>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-3" style={{ gap: '3rem' }}
          >
            {siteData.project.team.map((member, index) => (
              <motion.div variants={fadeUp} key={index} style={{ textAlign: 'center' }}>
                <div style={{ width: '180px', height: '180px', borderRadius: '50%', margin: '0 auto 1.5rem auto', overflow: 'hidden', border: '2px solid rgba(255,255,255,0.1)', position: 'relative' }}>
                  <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)' }} onMouseOver={e => e.currentTarget.style.filter = 'grayscale(0%)'} onMouseOut={e => e.currentTarget.style.filter = 'grayscale(100%)'} />
                </div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'white' }}>{member.name}</h3>
                <div style={{ color: 'var(--color-accent)', fontWeight: '600', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{member.role}</div>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>{member.institution}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Project;
