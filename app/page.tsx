import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import LeadForm from '@/components/LeadForm';
import VideoPlayer from '@/components/VideoPlayer';
import MobileMenu from '@/components/MobileMenu';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Announcement Bar */}
      <div className="bg-[#C00] text-white py-2 text-center text-sm">
        <p>الخميس 10 أكتوبر 2024 | 31°C أبوظبي | تسجيل الدخول</p>
      </div>

      {/* Header */}
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Image
            src="https://www.skynewsarabia.com/asset/1643203809/17.3/assets/img/sna_logo/header_logo_color.svg"
            alt="Sky News Arabia Logo"
            width={120}
            height={40}
            className="h-8 w-auto md:h-10 lg:h-14"
          />
          <nav className="hidden md:block">
            <ul className="flex space-x-4 lg:space-x-6 rtl:space-x-reverse">
              <li><a href="#" className="text-sm lg:text-base text-gray-600 hover:text-[#C00]">الرئيسية</a></li>
              <li><a href="#" className="text-sm lg:text-base text-gray-600 hover:text-[#C00]">اقتصاد</a></li>
              <li><a href="#" className="text-sm lg:text-base text-gray-600 hover:text-[#C00]">رياضة</a></li>
              <li><a href="#" className="text-sm lg:text-base text-gray-600 hover:text-[#C00]">تكنولوجيا</a></li>
              <li><a href="#" className="text-sm lg:text-base text-gray-600 hover:text-[#C00]">صحة</a></li>
              <li><a href="#" className="text-sm lg:text-base text-gray-600 hover:text-[#C00]">فن وثقافة</a></li>
            </ul>
          </nav>
          <MobileMenu />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 md:py-8 flex-grow">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Article */}
          <article className="lg:w-2/3 bg-white shadow-md p-4 md:p-6 rounded-lg">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-[#C00]">عائد الاستثمار في الذكاء الاصطناعي: فرص استثنائية للنمو</h1>
            
            <div className="mb-4 md:mb-6">
              <VideoPlayer src="https://media.skynewsarabia.com/vod/1662634/1662634-Teaser.mp4" />
              <p className="text-sm text-gray-600 mt-2">مستقبل الاستثمار في الذكاء الاصطناعي</p>
            </div>

            <Image
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="الذكاء الاصطناعي"
              width={800}
              height={450}
              className="w-full h-auto mb-4 md:mb-6 rounded-lg"
            />
            <p className="mb-4 text-sm md:text-base">في السنوات الأخيرة، أصبح الذكاء الاصطناعي (AI) أحد أهم المجالات التي تشهد نموًا سريعًا وتطورًا مذهلاً. من التطبيقات الصناعية إلى الخدمات اليومية، يُحدث الذكاء الاصطناعي ثورة في الطريقة التي نعيش ونعمل بها. لكن ماذا يعني ذلك للمستثمرين؟ وكيف يمكن الاستفادة من هذه الثورة التكنولوجية لتحقيق عوائد استثمارية استثنائية؟</p>
            
            {/* Rest of the article content... */}
          </article>

          {/* Sidebar */}
          <aside className="lg:w-1/3 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-[#C00] text-lg md:text-xl">انضم إلى نخبة المستثمرين</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center mb-4">
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5eCRiHsH4xjx0yfbCIxKap-9DjBS38QoEPg&s"
                    alt="Alramz Logo"
                    width={80}
                    height={80}
                    className="h-12 w-auto md:h-16"
                  />
                  <span className="text-lg md:text-xl font-bold mr-2">Alramz</span>
                </div>
                <p className="mb-4 text-sm">سجل اهتمامك الآن واحصل على استشارة مجانية حول كيفية بدء رحلتك الاستثمارية في عالم الذكاء الاصطناعي.</p>
                <LeadForm />
              </CardContent>
            </Card>
            {/* Other sidebar content... */}
          </aside>
        </div>

        {/* Additional Lead Form */}
        <Card className="mt-6 md:mt-8">
          <CardHeader>
            <CardTitle className="text-center text-[#C00] text-lg md:text-xl">سجل اهتمامك الآن</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center mb-4">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5eCRiHsH4xjx0yfbCIxKap-9DjBS38QoEPg&s"
                alt="Alramz Logo"
                width={80}
                height={80}
                className="h-12 w-auto md:h-16"
              />
              <span className="text-lg md:text-xl font-bold mr-2">Alramz</span>
            </div>
            <p className="mb-4 text-sm text-center">انضم إلى قائمة المستثمرين المهتمين بفرص الذكاء الاصطناعي واحصل على تحديثات حصرية</p>
            <LeadForm />
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 md:py-6">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm md:text-base">&copy; 2024 الرمز. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </div>
  );
}