
import { useState, useEffect } from 'react';
import { PieChart, Pie, ResponsiveContainer, Cell, Tooltip, Legend } from 'recharts';

const COLORS = ['#C85C7F', '#1D3557', '#A8577E', '#6A91C7'];

type FundData = {
  name: string;
  value: number;
  description: string;
};

const initialData: FundData[] = [
  { name: 'Education', value: 40, description: 'Books, Courses, Tuition, etc.' },
  { name: 'Skill Development', value: 25, description: 'Workshops, Training, Mentorship, etc.' },
  { name: 'Infrastructure', value: 20, description: 'Learning Spaces, Internet, Devices, etc.' },
  { name: 'Reward System', value: 15, description: 'Incentives from Panchayat for Goal Completion' },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-lg border border-drishti-rose/20">
        <p className="font-medium text-drishti-navy">{payload[0].name}</p>
        <p className="text-drishti-rose font-semibold">{payload[0].value}%</p>
        <p className="text-sm text-gray-600 mt-1">{payload[0].payload.description}</p>
      </div>
    );
  }
  return null;
};

const CustomLegend = ({ payload }: any) => {
  return (
    <ul className="flex flex-wrap justify-center gap-4 mt-4">
      {payload.map((entry: any, index: number) => (
        <li key={`legend-${index}`} className="flex items-center">
          <div
            className="w-3 h-3 rounded-full mr-2"
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-sm font-medium">{entry.value}</span>
        </li>
      ))}
    </ul>
  );
};

export default function FundChart() {
  const [data, setData] = useState<FundData[]>([]);
  const [animationFinished, setAnimationFinished] = useState(false);
  
  useEffect(() => {
    // Start with zero values
    setData(initialData.map(item => ({ ...item, value: 0 })));
    
    // Animate to actual values
    const timer = setTimeout(() => {
      setData(initialData);
      const finishTimer = setTimeout(() => setAnimationFinished(true), 1000);
      return () => clearTimeout(finishTimer);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="chart-container animate-fade-in">
      <h3 className="text-xl font-display font-semibold text-center mb-6">Fund Distribution</h3>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={100}
              innerRadius={60}
              fill="#8884d8"
              dataKey="value"
              animationDuration={1000}
              animationBegin={0}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend content={<CustomLegend />} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {animationFinished && (
        <div className="grid grid-cols-2 gap-4 mt-8 animate-fade-in-up">
          {data.map((item, index) => (
            <div 
              key={index} 
              className="flex items-start p-4 bg-white/50 backdrop-blur-sm rounded-lg shadow-sm border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mr-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: COLORS[index] }}>
                  <span className="text-white font-bold">{item.value}%</span>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-drishti-navy">{item.name}</h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
