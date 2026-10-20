import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fdff] text-[#03045e] selection:bg-[#90e0ef]/50 selection:text-[#03045e]">
      <Navbar />
      <main className="flex-1 pt-24 pb-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
