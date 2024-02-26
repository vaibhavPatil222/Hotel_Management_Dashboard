import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./bigChartBox.scss";

const data = [
  {
    name: "Sun",
    IndianGuests: 4000,
    VIPGuests: 2400,
    ForeginGuests: 2400,
  },
  {
    name: "Mon",
    IndianGuests: 3000,
    VIPGuests: 1398,
    ForeginGuests: 2210,
  },
  {
    name: "Tue",
    IndianGuests: 2000,
    VIPGuests: 9800,
    ForeginGuests: 2290,
  },
  {
    name: "Wed",
    IndianGuests: 2780,
    VIPGuests: 3908,
    ForeginGuests: 2000,
  },
  {
    name: "Thu",
    IndianGuests: 1890,
    VIPGuests: 4800,
    ForeginGuests: 2181,
  },
  {
    name: "Fri",
    IndianGuests: 2390,
    VIPGuests: 3800,
    ForeginGuests: 2500,
  },
  {
    name: "Sat",
    IndianGuests: 3490,
    VIPGuests: 4300,
    ForeginGuests: 2100,
  },
];

const BigChartBox = () => {
  return (
    <div className="bigChartBox">
      <h1>Revenue Analytics</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="ForeginGuests"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="VIPGuests"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="IndianGuests"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BigChartBox;
