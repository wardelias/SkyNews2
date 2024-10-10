import './globals.css';
import type { Metadata } from 'next';
import { Cairo } from 'next/font/google';
import Script from 'next/script';

const cairo = Cairo({ subsets: ['arabic'] });

export const metadata: Metadata = {
  title: 'الرمز - استثمر في مستقبل الذكاء الاصطناعي',
  description: 'اكتشف فرص الاستثمار الاستثنائية في شركات الذكاء الاصطناعي مع الرمز',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1190904308656251');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1190904308656251&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className={cairo.className} suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}