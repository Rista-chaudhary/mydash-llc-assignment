import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BarChart } from "../BarChart";
import faker from "@faker-js/faker";

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

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
    setChartData({
      labels,
      datasets: [
        {
          label: "Dataset 1",
          data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
        {
          label: "Dataset 2",
          data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
          backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
      ],
    });
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
