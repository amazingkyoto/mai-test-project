"use client";

import React, { useState } from 'react';
import { trackEvent } from '@/lib/analytics';

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
      <div className="p-6 bg-green-50 text-green-700 rounded text-center border border-green-200">
        <h3 className="text-xl font-bold mb-2">Pesan Terkirim!</h3>
        <p>Terima kasih sudah menghubungi kami.</p>
        <button onClick={() => setDone(false)} className="mt-4 underline">Kirim lagi</button>
      </div>
    );
  }

  return (
    <form onSubmit={sendData} className="bg-white p-6 rounded shadow-sm border border-gray-200" id="contact">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Kirim Pesan</h2>
      
      {errorMsg && (
        <div className="bg-red-50 text-red-600 p-3 rounded mb-4 text-sm">
          {errorMsg}
        </div>
      )}

      <div className="flex flex-col gap-4">
        <input
          name="name"
          value={form.name}
          onChange={onType}
          placeholder="Nama Lengkap"
          className="border p-2 rounded w-full"
          required
        />
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={onType}
          placeholder="Email"
          className="border p-2 rounded w-full"
          required
        />
        <input
          name="phone"
          value={form.phone}
          onChange={onType}
          placeholder="Nomor HP"
          className="border p-2 rounded w-full"
          required
        />
        <textarea
          name="message"
          value={form.message}
          onChange={onType}
          rows={4}
          placeholder="Pesan Anda..."
          className="border p-2 rounded w-full"
          required
        />
        
        <button 
          disabled={loading}
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? 'Mengirim...' : 'Kirim Sekarang'}
        </button>
      </div>
    </form>
  );
}