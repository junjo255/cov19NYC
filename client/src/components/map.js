import React from 'react';
import * as d3 from 'd3';
import * as d3Geo from 'd3-geo';
import { render } from 'react-dom';
import axios from "axios";
import customData from "./nyc.json";

// const Map = () => {
// 	var covidData = {"covid": [{"id":1,"zipCode":"10001","positive":"211","total":"448"},{"id":2,"zipCode":"10002","positive":"539","total":"1024"},{"id":3,"zipCode":"10003","positive":"279","total":"662"},{"id":4,"zipCode":"10004","positive":"23","total":"59"},{"id":5,"zipCode":"10005","positive":"38","total":"116"},{"id":6,"zipCode":"10006","positive":"10","total":"43"},{"id":7,"zipCode":"10007","positive":"34","total":"107"},{"id":8,"zipCode":"10009","positive":"381","total":"851"},{"id":9,"zipCode":"10010","positive":"166","total":"468"},{"id":10,"zipCode":"10011","positive":"355","total":"731"},{"id":11,"zipCode":"10012","positive":"98","total":"285"},{"id":12,"zipCode":"10013","positive":"161","total":"362"},{"id":13,"zipCode":"10014","positive":"212","total":"457"},{"id":14,"zipCode":"10016","positive":"435","total":"992"},{"id":15,"zipCode":"10017","positive":"90","total":"260"},{"id":16,"zipCode":"10018","positive":"156","total":"331"},{"id":17,"zipCode":"10019","positive":"334","total":"753"},{"id":18,"zipCode":"10021","positive":"386","total":"967"},{"id":19,"zipCode":"10022","positive":"219","total":"562"},{"id":20,"zipCode":"10023","positive":"341","total":"857"},{"id":21,"zipCode":"10024","positive":"380","total":"994"},{"id":22,"zipCode":"10025","positive":"626","total":"1439"},{"id":23,"zipCode":"10026","positive":"308","total":"605"},{"id":24,"zipCode":"10027","positive":"476","total":"910"},{"id":25,"zipCode":"10028","positive":"317","total":"802"},{"id":26,"zipCode":"10029","positive":"824","total":"1538"},{"id":27,"zipCode":"10030","positive":"277","total":"448"},{"id":28,"zipCode":"10031","positive":"611","total":"935"},{"id":29,"zipCode":"10032","positive":"728","total":"1190"},{"id":30,"zipCode":"10033","positive":"626","total":"1011"},{"id":31,"zipCode":"10034","positive":"345","total":"607"},{"id":32,"zipCode":"10035","positive":"440","total":"796"},{"id":33,"zipCode":"10036","positive":"232","total":"494"},{"id":34,"zipCode":"10037","positive":"232","total":"405"},{"id":35,"zipCode":"10038","positive":"151","total":"300"},{"id":36,"zipCode":"10039","positive":"266","total":"478"},{"id":37,"zipCode":"10040","positive":"498","total":"786"},{"id":38,"zipCode":"10044","positive":"90","total":"198"},{"id":39,"zipCode":"10065","positive":"216","total":"627"},{"id":40,"zipCode":"10069","positive":"35","total":"93"},{"id":41,"zipCode":"10075","positive":"262","total":"564"},{"id":42,"zipCode":"10128","positive":"396","total":"1006"},{"id":43,"zipCode":"10280","positive":"27","total":"81"},{"id":44,"zipCode":"10282","positive":"44","total":"90"},{"id":45,"zipCode":"10301","positive":"593","total":"1133"},{"id":46,"zipCode":"10302","positive":"318","total":"612"},{"id":47,"zipCode":"10303","positive":"486","total":"866"},{"id":48,"zipCode":"10304","positive":"788","total":"1529"},{"id":49,"zipCode":"10305","positive":"700","total":"1504"},{"id":50,"zipCode":"10306","positive":"886","total":"1989"},{"id":51,"zipCode":"10307","positive":"246","total":"510"},{"id":52,"zipCode":"10308","positive":"430","total":"984"},{"id":53,"zipCode":"10309","positive":"561","total":"1264"},{"id":54,"zipCode":"10310","positive":"383","total":"815"},{"id":55,"zipCode":"10312","positive":"1008","total":"2071"},{"id":56,"zipCode":"10314","positive":"1569","total":"3231"},{"id":57,"zipCode":"10451","positive":"788","total":"1314"},{"id":58,"zipCode":"10452","positive":"1068","total":"1640"},{"id":59,"zipCode":"10453","positive":"1146","total":"1811"},{"id":60,"zipCode":"10454","positive":"550","total":"872"},{"id":61,"zipCode":"10455","positive":"562","total":"919"},{"id":62,"zipCode":"10456","positive":"1130","total":"1840"},{"id":63,"zipCode":"10457","positive":"969","total":"1551"},{"id":64,"zipCode":"10458","positive":"968","total":"1662"},{"id":65,"zipCode":"10459","positive":"746","total":"1201"},{"id":66,"zipCode":"10460","positive":"771","total":"1288"},{"id":67,"zipCode":"10461","positive":"1018","total":"1878"},{"id":68,"zipCode":"10462","positive":"1201","total":"2158"},{"id":69,"zipCode":"10463","positive":"885","total":"1810"},{"id":70,"zipCode":"10464","positive":"75","total":"194"},{"id":71,"zipCode":"10465","positive":"865","total":"1762"},{"id":72,"zipCode":"10466","positive":"1259","total":"2112"},{"id":73,"zipCode":"10467","positive":"1769","total":"2911"},{"id":74,"zipCode":"10468","positive":"1224","total":"1849"},{"id":75,"zipCode":"10469","positive":"1514","total":"2448"},{"id":76,"zipCode":"10470","positive":"258","total":"472"},{"id":77,"zipCode":"10471","positive":"302","total":"669"},{"id":78,"zipCode":"10472","positive":"918","total":"1408"},{"id":79,"zipCode":"10473","positive":"1053","total":"1795"},{"id":80,"zipCode":"10474","positive":"170","total":"266"},{"id":81,"zipCode":"10475","positive":"912","total":"1623"},{"id":82,"zipCode":"11004","positive":"324","total":"505"},{"id":83,"zipCode":"11101","positive":"344","total":"672"},{"id":84,"zipCode":"11102","positive":"306","total":"534"},{"id":85,"zipCode":"11103","positive":"296","total":"524"},{"id":86,"zipCode":"11104","positive":"264","total":"429"},{"id":87,"zipCode":"11105","positive":"279","total":"550"},{"id":88,"zipCode":"11106","positive":"342","total":"629"},{"id":89,"zipCode":"11109","positive":"37","total":"103"},{"id":90,"zipCode":"11201","positive":"373","total":"894"},{"id":91,"zipCode":"11203","positive":"1001","total":"1529"},{"id":92,"zipCode":"11204","positive":"1110","total":"1791"},{"id":93,"zipCode":"11205","positive":"392","total":"724"},{"id":94,"zipCode":"11206","positive":"757","total":"1312"},{"id":95,"zipCode":"11207","positive":"928","total":"1495"},{"id":96,"zipCode":"11208","positive":"1029","total":"1568"},{"id":97,"zipCode":"11209","positive":"587","total":"1162"},{"id":98,"zipCode":"11210","positive":"898","total":"1427"},{"id":99,"zipCode":"11211","positive":"1202","total":"1893"},{"id":100,"zipCode":"11212","positive":"842","total":"1302"},{"id":101,"zipCode":"11213","positive":"793","total":"1296"},{"id":102,"zipCode":"11214","positive":"760","total":"1330"},{"id":103,"zipCode":"11215","positive":"350","total":"797"},{"id":104,"zipCode":"11216","positive":"376","total":"709"},{"id":105,"zipCode":"11217","positive":"316","total":"599"},{"id":106,"zipCode":"11218","positive":"976","total":"1606"},{"id":107,"zipCode":"11219","positive":"1679","total":"2476"},{"id":108,"zipCode":"11220","positive":"784","total":"1238"},{"id":109,"zipCode":"11221","positive":"641","total":"1061"},{"id":110,"zipCode":"11222","positive":"255","total":"518"},{"id":111,"zipCode":"11223","positive":"885","total":"1555"},{"id":112,"zipCode":"11224","positive":"485","total":"811"},{"id":113,"zipCode":"11225","positive":"632","total":"1001"},{"id":114,"zipCode":"11226","positive":"995","total":"1527"},{"id":115,"zipCode":"11228","positive":"356","total":"626"},{"id":116,"zipCode":"11229","positive":"791","total":"1402"},{"id":117,"zipCode":"11230","positive":"1301","total":"2091"},{"id":118,"zipCode":"11231","positive":"241","total":"504"},{"id":119,"zipCode":"11232","positive":"267","total":"395"},{"id":120,"zipCode":"11233","positive":"591","total":"971"},{"id":121,"zipCode":"11234","positive":"1149","total":"1879"},{"id":122,"zipCode":"11235","positive":"911","total":"1601"},{"id":123,"zipCode":"11236","positive":"1313","total":"1985"},{"id":124,"zipCode":"11237","positive":"451","total":"665"},{"id":125,"zipCode":"11238","positive":"448","total":"778"},{"id":126,"zipCode":"11239","positive":"250","total":"403"},{"id":127,"zipCode":"11354","positive":"461","total":"757"},{"id":128,"zipCode":"11355","positive":"587","total":"926"},{"id":129,"zipCode":"11356","positive":"285","total":"497"},{"id":130,"zipCode":"11357","positive":"441","total":"777"},{"id":131,"zipCode":"11358","positive":"289","total":"553"},{"id":132,"zipCode":"11360","positive":"173","total":"358"},{"id":133,"zipCode":"11361","positive":"253","total":"463"},{"id":134,"zipCode":"11362","positive":"167","total":"339"},{"id":135,"zipCode":"11363","positive":"68","total":"136"},{"id":136,"zipCode":"11364","positive":"259","total":"485"},{"id":137,"zipCode":"11365","positive":"440","total":"791"},{"id":138,"zipCode":"11366","positive":"244","total":"419"},{"id":139,"zipCode":"11367","positive":"591","total":"1007"},{"id":140,"zipCode":"11368","positive":"2398","total":"3035"},{"id":141,"zipCode":"11369","positive":"883","total":"1165"},{"id":142,"zipCode":"11370","positive":"833","total":"1348"},{"id":143,"zipCode":"11372","positive":"1428","total":"1927"},{"id":144,"zipCode":"11373","positive":"1859","total":"2600"},{"id":145,"zipCode":"11374","positive":"673","total":"1169"},{"id":146,"zipCode":"11375","positive":"937","total":"1741"},{"id":147,"zipCode":"11377","positive":"1152","total":"1740"},{"id":148,"zipCode":"11378","positive":"397","total":"679"},{"id":149,"zipCode":"11379","positive":"434","total":"797"},{"id":150,"zipCode":"11385","positive":"1066","total":"1797"},{"id":151,"zipCode":"11411","positive":"408","total":"594"},{"id":152,"zipCode":"11412","positive":"693","total":"1081"},{"id":153,"zipCode":"11413","positive":"752","total":"1163"},{"id":154,"zipCode":"11414","positive":"453","total":"765"},{"id":155,"zipCode":"11415","positive":"306","total":"517"},{"id":156,"zipCode":"11416","positive":"317","total":"489"},{"id":157,"zipCode":"11417","positive":"421","total":"683"},{"id":158,"zipCode":"11418","positive":"532","total":"838"},{"id":159,"zipCode":"11419","positive":"542","total":"858"},{"id":160,"zipCode":"11420","positive":"675","total":"1064"},{"id":161,"zipCode":"11421","positive":"602","total":"906"},{"id":162,"zipCode":"11422","positive":"552","total":"898"},{"id":163,"zipCode":"11423","positive":"486","total":"745"},{"id":164,"zipCode":"11426","positive":"292","total":"524"},{"id":165,"zipCode":"11427","positive":"440","total":"726"},{"id":166,"zipCode":"11428","positive":"349","total":"536"},{"id":167,"zipCode":"11429","positive":"536","total":"765"},{"id":168,"zipCode":"11432","positive":"843","total":"1304"},{"id":169,"zipCode":"11433","positive":"477","total":"727"},{"id":170,"zipCode":"11434","positive":"1060","total":"1655"},{"id":171,"zipCode":"11435","positive":"796","total":"1308"},{"id":172,"zipCode":"11436","positive":"269","total":"412"},{"id":173,"zipCode":"11691","positive":"1111","total":"1647"},{"id":174,"zipCode":"11692","positive":"297","total":"471"},{"id":175,"zipCode":"11693","positive":"197","total":"334"},{"id":176,"zipCode":"11694","positive":"360","total":"622"},{"id":177,"zipCode":"11697","positive":"63","total":"130"}]};




