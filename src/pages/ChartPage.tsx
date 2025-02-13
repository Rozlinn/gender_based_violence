import { COLORS, options } from '@data/dropdownData';
import { useLayoutEffect, useState } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
  Brush,
} from 'recharts';
import { GrPowerReset } from 'react-icons/gr';
import Navbar from '@components/Navbar';
import data from '@data/usersData.json';

// Function to count occurrences
const countOccurrences = (key: keyof (typeof data)[0]) => {
  return data.reduce<Record<string, number>>((acc, item) => {
    acc[item[key]] = (acc[item[key]] || 0) + 1;
    return acc;
  }, {});
};

type OptionType = (typeof options)[number];

const ChartPage: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<OptionType>('Gender');
  const chartData = Object.entries(countOccurrences(selectedOption)).map(
    ([name, value]) => ({ name, value })
  );
  const [active, setActive] = useState(true);
  const [zoom, setZoom] = useState(80); // Default outerRadius
  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 20, 200)); // Max limit
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 20, 50)); // Min limit
  const handleResetZoom = () => setZoom(80);

  useLayoutEffect(() => {
    document.title = `GBV | Charts`;
  }, []);

  return (
    <>
      <Navbar isChart />
      <div className="p-6 mt-16">
        <div className="flex flex-col lg:flex-row gap-y-3 lg:gap-y-0 lg:justify-between items-center mb-4">
          {/* Toggle Button */}
          <div className="flex rounded-lg w-52">
            <button
              className={`flex-1 py-1 text-center border rounded-l-lg transition-all ${
                active
                  ? 'bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-l hover:from-primary hover:to-secondary text-white'
                  : 'bg-gray-100 border-gray-100 hover:border-r-gray-100 hover:border-primary'
              }`}
              onClick={() => setActive(true)}
            >
              Table
            </button>
            <button
              className={`flex-1 py-1 text-center border rounded-r-lg transition-all ${
                !active
                  ? 'bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-l hover:from-primary hover:to-secondary text-white'
                  : 'bg-gray-100 border-gray-100 hover:border-l-gray-100 hover:border-secondary'
              }`}
              onClick={() => setActive(false)}
            >
              Charts
            </button>
          </div>

          {/* Dropdown Menu */}
          {!active && (
            <div className="flex justify-center mb-4">
              <select
                className="border p-2 rounded transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-100"
                value={selectedOption}
                onChange={(e) =>
                  setSelectedOption(e.target.value as OptionType)
                }
              >
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        <h1 className="text-xl font-bold text-center mb-4">
          {active ? 'GVB Data Table' : 'GVB Data Charts'}
        </h1>

        {/* Table and Chart */}
        {active ? (
          <div className="overflow-auto max-h-[calc(100vh-210px)] custom-scrollbar">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 sticky top-0 z-10">
                <tr className="bg-gray-200">
                  <th scope="col" className="px-6 py-3 bg-gray-50">
                    S/N
                  </th>
                  {Object.keys(data[0]).map((key) => (
                    <th key={key} scope="col" className="px-6 py-3 bg-gray-50">
                      {key}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b border-gray-200 hover:bg-gray-50"
                  >
                    <td className="px-6 py-3">{index + 1}</td>
                    {Object.values(item).map((value, idx) => (
                      <td key={idx} className="px-6 py-3">
                        {value as string}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-8 mt-6">
            {/* Pie Chart */}
            <div className="bg-white border border-gray-100 shadow-md rounded-lg p-4 overflow-auto">
              <h2 className="text-lg text-gray-600 font-semibold text-center">
                {selectedOption} Distribution
              </h2>

              {/* Zoom Controls */}
              <div className="flex justify-center space-x-2 my-2">
                <button
                  onClick={handleResetZoom}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  <GrPowerReset />
                </button>
                <button
                  onClick={handleZoomOut}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  ➖
                </button>
                <button
                  onClick={handleZoomIn}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  ➕
                </button>
              </div>

              {/* Scrollable Chart Container */}
              <div className="overflow-auto max-h-[300px] max-w-full custom-scrollbar">
                <ResponsiveContainer
                  width={zoom > 100 ? zoom + '%' : '100%'}
                  height={300}
                >
                  <PieChart>
                    <Pie
                      data={chartData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={zoom} // Dynamic zoom
                      label={({ name, percent }) =>
                        `${name} ${(percent * 100).toFixed(1)}%`
                      }
                    >
                      {chartData.map((_, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Bar Chart */}
            <div className="bg-white border border-gray-100 shadow-md rounded-lg p-4">
              <h2 className="text-lg text-gray-600 font-semibold text-center">
                {selectedOption} Bar Chart
              </h2>
              <ResponsiveContainer
                width="100%"
                height={350}
                style={{ marginLeft: -15 }}
              >
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#82ca9d" />
                  <Brush dataKey="name" height={30} stroke="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ChartPage;
