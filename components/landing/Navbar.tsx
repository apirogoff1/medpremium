'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-xl text-gray-900">MyProject</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
              Features
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
              Pricing
            </Link>
            <Link href="#faq" className="text-gray-600 hover:text-gray-900 transition-colors">
              FAQ
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/login" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Login
            </Link>
            <Link href="/register" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition-colors">
              Get Started
            </Link>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          <Link href="#features" className="text-gray-600 hover:text-gray-900" onClick={() => setIsOpen(false)}>
            Features
          </Link>
          <Link href="#pricing" className="text-gray-600 hover:text-gray-900" onClick={() => setIsOpen(false)}>
            Pricing
          </Link>
          <Link href="#faq" className="text-gray-600 hover:text-gray-900" onClick={() => setIsOpen(false)}>
            FAQ
          </Link>
          <Link href="/login" className="text-gray-600 hover:text-gray-900 font-medium">
            Login
          </Link>
          <Link href="/register" className="bg-blue-600 text-white font-medium px-4 py-2 rounded-lg text-center">
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
