import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteData } from '../data/content';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openId, setOpenId] = useState(siteData.faq[0].id);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };
  
  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div>
      <section style={{ position: 'relative', minHeight: '40vh', display: 'flex', alignItems: 'center', overflow: 'hidden', paddingTop: '80px', backgroundColor: 'var(--color-primary)' }}>
        <div className="container hero-content text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white', marginBottom: '1.5rem' }}>
              Sıkça Sorulan Sorular
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', maxWidth: '700px', margin: '0 auto', fontWeight: '300' }}>
              Araştırmalarımız ve çalışma yöntemlerimiz hakkında merak edilenler.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'start' }}>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ padding: '3rem', backgroundColor: 'var(--color-bg-alt)', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.05)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', color: 'var(--color-accent)', fontWeight: '600', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>
                <HelpCircle size={20} /> Bilgi Merkezi
              </div>
              <h2 style={{ fontSize: '2rem', color: 'var(--color-primary)', marginBottom: '1.5rem', lineHeight: '1.3' }}>
                Aklınıza Takılanları Cevaplıyoruz
              </h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', lineHeight: '1.8', marginBottom: '2rem' }}>
                Laboratuvarımızda yürüttüğümüz nörofizyolojik ve yapay zeka destekli araştırmaların amacı, sporun geleceğini teknolojiyle inşa etmektir. Süreçlerimiz, veri gizliliği politikalarımız ve katılım koşulları hakkında daha fazla bilgiyi burada bulabilirsiniz.
              </p>
              <p style={{ fontSize: '1.1rem', color: 'var(--color-text)', fontWeight: '500' }}>
                Farklı bir sorunuz mu var? <br/>
                <a href="/iletisim" style={{ color: 'var(--color-accent)', textDecoration: 'underline', marginTop: '10px', display: 'inline-block' }}>İletişim sayfasından bize ulaşın.</a>
              </p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {siteData.faq.map((item) => (
                <motion.div 
                  variants={fadeUp}
                  key={item.id} 
                  style={{ 
                    backgroundColor: 'var(--color-bg-alt)', 
                    border: '1px solid rgba(0,0,0,0.05)', 
                    borderRadius: '8px', 
                    overflow: 'hidden',
                    boxShadow: openId === item.id ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <button 
                    onClick={() => toggleFaq(item.id)}
                    style={{ 
                      width: '100%', 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center', 
                      padding: '1.5rem 2rem', 
                      backgroundColor: 'transparent', 
                      border: 'none', 
                      cursor: 'pointer',
                      textAlign: 'left',
                      color: openId === item.id ? 'var(--color-accent)' : 'var(--color-primary)'
                    }}
                  >
                    <span style={{ fontSize: '1.1rem', fontWeight: '600', fontFamily: 'var(--font-heading)', paddingRight: '1rem', lineHeight: '1.4' }}>
                      {item.question}
                    </span>
                    <span style={{ color: 'var(--color-accent)', flexShrink: 0 }}>
                      {openId === item.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </span>
                  </button>
                  
                  <AnimatePresence>
                    {openId === item.id && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div style={{ padding: '0 2rem 1.5rem 2rem', color: 'var(--color-text)', lineHeight: '1.8', fontSize: '1.05rem', fontWeight: '400' }}>
                          <div style={{ borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '1.5rem' }}>
                            {item.answer}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
