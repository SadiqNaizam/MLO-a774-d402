import React from 'react';
import { cn } from '@/lib/utils';
import Header from './Header';
import Sidebar from './Sidebar';
// No direct lucide-react icons needed here, they are in sub-components like TopHeader.

interface MainAppLayoutProps {
  children: React.ReactNode;
  title?: string; // Included as per spec, though not used in this example structure
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children }) => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = React.useState<boolean>(false);

  const toggleMobileSidebar = React.useCallback(() => {
    setIsMobileSidebarOpen(prev => !prev);
  }, []);

  return (
    <div className="flex flex-col h-screen bg-background text-foreground overflow-hidden">
      <Header onToggleSidebar={toggleMobileSidebar} />
      
      <div className="flex flex-1 pt-16 overflow-hidden"> {/* pt-16 for fixed Header height */} 
        {/* Desktop Sidebar */} 
        <Sidebar className="hidden md:flex" />

        {/* Mobile Sidebar (Drawer) */} 
        {isMobileSidebarOpen && (
          <div 
            className="md:hidden fixed inset-0 z-40 flex"
            role="dialog" 
            aria-modal="true"
          >
            {/* Backdrop */} 
            <div 
              className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ease-in-out"
              onClick={toggleMobileSidebar}
              aria-hidden="true"
            />
            {/* Sidebar Panel */} 
            <div className="relative flex flex-col w-64 max-w-[calc(100%-3rem)] bg-card shadow-xl transition-transform duration-300 ease-in-out transform translate-x-0">
              {/* Sidebar component will fill this panel. Its internal SidebarNav provides content and styling. */} 
              <Sidebar className="h-full w-full" /> 
            </div>
          </div>
        )}

        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainAppLayout;
