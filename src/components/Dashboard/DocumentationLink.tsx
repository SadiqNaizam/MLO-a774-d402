import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

const DocumentationLink: React.FC<{className?: string}> = ({ className }) => {
  return (
    <a 
      href="#" 
      className={cn("block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg group", className)} 
      aria-label="Read our documentation with code samples"
    >
      <Card className={cn(
        "shadow-sm group-hover:shadow-md transition-shadow duration-200 ease-in-out",
        "bg-[hsl(var(--primary)/0.08)] dark:bg-[hsl(var(--primary)/0.15)]",
        "border border-transparent group-hover:border-[hsl(var(--primary)/0.3)] dark:group-hover:border-[hsl(var(--primary)/0.4)]"
      )}>
        <CardContent className="p-4 flex items-center justify-between">
          <p className="text-sm font-medium text-primary dark:text-[hsl(var(--primary-foreground)/0.9)]">
            Read our documentation with code samples.
          </p>
          <ExternalLink className="h-4 w-4 text-primary/80 dark:text-[hsl(var(--primary-foreground)/0.7)] flex-shrink-0 group-hover:text-primary transition-colors" />
        </CardContent>
      </Card>
    </a>
  );
};

export default DocumentationLink;
