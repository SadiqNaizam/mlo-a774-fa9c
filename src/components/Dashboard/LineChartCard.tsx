import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CalendarDays, ChevronDown } from 'lucide-react';

const chartData = [
  { name: 'March', closedWon: 65, closedLost: 85 },
  { name: 'April', closedWon: 30, closedLost: 45 },
  { name: 'May', closedWon: 62, closedLost: 95 },
  { name: 'June', closedWon: 80, closedLost: 10 },
  { name: 'July', closedWon: 75, closedLost: 40 },
  { name: 'August', closedWon: 95, closedLost: 70 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-2 bg-card border rounded-md shadow-lg">
        <p className="label text-sm font-bold">{`${label}`}</p>
        <p style={{ color: payload[0].color }} className="intro text-sm">{`${payload[0].name} : ${payload[0].value}`}</p>
        <p style={{ color: payload[1].color }} className="intro text-sm">{`${payload[1].name} : ${payload[1].value}`}</p>
      </div>
    );
  }
  return null;
};

const LineChartCard: React.FC = () => {
  return (
    <Card>
      <CardHeader className="flex-wrap gap-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex-1">
            <CardTitle>Leads tracking</CardTitle>
            <div className="flex items-baseline gap-4 mt-2">
              <p><span className="text-2xl font-bold">680</span><span className="text-muted-foreground"> total closed</span></p>
              <p><span className="text-2xl font-bold">70</span><span className="text-muted-foreground"> total lost</span></p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
             <Tabs defaultValue="converted" className="w-full sm:w-auto">
                <TabsList>
                    <TabsTrigger value="came">Leads came</TabsTrigger>
                    <TabsTrigger value="converted">Leads Converted</TabsTrigger>
                    <TabsTrigger value="size">Total deals size</TabsTrigger>
                </TabsList>
            </Tabs>
            <Button variant="outline" className="flex items-center gap-2 font-normal w-full sm:w-auto">
                <CalendarDays className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">last 6 months</span>
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 5, right: 30, left: 0, bottom: 20 }}>
              <defs>
                <linearGradient id="colorWon" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorLost" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" tickLine={false} axisLine={false} dy={10} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
              <YAxis tickLine={false} axisLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="closedLost" name="Closed lost" stroke="#ef4444" fillOpacity={1} fill="url(#colorLost)" strokeWidth={2} dot={{r: 4, strokeWidth: 2, fill: '#ef4444'}} activeDot={{ r: 6, strokeWidth: 2, fill: '#ef4444' }} />
              <Area type="monotone" dataKey="closedWon" name="Closed won" stroke="#06b6d4" fillOpacity={1} fill="url(#colorWon)" strokeWidth={2} dot={{r: 4, strokeWidth: 2, fill: '#06b6d4'}} activeDot={{ r: 6, strokeWidth: 2, fill: '#06b6d4' }} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center items-center gap-6 mt-4">
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-[#06b6d4]"></div>
                <span className="text-sm text-muted-foreground">Closed won</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-[#ef4444]"></div>
                <span className="text-sm text-muted-foreground">Closed lost</span>
            </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LineChartCard;
