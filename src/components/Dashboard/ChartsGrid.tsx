import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const greenChartData = [
  { name: 'Active', value: 630 },
  { name: 'Inactive', value: 370 },
];
const GREEN_COLORS = ['hsl(var(--success))', 'hsl(var(--success)/0.4)'];

const blueChartData = [
  { name: 'Chrome', value: 474 },
  { name: 'Firefox', value: 331 },
  { name: 'Safari', value: 105 },
  { name: 'Edge', value: 90 },
];
const BLUE_COLORS = ['hsl(var(--primary))', 'hsl(var(--primary)/0.75)', 'hsl(var(--primary)/0.5)', 'hsl(var(--primary)/0.35)'];

interface CustomPieChartProps {
  title: string;
  data: { name: string; value: number }[];
  colors: string[];
  showLabelsInside?: boolean;
  className?: string;
}

const CustomPieChart: React.FC<CustomPieChartProps> = ({ title, data, colors, showLabelsInside = false, className }) => {
  const totalValue = data.reduce((sum, entry) => sum + entry.value, 0);

  return (
    <Card className={cn("shadow-sm", className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-center text-base font-semibold text-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[220px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={!showLabelsInside}
                innerRadius={50}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={data.length > 1 ? 2 : 0}
                dataKey="value"
                label={({ percent, x, y, cx, cy, midAngle, innerRadius: pieInnerRadius, outerRadius: pieOuterRadius, name, index, fill }) => {
                  const RADIAN = Math.PI / 180;
                  let lx = x;
                  let ly = y;
                  let textAnchor = x > cx ? 'start' : 'end';
                  let labelFill = fill;

                  if (showLabelsInside) {
                    const radius = pieInnerRadius + (pieOuterRadius - pieInnerRadius) * 0.5;
                    lx = cx + radius * Math.cos(-midAngle * RADIAN);
                    ly = cy + radius * Math.sin(-midAngle * RADIAN);
                    textAnchor = 'middle';
                    labelFill = 'hsl(var(--primary-foreground))'; // White text for contrast
                  } else {
                    // Position labels outside with lines
                    const radius = pieOuterRadius * 1.2;
                    lx = cx + radius * Math.cos(-midAngle * RADIAN);
                    ly = cy + radius * Math.sin(-midAngle * RADIAN);
                  }
                  
                  if (percent * 100 < 5 && showLabelsInside) return null; // Hide small labels inside

                  return (
                    <text x={lx} y={ly} fill={labelFill} textAnchor={textAnchor} dominantBaseline="central" fontSize="11px" fontWeight="medium">
                      {`${(percent * 100).toFixed(showLabelsInside ? 1: 0)}%`}
                    </text>
                  );
                }}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} strokeWidth={1} stroke={'hsl(var(--card))'}/>
                ))}
              </Pie>
              <Tooltip
                formatter={(value: number, name: string) => [`${((value / totalValue) * 100).toFixed(1)}%`, name]}
                contentStyle={{
                  backgroundColor: 'hsl(var(--popover))',
                  borderColor: 'hsl(var(--border))',
                  borderRadius: 'var(--radius)',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
                }}
                labelStyle={{ color: 'hsl(var(--popover-foreground))', marginBottom: '4px', fontWeight: '500' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

const ChartsGrid: React.FC<{className?: string}> = ({ className }) => {
  return (
    <div className={cn("grid gap-6 md:grid-cols-2", className)}>
      <CustomPieChart title="Status Distribution" data={greenChartData} colors={GREEN_COLORS} showLabelsInside={false} />
      <CustomPieChart title="Browser Share" data={blueChartData} colors={BLUE_COLORS} showLabelsInside={true} />
    </div>
  );
};

export default ChartsGrid;
