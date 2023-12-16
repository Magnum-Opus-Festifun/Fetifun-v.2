// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';


// eslint-disable-next-line react/prop-types
const FAQItem = ({ question, answer, index, openIndex, setOpenIndex }) => {
  const isOpen = openIndex === index;

  const toggleAnswer = () => {
    setOpenIndex(isOpen ? null : index);
  };

  return (
    <div className={`faq ${isOpen ? 'open' : ''}`}>
      <div className="faq-question" onClick={toggleAnswer}>
        {question}
      </div>
      {isOpen && (
        <div className="faq-answer">
          {answer}
        </div>
      )}
    </div>
  );
};

function LFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  // Misalnya, kita punya beberapa FAQ
  const faqs = [
    { question: 'Bagaimana cara memesan tiket acara di FestiFun?', answer: ' Untuk memesan tiket acara di FestiFun, Anda dapat masuk ke situs kami, pilih acara yang diinginkan, dan ikuti langkah-langkah pembelian yang tertera. Pembayaran dapat dilakukan melalui berbagai metode yang telah kami sediakan.' },
    { question: 'Apa saja event dan festival yang dapat saya temukan di FestiFun?', answer: 'FestiFun menawarkan berbagai macam event dan festival di Yogyakarta, mulai dari konser musik, pertunjukan seni, hingga festival kuliner. Anda dapat menemukan daftar lengkap acara yang tersedia di situs kami.' },
    { question: 'Bagaimana cara EO (Event Organizer) mengelola acara mereka di FestiFun?', answer: 'EO dapat menggunakan dashboard FestiFun untuk mengelola acara mereka. Pada dashboard, EO dapat mengatur detail acara, mengunggah gambar, dan melacak penjualan tiket. Kami menyediakan panduan lengkap untuk memudahkan EO dalam menggunakan fitur tersebut.' },
  ];

  return (
    <div className="faq-container">
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          index={index}
          question={faq.question}
          answer={faq.answer}
          openIndex={openIndex}
          setOpenIndex={setOpenIndex}
        />
      ))}
    </div>
  );
}

export default LFAQ;