//         	var canvas = d3.select("main").append("svg")
//         		.attr("width", 760)
//         		.attr("height", 700)


//                 //LEGEND

//                 var colorScheme = ["#4B09DB", "#6E37E6", "#7852CC", "#A88CE6", "#BFB2DB", "black"];
//                 var SVG = d3.select("svg")

//                 // create a list of keys
//                 var keys = ["1200 or more", "900 to 1199", "600 to 899", "600 to 899", "300 to 599", "Less than 300", "No Data"]

//                 // Usually you have a color scale in your chart already
//                 var color = d3.scaleOrdinal()
//                   .domain(keys)
//                   .range(colorScheme);

//                 // Add one dot in the legend for each name.
//                 var size = 20
//                 SVG.selectAll("mydots")
//                   .data(keys)
//                   .enter()
//                   .append("rect")
//                     .attr("x", 100)
//                     .attr("y", function(d,i){ return 100 + i*(size+5)}) // 100 is where the first dot appears. 25 is the distance between dots
//                     .attr("width", size)
//                     .attr("height", size)
//                     .style("fill", function(d){ return color(d)})

//                 // Add one dot in the legend for each name.
//                 SVG.selectAll("mylabels")
//                   .data(keys)
//                   .enter()
//                   .append("text")
//                     .attr("x", 100 + size*1.2)
//                     .attr("y", function(d,i){ return 100 + i*(size+5) + (size/2)}) // 100 is where the first dot appears. 25 is the distance between dots
//                     .text(function(d){ return d})
//                     .attr("text-anchor", "left")
//                     .style("alignment-baseline", "middle")           


