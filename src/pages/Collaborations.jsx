import React from 'react';
import { motion } from 'framer-motion';
import { siteData } from '../data/content';
import { Users } from 'lucide-react';

const Collaborations = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  const stagger = {
    visible: { transition: { staggerChildren: 0.15 } }
  };

  return (
    <div>
      <section style={{ position: 'relative', minHeight: '50vh', display: 'flex', alignItems: 'center', overflow: 'hidden', paddingTop: '80px', backgroundColor: 'var(--color-bg)' }}>
        <div className="container hero-content text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <h1 style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', color: 'white', marginBottom: '1.5rem' }}>
              İş Birlikleri
            </h1>
            <p style={{ fontSize: '1.3rem', color: 'var(--color-text-muted)', maxWidth: '800px', margin: '0 auto', fontWeight: '300' }}>
              Saha araştırmalarımızda ve veri toplamada bize destek olan değerli ortaklarımız.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center" style={{ marginBottom: '5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', color: 'var(--color-accent)', fontWeight: '700', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem' }}>
              <Users size={18} /> Ortaklarımız
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3vw, 3rem)', color: 'white' }}>
              Birlikte Daha Güçlüyüz
            </h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={stagger} className="grid grid-2" style={{ gap: '3rem', maxWidth: '1000px', margin: '0 auto' }}>
            {siteData.collaborations.map(collab => (
              <motion.div variants={fadeUp} key={collab.id} className="card" style={{ flexDirection: 'row', alignItems: 'center', padding: '2rem', gap: '2.5rem', backgroundColor: 'var(--color-bg-glass)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ width: '120px', height: '120px', flexShrink: 0, borderRadius: '50%', overflow: 'hidden', border: '2px solid rgba(255,255,255,0.1)' }}>
                  <img src={collab.logo} alt={collab.name} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(50%)' }} onMouseOver={e => e.currentTarget.style.filter = 'grayscale(0%)'} onMouseOut={e => e.currentTarget.style.filter = 'grayscale(50%)'} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'white' }}>{collab.name}</h3>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', fontWeight: '300' }}>
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
