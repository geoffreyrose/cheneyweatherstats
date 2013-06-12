var barChartData = {
			labels : ["18 and under","19-29","30-44","45-64","65 and over"],
			datasets : [
				{
					fillColor : "rgba(220,220,220,0.5)",
					strokeColor : "rgba(220,220,220,1)",
					data : [1.1,44.3,47.6,6.7,0.3]
				}
			]
			
		};

var myLine = new Chart(document.getElementById("age").getContext("2d")).Bar(barChartData);



var doughnutData = [
				{
					value: 18, //female
					color:"#F7464A"
				},
				{
					value : 81.6, //male
					color : "#46BFBD"
				},
				{
					value : 0.5, //other
					color : "#FDB45C"
				},
			
			];

var myDoughnut = new Chart(document.getElementById("gender").getContext("2d")).Doughnut(doughnutData);

		var doughnutData = [
				{
					value: 39.4, 
					color:"#F7464A"
				},
				{
					value : 10.9,
					color : "#46BFBD"
				},
				{
					value : 10.8, 
					color : "#FDB45C"
				},
				{
					value: 7.8, 
					color:"#F7464A"
				},
				{
					value : 6.4,
					color : "#46BFBD"
				},
				{
					value : 3.9, 
					color : "#FDB45C"
				},
				{
					value: 3.6, 
					color:"#F7464A"
				},
				{
					value : 3.3,
					color : "#46BFBD"
				},
				{
					value : 3, 
					color : "#FDB45C"
				},
				{
					value : 2.3,
					color : "#46BFBD"
				},
				{
					value : 1.9, 
					color : "#FDB45C"
				},
				{
					value: 1.7, 
					color:"#F7464A"
				},
				{
					value : 1.4,
					color : "#46BFBD"
				},
				{
					value : 1, 
					color : "#FDB45C"
				},
				{
					value : 0.8, 
					color : "#FDB45C"
				},
				{
					value: 0.8, 
					color:"#F7464A"
				},
				{
					value : 0.7,
					color : "#46BFBD"
				},
				{
					value : 0.2, 
					color : "#FDB45C"
				},
			
			];

var myDoughnut = new Chart(document.getElementById("ethnicity").getContext("2d")).Doughnut(doughnutData);
	
	
		var pieData = [
				{
					value: 39.4,
					color:"#F38630"
				},
				{
					value : 10.9,
					color : "#E0E4CC"
				},
				{
					value : 10.8,
					color : "#69D2E7"
				},
				{
					value: 7.8,
					color:"#F38630"
				},
				{
					value : 6.4,
					color : "#E0E4CC"
				},
				{
					value : 3.9,
					color : "#69D2E7"
				},
				{
					value: 3.6,
					color:"#F38630"
				},
				{
					value : 3.3,
					color : "#E0E4CC"
				},
				{
					value : 3,
					color : "#69D2E7"
				},
				{
					value: 2.3,
					color:"#F38630"
				},
				{
					value : 1.9,
					color : "#E0E4CC"
				},
				{
					value : 1.7,
					color : "#69D2E7"
				},
				{
					value: 1.4,
					color:"#F38630"
				},
				{
					value : 1,
					color : "#E0E4CC"
				},
				{
					value : .8,
					color : "#69D2E7"
				},
				{
					value:  .8,
					color:"#F38630"
				},
				{
					value : .7,
					color : "#E0E4CC"
				},
				{
					value : .2,
					color : "#69D2E7"
				}
			
			];

	var myPie = new Chart(document.getElementById("jobs").getContext("2d")).Pie(pieData);
	
		var chartData = [
			{
				value : 0.7,
				color: "#D97041"
			},
			{
				value : 6.8,
				color: "#C7604C"
			},
			{
				value : 19.4,
				color: "#21323D"
			},
			{
				value : 58.1,
				color: "#9D9B7F"
			},
			{
				value : 14.1,
				color: "#7D4F6D"
			},
			{
				value : 0.9,
				color: "#584A5E"
			}
		];
	var myPolarArea = new Chart(document.getElementById("education").getContext("2d")).PolarArea(chartData);
	
	var lineChartData = {
			labels : ["A lot","Some","A little","Not at all"],
			datasets : [
				{
					fillColor : "rgba(220,220,220,0.5)",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					data : [16.8,37.4,29.3,16.6]
				},

			]
			
		};

	var myLine = new Chart(document.getElementById("relevanceedu").getContext("2d")).Line(lineChartData);
	
	var lineChartData = {
			labels : ["A lot","Some","A little","Not at all"],
			datasets : [
				{
					fillColor : "rgba(151,187,205,0.5)",
					strokeColor : "rgba(151,187,205,1)",
					pointColor : "rgba(151,187,205,1)",
					pointStrokeColor : "#fff",
					data : [44.4,41.5,11.1,2.9]
				}
			]
		};

	var myLine = new Chart(document.getElementById("excitedfield").getContext("2d")).Line(lineChartData);
	
	var lineChartData = {
			labels : ["A lot","Some","A little","Not at all"],
			datasets : [
				{
					fillColor : "rgba(220,220,220,0.5)",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					data : [16.8,37.4,29.3,16.6]
				},
				{
					fillColor : "rgba(151,187,205,0.5)",
					strokeColor : "rgba(151,187,205,1)",
					pointColor : "rgba(151,187,205,1)",
					pointStrokeColor : "#fff",
					data : [44.4,41.5,11.1,2.9]
				}
			]
			
		};

	var myLine = new Chart(document.getElementById("relevancevexc").getContext("2d")).Line(lineChartData);
	
	
	var radarChartData = {
			labels : ["Less then a year","1 year","2 years","3 years","4 years","5 years","6 years","7 years","8 years","9 years","10 or more years"],
			datasets : [
				{
					fillColor : "rgba(220,220,220,0.5)",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					data : [7.3,6.4,10.8,1.3,9.1,11.0,7.3,5.8,5.4,2.5,23.2]
				},
			]
			
		}

	var myRadar = new Chart(document.getElementById("timeblogsite").getContext("2d")).Radar(radarChartData,{scaleShowLabels : false, pointLabelFontSize : 10});
	
	var pieData = [
				{
					value: 71.8,
					color:"#F38630"
				},
				{
					value : 28.2,
					color : "#E0E4CC"
				},
			
			];

	var myPie = new Chart(document.getElementById("siteyn").getContext("2d")).Pie(pieData);

	

	
