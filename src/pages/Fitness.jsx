import React from 'react';
import { motion } from 'framer-motion';
import { siteData } from '../data/content';
import { Activity } from 'lucide-react';

const Fitness = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div>
      {/* Hero */}
      <section style={{ position: 'relative', minHeight: '50vh', display: 'flex', alignItems: 'center', overflow: 'hidden', paddingTop: '80px' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: -1 }}>
          {/* Finding the fitness image from content */}
          <img src={siteData.researchAreas.find(a => a.id === 'fiziksel-uygunluk')?.image} alt="Fitness" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.3) grayscale(30%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--color-bg), transparent)' }}></div>
        </div>
        
        <div className="container hero-content text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <h1 style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', color: 'white', marginBottom: '1.5rem', lineHeight: '1.1' }}>
              Fiziksel Uygunluk <br/><span style={{ color: 'var(--color-accent)' }}>Değerlendirmeleri</span>
            </h1>
            <p style={{ fontSize: '1.3rem', color: 'rgba(255,255,255,0.8)', maxWidth: '800px', margin: '0 auto', fontWeight: '300' }}>
              Sporcuların potansiyellerini maksimize etmek için tasarlanmış 8 farklı performans test bataryası.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Test Categories */}
      <section className="section">
        <div className="container">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={stagger}
            className="grid grid-4"
          >
            {siteData.fitnessTests.map((test, index) => (
              <motion.div variants={fadeUp} key={test.id} className="card" style={{ padding: '2.5rem 2rem', textAlign: 'center', borderTop: '4px solid transparent', transition: 'all 0.3s' }} onMouseOver={e => e.currentTarget.style.borderTopColor = 'var(--color-accent)'} onMouseOut={e => e.currentTarget.style.borderTopColor = 'transparent'}>
                <div style={{ width: '70px', height: '70px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
                  <Activity size={32} />
                </div>
                <h3 className="card-title" style={{ fontSize: '1.3rem', marginBottom: '1rem', minHeight: '3.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                  {test.title}
                </h3>
                <p className="card-text" style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                  {test.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Fitness;
