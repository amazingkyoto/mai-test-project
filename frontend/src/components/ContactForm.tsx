"use client";

import React, { useState } from 'react';
import { trackEvent } from '@/lib/analytics';
import { ArrowUpRight, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Handle inputs
  const onType = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // analytics
    if (!loading && !done) trackEvent('form_start');
  };

  const sendData = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'}/contacts`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(form)
      });

      const json = await res.json();

      if (!res.ok) {
        // use the server message or a default one
        throw new Error(json.message || 'Something went wrong');
      }

      setDone(true);
      setForm({ name: '', email: '', phone: '', message: '' });
      trackEvent('form_submit_success');

    } catch (err: any) {
      setErrorMsg(err.message || 'Failed to send.');
      trackEvent('form_submit_error');
    } finally {
      setLoading(false);
    }
  };

  if (done) {
    return (
      <div className="p-8 bg-green-50 text-green-700 rounded-2xl text-center border border-green-200">
        <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
        <p>Thank you for contacting us. We will get back to you shortly.</p>
        <button onClick={() => setDone(false)} className="mt-6 underline font-semibold">Send another message</button>
      </div>
    );
  }

  return (
    <form onSubmit={sendData} className="space-y-6" id="contact">
      
      {errorMsg && (
        <div className="bg-red-50 text-red-600 p-4 rounded-lg text-sm border border-red-100">
          {errorMsg}
        </div>
      )}

      <div className="space-y-6">
        <div>
          <label className="block text-sm text-gray-900 mb-2">Name (<span className="text-red-500">*</span>)</label>
          <input
            name="name"
            value={form.name}
            onChange={onType}
            placeholder="Enter Your Full Name"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all placeholder-gray-400"
            required
          />
        </div>

        <div>
          <label className="block text-sm text-gray-900 mb-2">Phone Number (<span className="text-red-500">*</span>)</label>
          <input
            name="phone"
            value={form.phone}
            onChange={onType}
            placeholder="Enter Your Phone Number"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all placeholder-gray-400"
            required
          />
        </div>

        <div>
          <label className="block text-sm text-gray-900 mb-2">Email (<span className="text-red-500">*</span>)</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={onType}
            placeholder="Enter Your Email"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all placeholder-gray-400"
            required
          />
        </div>

        <div>
          <label className="block text-sm text-gray-900 mb-2">Message (<span className="text-red-500">*</span>)</label>
          <textarea
            name="message"
            value={form.message}
            onChange={onType}
            rows={5}
            placeholder="Enter Your Message"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all placeholder-gray-400 resize-none"
            required
          />
        </div>
        
        <button 
          disabled={loading}
          className="group flex items-center gap-3 border border-blue-900 text-blue-900 px-2 py-2 rounded-full hover:bg-blue-50 transition-colors font-bold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Submit Message
              <div className="bg-blue-900 text-white rounded-full p-1 group-hover:scale-125 transition-transform">
                <ArrowUpRight className="w-8 h-8" />
              </div>
            </>
          )}
        </button>
      </div>
    </form>
  );
}