import React from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CalendarDays, ChevronDown } from 'lucide-react';

const PageHeader: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Dashboard</h1>
        <Tabs defaultValue="leads" className="mt-4">
          <TabsList>
            <TabsTrigger value="sales">Sales</TabsTrigger>
            <TabsTrigger value="leads">Leads</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <Button variant="outline" className="flex items-center gap-2 font-normal">
        <CalendarDays className="h-4 w-4 text-muted-foreground" />
        <span className="text-muted-foreground">last 6 months</span>
        <ChevronDown className="h-4 w-4 text-muted-foreground" />
      </Button>
    </div>
  );
};

export default PageHeader;
