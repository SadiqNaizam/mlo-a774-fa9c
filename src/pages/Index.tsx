import React from 'react';
import MainAppLayout from '@/components/layout/MainAppLayout';
import PageHeader from '@/components/Dashboard/PageHeader';
import StatsCardGrid from '@/components/Dashboard/StatsCardGrid';
import LineChartCard from '@/components/Dashboard/LineChartCard';
import ReasonsGrid from '@/components/Dashboard/ReasonsGrid';

/**
 * DashboardPage serves as the main view for the leads overview dashboard.
 * It composes various specialized components within a standard application layout
 * to present a comprehensive view of sales and leads data.
 */
const DashboardPage: React.FC = () => {
  return (
    <MainAppLayout>
      <div className="flex flex-col gap-6">
        {/* Page header with title, tabs, and date filter */}
        <PageHeader />

        {/* Grid containing primary stats cards like Funnel Count and Sources */}
        <StatsCardGrid />

        {/* Card for displaying time-series data for leads tracking */}
        <LineChartCard />

        {/* Grid for displaying qualitative data like reasons for lost leads */}
        <ReasonsGrid />
      </div>
    </MainAppLayout>
  );
};

export default DashboardPage;
