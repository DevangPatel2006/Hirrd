import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen m-auto container">
        <Header />
        <Outlet />
      </main>
      <div className="mt-20 px-4 py-8 flex flex-col items-center justify-center gap-4 bg-transparent border-t border-white/10">
        <img src="/logo.png" alt="Logo" className="h-10" />
        <p className="text-sm text-white/80">Made with 💗 by Patel Devang</p>
        <div className="flex gap-4 text-white/60 text-sm">
          <a
            href="https://github.com"
            target="_blank"
            className="hover:text-white transition-all"
          >
            Instagram
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            className="hover:text-white transition-all"
          >
            LinkedIn
          </a>
          <a
            href="mailto:your.email@example.com"
            className="hover:text-white transition-all"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
