import * as d3 from "d3";
import React, { useEffect, useRef } from "react";

function BarChart({ chartData }) {
  const inputRef = useRef();

  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  useEffect(() => {
    console.log("render chart");

    var svg = d3.select(inputRef.current),
      margin = 200,
      width = svg.attr("width") - margin,
      height = svg.attr("height") - margin;

    svg.selectAll("*").remove();

    // svg
    //   .append("text")
    //   .attr("transform", "translate(100,0)")
    //   .attr("x", 50)
    //   .attr("y", 50)
    //   .attr("font-size", "24px")
    //   .text("XYZ Foods Stock Price");

    var xScale = d3.scaleBand().range([0, width]).padding(0.4),
      yScale = d3.scaleLinear().range([height, 0]);

    var g = svg
      .append("g")
      .attr("transform", "translate(" + 100 + "," + 100 + ")");

    const data = chartData || [
      { year: 2011, value: 45 },
      { year: 2012, value: 47 },
      { year: 2013, value: 52 },
      { year: 2014, value: 70 },
      { year: 2015, value: 75 },
      { year: 2016, value: 78 },
    ];

    // d3.csv("XYZ.csv", function (error, data) {
    //   if (error) {
    //     throw error;
    //   }

    xScale.domain(
      data.map(function (d) {
        return d.year;
      })
    );
    yScale.domain([
      0,
      d3.max(data, function (d) {
        return d.value;
      }),
    ]);

    g.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(xScale))
      .append("text")
      .attr("y", 50)
      .attr("x", width / 2)
      .attr("text-anchor", "end")
      .attr("stroke", "black")
      .text("Year");

    g.append("g")
      .call(
        d3
          .axisLeft(yScale)
          .tickFormat(function (d) {
            return "$" + d;
          })
          .ticks(10)
      )
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "-5.1em")
      // .attr("text-anchor", "end")
      .attr("stroke", "black")
      .text("Stock Price");

    g.selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", function (d) {
        return xScale(d.year);
      })
      .attr("y", function (d) {
        return yScale(d.value);
      })
      .attr("width", xScale.bandwidth())
      .attr("height", function (d) {
        return height - yScale(d.value);
      });
    // }
    // );
  }, [chartData]);

  return (
    <div>
      <svg
        fill="steelblue"
        width={screenWidth - 200}
        height={screenHeight - 100}
        ref={inputRef}
      ></svg>
    </div>
  );
}

export default BarChart;
