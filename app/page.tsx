import Hero from '@/components/Hero';
import './globals.css';
import Grid from '@/components/Grid';
import { FloatingNav } from '@/components/ui/floating-navbar';
import { navItems } from '@/data';
import RecentProjects from '@/components/RecentProjects';
import Footer from '@/components/Footer';



export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Footer/>
      </div>
    </main>
  );
}
