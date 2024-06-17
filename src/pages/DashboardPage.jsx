import React from 'react';
import InventorySummary from '../components/Dashboard/InventorySummary';
import RecentActivity from '../components/Dashboard/RecentActivity';
import TopSuppliers from '../components/Dashboard/TopSuppliers';
import PendingOrders from '../components/Dashboard/PendingOrders';

const DashboardPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <InventorySummary />
        <RecentActivity />
        <TopSuppliers />
        <PendingOrders />
      </div>
    </div>
  );
};

export default DashboardPage;
