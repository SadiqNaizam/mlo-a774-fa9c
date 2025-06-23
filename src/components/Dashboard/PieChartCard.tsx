import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

type SourceData = {
  name: string;
  value: number;
  dollarValue: number;
  color: string;
};

const data: SourceData[] = [
  { name: 'Clutch', value: 50, dollarValue: 3000, color: '#F87171' }, // red-400
  { name: 'Behance', value: 30, dollarValue: 1000, color: '#FBBF24' }, // amber-400
  { name: 'Instagram', value: 10, dollarValue: 1000, color: '#38BDF8' }, // sky-400
  { name: 'Dribbble', value: 10, dollarValue: 1000, color: '#4ADE80' }, // green-400
];

const PieChartCard: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sources</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="w-full h-52">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                  stroke="none"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <RechartsTooltip 
                  contentStyle={{ 
                    background: 'hsl(var(--card))',
                    borderColor: 'hsl(var(--border))',
                    borderRadius: 'var(--radius)',
                  }}
                  formatter={(value, name) => [`${value}%`, name]}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-col gap-4 text-sm">
            {data.map((item) => (
              <div key={item.name} className="grid grid-cols-[1fr_auto_auto] items-center gap-4">
                <div className="flex items-center">
                  <span className="h-3 w-3 rounded-sm mr-3" style={{ backgroundColor: item.color }}></span>
                  <span>{item.name}</span>
                </div>
                <span className="font-medium justify-self-end">${item.dollarValue.toLocaleString()}</span>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                       <span className="text-muted-foreground justify-self-end cursor-default w-12 text-right">{item.value}%</span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>from leads total</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PieChartCard;