//                 //LEGEND           


//         	d3.json("nyc.geojson").then(function(data) {
//                 let combinedData = data;

//         		covidData.covid.forEach((area, idx) => {
//         			let zip = area.zipCode;
        			
  
//         			for(let i = 0; i < data.features.length; i++) {
//         				if(data.features[i].properties.postalCode === zip) {
//         					combinedData.features[i].properties.covid = covidData.covid[idx];
//         					break;
//         				} 
//         			}
//         			console.log(combinedData)			
//         		});     

//                 let originalHex; 		
//         		var group = canvas.selectAll("g")
//         			.data(combinedData.features)
//         			.enter()
//         			.append("g")
//                     .attr("fill", areaColor)
//                     .on("mouseover", function(d){
//                         originalHex = d3.select(this).style("fill");
//                         d3.select(this)
//                         .attr("fill", "pink");

//                         tooltip.transition()
//                             .duration(200)
//                             .style("opacity", .9);


//                         tooltip.html(`Zipcode: ${d.properties.postalCode} Positive: ${d.properties.covid ? d.properties.covid.positive : "No Data" }`)
//                             .style("left", (d3.event.pageX) + "px")
//                             .style("top", (d3.event.pageY - 50) + "px");
//                     })
//                     .on("mouseout", function(){
//                         d3.select(this)
//                         .attr("fill", originalHex)

//                         tooltip.transition()
//                             .duration(500)
//                             .style("opacity", 0);
//                     })

//                 //TOOLTIP

//                 var tooltip = d3.select("body").append("div")
//                     .attr("class", "tooltip")
//                     .style("opacity", 0);

//                 //TOOLTIP


//         		var center = d3.geoCentroid(data);
//         		var projection = d3.geoMercator().scale(37300).center(center);
//         		var path = d3.geoPath().projection(projection);

//                 function areaColor(d) {
//                     if(!d.properties.covid) {
//                         return "black";
//                     } else if(d.properties.covid.positive > 1200) {
//                         return "#4B09DB";
//                     } else if(d.properties.covid.positive > 900){
//                         return "#6E37E6";
//                     } else if(d.properties.covid.positive > 600){
//                         return "#7852CC";
//                     } else if(d.properties.covid.positive > 300){
//                         return "#A88CE6";
//                     } else if(d.properties.covid.positive <= 300){
//                         return "#BFB2DB";
//                     }

//                     // if(!d.properties.covid) {
//                     //     return "black";
//                     // } else if(d.properties.covid.positive > 1200) {
//                     //     return "#253494";
//                     // } else if(d.properties.covid.positive > 900){
//                     //     return "#2c7fb8";
//                     // } else if(d.properties.covid.positive > 600){
//                     //     return "#41b6c4";
//                     // } else if(d.properties.covid.positive > 300){
//                     //     return "#7fcdbb";
//                     // } else if(d.properties.covid.positive <= 300){
//                     //     return "#c7e9b4";
//                     // }                    
//                 }

//         		var areas = group.append("path")
//         				.attr("d", path)
//         				.attr("class", "area")

//         	});

// 	return (
// 		<div>
// 			"MAP"
// 		</div>
// 		)
// }












//____________________________________________________________________________
















