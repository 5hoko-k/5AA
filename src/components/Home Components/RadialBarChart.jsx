import { Tooltip } from "@mui/material";
import React from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: 'A', value: 100 },
  { name: 'B', value: 200 },
  { name: 'C', value: 300 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p>{`Name: ${label}`}</p>
        <p>{`Value: ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};

const TheRadialBar = (props) => {
  const total = props.data.reduce((sum, obj) => sum + obj.count, 0);

  const colorMap = {
    Drama: "#FF924C",
    Action: "#36949D",
    Comedy: "#FFCA3A",
    Fantasy: "#1982C4",
    Romance: "#FF595E",
    Supernatural: "#C5CA30",
    Adventure: "#8AC926",
    "Slice of Life": "#4267AC",
    Mystery: "#565AA0",
    Psychological: "#6A4C93",
  };

  const transformedData = props.data.map((item) => ({
    name: item.genre, // Changing 'genre' to 'name'
    count: item.count,
    pv: item.count, // Same 'pv' value for all objects
    fill: colorMap[item.genre], // Assigning color based on genre
  }));

  const totalAnimeObj = {
    name: "total",
    count: props.total,
    pv: props.total, // Same 'pv' value for all objects
    fill: "black",
  };
  transformedData.unshift(totalAnimeObj);

  return (
    <div style={{ width: "100%", height: 500 }}>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="5%"
          outerRadius="70%"
          barSize={7}
          data={transformedData}
          // compact={true}
        >
          <RadialBar
            minAngle={15}
            label={{ position: "insideStart", fill: "#fff" }}
            background
            clockWise
            dataKey="count"
            margin={{ top: 1, right: 5, bottom: 5, left: 5 }}
          />
            <Legend
              iconSize={10}
              layout="vertical"
              verticalAlign="middle"
              align="right"
              wrapperStyle={style}
            />
          <Tooltip content={<CustomTooltip />}/>
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TheRadialBar;
