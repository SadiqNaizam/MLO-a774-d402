import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface StatCardItem {
  id: string;
  value: string; // Changed from title to value for the big number
  label: string; // This is the description e.g. "New Tickets"
  percentageChange: number;
}

const statCardDisplayData: StatCardItem[] = [
  { id: 'newTickets', value: '43', label: 'New Tickets', percentageChange: 6 },
  { id: 'closedToday', value: '17', label: 'Closed Today', percentageChange: -3 },
  { id: 'newReplies', value: '7', label: 'New Replies', percentageChange: 9 },
  { id: 'followers', value: '27.3k', label: 'Followers', percentageChange: 3 },
  { id: 'dailyEarnings', value: '$95', label: 'Daily earnings', percentageChange: -2 },
  { id: 'products', value: '621', label: 'Products', percentageChange: -1 },
];

const StatCard: React.FC<StatCardItem> = ({ value, label, percentageChange }) => {
  const isPositive = percentageChange >= 0;
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-1">
          <div className="text-3xl font-bold text-foreground">{value}</div>
          <div className={cn(
            "flex items-center text-sm font-semibold",
            isPositive ? 'text-green-600' : 'text-red-600'
          )}>
            {isPositive ? <ArrowUp className="h-4 w-4 mr-1" /> : <ArrowDown className="h-4 w-4 mr-1" />}
            {Math.abs(percentageChange)}%
          </div>
        </div>
        <p className="text-sm text-muted-foreground truncate">{label}</p>
      </CardContent>
    </Card>
  );
};

const StatsCardGrid: React.FC<{className?: string}> = ({ className }) => {
  return (
    <div className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6", className)}>
      {statCardDisplayData.map((stat) => (
        <StatCard
          key={stat.id}
          id={stat.id}
          value={stat.value}
          label={stat.label}
          percentageChange={stat.percentageChange}
        />
      ))}
    </div>
  );
};

export default StatsCardGrid;
