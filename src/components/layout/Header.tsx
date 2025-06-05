import React from 'react';
import { cn } from '@/lib/utils';
import TopHeader from '../Dashboard/TopHeader';

interface HeaderProps {
  className?: string;
  onToggleSidebar?: () => void;
}

const Header: React.FC<HeaderProps> = ({ className, onToggleSidebar }) => {
  // TopHeader is a self-contained component with its own styling (sticky, h-16, full-width, etc.).
  // This Header layout component primarily acts as a pass-through and a designated slot for the TopHeader.
  // The className prop allows for any minor contextual adjustments from MainAppLayout, though TopHeader
  // is largely self-sufficient.
  return (
    <TopHeader 
      className={cn(className)} 
      onToggleSidebar={onToggleSidebar} 
    />
  );
};

export default Header;
