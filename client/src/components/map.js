import React from 'react';
import * as d3 from 'd3';
import * as d3Geo from 'd3-geo';
import { render } from 'react-dom';
import axios from "axios";
import mapData from "./nyc.json";


const Map = (props) => {
	const rn = React.useRef(null);

  React.useEffect(() => {
    renderMap();
  }, [mapData]);

  const renderMap = () => {
    const node = rn.current;
    const width = node.width.animVal.value;
    const height = node.height.animVal.value;

		//------------------------------------- LEGEND -------------------------------------   

    const colorScheme = ["#4B09DB", "#6E37E6", "#7852CC", "#A88CE6", "#BFB2DB", "black"];
    const SVG = d3.select(node);
    const keys = ["1200 or more", "900 to 1199", "600 to 899", "600 to 899", "300 to 599", "Less than 300", "No Data"];
    const color = d3.scaleOrdinal()
      .domain(keys)
      .range(colorScheme);

    // Add a colored dot for each range
    const size = 20;
    SVG.selectAll("mydots")
      .data(keys)
      .enter()
      .append("rect")
        .attr("x", 100)
        .attr("y", function(d,i){ return 100 + i*(size+5)})
        .attr("width", size)
        .attr("height", size)
        .style("fill", function(d){ return color(d)});

    // Add text (keys) for each range
    SVG.selectAll("mylabels")
      .data(keys)
      .enter()
      .append("text")
        .attr("x", 100 + size*1.2)
        .attr("y", function(d,i){ return 100 + i*(size+5) + (size/2)})
        .text(function(d){ return d})
        .attr("text-anchor", "left")
        .style("alignment-baseline", "middle");           

		// ------------------------------------- LEGEND -------------------------------------        
  
    //add covidData into mapData
    const combinedData = mapData;
		props.covidData.forEach((area, idx) => {
			let zip = area.zipCode;
			
			for(let i = 0; i < mapData.features.length; i++) {
				if(mapData.features[i].properties.postalCode === zip) {
					combinedData.features[i].properties.covid = props.covidData[idx];
					break;
				} 
			}
		});     

    let originalHex; 		
		const group = SVG.selectAll("g")
			.data(combinedData.features)
			.enter()
			.append("g")
        .attr("fill", areaColor)
        .on("mouseover", function(d){
          originalHex = d3.select(this).style("fill");
          d3.select(this)
          .attr("fill", "pink");

		      tooltip.transition()
		        .duration(200)
		        .style("opacity", .9);

          tooltip.html(`Zipcode: ${d.properties.postalCode} Positive: ${d.properties.covid ? d.properties.covid.positive : "No Data" }`)
            .style("left", (d3.event.pageX) + "px")
            .style("top", (d3.event.pageY - 50) + "px");
        })
        .on("mouseout", function(){
          d3.select(this)
          .attr("fill", originalHex)

          tooltip.transition()
            .duration(500)
            .style("opacity", 0);
        });

		// ------------------------------------- TOOLTIP -------------------------------------    

    const tooltip = d3.select("body").append("div")
      .attr("class", "tooltip")
      .style("opacity", 0);

		// ------------------------------------- TOOLTIP -------------------------------------    

		// var center = d3.geoCentroid(mapData);
		const projection = d3.geoMercator().scale(37300).fitSize([960, 720], mapData)
		const path = d3.geoPath().projection(projection);

    function areaColor(d) {
      if(!d.properties.covid) {
          return "black";
      } else if(d.properties.covid.positive > 1200) {
          return "#4B09DB";
      } else if(d.properties.covid.positive > 900){
          return "#6E37E6";
      } else if(d.properties.covid.positive > 600){
          return "#7852CC";
      } else if(d.properties.covid.positive > 300){
          return "#A88CE6";
      } else if(d.properties.covid.positive <= 300){
          return "#BFB2DB";
      }             
    }

		const areas = group.append("path")
			.attr("d", path)
			.attr("class", "area");
	};

	return <svg width={960} height={720} ref={rn} />
}


export default Map;