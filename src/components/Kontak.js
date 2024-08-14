import React from 'react';
import { IconButton } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Contact = () => {
  const whatsappNumber = "4917628782942"; // Ganti dengan nomor WhatsApp Anda

  return (
    <div className="contact-section p-3">
      <h3>Kontak</h3>
      <IconButton
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Whatsapp"
        color="primary"
        style={{
          backgroundColor: '#000', // Latar belakang hitam
          borderRadius: '50%',     // Membuatnya bulat
          padding: '10px',         // Memberi sedikit ruang
        }}
      >
        <WhatsAppIcon style={{ color: '#25D366', fontSize: 40 }} />
      </IconButton>
    </div>
  );
};

export default Contact;
