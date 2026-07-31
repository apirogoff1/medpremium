'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

export function SubscribeSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-blue-600 to-purple-700">
      <div className="max-w-2xl mx-auto text-center">

        <h2 className="text-4xl font-bold text-white mb-4">
          Stay in the loop
        </h2>
        <p className="text-blue-100 text-xl mb-10">
          Get updates about new features and tips. No spam.
        </p>

        {status === 'success' ? (
          <div className="bg-white/20 rounded-2xl p-6 text-white font-semibold text-lg">
            You are subscribed! Check your inbox.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-5 py-4 rounded-xl text-gray-900 font-medium outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="flex items-center justify-center gap-2 bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors disabled:opacity-60"
            >
              <Send className="w-4 h-4" />
              {status === 'loading' ? 'Sending...' : 'Subscribe'}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="text-red-200 mt-4">Something went wrong. Please try again.</p>
        )}

      </div>
    </section>
  );
}
