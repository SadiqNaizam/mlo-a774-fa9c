import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface MainAppLayoutProps {
  children: React.ReactNode;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children }) => {
  // A state to manage sidebar visibility on smaller screens
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  return (
    <div className="min-h-screen w-full bg-background">
      <div className="hidden lg:block lg:fixed lg:inset-y-0 lg:z-50 lg:w-64 lg:flex-col">
        <Sidebar />
      </div>

      <div className="lg:pl-64 flex flex-col flex-1">
        <div className="sticky top-0 z-40 h-16 shrink-0">
            <Header />
        </div>
        
        <main className="flex-1 p-6 overflow-y-auto">
            <div className="mx-auto max-w-7xl">
                {children}
            </div>
        </main>
      </div>

      {/* Mobile Sidebar can be implemented here using a Dialog or Sheet component */}
    </div>
  );
};

export default MainAppLayout;