// const Map = () => {
// 	var covidData = {"covid": [{"id":1,"zipCode":"10001","positive":"211","total":"448"},{"id":2,"zipCode":"10002","positive":"539","total":"1024"},{"id":3,"zipCode":"10003","positive":"279","total":"662"},{"id":4,"zipCode":"10004","positive":"23","total":"59"},{"id":5,"zipCode":"10005","positive":"38","total":"116"},{"id":6,"zipCode":"10006","positive":"10","total":"43"},{"id":7,"zipCode":"10007","positive":"34","total":"107"},{"id":8,"zipCode":"10009","positive":"381","total":"851"},{"id":9,"zipCode":"10010","positive":"166","total":"468"},{"id":10,"zipCode":"10011","positive":"355","total":"731"},{"id":11,"zipCode":"10012","positive":"98","total":"285"},{"id":12,"zipCode":"10013","positive":"161","total":"362"},{"id":13,"zipCode":"10014","positive":"212","total":"457"},{"id":14,"zipCode":"10016","positive":"435","total":"992"},{"id":15,"zipCode":"10017","positive":"90","total":"260"},{"id":16,"zipCode":"10018","positive":"156","total":"331"},{"id":17,"zipCode":"10019","positive":"334","total":"753"},{"id":18,"zipCode":"10021","positive":"386","total":"967"},{"id":19,"zipCode":"10022","positive":"219","total":"562"},{"id":20,"zipCode":"10023","positive":"341","total":"857"},{"id":21,"zipCode":"10024","positive":"380","total":"994"},{"id":22,"zipCode":"10025","positive":"626","total":"1439"},{"id":23,"zipCode":"10026","positive":"308","total":"605"},{"id":24,"zipCode":"10027","positive":"476","total":"910"},{"id":25,"zipCode":"10028","positive":"317","total":"802"},{"id":26,"zipCode":"10029","positive":"824","total":"1538"},{"id":27,"zipCode":"10030","positive":"277","total":"448"},{"id":28,"zipCode":"10031","positive":"611","total":"935"},{"id":29,"zipCode":"10032","positive":"728","total":"1190"},{"id":30,"zipCode":"10033","positive":"626","total":"1011"},{"id":31,"zipCode":"10034","positive":"345","total":"607"},{"id":32,"zipCode":"10035","positive":"440","total":"796"},{"id":33,"zipCode":"10036","positive":"232","total":"494"},{"id":34,"zipCode":"10037","positive":"232","total":"405"},{"id":35,"zipCode":"10038","positive":"151","total":"300"},{"id":36,"zipCode":"10039","positive":"266","total":"478"},{"id":37,"zipCode":"10040","positive":"498","total":"786"},{"id":38,"zipCode":"10044","positive":"90","total":"198"},{"id":39,"zipCode":"10065","positive":"216","total":"627"},{"id":40,"zipCode":"10069","positive":"35","total":"93"},{"id":41,"zipCode":"10075","positive":"262","total":"564"},{"id":42,"zipCode":"10128","positive":"396","total":"1006"},{"id":43,"zipCode":"10280","positive":"27","total":"81"},{"id":44,"zipCode":"10282","positive":"44","total":"90"},{"id":45,"zipCode":"10301","positive":"593","total":"1133"},{"id":46,"zipCode":"10302","positive":"318","total":"612"},{"id":47,"zipCode":"10303","positive":"486","total":"866"},{"id":48,"zipCode":"10304","positive":"788","total":"1529"},{"id":49,"zipCode":"10305","positive":"700","total":"1504"},{"id":50,"zipCode":"10306","positive":"886","total":"1989"},{"id":51,"zipCode":"10307","positive":"246","total":"510"},{"id":52,"zipCode":"10308","positive":"430","total":"984"},{"id":53,"zipCode":"10309","positive":"561","total":"1264"},{"id":54,"zipCode":"10310","positive":"383","total":"815"},{"id":55,"zipCode":"10312","positive":"1008","total":"2071"},{"id":56,"zipCode":"10314","positive":"1569","total":"3231"},{"id":57,"zipCode":"10451","positive":"788","total":"1314"},{"id":58,"zipCode":"10452","positive":"1068","total":"1640"},{"id":59,"zipCode":"10453","positive":"1146","total":"1811"},{"id":60,"zipCode":"10454","positive":"550","total":"872"},{"id":61,"zipCode":"10455","positive":"562","total":"919"},{"id":62,"zipCode":"10456","positive":"1130","total":"1840"},{"id":63,"zipCode":"10457","positive":"969","total":"1551"},{"id":64,"zipCode":"10458","positive":"968","total":"1662"},{"id":65,"zipCode":"10459","positive":"746","total":"1201"},{"id":66,"zipCode":"10460","positive":"771","total":"1288"},{"id":67,"zipCode":"10461","positive":"1018","total":"1878"},{"id":68,"zipCode":"10462","positive":"1201","total":"2158"},{"id":69,"zipCode":"10463","positive":"885","total":"1810"},{"id":70,"zipCode":"10464","positive":"75","total":"194"},{"id":71,"zipCode":"10465","positive":"865","total":"1762"},{"id":72,"zipCode":"10466","positive":"1259","total":"2112"},{"id":73,"zipCode":"10467","positive":"1769","total":"2911"},{"id":74,"zipCode":"10468","positive":"1224","total":"1849"},{"id":75,"zipCode":"10469","positive":"1514","total":"2448"},{"id":76,"zipCode":"10470","positive":"258","total":"472"},{"id":77,"zipCode":"10471","positive":"302","total":"669"},{"id":78,"zipCode":"10472","positive":"918","total":"1408"},{"id":79,"zipCode":"10473","positive":"1053","total":"1795"},{"id":80,"zipCode":"10474","positive":"170","total":"266"},{"id":81,"zipCode":"10475","positive":"912","total":"1623"},{"id":82,"zipCode":"11004","positive":"324","total":"505"},{"id":83,"zipCode":"11101","positive":"344","total":"672"},{"id":84,"zipCode":"11102","positive":"306","total":"534"},{"id":85,"zipCode":"11103","positive":"296","total":"524"},{"id":86,"zipCode":"11104","positive":"264","total":"429"},{"id":87,"zipCode":"11105","positive":"279","total":"550"},{"id":88,"zipCode":"11106","positive":"342","total":"629"},{"id":89,"zipCode":"11109","positive":"37","total":"103"},{"id":90,"zipCode":"11201","positive":"373","total":"894"},{"id":91,"zipCode":"11203","positive":"1001","total":"1529"},{"id":92,"zipCode":"11204","positive":"1110","total":"1791"},{"id":93,"zipCode":"11205","positive":"392","total":"724"},{"id":94,"zipCode":"11206","positive":"757","total":"1312"},{"id":95,"zipCode":"11207","positive":"928","total":"1495"},{"id":96,"zipCode":"11208","positive":"1029","total":"1568"},{"id":97,"zipCode":"11209","positive":"587","total":"1162"},{"id":98,"zipCode":"11210","positive":"898","total":"1427"},{"id":99,"zipCode":"11211","positive":"1202","total":"1893"},{"id":100,"zipCode":"11212","positive":"842","total":"1302"},{"id":101,"zipCode":"11213","positive":"793","total":"1296"},{"id":102,"zipCode":"11214","positive":"760","total":"1330"},{"id":103,"zipCode":"11215","positive":"350","total":"797"},{"id":104,"zipCode":"11216","positive":"376","total":"709"},{"id":105,"zipCode":"11217","positive":"316","total":"599"},{"id":106,"zipCode":"11218","positive":"976","total":"1606"},{"id":107,"zipCode":"11219","positive":"1679","total":"2476"},{"id":108,"zipCode":"11220","positive":"784","total":"1238"},{"id":109,"zipCode":"11221","positive":"641","total":"1061"},{"id":110,"zipCode":"11222","positive":"255","total":"518"},{"id":111,"zipCode":"11223","positive":"885","total":"1555"},{"id":112,"zipCode":"11224","positive":"485","total":"811"},{"id":113,"zipCode":"11225","positive":"632","total":"1001"},{"id":114,"zipCode":"11226","positive":"995","total":"1527"},{"id":115,"zipCode":"11228","positive":"356","total":"626"},{"id":116,"zipCode":"11229","positive":"791","total":"1402"},{"id":117,"zipCode":"11230","positive":"1301","total":"2091"},{"id":118,"zipCode":"11231","positive":"241","total":"504"},{"id":119,"zipCode":"11232","positive":"267","total":"395"},{"id":120,"zipCode":"11233","positive":"591","total":"971"},{"id":121,"zipCode":"11234","positive":"1149","total":"1879"},{"id":122,"zipCode":"11235","positive":"911","total":"1601"},{"id":123,"zipCode":"11236","positive":"1313","total":"1985"},{"id":124,"zipCode":"11237","positive":"451","total":"665"},{"id":125,"zipCode":"11238","positive":"448","total":"778"},{"id":126,"zipCode":"11239","positive":"250","total":"403"},{"id":127,"zipCode":"11354","positive":"461","total":"757"},{"id":128,"zipCode":"11355","positive":"587","total":"926"},{"id":129,"zipCode":"11356","positive":"285","total":"497"},{"id":130,"zipCode":"11357","positive":"441","total":"777"},{"id":131,"zipCode":"11358","positive":"289","total":"553"},{"id":132,"zipCode":"11360","positive":"173","total":"358"},{"id":133,"zipCode":"11361","positive":"253","total":"463"},{"id":134,"zipCode":"11362","positive":"167","total":"339"},{"id":135,"zipCode":"11363","positive":"68","total":"136"},{"id":136,"zipCode":"11364","positive":"259","total":"485"},{"id":137,"zipCode":"11365","positive":"440","total":"791"},{"id":138,"zipCode":"11366","positive":"244","total":"419"},{"id":139,"zipCode":"11367","positive":"591","total":"1007"},{"id":140,"zipCode":"11368","positive":"2398","total":"3035"},{"id":141,"zipCode":"11369","positive":"883","total":"1165"},{"id":142,"zipCode":"11370","positive":"833","total":"1348"},{"id":143,"zipCode":"11372","positive":"1428","total":"1927"},{"id":144,"zipCode":"11373","positive":"1859","total":"2600"},{"id":145,"zipCode":"11374","positive":"673","total":"1169"},{"id":146,"zipCode":"11375","positive":"937","total":"1741"},{"id":147,"zipCode":"11377","positive":"1152","total":"1740"},{"id":148,"zipCode":"11378","positive":"397","total":"679"},{"id":149,"zipCode":"11379","positive":"434","total":"797"},{"id":150,"zipCode":"11385","positive":"1066","total":"1797"},{"id":151,"zipCode":"11411","positive":"408","total":"594"},{"id":152,"zipCode":"11412","positive":"693","total":"1081"},{"id":153,"zipCode":"11413","positive":"752","total":"1163"},{"id":154,"zipCode":"11414","positive":"453","total":"765"},{"id":155,"zipCode":"11415","positive":"306","total":"517"},{"id":156,"zipCode":"11416","positive":"317","total":"489"},{"id":157,"zipCode":"11417","positive":"421","total":"683"},{"id":158,"zipCode":"11418","positive":"532","total":"838"},{"id":159,"zipCode":"11419","positive":"542","total":"858"},{"id":160,"zipCode":"11420","positive":"675","total":"1064"},{"id":161,"zipCode":"11421","positive":"602","total":"906"},{"id":162,"zipCode":"11422","positive":"552","total":"898"},{"id":163,"zipCode":"11423","positive":"486","total":"745"},{"id":164,"zipCode":"11426","positive":"292","total":"524"},{"id":165,"zipCode":"11427","positive":"440","total":"726"},{"id":166,"zipCode":"11428","positive":"349","total":"536"},{"id":167,"zipCode":"11429","positive":"536","total":"765"},{"id":168,"zipCode":"11432","positive":"843","total":"1304"},{"id":169,"zipCode":"11433","positive":"477","total":"727"},{"id":170,"zipCode":"11434","positive":"1060","total":"1655"},{"id":171,"zipCode":"11435","positive":"796","total":"1308"},{"id":172,"zipCode":"11436","positive":"269","total":"412"},{"id":173,"zipCode":"11691","positive":"1111","total":"1647"},{"id":174,"zipCode":"11692","positive":"297","total":"471"},{"id":175,"zipCode":"11693","positive":"197","total":"334"},{"id":176,"zipCode":"11694","positive":"360","total":"622"},{"id":177,"zipCode":"11697","positive":"63","total":"130"}]};


