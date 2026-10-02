import React from 'react';
import { motion } from 'framer-motion';
import { siteData } from '../data/content';
import { Users } from 'lucide-react';

const Collaborations = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };
  const stagger = {
    visible: { transition: { staggerChildren: 0.15 } }
  };

  return (
    <div>
      <section style={{ position: 'relative', minHeight: '50vh', display: 'flex', alignItems: 'center', overflow: 'hidden', paddingTop: '80px', backgroundColor: 'var(--color-primary)' }}>
        <div className="container hero-content text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', color: 'white', marginBottom: '1.5rem' }}>
              İş Birlikleri
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.8)', maxWidth: '800px', margin: '0 auto', fontWeight: '300', lineHeight: '1.8' }}>
              Saha araştırmalarımızda ve veri toplamada bize destek olan değerli akademik ve sektörel ortaklarımız.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center" style={{ marginBottom: '5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', color: 'var(--color-accent)', fontWeight: '600', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>
              <Users size={18} /> Ortaklarımız
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3vw, 3rem)', color: 'var(--color-primary)' }}>
              Birlikte Daha Güçlüyüz
            </h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={stagger} className="grid grid-2" style={{ gap: '3rem', maxWidth: '1000px', margin: '0 auto' }}>
            {siteData.collaborations.map(collab => (
              <motion.div variants={fadeUp} key={collab.id} className="card" style={{ flexDirection: 'row', alignItems: 'center', padding: '2.5rem', gap: '2.5rem' }}>
                <div style={{ width: '120px', height: '120px', flexShrink: 0, borderRadius: '50%', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.05)', backgroundColor: 'var(--color-bg)' }}>
                  <img src={collab.logo} alt={collab.name} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '10px' }} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>{collab.name}</h3>
                  <p style={{ color: 'var(--color-text)', lineHeight: '1.7', fontWeight: '400' }}>
                    {collab.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <style>{`
            @media (max-width: 600px) {
              .card { flex-direction: column !important; text-align: center; }
            }
          `}</style>
        </div>
      </section>
    </div>
  );
};

export default Collaborations;
