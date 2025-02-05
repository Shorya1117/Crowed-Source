// src/FAQ.js

import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: "What is the purpose of this platform?",
      answer: "This platform is designed to connect people looking for collaboration opportunities across various fields.",
      isOpen: false
    },
    {
      id: 2,
      question: "How can I post a collaboration request?",
      answer: "You can post a request by navigating to the 'Collaboration' page and filling out the required form details.",
      isOpen: false
    },
    {
      id: 3,
      question: "What skills are required to join?",
      answer: "You can join with any skill set that might be relevant for collaborative projects. From data analysis to design, all are welcome!",
      isOpen: false
    }
    ,{
      id: 4,
      question: "How can I post a collaboration request?",
      answer: "You can post a request by navigating to the 'Collaboration' page and filling out the required form details.",
      isOpen: false
    },
    {
      id: 5,
      question: "How can I post a collaboration request?",
      answer: "You can post a request by navigating to the 'Collaboration' page and filling out the required form details.",
      isOpen: false
    },
    {
      id: 6,
      question: "How can I post a collaboration request?",
      answer: "You can post a request by navigating to the 'Collaboration' page and filling out the required form details.",
      isOpen: false
    },
    {
      id: 7,
      question: "How can I post a collaboration request?",
      answer: "You can post a request by navigating to the 'Collaboration' page and filling out the required form details.",
      isOpen: false
    },
    {
      id: 8,
      question: "How can I post a collaboration request?",
      answer: "You can post a request by navigating to the 'Collaboration' page and filling out the required form details.",
      isOpen: false
    },
  ]);

  const toggleFAQ = (id) => {
    setFaqs(
      faqs.map((faq) =>
        faq.id === id ? { ...faq, isOpen: !faq.isOpen } : faq
      )
    );
  };

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq) => (
        <div key={faq.id} className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(faq.id)}>
            <h4>{faq.question}</h4>
            <span>{faq.isOpen ? "-" : "+"}</span>
          </div>
          {faq.isOpen && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
