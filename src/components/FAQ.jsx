import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What enterprise software services does Prozync Innovations provide?',
    answer: 'We specialize in building fully-featured SmartERP systems, advanced SaaS portals, AI workflow automation networks, Custom scheduling systems, and responsive, interactive high-end digital applications tailored to enterprise goals.'
  },
  {
    question: 'Can SmartERP integrate with our existing inventory and accounting platforms?',
    answer: 'Absolutely. SmartERP v2.4 supports robust RESTful APIs, webhook pipes, and secure database connections. It can sync production workflows, inventory items, and scheduling metrics with your existing ERP configurations.'
  },
  {
    question: 'How long does a typical custom enterprise development cycle take?',
    answer: 'A standard custom software integration lifecycle ranges from 4 to 12 weeks depending on modular scope. This includes discovery audit, core database design, frontend styling, AI pipelines, and continuous integration controls.'
  },
  {
    question: 'How does Prozync secure proprietary training data for AI models?',
    answer: 'Security is built into our core framework. We utilize virtual private clouds (VPCs), strict access management keys, and AES-256 data encryption at rest. Custom AI networks are sandboxed, ensuring your training data is never exposed to external models.'
  },
  {
    question: 'Do you offer operational support and software maintenance post-launch?',
    answer: 'Yes. We provide comprehensive SLAs covering security audits, performance checkups, feature additions, and scaling controls to guarantee 99.9% operational uptime.'
  }
];

const AccordionItem = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={toggleOpen}>
        <h3 style={{ fontSize: '1.2rem', fontWeight: '600', paddingRight: '2rem' }}>
          {question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ color: 'var(--accent-blue)', display: 'flex', alignItems: 'center' }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </div>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ color: 'var(--muted-text)', lineHeight: '1.7', marginTop: '1rem', fontSize: '0.95rem' }}>
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding" style={{ background: 'var(--surface)' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 className="premium-title" style={{ fontSize: '3.5rem', marginBottom: '1.2rem' }}>
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p style={{ color: 'var(--muted-text)', fontSize: '1.1rem' }}>
            Answers to key technical concerns regarding integrations, timelines, and scaling.
          </p>
        </div>

        <div className="glass" style={{ padding: '2rem 3rem' }}>
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggleOpen={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
