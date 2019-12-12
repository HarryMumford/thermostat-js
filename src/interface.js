$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  

  // $.getJSON('http://api.openweathermap.org/data/2.5/weather?id=2643743&APPID=0df10d735f6dd7a25a8e2ff3da09ee9e', function(data) {
  //   var items = []
    

  // });

  $('#temperature-up').on('click', function() {
    thermostat.up();
    updateTemperature();
  })
  
  $('#temperature-down').click(function() { 
    thermostat.down();
    updateTemperature();  
  })

  $('#temperature-reset').click(function() {
    thermostat.resetTemperature();
    updateTemperature();
  })

  $('#psm-on').click(function() {
    thermostat.switchPowerSavingModeOn();
    $('#power-saving').text('on')
    updateTemperature();
  })

  $('#psm-off').click(function() {
    thermostat.switchPowerSavingModeOff();
    $('#power-saving').text('off')
    updateTemperature();
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  }
});

