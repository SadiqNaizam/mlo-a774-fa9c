import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

type FunnelStage = {
  name: 'Discovery' | 'Qualified' | 'In conversation' | 'Negotiations' | 'Closed won';
  count: number;
  value: number;
  duration: string;
  color: string;
};

const funnelData: FunnelStage[] = [
  { name: 'Discovery', count: 200, value: 200, duration: '2 days', color: 'bg-red-400' },
  { name: 'Qualified', count: 100, value: 100, duration: '2 days', color: 'bg-yellow-400' },
  { name: 'In conversation', count: 50, value: 100, duration: '5 days', color: 'bg-slate-700' },
  { name: 'Negotiations', count: 20, value: 50, duration: '8 days', color: 'bg-green-400' },
  { name: 'Closed won', count: 20, value: 50, duration: '10 days', color: 'bg-purple-500' },
];

const StatCard: React.FC = () => {
  const totalCount = funnelData.reduce((sum, stage) => sum + stage.count, 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Funnel count</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <span className="text-4xl font-bold">600</span>
          <span className="ml-2 text-muted-foreground">active leads</span>
        </div>
        <div className="w-full h-2 rounded-full bg-gray-200 flex overflow-hidden mb-6">
          {funnelData.map((stage) => (
            <div
              key={stage.name}
              className={cn('h-full', stage.color)}
              style={{ width: `${(stage.count / totalCount) * 100}%` }}
            />
          ))}
        </div>
        <ul className="space-y-4 text-sm">
          {funnelData.map((stage) => (
            <li key={stage.name} className="grid grid-cols-[1fr_auto_auto] items-center gap-4">
              <div className="flex items-center">
                <span className={cn('h-3 w-3 rounded-sm mr-3', stage.color)}></span>
                <span>{stage.name}</span>
              </div>
              <span className="text-muted-foreground justify-self-end">${stage.value.toLocaleString()}</span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="text-muted-foreground justify-self-end cursor-default">{stage.duration}</span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Average time on this stage</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default StatCard;
