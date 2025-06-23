import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Info } from 'lucide-react';

type Reason = {
  percentage: number;
  text: string;
};

const reasonsData: Reason[] = [
  { percentage: 40, text: 'The proposal is unclear' },
  { percentage: 20, text: 'However venture pursuit' },
  { percentage: 10, text: 'Other' },
  { percentage: 30, text: 'The proposal is unclear' },
];

const ReasonsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Reasons of leads lost</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-y-8 gap-x-4">
            {reasonsData.map((reason, index) => (
              <div key={index}>
                <p className="text-3xl font-bold">{reason.percentage}%</p>
                <p className="text-sm text-muted-foreground mt-1">{reason.text}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Other data</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col sm:flex-row justify-around items-start sm:items-center h-full gap-8 sm:gap-4 pt-8">
          <div className="text-center">
            <p className="text-3xl font-bold">900</p>
            <p className="text-sm text-muted-foreground mt-1">total leads<br/>count</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">12</p>
            <p className="text-sm text-muted-foreground mt-1">days in average<br/>to convert lead</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1">
              <p className="text-3xl font-bold">30</p>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-4 w-4 text-muted-foreground cursor-pointer"/>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Leads that have not been contacted in 30 days.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <p className="text-sm text-muted-foreground mt-1">inactive leads</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReasonsGrid;