// 								const canvas = React.useRef(null);
//         	// var canvas = d3.select("canvas")


//                 //LEGEND

//                 var colorScheme = ["#4B09DB", "#6E37E6", "#7852CC", "#A88CE6", "#BFB2DB", "black"];
//                 var SVG = d3.select("svg")

//                 // create a list of keys
//                 var keys = ["1200 or more", "900 to 1199", "600 to 899", "600 to 899", "300 to 599", "Less than 300", "No Data"]

//                 // Usually you have a color scale in your chart already
//                 var color = d3.scaleOrdinal()
//                   .domain(keys)
//                   .range(colorScheme);

//                 // Add one dot in the legend for each name.
//                 var size = 20
//                 SVG.selectAll("mydots")
//                   .data(keys)
//                   .enter()
//                   .append("rect")
//                     .attr("x", 100)
//                     .attr("y", function(d,i){ return 100 + i*(size+5)}) // 100 is where the first dot appears. 25 is the distance between dots
//                     .attr("width", size)
//                     .attr("height", size)
//                     .style("fill", function(d){ return color(d)})

//                 // Add one dot in the legend for each name.
//                 SVG.selectAll("mylabels")
//                   .data(keys)
//                   .enter()
//                   .append("text")
//                     .attr("x", 100 + size*1.2)
//                     .attr("y", function(d,i){ return 100 + i*(size+5) + (size/2)}) // 100 is where the first dot appears. 25 is the distance between dots
//                     .text(function(d){ return d})
//                     .attr("text-anchor", "left")
//                     .style("alignment-baseline", "middle")           


//                 //LEGEND           

    
//         	d3.json("nyc.json").then(function(data) {
//                 let combinedData = data;

//         		covidData.covid.forEach((area, idx) => {
//         			let zip = area.zipCode;
        			
  
//         			for(let i = 0; i < data.features.length; i++) {
//         				if(data.features[i].properties.postalCode === zip) {
//         					combinedData.features[i].properties.covid = covidData.covid[idx];
//         					break;
//         				} 
//         			}
//         			console.log(combinedData)			
//         		});     

//                 let originalHex; 		
//         		var group = canvas.selectAll("g")
//         			.data(combinedData.features)
//         			.enter()
//         			.append("g")
//                     .attr("fill", areaColor)
//                     .on("mouseover", function(d){
//                         originalHex = d3.select(this).style("fill");
//                         d3.select(this)
//                         .attr("fill", "pink");

//                         tooltip.transition()
//                             .duration(200)
//                             .style("opacity", .9);


//                         tooltip.html(`Zipcode: ${d.properties.postalCode} Positive: ${d.properties.covid ? d.properties.covid.positive : "No Data" }`)
//                             .style("left", (d3.event.pageX) + "px")
//                             .style("top", (d3.event.pageY - 50) + "px");
//                     })
//                     .on("mouseout", function(){
//                         d3.select(this)
//                         .attr("fill", originalHex)

//                         tooltip.transition()
//                             .duration(500)
//                             .style("opacity", 0);
//                     })

//                 //TOOLTIP

//                 var tooltip = d3.select("body").append("div")
//                     .attr("class", "tooltip")
//                     .style("opacity", 0);

//                 //TOOLTIP


//         		var center = d3.geoCentroid(data);
//         		var projection = d3.geoMercator().scale(37300).center(center);
//         		var path = d3.geoPath().projection(projection);

