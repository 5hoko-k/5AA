import React from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "18-24",
    uv: 31.47,
    pv: 2400,
    fill: "#8884d8",
  },
  {
    name: "25-29",
    uv: 26.69,
    pv: 4567,
    fill: "#83a6ed",
  },
  {
    name: "30-34",
    uv: 15.69,
    pv: 1398,
    fill: "#8dd1e1",
  },
  {
    name: "35-39",
    uv: 8.22,
    pv: 9800,
    fill: "#82ca9d",
  },
  {
    name: "40-49",
    uv: 8.63,
    pv: 3908,
    fill: "#a4de6c",
  },
  {
    name: "50+",
    uv: 2.63,
    pv: 4800,
    fill: "#d0ed57",
  },
  {
    name: "unknow",
    uv: 6.67,
    pv: 4800,
    fill: "#ffc658",
  },
];

const style = {
  top: "5%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};

const TheRadialBar = (props) => {
  console.log(props.data);
  const total = props.data.reduce((sum, obj) => sum + obj.count, 0);
  console.log(total)

  const colorMap = {
    Drama: "#FF924C",
    Action: "#36949D",
    Comedy: '#FFCA3A',
    Fantasy: '#1982C4',
    Romance: '#FF595E',
    Supernatural: '#C5CA30',
    Adventure: '#8AC926',
    'Slice of Life': '#4267AC',
    Mystery: '#565AA0',
    Psychological: '#6A4C93',
  };

  const transformedData = props.data.map((item) => ({
    name: item.genre, // Changing 'genre' to 'name'
    count: item.count,
    pv: item.count, // Same 'pv' value for all objects
    fill: colorMap[item.genre], // Assigning color based on genre
  }));
  console.log(transformedData)
  const totalAnimeObj = {
    name: 'total',
    count: props.total,
    pv: props.total, // Same 'pv' value for all objects
    fill: 'black'
  }
  transformedData.unshift(totalAnimeObj)

  return (
    <ResponsiveContainer width="100%" height={500}>
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius="10%"
        outerRadius="80%"
        barSize={20}
        data={transformedData}
      >
        <RadialBar
          minAngle={15}
          label={{ position: "insideStart", fill: "#fff" }}
          background
          clockWise 
          dataKey="count"
        />
        <Legend
          iconSize={15}
          layout="horizontal"
          verticalAlign="middle"
          wrapperStyle={style}
        />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default TheRadialBar;
