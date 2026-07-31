import Link from 'next/link';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '0',
    description: 'Perfect to get started',
    features: [
      '10 AI requests per day',
      '1 project',
      'Basic auth',
      'Community support',
    ],
    cta: 'Get Started Free',
    href: '/register',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '990',
    description: 'For serious builders',
    features: [
      'Unlimited AI requests',
      'Unlimited projects',
      'Priority support',
      'Telegram bot included',
      'Advanced analytics',
      'Custom domain',
    ],
    cta: 'Start Pro',
    href: '/register',
    highlighted: true,
  },
  {
    name: 'Team',
    price: '2990',
    description: 'For growing teams',
    features: [
      'Everything in Pro',
      'Up to 10 team members',
      'Admin dashboard',
      'API access',
      'SLA guarantee',
      'Dedicated support',
    ],
    cta: 'Start Team',
    href: '/register',
    highlighted: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Simple pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start free, upgrade when you need. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 ${
                plan.highlighted
                  ? 'bg-blue-600 text-white shadow-2xl scale-105'
                  : 'bg-white border border-gray-100 shadow-sm'
              }`}
            >
              <div className="mb-6">
                <h3 className={`text-xl font-bold mb-1 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.highlighted ? 'text-blue-100' : 'text-gray-500'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <span className={`text-5xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {plan.price}
                </span>
                <span className={`text-sm ml-1 ${plan.highlighted ? 'text-blue-100' : 'text-gray-500'}`}>
                  rub/month
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 ${plan.highlighted ? 'text-blue-200' : 'text-green-500'}`} />
                    <span className={`text-sm ${plan.highlighted ? 'text-blue-50' : 'text-gray-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.href}
                className={`block text-center font-semibold py-3 px-6 rounded-xl transition-colors ${
                  plan.highlighted
                    ? 'bg-white text-blue-600 hover:bg-blue-50'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
