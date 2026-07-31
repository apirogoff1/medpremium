const testimonials = [
  {
    name: 'Alexey Petrov',
    role: 'Founder, TechStartup',
    text: 'Launched my SaaS in 2 weeks instead of 3 months. The AI chat and auth were ready from day one. Incredible time saver.',
    avatar: 'AP',
  },
  {
    name: 'Maria Sokolova',
    role: 'Full-stack Developer',
    text: 'Best starter kit I have ever used. TypeScript, Prisma, Tailwind all configured perfectly. Just clone and start building.',
    avatar: 'MS',
  },
  {
    name: 'Dmitry Volkov',
    role: 'Product Manager',
    text: 'Our team went from idea to production in record time. The Telegram bot integration saved us weeks of work.',
    avatar: 'DV',
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Loved by builders
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Developers and founders use this kit to ship faster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-200"
            >
              <p className="text-gray-700 leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
