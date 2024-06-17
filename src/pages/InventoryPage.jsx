import React from 'react';
import InventoryList from '../components/Inventory/InventoryList';

const InventoryPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Inventory Management</h1>
      <InventoryList />
    </div>
  );
};

export default InventoryPage;
