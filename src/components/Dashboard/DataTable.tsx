import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from '@/components/ui/dropdown-menu';

interface UserActivity {
  id: string;
  user: {
    name: string;
    avatarUrl?: string;
    initials: string;
  };
  activityType: 'login' | 'update' | 'creation' | 'deletion' | 'comment';
  description: string;
  date: string;
  timestamp: string;
}

const userActivitiesData: UserActivity[] = [
  { id: 'act1', user: { name: 'Paweł Kuna', avatarUrl: 'https://i.pravatar.cc/150?u=pawelkuna', initials: 'PK' }, activityType: 'login' as const, description: 'Logged into the system', date: 'May 10, 2024', timestamp: '10:30 AM' },
  { id: 'act2', user: { name: 'Jeffie Lewzey', avatarUrl: 'https://i.pravatar.cc/150?u=jeffielewzey', initials: 'JL' }, activityType: 'update' as const, description: 'Updated project "Tabler UI"', date: 'May 10, 2024', timestamp: '09:15 AM' },
  { id: 'act3', user: { name: 'Mallory Hulme', avatarUrl: 'https://i.pravatar.cc/150?u=malloryhulme', initials: 'MH' }, activityType: 'creation' as const, description: 'Created new task "Dashboard Design"', date: 'May 9, 2024', timestamp: '03:45 PM' },
  { id: 'act4', user: { name: 'Dunn Slane', initials: 'DS', avatarUrl: 'https://i.pravatar.cc/150?u=dunnslane' }, activityType: 'comment' as const, description: 'Commented on issue #132', date: 'May 9, 2024', timestamp: '11:00 AM' },
  { id: 'act5', user: { name: 'Emilibeth Simmington', avatarUrl: 'https://i.pravatar.cc/150?u=emilibeth', initials: 'ES' }, activityType: 'deletion' as const, description: 'Deleted 3 files from "Old Archives"', date: 'May 8, 2024', timestamp: '05:20 PM' },
  { id: 'act6', user: { name: 'Regina Olson', avatarUrl: 'https://i.pravatar.cc/150?u=reginaolson', initials: 'RO'}, activityType: 'update' as const, description: 'Pushed 2 commits to tabler/tabler', date: 'May 8, 2024', timestamp: '02:00 PM'}
];

const getActivityBadgeVariant = (activityType: UserActivity['activityType']): "default" | "secondary" | "destructive" | "outline" => {
  switch (activityType) {
    case 'login':
    case 'creation': 
      return 'default'; // Using primary for positive actions
    case 'update': 
      return 'secondary';
    case 'deletion': 
      return 'destructive';
    case 'comment': 
      return 'outline';
    default: 
      return 'secondary';
  }
};

const DataTable: React.FC<{className?: string}> = ({ className }) => {
  return (
    <Card className={cn("shadow-sm", className)}>
      <CardHeader>
        <CardTitle>Recent User Activity</CardTitle>
        <CardDescription>Overview of the latest activities in the system.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[250px]">User</TableHead>
              <TableHead>Activity</TableHead>
              <TableHead className="w-[180px]">Date & Time</TableHead>
              <TableHead className="w-[80px] text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {userActivitiesData.map((activity) => (
              <TableRow key={activity.id}>
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-9 w-9">
                      <AvatarImage src={activity.user.avatarUrl} alt={activity.user.name} />
                      <AvatarFallback>{activity.user.initials}</AvatarFallback>
                    </Avatar>
                    <div className="font-medium text-foreground whitespace-nowrap">{activity.user.name}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col items-start">
                    <span className="text-sm text-foreground mb-1">{activity.description}</span>
                    <Badge variant={getActivityBadgeVariant(activity.activityType)} className="capitalize text-xs px-1.5 py-0.5 font-normal">
                      {activity.activityType}
                    </Badge>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="text-sm text-muted-foreground whitespace-nowrap">{activity.date}</div>
                  <div className="text-xs text-muted-foreground whitespace-nowrap">{activity.timestamp}</div>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="text-muted-foreground h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Actions</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>User Profile</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive focus:text-destructive-foreground focus:bg-destructive">
                        Hide Activity
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default DataTable;
