'use client';
import { useState } from 'react';
import { HiPlusSm, HiMinusSm } from 'react-icons/hi';

const faqData = [
  {
    question: "Why choose Brilliant Memory Computers for custom PC build in Chennai?",
    answer: "We offer expert guidance, genuine components, professional assembly, stress testing, and reliable local after-sales support in Chennai."
  },
  {
    question: "Can I choose specific components for my custom PC?",
    answer: "Yes. You can select the processor, motherboard, RAM, storage, GPU, cooling system, cabinet, and power supply based on your requirements. We customize and build it according to your needs."
  },
  {
    question: "How long does it take to build a custom PC?",
    answer: "Most custom PC builds are completed within 1 to 3 business days depending on the selected configuration and component availability."
  },
  {
    question: "Are custom PCs upgradeable?",
    answer: "Yes. All our custom-built systems are fully upgradeable and designed to be future-ready."
  },
  {
    question: "Do you provide warranty on custom PCs?",
    answer: "Yes. All components come with manufacturer warranty and we provide local support assistance in Chennai."
  },
  {
    question: "Can you build a gaming PC under a budget?",
    answer: "Yes. We offer budget-friendly gaming PC builds optimized for performance while maintaining quality and reliability."
  }
];

export default function PcFaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-12 ">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mt-3">
            Custom PC Build in Chennai

          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`border border-gray-300 rounded-xl p-5 transition-all duration-300 bg-white shadow-sm hover:shadow-md ${activeIndex === index ? 'border-blue-600 bg-slate-50' : ''
                }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between text-left"
              >
                <h5
                  className={`text-lg font-semibold ${activeIndex === index
                    ? 'text-blue-600'
                    : 'text-gray-900 hover:text-blue-600'
                    }`}
                >
                  {faq.question}
                </h5>
                {activeIndex === index ? (
                  <HiMinusSm className="text-blue-600 text-2xl transition-all" />
                ) : (
                  <HiPlusSm className="text-gray-600 text-2xl transition-all" />
                )}
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${activeIndex === index ? 'max-h-40 mt-3' : 'max-h-0'
                  }`}
              >
                <p className="text-gray-700 text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