//                 function areaColor(d) {
//                     if(!d.properties.covid) {
//                         return "black";
//                     } else if(d.properties.covid.positive > 1200) {
//                         return "#4B09DB";
//                     } else if(d.properties.covid.positive > 900){
//                         return "#6E37E6";
//                     } else if(d.properties.covid.positive > 600){
//                         return "#7852CC";
//                     } else if(d.properties.covid.positive > 300){
//                         return "#A88CE6";
//                     } else if(d.properties.covid.positive <= 300){
//                         return "#BFB2DB";
//                     }

//                     // if(!d.properties.covid) {
//                     //     return "black";
//                     // } else if(d.properties.covid.positive > 1200) {
//                     //     return "#253494";
//                     // } else if(d.properties.covid.positive > 900){
//                     //     return "#2c7fb8";
//                     // } else if(d.properties.covid.positive > 600){
//                     //     return "#41b6c4";
//                     // } else if(d.properties.covid.positive > 300){
//                     //     return "#7fcdbb";
//                     // } else if(d.properties.covid.positive <= 300){
//                     //     return "#c7e9b4";
//                     // }                    
//                 }

//         		var areas = group.append("path")
//         				.attr("d", path)
//         				.attr("class", "area")

//         	});

// 	return (
// 		<svg id="canvas" width={760} height={700} ref={canvas} />
// 		)
// }








//____________________________________________________________________________



















