import React, { useState, PureComponent } from "react";
import { PieChart, Pie, Cell, Sector, ResponsiveContainer } from "recharts";
import { useQuery, gql } from "@apollo/client";
import TheRadar from "../components/RadarChart";
import TheRadialBar from "../components/RadialBarChart";

const query = gql`
  query {
    User(id: 853967) {
      name
      statistics {
        anime {
          count
          meanScore
          minutesWatched
          episodesWatched
          statuses {
            status
            count
          }
          genres(limit: 10, sort: COUNT_DESC) {
            genre
            count
          }
          tags(limit: 10, sort: COUNT_DESC) {
            tag {
              name
              description
            }
            count
          }
          studios(sort: COUNT_DESC, limit: 10) {
            studio {
              name
            }
            count
          }
        }
      }
    }
  }
`;

const COLORS = ["#06D6A0", "#FFD166", "#073B4C", "#118AB2", "#c1121f"];
const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    count,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.status}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`Count ${count}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

const Example = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  const { loading, error, data } = useQuery(query);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const status = data.User.statistics.anime.statuses;
  const genres = data.User.statistics.anime.genres;

  console.log(status);

  return (
    <>
      <ResponsiveContainer width="100%" height={400} debounce={10}>
        <PieChart>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            onMouseEnter={onPieEnter}
            data={status}
            cx="50%"
            cy="50%"
            innerRadius={100}
            outerRadius={120}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="count"
          >
            {status.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      {/* <TheRadar data={status}/> */}
      <TheRadialBar data={genres}/>
    </>
  );
};

export default Example;
