import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const lineChartData = [
  { name: 'Jan', purchases: 1832 }, { name: 'Feb', purchases: 2201 }, { name: 'Mar', purchases: 1567 },
  { name: 'Apr', purchases: 3890 }, { name: 'May', purchases: 2013 }, { name: 'Jun', purchases: 4102 },
  { name: 'Jul', purchases: 3021 }, { name: 'Aug', purchases: 4800 }, { name: 'Sep', purchases: 2800 },
  { name: 'Oct', purchases: 3500 }, { name: 'Nov', purchases: 1250 }, { name: 'Dec', purchases: 4230 },
];

interface ActivityLog {
  id: string;
  user: {
    name: string;
    avatarUrl?: string;
    initials: string;
  };
  commit: string;
  date: string;
}

const activityLogsData: ActivityLog[] = [
  { id: '1', user: { name: 'Ronald Bradley', avatarUrl: 'https://i.pravatar.cc/150?u=ronaldbradley', initials: 'RB' }, commit: 'Initial commit', date: 'May 6, 2018' },
  { id: '2', user: { name: 'Russell Gibson', initials: 'RG', avatarUrl: 'https://i.pravatar.cc/150?u=russellgibson' }, commit: 'Main structure', date: 'April 22, 2018' },
  { id: '3', user: { name: 'Beverly Armstrong', avatarUrl: 'https://i.pravatar.cc/150?u=beverlyarmstrong', initials: 'BA' }, commit: 'Left sidebar adjustments', date: 'April 15, 2018' },
  { id: '4', user: { name: 'Alice Wonderland', avatarUrl: 'https://i.pravatar.cc/150?u=alicewonderland', initials: 'AW' }, commit: 'Fix critical bug #1024', date: 'April 10, 2018' },
  { id: '5', user: { name: 'Bob The Builder', initials: 'BB', avatarUrl: 'https://i.pravatar.cc/150?u=bobthebuilder' }, commit: 'Updated documentation', date: 'April 5, 2018' },
];

const DevelopmentActivityGraph: React.FC<{className?: string}> = ({ className }) => {
  return (
    <Card className={cn("shadow-sm", className)}>
      <CardHeader>
        <CardTitle>Development Activity</CardTitle>
        <CardDescription>Tracking purchases over time and recent commits.</CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={lineChartData} margin={{ top: 5, right: 20, left: -25, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
              <XAxis dataKey="name" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} axisLine={{ stroke: 'hsl(var(--border))' }} tickLine={{ stroke: 'hsl(var(--border))' }} />
              <YAxis tickFormatter={(value) => `${value / 1000}k`} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} axisLine={false} tickLine={false} width={40}/>
              <Tooltip
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  borderColor: 'hsl(var(--border))',
                  borderRadius: 'var(--radius)',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
                }}
                labelStyle={{ color: 'hsl(var(--foreground))', marginBottom: '4px', fontWeight: '500' }}
                itemStyle={{ color: 'hsl(var(--primary))' }}
              />
              <Legend verticalAlign="top" height={36} iconSize={12} iconType="circle" wrapperStyle={{fontSize: '13px'}} />
              <Line type="monotone" dataKey="purchases" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ r: 3, fill: 'hsl(var(--primary))', strokeWidth: 1, stroke: 'hsl(var(--card))' }} activeDot={{ r: 5, strokeWidth: 2 }} name="Purchases" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
      <div className="border-t border-border mt-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[250px] pl-6">User</TableHead>
              <TableHead>Commit</TableHead>
              <TableHead className="w-[180px] text-right">Date</TableHead>
              <TableHead className="w-[80px] text-center pr-6">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {activityLogsData.map((log) => (
              <TableRow key={log.id}>
                <TableCell className="pl-6">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-9 w-9">
                      <AvatarImage src={log.user.avatarUrl} alt={log.user.name} />
                      <AvatarFallback>{log.user.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-foreground whitespace-nowrap">{log.user.name}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-muted-foreground text-sm">{log.commit}</TableCell>
                <TableCell className="text-right text-muted-foreground text-sm">{log.date}</TableCell>
                <TableCell className="text-center pr-6">
                  <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive h-8 w-8">
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Delete log</span>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
};

export default DevelopmentActivityGraph;
