'use strict';

describe('Thermostat', function(){

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('general features', function() {
    it('starts at 20 degrees', function() {
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });
  
    it('increase in temperature with up()', function() {
      thermostat.up();
      expect(thermostat.getCurrentTemperature()).toEqual(21);
    });
  
    it('decrease in temperature with down()', function() {
      thermostat.down();
      expect(thermostat.getCurrentTemperature()).toEqual(19);
    });
  
    it('has a minimum temperature of 10 degrees', function() {
      for (var i = 0; i < 11; i++) {
        thermostat.down();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(10);
    })
  
    it('knows when PSM is on', function(){
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });
  
    it('can switch PSM off', function() {
      thermostat.switchPowerSavingModeOff();
      expect(thermostat.isPowerSavingModeOn()).toBe(false);
    });
  
    it('can switch PSM back on', function() {
      thermostat.switchPowerSavingModeOff();
      expect(thermostat.isPowerSavingModeOn()).toBe(false);
      thermostat.switchPowerSavingModeOn();
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });
  
    it('can be reset to the default', function(){
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      }
      thermostat.resetTemperature();
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });
  });

  describe('when power saving mode is on', function() {
    it('has a maximum temperature of 25 degrees', function() {
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });
  });

  describe('when power saving mode is off', function() {
    beforeEach(function() {
      thermostat.switchPowerSavingModeOff();
      for (var i = 0; i < 13; i++) {
        thermostat.up();
      }
    });

    it('maximum temperature is 32 degrees', function() {
      expect(thermostat.getCurrentTemperature()).toEqual(32);
    });

    it('turning PSM on lowers the temperature to 25 degrees', function() {
      thermostat.switchPowerSavingModeOn();
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });
  });

  describe('displaying usage levels', function() {
    describe('when the temperature is below 18', function(){
      it('it is considered low-usage', function() {
        for (var i = 0; i < 3; i++) {
          thermostat.down();
        }
   
      expect(thermostat.energyUsage()).toEqual('low-usage');
    });
  });

  describe('when the temperature is between 18 to 25', function() {
    it('it is high', function() {
      thermostat.powerSavingMode = false;
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      } 
    expect(thermostat.energyUsage()).toEqual('high-usage');
    });
  });
});

});