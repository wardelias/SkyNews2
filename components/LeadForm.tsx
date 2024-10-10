'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function LeadForm({ className = '' }: { className?: string }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    investmentAmount: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Track the form submission event
        if ((window as any).fbq) {
          (window as any).fbq('track', 'Lead');
        }
        router.push('/thank-you');
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('حدث خطأ أثناء تقديم النموذج. يرجى المحاولة مرة أخرى.');
    }
  };

  return (
    <form className={`space-y-3 ${className}`} onSubmit={handleSubmit}>
      <Input
        name="fullName"
        placeholder="الاسم الكامل"
        className="text-right text-sm"
        value={formData.fullName}
        onChange={handleChange}
        required
      />
      <Input
        name="email"
        placeholder="البريد الإلكتروني"
        type="email"
        className="text-right text-sm"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <Input
        name="phone"
        placeholder="رقم الهاتف"
        type="tel"
        className="text-right text-sm"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <Input
        name="investmentAmount"
        placeholder="مبلغ الاستثمار المتوقع"
        type="number"
        className="text-right text-sm"
        value={formData.investmentAmount}
        onChange={handleChange}
        required
      />
      <Button type="submit" className="w-full text-sm">سجّل الآن</Button>
    </form>
  );
}