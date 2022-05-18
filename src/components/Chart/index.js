import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BarChart from "../BarChart";
import faker from "@faker-js/faker";

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = [
  { year: 2011, value: faker.datatype.number({ min: 1, max: 70 }) },
  { year: 2012, value: faker.datatype.number({ min: 1, max: 70 }) },
  { year: 2013, value: faker.datatype.number({ min: 1, max: 70 }) },
  { year: 2014, value: faker.datatype.number({ min: 1, max: 70 }) },
  { year: 2015, value: faker.datatype.number({ min: 1, max: 70 }) },
  { year: 2016, value: faker.datatype.number({ min: 1, max: 70 }) },
];

export default function Chart() {
  const navigate = useNavigate();
  const [chartData, setChartData] = useState(data);

  useEffect(() => {
    const isLogin = window.localStorage.getItem("isLogin") === "true";

    // console.log(isLogin);

    if (!isLogin) {
      navigate("/");
    }
  }, []);

  function handleLogout() {
    window.localStorage.removeItem("isLogin");
    navigate("/");
  }

  function handleChangeData() {
    setChartData([
      { year: 2011, value: faker.datatype.number({ min: 1, max: 70 }) },
      { year: 2012, value: faker.datatype.number({ min: 1, max: 70 }) },
      { year: 2013, value: faker.datatype.number({ min: 1, max: 70 }) },
      { year: 2014, value: faker.datatype.number({ min: 1, max: 70 }) },
      { year: 2015, value: faker.datatype.number({ min: 1, max: 70 }) },
      { year: 2016, value: faker.datatype.number({ min: 1, max: 70 }) },
    ]);
  }

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={handleChangeData}>Change Data</button>

      <div>
        <BarChart chartData={chartData} />
      </div>
    </div>
  );
}
