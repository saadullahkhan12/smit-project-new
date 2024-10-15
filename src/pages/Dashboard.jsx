import React from 'react';
import Sidebar from './Sidebar';

function  Dashboard() {
  return (
    <div className="flex">
      <Sidebar/>

      <div className="flex-1 p-6 bg-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Income and Expenses */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Income</h3>
            <p className="text-3xl text-green-600 font-bold">$9460.00</p>
            <p className="text-sm text-gray-600">Compared to $9940 yesterday</p>
            <p className="text-gray-500 mt-4">Last week Income: $25658.00</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md-red">
            <h3 className="text-xl font-semibold">Expenses</h3>
            <p className="text-3xl text-red-600 font-bold">$5660.00</p>
            <p className="text-sm text-gray-600">Compared to $5240 yesterday</p>
            <p className="text-gray-500 mt-4">Last week Expenses: $22658.00</p>
          </div>

          {/* Hire vs Cancel */}
          <div className="bg-white p-6 rounded-lg shadow-md col-span-1 lg:col-span-2">
            <h3 className="text-xl font-semibold">Hire vs Cancel</h3>
            <div className="flex items-center justify-center mt-4">
              <div className="h-40 w-40 bg-blue-200 rounded-full"></div> {/* Placeholder for a Pie Chart */}
            </div>
          </div>

          {/* Car Availability and Live Status */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Car Availability</h3>
            <div className="flex space-x-4 mt-4">
              <input type="text" placeholder="Car Number" className="border p-2 w-full rounded-md" />
              <input type="date" className="border p-2 w-full rounded-md" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Live Car Status</h3>
            <table className="w-full mt-4 text-left">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Car No.</th>
                  <th>Driver</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01</td>
                  <td>6465</td>
                  <td>Alex Noman</td>
                </tr>
                <tr>
                  <td>02</td>
                  <td>5665</td>
                  <td>Razib Rahman</td>
                </tr>
                <tr>
                  <td>03</td>
                  <td>1755</td>
                  <td>Luke Norton</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Earnings Summary */}
          <div className="bg-white p-6 rounded-lg shadow-md col-span-1 lg:col-span-2">
            <h3 className="text-xl font-semibold">Earning Summary</h3>
            <div className="mt-4">
              <div className="h-40 bg-blue-100 rounded-lg"></div> {/* Placeholder for Line Chart */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;