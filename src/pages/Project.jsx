import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { siteData } from '../data/content';

const Project = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.15 } }
  };

  return (
    <div>
      {/* Hero */}
      <section style={{ position: 'relative', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: -1 }}>
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(11,36,71,0.85)', zIndex: 1 }}></div>
          <img src={siteData.project.image} alt="Project" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(50%)' }} />
        </div>
        
        <div className="container text-center" style={{ position: 'relative', zIndex: 2, marginTop: '70px' }}>
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.span variants={fadeUp} style={{ display: 'inline-block', padding: '0.4rem 1.5rem', backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '4px', fontWeight: '500', marginBottom: '2rem', fontSize: '0.9rem', letterSpacing: '0.5px' }}>
              {siteData.project.badge} Projesi
            </motion.span>
            <motion.h1 variants={fadeUp} style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: 'white', maxWidth: '1100px', margin: '0 auto', lineHeight: '1.3' }}>
              {siteData.project.title}
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="section">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ maxWidth: '900px', margin: '0 auto 5rem auto' }}>
            <p style={{ fontSize: '1.3rem', color: 'var(--color-text)', textAlign: 'center', lineHeight: '1.8', fontWeight: '400' }}>
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
                <div style={{ position: 'absolute', top: '-10px', right: '-10px', fontSize: '8rem', fontWeight: '700', color: 'rgba(11,36,71,0.03)', lineHeight: '1', zIndex: 0, fontFamily: 'var(--font-heading)' }}>
                  0{index + 1}
                </div>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <h2 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>{section.title}</h2>
                  <p style={{ color: 'var(--color-text)', lineHeight: '1.8', fontSize: '1.05rem' }}>
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
                <div style={{ width: '160px', height: '160px', borderRadius: '50%', margin: '0 auto 1.5rem auto', overflow: 'hidden', border: '3px solid var(--color-bg)', boxShadow: 'var(--shadow-md)', position: 'relative' }}>
                  <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.25rem', color: 'var(--color-primary)' }}>{member.name}</h3>
                <div style={{ color: 'var(--color-accent)', fontWeight: '500', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{member.role}</div>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginBottom: '1rem' }}>{member.institution}</p>
                {member.socials && (
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '0.5rem' }}>
                    <a href={member.socials.twitter} style={{ color: 'var(--color-text-muted)', transition: 'color 0.2s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-text-muted)'}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                    </a>
                    <a href={member.socials.linkedin} style={{ color: 'var(--color-text-muted)', transition: 'color 0.2s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-text-muted)'}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                    </a>
                    <a href={member.socials.mail} style={{ color: 'var(--color-text-muted)', transition: 'color 0.2s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-text-muted)'}>
                      <Mail size={18} />
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Project;