const Map = () => {

	var covidData = {"covid": [{"id":1,"zipCode":"10001","positive":"211","total":"448"},{"id":2,"zipCode":"10002","positive":"539","total":"1024"},{"id":3,"zipCode":"10003","positive":"279","total":"662"},{"id":4,"zipCode":"10004","positive":"23","total":"59"},{"id":5,"zipCode":"10005","positive":"38","total":"116"},{"id":6,"zipCode":"10006","positive":"10","total":"43"},{"id":7,"zipCode":"10007","positive":"34","total":"107"},{"id":8,"zipCode":"10009","positive":"381","total":"851"},{"id":9,"zipCode":"10010","positive":"166","total":"468"},{"id":10,"zipCode":"10011","positive":"355","total":"731"},{"id":11,"zipCode":"10012","positive":"98","total":"285"},{"id":12,"zipCode":"10013","positive":"161","total":"362"},{"id":13,"zipCode":"10014","positive":"212","total":"457"},{"id":14,"zipCode":"10016","positive":"435","total":"992"},{"id":15,"zipCode":"10017","positive":"90","total":"260"},{"id":16,"zipCode":"10018","positive":"156","total":"331"},{"id":17,"zipCode":"10019","positive":"334","total":"753"},{"id":18,"zipCode":"10021","positive":"386","total":"967"},{"id":19,"zipCode":"10022","positive":"219","total":"562"},{"id":20,"zipCode":"10023","positive":"341","total":"857"},{"id":21,"zipCode":"10024","positive":"380","total":"994"},{"id":22,"zipCode":"10025","positive":"626","total":"1439"},{"id":23,"zipCode":"10026","positive":"308","total":"605"},{"id":24,"zipCode":"10027","positive":"476","total":"910"},{"id":25,"zipCode":"10028","positive":"317","total":"802"},{"id":26,"zipCode":"10029","positive":"824","total":"1538"},{"id":27,"zipCode":"10030","positive":"277","total":"448"},{"id":28,"zipCode":"10031","positive":"611","total":"935"},{"id":29,"zipCode":"10032","positive":"728","total":"1190"},{"id":30,"zipCode":"10033","positive":"626","total":"1011"},{"id":31,"zipCode":"10034","positive":"345","total":"607"},{"id":32,"zipCode":"10035","positive":"440","total":"796"},{"id":33,"zipCode":"10036","positive":"232","total":"494"},{"id":34,"zipCode":"10037","positive":"232","total":"405"},{"id":35,"zipCode":"10038","positive":"151","total":"300"},{"id":36,"zipCode":"10039","positive":"266","total":"478"},{"id":37,"zipCode":"10040","positive":"498","total":"786"},{"id":38,"zipCode":"10044","positive":"90","total":"198"},{"id":39,"zipCode":"10065","positive":"216","total":"627"},{"id":40,"zipCode":"10069","positive":"35","total":"93"},{"id":41,"zipCode":"10075","positive":"262","total":"564"},{"id":42,"zipCode":"10128","positive":"396","total":"1006"},{"id":43,"zipCode":"10280","positive":"27","total":"81"},{"id":44,"zipCode":"10282","positive":"44","total":"90"},{"id":45,"zipCode":"10301","positive":"593","total":"1133"},{"id":46,"zipCode":"10302","positive":"318","total":"612"},{"id":47,"zipCode":"10303","positive":"486","total":"866"},{"id":48,"zipCode":"10304","positive":"788","total":"1529"},{"id":49,"zipCode":"10305","positive":"700","total":"1504"},{"id":50,"zipCode":"10306","positive":"886","total":"1989"},{"id":51,"zipCode":"10307","positive":"246","total":"510"},{"id":52,"zipCode":"10308","positive":"430","total":"984"},{"id":53,"zipCode":"10309","positive":"561","total":"1264"},{"id":54,"zipCode":"10310","positive":"383","total":"815"},{"id":55,"zipCode":"10312","positive":"1008","total":"2071"},{"id":56,"zipCode":"10314","positive":"1569","total":"3231"},{"id":57,"zipCode":"10451","positive":"788","total":"1314"},{"id":58,"zipCode":"10452","positive":"1068","total":"1640"},{"id":59,"zipCode":"10453","positive":"1146","total":"1811"},{"id":60,"zipCode":"10454","positive":"550","total":"872"},{"id":61,"zipCode":"10455","positive":"562","total":"919"},{"id":62,"zipCode":"10456","positive":"1130","total":"1840"},{"id":63,"zipCode":"10457","positive":"969","total":"1551"},{"id":64,"zipCode":"10458","positive":"968","total":"1662"},{"id":65,"zipCode":"10459","positive":"746","total":"1201"},{"id":66,"zipCode":"10460","positive":"771","total":"1288"},{"id":67,"zipCode":"10461","positive":"1018","total":"1878"},{"id":68,"zipCode":"10462","positive":"1201","total":"2158"},{"id":69,"zipCode":"10463","positive":"885","total":"1810"},{"id":70,"zipCode":"10464","positive":"75","total":"194"},{"id":71,"zipCode":"10465","positive":"865","total":"1762"},{"id":72,"zipCode":"10466","positive":"1259","total":"2112"},{"id":73,"zipCode":"10467","positive":"1769","total":"2911"},{"id":74,"zipCode":"10468","positive":"1224","total":"1849"},{"id":75,"zipCode":"10469","positive":"1514","total":"2448"},{"id":76,"zipCode":"10470","positive":"258","total":"472"},{"id":77,"zipCode":"10471","positive":"302","total":"669"},{"id":78,"zipCode":"10472","positive":"918","total":"1408"},{"id":79,"zipCode":"10473","positive":"1053","total":"1795"},{"id":80,"zipCode":"10474","positive":"170","total":"266"},{"id":81,"zipCode":"10475","positive":"912","total":"1623"},{"id":82,"zipCode":"11004","positive":"324","total":"505"},{"id":83,"zipCode":"11101","positive":"344","total":"672"},{"id":84,"zipCode":"11102","positive":"306","total":"534"},{"id":85,"zipCode":"11103","positive":"296","total":"524"},{"id":86,"zipCode":"11104","positive":"264","total":"429"},{"id":87,"zipCode":"11105","positive":"279","total":"550"},{"id":88,"zipCode":"11106","positive":"342","total":"629"},{"id":89,"zipCode":"11109","positive":"37","total":"103"},{"id":90,"zipCode":"11201","positive":"373","total":"894"},{"id":91,"zipCode":"11203","positive":"1001","total":"1529"},{"id":92,"zipCode":"11204","positive":"1110","total":"1791"},{"id":93,"zipCode":"11205","positive":"392","total":"724"},{"id":94,"zipCode":"11206","positive":"757","total":"1312"},{"id":95,"zipCode":"11207","positive":"928","total":"1495"},{"id":96,"zipCode":"11208","positive":"1029","total":"1568"},{"id":97,"zipCode":"11209","positive":"587","total":"1162"},{"id":98,"zipCode":"11210","positive":"898","total":"1427"},{"id":99,"zipCode":"11211","positive":"1202","total":"1893"},{"id":100,"zipCode":"11212","positive":"842","total":"1302"},{"id":101,"zipCode":"11213","positive":"793","total":"1296"},{"id":102,"zipCode":"11214","positive":"760","total":"1330"},{"id":103,"zipCode":"11215","positive":"350","total":"797"},{"id":104,"zipCode":"11216","positive":"376","total":"709"},{"id":105,"zipCode":"11217","positive":"316","total":"599"},{"id":106,"zipCode":"11218","positive":"976","total":"1606"},{"id":107,"zipCode":"11219","positive":"1679","total":"2476"},{"id":108,"zipCode":"11220","positive":"784","total":"1238"},{"id":109,"zipCode":"11221","positive":"641","total":"1061"},{"id":110,"zipCode":"11222","positive":"255","total":"518"},{"id":111,"zipCode":"11223","positive":"885","total":"1555"},{"id":112,"zipCode":"11224","positive":"485","total":"811"},{"id":113,"zipCode":"11225","positive":"632","total":"1001"},{"id":114,"zipCode":"11226","positive":"995","total":"1527"},{"id":115,"zipCode":"11228","positive":"356","total":"626"},{"id":116,"zipCode":"11229","positive":"791","total":"1402"},{"id":117,"zipCode":"11230","positive":"1301","total":"2091"},{"id":118,"zipCode":"11231","positive":"241","total":"504"},{"id":119,"zipCode":"11232","positive":"267","total":"395"},{"id":120,"zipCode":"11233","positive":"591","total":"971"},{"id":121,"zipCode":"11234","positive":"1149","total":"1879"},{"id":122,"zipCode":"11235","positive":"911","total":"1601"},{"id":123,"zipCode":"11236","positive":"1313","total":"1985"},{"id":124,"zipCode":"11237","positive":"451","total":"665"},{"id":125,"zipCode":"11238","positive":"448","total":"778"},{"id":126,"zipCode":"11239","positive":"250","total":"403"},{"id":127,"zipCode":"11354","positive":"461","total":"757"},{"id":128,"zipCode":"11355","positive":"587","total":"926"},{"id":129,"zipCode":"11356","positive":"285","total":"497"},{"id":130,"zipCode":"11357","positive":"441","total":"777"},{"id":131,"zipCode":"11358","positive":"289","total":"553"},{"id":132,"zipCode":"11360","positive":"173","total":"358"},{"id":133,"zipCode":"11361","positive":"253","total":"463"},{"id":134,"zipCode":"11362","positive":"167","total":"339"},{"id":135,"zipCode":"11363","positive":"68","total":"136"},{"id":136,"zipCode":"11364","positive":"259","total":"485"},{"id":137,"zipCode":"11365","positive":"440","total":"791"},{"id":138,"zipCode":"11366","positive":"244","total":"419"},{"id":139,"zipCode":"11367","positive":"591","total":"1007"},{"id":140,"zipCode":"11368","positive":"2398","total":"3035"},{"id":141,"zipCode":"11369","positive":"883","total":"1165"},{"id":142,"zipCode":"11370","positive":"833","total":"1348"},{"id":143,"zipCode":"11372","positive":"1428","total":"1927"},{"id":144,"zipCode":"11373","positive":"1859","total":"2600"},{"id":145,"zipCode":"11374","positive":"673","total":"1169"},{"id":146,"zipCode":"11375","positive":"937","total":"1741"},{"id":147,"zipCode":"11377","positive":"1152","total":"1740"},{"id":148,"zipCode":"11378","positive":"397","total":"679"},{"id":149,"zipCode":"11379","positive":"434","total":"797"},{"id":150,"zipCode":"11385","positive":"1066","total":"1797"},{"id":151,"zipCode":"11411","positive":"408","total":"594"},{"id":152,"zipCode":"11412","positive":"693","total":"1081"},{"id":153,"zipCode":"11413","positive":"752","total":"1163"},{"id":154,"zipCode":"11414","positive":"453","total":"765"},{"id":155,"zipCode":"11415","positive":"306","total":"517"},{"id":156,"zipCode":"11416","positive":"317","total":"489"},{"id":157,"zipCode":"11417","positive":"421","total":"683"},{"id":158,"zipCode":"11418","positive":"532","total":"838"},{"id":159,"zipCode":"11419","positive":"542","total":"858"},{"id":160,"zipCode":"11420","positive":"675","total":"1064"},{"id":161,"zipCode":"11421","positive":"602","total":"906"},{"id":162,"zipCode":"11422","positive":"552","total":"898"},{"id":163,"zipCode":"11423","positive":"486","total":"745"},{"id":164,"zipCode":"11426","positive":"292","total":"524"},{"id":165,"zipCode":"11427","positive":"440","total":"726"},{"id":166,"zipCode":"11428","positive":"349","total":"536"},{"id":167,"zipCode":"11429","positive":"536","total":"765"},{"id":168,"zipCode":"11432","positive":"843","total":"1304"},{"id":169,"zipCode":"11433","positive":"477","total":"727"},{"id":170,"zipCode":"11434","positive":"1060","total":"1655"},{"id":171,"zipCode":"11435","positive":"796","total":"1308"},{"id":172,"zipCode":"11436","positive":"269","total":"412"},{"id":173,"zipCode":"11691","positive":"1111","total":"1647"},{"id":174,"zipCode":"11692","positive":"297","total":"471"},{"id":175,"zipCode":"11693","positive":"197","total":"334"},{"id":176,"zipCode":"11694","positive":"360","total":"622"},{"id":177,"zipCode":"11697","positive":"63","total":"130"}]};
	
		const mapData = customData.features;

		//Attempt 1
		const rn = React.useRef(null);

	  React.useEffect(() => {
	    renderMap();
	  }, [mapData]);

	  const renderMap = () => {
	    const node = rn.current;
	    const width = node.width.animVal.value;
	    const height = node.height.animVal.value;

	    const projection = () => {

	      return d3
	          .geoEqualEarth()
						.scale(37300)
						.fitSize([960, 720], mapData)
	          // .translate([width/2, height/2]);
	    };

	    d3.select(node)
	        .append("g")
	        .classed("NYC", true);
	    const nyc = d3.select("g")
	        .selectAll("path")
	        .data(mapData);


	    nyc
	        .enter()
	        .append("path")
	        .classed("city", true)
	        .attr("stroke", "blue")
	        .attr("strokeWidth", 0.75)
	        .each(function(d, i) {
	          d3.select(this).attr("d", d3.geoPath().projection(projection(d)));
	        });
	        //Attempt 1



			//ATTEMPT 2
	    //  var center = d3Geo.geoCentroid(mapData);
	    //  var projection = d3Geo.geoMercator().scale(37300)
     //   var path = d3Geo.geoPath().projection(projection);

	  		// var group = d3.select(node)
	  		// 	.selectAll("g")
	  		// 	.data(mapData)
	  		// 	.enter()
	  		// 	.append("g")
	    //     .attr("fill", "black")

    	// 	var areas = group.append("path")
    	// 			.attr("d", path)
    	// 			.attr("class", "area")
    		//ATTEMPT 2			

			
	  };

	  return <svg width={960} height={720} ref={rn} />

}










								// const canvas = React.useRef(null);
  


        //         //LEGEND

        //         var colorScheme = ["#4B09DB", "#6E37E6", "#7852CC", "#A88CE6", "#BFB2DB", "black"];
        //         var SVG = d3.select("svg")

        //         // create a list of keys
        //         var keys = ["1200 or more", "900 to 1199", "600 to 899", "600 to 899", "300 to 599", "Less than 300", "No Data"]

        //         // Usually you have a color scale in your chart already
        //         var color = d3.scaleOrdinal()
        //           .domain(keys)
        //           .range(colorScheme);

        //         // Add one dot in the legend for each name.
        //         var size = 20
        //         SVG.selectAll("mydots")
        //           .data(keys)
        //           .enter()
        //           .append("rect")
        //             .attr("x", 100)
        //             .attr("y", function(d,i){ return 100 + i*(size+5)}) // 100 is where the first dot appears. 25 is the distance between dots
        //             .attr("width", size)
        //             .attr("height", size)
        //             .style("fill", function(d){ return color(d)})

        //         // Add one dot in the legend for each name.
        //         SVG.selectAll("mylabels")
        //           .data(keys)
        //           .enter()
        //           .append("text")
        //             .attr("x", 100 + size*1.2)
        //             .attr("y", function(d,i){ return 100 + i*(size+5) + (size/2)}) // 100 is where the first dot appears. 25 is the distance between dots
        //             .text(function(d){ return d})
        //             .attr("text-anchor", "left")
        //             .style("alignment-baseline", "middle")           


        //         //LEGEND           

    
        // 	d3.json("nyc.json").then(function(data) {
        //         let combinedData = data;

        // 		covidData.covid.forEach((area, idx) => {
        // 			let zip = area.zipCode;
        			
  
        // 			for(let i = 0; i < data.features.length; i++) {
        // 				if(data.features[i].properties.postalCode === zip) {
        // 					combinedData.features[i].properties.covid = covidData.covid[idx];
        // 					break;
        // 				} 
        // 			}
        // 			console.log(combinedData)			
        // 		});     

        //         let originalHex; 		
        // 		var group = canvas.selectAll("g")
        // 			.data(combinedData.features)
        // 			.enter()
        // 			.append("g")
        //             .attr("fill", areaColor)
        //             .on("mouseover", function(d){
        //                 originalHex = d3.select(this).style("fill");
        //                 d3.select(this)
        //                 .attr("fill", "pink");

        //                 tooltip.transition()
        //                     .duration(200)
        //                     .style("opacity", .9);


        //                 tooltip.html(`Zipcode: ${d.properties.postalCode} Positive: ${d.properties.covid ? d.properties.covid.positive : "No Data" }`)
        //                     .style("left", (d3.event.pageX) + "px")
        //                     .style("top", (d3.event.pageY - 50) + "px");
        //             })
        //             .on("mouseout", function(){
        //                 d3.select(this)
        //                 .attr("fill", originalHex)

        //                 tooltip.transition()
        //                     .duration(500)
        //                     .style("opacity", 0);
        //             })

        //         //TOOLTIP

        //         var tooltip = d3.select("body").append("div")
        //             .attr("class", "tooltip")
        //             .style("opacity", 0);

        //         //TOOLTIP


        // 		var center = d3.geoCentroid(data);
        // 		var projection = d3.geoMercator().scale(37300).center(center);
        // 		var path = d3.geoPath().projection(projection);

        //         function areaColor(d) {
        //             if(!d.properties.covid) {
        //                 return "black";
        //             } else if(d.properties.covid.positive > 1200) {
        //                 return "#4B09DB";
        //             } else if(d.properties.covid.positive > 900){
        //                 return "#6E37E6";
        //             } else if(d.properties.covid.positive > 600){
        //                 return "#7852CC";
        //             } else if(d.properties.covid.positive > 300){
        //                 return "#A88CE6";
        //             } else if(d.properties.covid.positive <= 300){
        //                 return "#BFB2DB";
        //             }

        //             // if(!d.properties.covid) {
        //             //     return "black";
        //             // } else if(d.properties.covid.positive > 1200) {
        //             //     return "#253494";
        //             // } else if(d.properties.covid.positive > 900){
        //             //     return "#2c7fb8";
        //             // } else if(d.properties.covid.positive > 600){
        //             //     return "#41b6c4";
        //             // } else if(d.properties.covid.positive > 300){
        //             //     return "#7fcdbb";
        //             // } else if(d.properties.covid.positive <= 300){
        //             //     return "#c7e9b4";
        //             // }                    
        //         }

        // 		var areas = group.append("path")
        // 				.attr("d", path)
        // 				.attr("class", "area")

        // 	});

// 	return (
// 		<svg id="canvas" width={760} height={700} ref={canvas} />
// 		)
// }














export default Map;