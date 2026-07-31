'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Is this really production-ready?',
    answer: 'Yes. The kit includes authentication, database, AI chat, Docker setup, CI/CD with GitHub Actions and deployment configuration. It is used in real projects.',
  },
  {
    question: 'What AI model is used?',
    answer: 'Groq with llama-3.3-70b-versatile by default. It is extremely fast and free to start. You can swap to any model supported by the AI SDK.',
  },
  {
    question: 'Does it work in Russia?',
    answer: 'Yes. Payments use YooKassa. The stack runs on any VPS including Russian providers like Timeweb, Selectel or REG.RU.',
  },
  {
    question: 'Do I need to know TypeScript?',
    answer: 'Basic JavaScript knowledge is enough to start. TypeScript adds safety and autocomplete which actually makes development easier.',
  },
  {
    question: 'Can I use this for client projects?',
    answer: 'Absolutely. Clone it, customize it, ship it. No restrictions. It is your code.',
  },
  {
    question: 'What database does it use?',
    answer: 'PostgreSQL with Prisma ORM. Easy to deploy anywhere. Migrations are handled automatically.',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            FAQ
          </h2>
          <p className="text-xl text-gray-600">
            Common questions answered.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
