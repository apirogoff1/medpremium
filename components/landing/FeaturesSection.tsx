import { Brain, Shield, Zap, Database, Bot, CreditCard } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI Chat Built-in',
    description: 'Powered by Groq and llama-3.3-70b. Blazing fast AI responses integrated from day one.',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
  {
    icon: Shield,
    title: 'Auth Ready',
    description: 'JWT authentication, register, login, logout — all secure and production-ready out of the box.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: Zap,
    title: 'Next.js 15 + React 19',
    description: 'Latest stack with App Router, Server Components, TypeScript and Tailwind CSS configured.',
    color: 'text-yellow-600',
    bg: 'bg-yellow-50',
  },
  {
    icon: Database,
    title: 'Database Included',
    description: 'PostgreSQL with Prisma ORM. Migrations, type-safe queries and schema ready to extend.',
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
  {
    icon: Bot,
    title: 'Telegram Bot',
    description: 'Telegram bot with commands and login button. Ready for notifications and user auth.',
    color: 'text-sky-600',
    bg: 'bg-sky-50',
  },
  {
    icon: CreditCard,
    title: 'Payments Ready',
    description: 'YooKassa integration for Russian market. Webhooks and payment flow all set up.',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Everything you need
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stop spending weeks on boilerplate. Start with a full production stack and focus on your product.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="p-6 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-200"
              >
                <div className={`w-12 h-12 ${feature.bg} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
