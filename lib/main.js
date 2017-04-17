const generateGraph = require("./generateGraph.js");
const generateNumGuessWidget = require("./generateNumGuessWidget.js");
const generateBars = require("./generateBarWidget.js");

document.addEventListener('DOMContentLoaded', () => {
  const growthRate = [
    { period: '1900-1950', rate: 2.06 },
    { period: '1950-1973', rate: 2.20 },
    { period: '1973-2007', rate: 1.93 }
  ];

  const growthRateOptions = {
      xAxisText: 'Period',
      yAxisText: 'Growth Rate',
      yMin: 0,
      yMax: 2.50,
      yFix: 2,
      xKey: 'period',
      yKey: 'rate',
      xAxisLabelFormat: '',
      yAxisLabelFormat: '',
      xTicks: 10,
      yTicks: 5,
      width: 400,
      height: 400,
      data: growthRate
  };

  generateBars('growthRate', growthRateOptions);

// NOTE: order of data matters

  const mobilityData = [
    { year: 2015, percent:  0.015},
    { year: 2010, percent: 0.016},
    { year: 2005, percent:  0.020},
    { year: 2000, percent: 0.028 },
    { year: 1995, percent:  0.025},
    { year: 1990, percent:  0.029},
    { year: 1985, percent:  0.030},
    { year: 1980, percent:  0.028},
    { year: 1975, percent:  0.030},
    { year: 1970, percent:  0.034},
    { year: 1965, percent:  0.033},
    { year: 1960, percent:  0.032},
    { year: 1955, percent:  0.031},
    { year: 1950, percent:  0.035}
  ].sort((a, b) => a['year'] - b['year'])

  const mobilityOptions = {
      xAxisText: '',
      yAxisText: 'Percent',
      yMin: 0,
      yMax: .04,
      xKey: 'year',
      yKey: 'percent',
      xMin: 1950,
      xMax: 2015,
      xAxisLabelFormat: 'd',
      yAxisLabelFormat: '.0%',
      xTicks: 5,
      yTicks: 5,
      width: 600,
      data: mobilityData
  };

  generateGraph('mobility', mobilityOptions);

  const segregationData = [
    { year: 1964, percent: 0.023},
    { year: 1967, percent: 0.139},
    { year: 1968, percent: 0.234},
    { year: 1970, percent: 0.331},
    { year: 1972, percent: 0.364},
    { year: 1976, percent: 0.376},
    { year: 1980, percent: 0.371},
    { year: 1986, percent: 0.429},
    { year: 1988, percent: 0.435},
    { year: 1991, percent: 0.392},
    { year: 1994, percent: 0.366},
    { year: 1996, percent: 0.347},
    { year: 1998, percent: 0.327},
    { year: 2000, percent: 0.310},
    { year: 2001, percent: 0.302},
    { year: 2006, percent: 0.277},
    { year: 2011, percent: 0.232}
  ]

  const segregationOptions = {
      xAxisText: '',
      yAxisText: 'Percent Black Students in Majority White Schools',
      yMin: 0,
      yMax: .50,
      xKey: 'year',
      yKey: 'percent',
      xMin: 1960,
      xMax: 2011,
      xAxisLabelFormat: 'd',
      yAxisLabelFormat: '.0%',
      xTicks: 10,
      yTicks: 5,
      width: 600,
      data: segregationData
  };

  generateGraph('segregation', segregationOptions);

  const startupsData = [
    { period: "1980s", percent: 12},
    { period: "Today", percent: 8 }
  ]

  const startupsOptions = {
      xAxisText: 'Period',
      yAxisText: 'Percent of Startup Firms',
      yMin: 0,
      yMax: 15,
      yFix: 1,
      xKey: 'period',
      yKey: 'percent',
      xAxisLabelFormat: '',
      yAxisLabelFormat: '',
      xTicks: 10,
      yTicks: 5,
      width: 400,
      height: 400,
      data: startupsData
  };

  generateBars('startups', startupsOptions)

  const tfpData = [
    { period: "pre-1973" , tfp: 2.1 },
    { period: "1973-1995", tfp: 0.4 },
    { period: "1995-2007" , tfp: 1.4 }
  ];

  const tfpOptions = {
      xAxisText: 'Period',
      yAxisText: 'TFP',
      yMin: 0,
      yMax: 2.5,
      yFix: 1,
      xKey: 'period',
      yKey: 'tfp',
      xAxisLabelFormat: '',
      yAxisLabelFormat: '',
      xTicks: 10,
      yTicks: 5,
      width: 400,
      height: 400,
      data: tfpData
  }

  generateBars('tfp', tfpOptions)
});
