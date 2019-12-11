$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temperature-up').on('click', function(){
    thermostat.up();
    updateTemperature();
  });
  
  $('#temperature-down').click(function() { 
    thermostat.down();
    updateTemperature();  
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
  };
});

