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

function RFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  // Misalnya, kita punya beberapa FAQ
  const faqs = [
    { question: 'Apakah tiket yang sudah dibeli dapat dikembalikan atau diubah?', answer: 'Kebijakan pengembalian dan perubahan tiket dapat bervariasi tergantung pada kebijakan penyelenggara acara. Sebagian besar acara menerapkan kebijakan non-refundable, tetapi ada beberapa yang memungkinkan perubahan. Pastikan untuk membaca syarat dan ketentuan acara sebelum melakukan pembelian.' },
    { question: 'Bagaimana cara menghubungi layanan pelanggan FestiFun jika saya mengalami masalah dengan pembelian tiket saya?', answer: 'Jika Anda mengalami masalah atau memiliki pertanyaan terkait pembelian tiket, silakan hubungi tim layanan pelanggan kami melalui formulir kontak di situs web kami atau melalui email support@festifun.com. Kami akan dengan senang hati membantu Anda.' },
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

export default RFAQ;
