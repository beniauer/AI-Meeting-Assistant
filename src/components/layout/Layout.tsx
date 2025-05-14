
import { ReactNode } from "react";
import Header from "./Header";
import NavRail from "./NavRail";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen w-full bg-app-bg">
      <Header />
      <NavRail />
      <main className="pt-16 pl-[220px] pb-12 min-h-[calc(100vh-3rem)]">
        <div className="p-6">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
