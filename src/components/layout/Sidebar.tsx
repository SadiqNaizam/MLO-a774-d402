import React from 'react';
import { cn } from '@/lib/utils';
import SidebarNav from '../Dashboard/SidebarNav';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  // The Sidebar component wraps SidebarNav.
  // SidebarNav already defines its core styling including width (w-64), height (h-full),
  // background (bg-card), and border (border-r).
  // This wrapper allows MainAppLayout to control aspects like responsive visibility ('hidden md:flex')
  // or to place it within a specific layout structure.
  // The className passed here will be applied to the SidebarNav's root element.
  return (
    <aside className={cn("h-full flex-shrink-0", className)}>
      {/* SidebarNav takes h-full of its parent by default. 
          Its w-64 is intrinsic. If className overrides width, cn handles it. */}
      <SidebarNav className="h-full w-64" /> 
    </aside>
  );
};

export default Sidebar;
