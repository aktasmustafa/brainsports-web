import React from 'react';
import { motion } from 'framer-motion';
import { siteData } from '../data/content';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
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
            <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', color: 'white', marginBottom: '1.5rem' }}>
              İletişim
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ gap: '5rem', alignItems: 'start' }}>
            
            {/* Contact Info */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeUp} style={{ fontSize: '2.5rem', color: 'var(--color-primary)', marginBottom: '1.5rem' }}>Bize Ulaşın</motion.h2>
              <motion.p variants={fadeUp} style={{ color: 'var(--color-text)', marginBottom: '4rem', fontSize: '1.15rem', fontWeight: '400', lineHeight: '1.8' }}>
                Araştırmalarımızla ilgili sorularınız, iş birliği talepleriniz veya laboratuvarımızı ziyaret etmek için bizimle iletişime geçebilirsiniz.
              </motion.p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                <motion.div variants={fadeUp} style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'var(--color-bg)', border: '1px solid rgba(0,0,0,0.05)', color: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.25rem', color: 'var(--color-primary)' }}>Telefon</h3>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>{siteData.global.phone}</p>
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'var(--color-bg)', border: '1px solid rgba(0,0,0,0.05)', color: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.25rem', color: 'var(--color-primary)' }}>E-posta</h3>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>{siteData.global.email}</p>
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'var(--color-bg)', border: '1px solid rgba(0,0,0,0.05)', color: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.25rem', color: 'var(--color-primary)' }}>Adres</h3>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: '1.6' }}>{siteData.global.address}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="glass-panel" style={{ padding: '3.5rem' }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '2.5rem', color: 'var(--color-primary)' }}>Mesaj Gönderin</h3>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label className="form-label">Adınız Soyadınız</label>
                  <input type="text" className="form-control" placeholder="Adınız Soyadınız" />
                </div>
                <div className="form-group">
                  <label className="form-label">E-posta Adresiniz</label>
                  <input type="email" className="form-control" placeholder="ornek@email.com" />
                </div>
                <div className="form-group">
                  <label className="form-label">Konu</label>
                  <input type="text" className="form-control" placeholder="Mesajınızın konusu" />
                </div>
                <div className="form-group">
                  <label className="form-label">Mesajınız</label>
                  <textarea className="form-control" rows="5" placeholder="Mesajınızı buraya yazın..."></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem', padding: '1rem' }}>
                  Gönder <Send size={18} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map (Standard Light Theme iframe) */}
      <section style={{ height: '500px', backgroundColor: 'var(--color-bg-alt)', width: '100%' }}>
        <iframe 
          title="METAM Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d3000!2d39.734!3d40.99!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDU5JzI0LjAiTiAzOcKwNDQnMDIuNCJF!5e0!3m2!1str!2str!4v1600000000000!5m2!1str!2str" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
