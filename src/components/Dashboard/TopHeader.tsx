import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Bell, Search, Settings, User, LogOut, Code, Menu } from 'lucide-react';

interface TopHeaderProps {
  onToggleSidebar?: () => void;
  className?: string;
}

const TopHeader: React.FC<TopHeaderProps> = ({ onToggleSidebar, className }) => {
  return (
    <header className={cn(
      "h-16 sticky top-0 z-40 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60",
      className
    )}>
      <div className="container mx-auto flex h-full items-center px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <a href="#" className="flex items-center mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary h-7 w-auto">
              <path d="M12 3L4 7.5V16.5L12 21L20 16.5V7.5L12 3Z"></path>
              <path d="M12 3L4 7.5"></path><path d="M12 3L20 7.5"></path>
              <path d="M12 21V12"></path><path d="M4 7.5L12 12"></path>
              <path d="M20 7.5L12 12"></path>
            </svg>
            <span className="font-bold text-lg ml-2 text-foreground hidden md:block">tabler</span>
          </a>
          {onToggleSidebar && (
            <Button variant="ghost" size="icon" className="mr-2 md:hidden" onClick={onToggleSidebar} aria-label="Toggle sidebar">
              <Menu className="h-5 w-5" />
            </Button>
          )}
        </div>

        <div className="relative ml-auto md:ml-4 flex-1 md:grow-0 max-w-xs md:max-w-sm lg:max-w-md">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-full rounded-lg bg-background pl-8 h-9"
          />
        </div>
        
        <div className="flex items-center space-x-2 sm:space-x-3 ml-2 md:ml-4">
          <Button variant="outline" size="sm" className="hidden sm:flex items-center whitespace-nowrap">
            <Code className="h-3.5 w-3.5 mr-1.5" />
            Source code
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative" aria-label="Notifications">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1.5 right-1.5 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex items-start space-x-2 p-3">
                <Avatar className="h-8 w-8 mt-0.5">
                  <AvatarImage src="https://i.pravatar.cc/150?u=notifyuser" alt="User" />
                  <AvatarFallback>NU</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium leading-none">New system update available</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Apply the latest patches for improved security. 2 min ago</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="justify-center py-2">
                <span className="text-sm text-primary hover:underline">View all notifications</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-2 p-1 rounded-full h-auto" aria-label="User menu">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://i.pravatar.cc/150?u=janepearson" alt="Jane Pearson" />
                  <AvatarFallback>JP</AvatarFallback>
                </Avatar>
                <div className="hidden lg:flex flex-col items-start">
                  <span className="text-sm font-medium text-foreground">Jane Pearson</span>
                  <span className="text-xs text-muted-foreground">Administrator</span>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
