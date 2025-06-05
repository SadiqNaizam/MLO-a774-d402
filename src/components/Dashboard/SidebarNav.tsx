import React from 'react';
import { cn } from '@/lib/utils';
import {
  Home,
  LayoutGrid,
  Puzzle,
  FileText,
  ClipboardList,
  Image as ImageIcon,
  BookOpen,
  Settings
} from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  href: string;
}

const navItemsData: NavItem[] = [
  { id: 'home', label: 'Home', icon: Home, href: '#' },
  { id: 'interface', label: 'Interface', icon: LayoutGrid, href: '#' },
  { id: 'components', label: 'Components', icon: Puzzle, href: '#' },
  { id: 'pages', label: 'Pages', icon: FileText, href: '#' },
  { id: 'forms', label: 'Forms', icon: ClipboardList, href: '#' },
  { id: 'gallery', label: 'Gallery', icon: ImageIcon, href: '#' },
  { id: 'documentation', label: 'Documentation', icon: BookOpen, href: '#' },
];

const SidebarNav: React.FC<{className?: string}> = ({ className }) => {
  const [activeItem, setActiveItem] = React.useState<string>('home');

  return (
    <div className={cn("w-64 bg-card border-r border-border flex flex-col h-full", className)}>
      <nav className="flex-grow p-4 space-y-1.5 overflow-y-auto">
        {navItemsData.map((item) => (
          <a
            key={item.id}
            href={item.href}
            onClick={() => setActiveItem(item.id)}
            className={cn(
              'flex items-center px-3 py-2.5 text-sm font-medium rounded-lg hover:bg-muted group transition-colors duration-150 ease-in-out',
              activeItem === item.id ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
            )}
            aria-current={activeItem === item.id ? 'page' : undefined}
          >
            <item.icon className={cn(
              'h-5 w-5 mr-3',
              activeItem === item.id ? 'text-primary-foreground' : 'text-muted-foreground group-hover:text-foreground'
            )} />
            {item.label}
          </a>
        ))}
      </nav>
      <div className="p-4 border-t border-border mt-auto">
        <a
          href="#"
          className="flex items-center px-3 py-2.5 text-sm font-medium rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground group transition-colors duration-150 ease-in-out"
        >
          <Settings className="h-5 w-5 mr-3 text-muted-foreground group-hover:text-foreground" />
          Settings
        </a>
        <p className="text-xs text-muted-foreground mt-4 px-3 text-center">App Version 1.0.0-beta</p>
      </div>
    </div>
  );
};

export default SidebarNav;
