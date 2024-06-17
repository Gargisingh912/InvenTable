import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import InventoryPage from './pages/InventoryPage';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between">
          <div className="text-white text-lg font-bold">
            InvenTable
          </div>
          <div className="flex space-x-4">
            <Link to="/" className="text-gray-300 hover:text-white">Dashboard</Link>
            <Link to="/inventory" className="text-gray-300 hover:text-white">Inventory</Link>
          </div>
        </div>
      </nav>
      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/inventory" element={<InventoryPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
