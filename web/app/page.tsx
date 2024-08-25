import Aboutus from '@/components/bibaho-bondhon/Aboutus';
import Footer from '@/components/bibaho-bondhon/Footer';
import { Globe } from '@/components/bibaho-bondhon/Globe';
import HeroSection from '@/components/bibaho-bondhon/HeroSection';
import Services from '@/components/bibaho-bondhon/Services';
import Valuation from '@/components/bibaho-bondhon/Valuation';
import WhyChooseUs from '@/components/bibaho-bondhon/WhyChooseUs';
import DashboardFeature from '@/components/dashboard/dashboard-feature';

export default function Page() {
  return (
    <main className='bg-slate-900' >
      <HeroSection />
      <Services />
      <WhyChooseUs />
      <Valuation />
      <Globe />
      <Aboutus/>
      <Footer />
    </main>
  );
}
