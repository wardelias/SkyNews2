'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

export default function ThankYouPage() {
  useEffect(() => {
    // Track the "Thank You" page view
    if ((window as any).fbq) {
      (window as any).fbq('track', 'CompleteRegistration');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-[#C00] mb-4">شكراً لك!</h1>
        <p className="text-gray-600 mb-6">تم استلام معلوماتك بنجاح. سيتصل بك ممثلونا قريباً.</p>
        <Button asChild className="w-full">
          <Link href="https://www.skynewsarabia.com/" target="_blank" rel="noopener noreferrer">
            العودة إلى سكاي نيوز عربية
          </Link>
        </Button>
      </div>
    </div>
  );
}