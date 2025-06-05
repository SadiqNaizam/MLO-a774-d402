import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import StatsCardGrid from '../components/Dashboard/StatsCardGrid';
import DevelopmentActivityGraph from '../components/Dashboard/DevelopmentActivityGraph';
import ChartsGrid from '../components/Dashboard/ChartsGrid';
import DocumentationLink from '../components/Dashboard/DocumentationLink';
import DataTable from '../components/Dashboard/DataTable';

const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-semibold text-foreground">
          Dashboard
        </h1>
        
        <StatsCardGrid />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Development Activity Graph taking 2/3 of the width on large screens */}
          <div className="lg:col-span-2">
            <DevelopmentActivityGraph />
          </div>
          
          {/* Right sidebar with Documentation Link and Charts Grid taking 1/3 */}
          <div className="lg:col-span-1 space-y-6">
            <DocumentationLink />
            <ChartsGrid />
          </div>
        </div>
        
        <DataTable />
      </div>
    </MainAppLayout>
  );
};

export default IndexPage;
