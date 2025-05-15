
import React from 'react';
import FaqAccordion from '../FaqAccordion';

const Faq = () => {
  const faqs = [
    {
      question: "How does Coinomad work?",
      answer: "Coinomad simplifies crypto payroll by allowing you to set up recurring payments to your team members across multiple blockchains. You deposit funds in your preferred stablecoin, set up your team's wallet addresses and payment amounts, and our platform handles the rest automatically each month."
    },
    {
      question: "Can I pay across multiple blockchains?",
      answer: "Yes! Coinomad supports payments across 15+ blockchains, including Ethereum, Solana, Polygon, Stellar, and Celo. You can pay different team members on different chains according to their preferences."
    },
    {
      question: "Do my employees need wallets?",
      answer: "Yes, your team members will need a cryptocurrency wallet that supports the blockchain you're using for payments. For those who don't have a wallet yet, we offer a simple onboarding process that guides them through wallet creation and security best practices."
    },
    {
      question: "What type of wallets does Coinomad use?",
      answer: "Coinomad wallets are powered by Pimlico smart accounts and use paymasters, meaning users never need native currency like ETH to send transactions. This eliminates the common friction of needing gas tokens for every transaction, making the payment process seamless for both senders and receivers."
    },
    {
      question: "Is Coinomad compliant?",
      answer: "Coinomad provides the tools for compliant crypto payroll, including comprehensive reporting for accounting and tax purposes. However, compliance requirements vary by jurisdiction, so we recommend consulting with your legal and tax advisors regarding your specific situation."
    },
    {
      question: "What are the fees?",
      answer: "Coinomad charges a simple flat fee per transaction, with no percentage-based or hidden fees. We don't charge conversion or FX fees, making it significantly more affordable than traditional international payroll solutions. View our pricing page for current rates."
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-coinomad-textGray text-lg">
            Have questions about Coinomad? We've got answers.
          </p>
        </div>
        
        <FaqAccordion faqs={faqs} />
      </div>
    </section>
  );
};

export default Faq;
