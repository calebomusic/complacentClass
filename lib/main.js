const generateGraph = require("./generateGraph.js");
const generateNumGuessWidget = require("./generateNumGuessWidget.js");
const generateBars = require("./generateBarWidget.js");

document.addEventListener('DOMContentLoaded', () => {
  const growthRate = [
    { period: '1900-1950', rate: .0206 },
    { period: '1950-1973', rate: .0220 },
    { period: '1973-2007', rate: .0193 }
  ];

  const growthRateOptions = {
      xAxisText: 'Period',
      yAxisText: 'Growth Rate',
      yMin: 0,
      yMax: .0250,
      yFix: 1,
      xKey: 'period',
      yKey: 'rate',
      xAxisLabelFormat: '',
      yAxisLabelFormat: '.0%',
      xTicks: 10,
      yTicks: 2,
      margin: { top: 15, right: 40, bottom: 50, left: 50 },
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
      yAxisText: 'Percent Moved Out-State',
      yMin: 0,
      yMax: .039,
      xKey: 'year',
      yKey: 'percent',
      xMin: 1950,
      xMax: 2015,
      xAxisLabelFormat: 'd',
      yAxisLabelFormat: '.0%',
      xTicks: 5,
      yTicks: 5,
      margin: { top: 15, right: 40, bottom: 50, left: 50 },
      width: 400,
      data: mobilityData
  };

  generateGraph('mobility', mobilityOptions);

  const tfpData = [
    { period: "pre-1973" , tfp: 2.1 },
    { period: "1973-1995", tfp: 0.4 },
    { period: "1995-2007" , tfp: 1.4 }
  ];

  const tfpOptions = {
      xAxisText: 'Period',
      yAxisText: 'TFP',
      yMin: 0,
      yMax: 2.4,
      yFix: 1,
      xKey: 'period',
      yKey: 'tfp',
      xAxisLabelFormat: '',
      margin: { top: 15, right: 40, bottom: 50, left: 50 },
      yAxisLabelFormat: '',
      xTicks: 10,
      yTicks: 5,
      width: 400,
      height: 400,
      data: tfpData
  };

  generateBars('tfp', tfpOptions);

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
      yAxisText: 'Percent Black Students',
      yMin: 0,
      yMax: .49,
      xKey: 'year',
      yKey: 'percent',
      xMin: 1960,
      xMax: 2011,
      xAxisLabelFormat: 'd',
      yAxisLabelFormat: '.0%',
      margin: { top: 15, right: 40, bottom: 50, left: 50 },
      xTicks: 10,
      yTicks: 5,
      width: 400,
      data: segregationData
  };

  generateGraph('segregation', segregationOptions);

  const startupsData = [
    { period: "1980s", percent: .12},
    { period: "Today", percent: .08 }
  ]

  const startupsOptions = {
      xAxisText: 'Period',
      yAxisText: 'Percent of Startup Firms',
      yMin: 0,
      yMax: .15,
      yFix: 1,
      xKey: 'period',
      yKey: 'percent',
      xAxisLabelFormat: '',
      yAxisLabelFormat: '.0%',
      margin: { top: 15, right: 40, bottom: 50, left: 50 },
      xTicks: 10,
      yTicks: 5,
      width: 400,
      height: 400,
      data: startupsData
  };

  generateBars('startups', startupsOptions);
});

function checkComplete() {
  let hidden = document.getElementsByClassName('hidden'),
      hiddenCount = hidden.length;

  if(hidden.length === 1) {
    let finalAnswer = document.getElementById('final-answer');
    finalAnswer.classList.remove('hidden');
  }
}

window.setInterval(checkComplete, 2000);
