module.exports={
  "Attribute": {
    "description": "Attribute signals that do not change during the power cycle of a vehicle.", 
    "type": "branch", 
    "children": {
      "Body": {
        "description": "All body components", 
        "type": "branch", 
        "children": {
          "RefuelPosition": {
            "description": "Location of the fuel cap or charge port", 
            "type": "String", 
            "enum": [
              "front_left", 
              "front_right", 
              "middle_left", 
              "middle_right", 
              "rear_left", 
              "rear_right"
            ], 
            "id": 30
          }, 
          "BodyType": {
            "description": "Body type code as defined by ISO 3779", 
            "type": "String", 
            "id": 29
          }
        }
      }, 
      "Drivetrain": {
        "description": "Drivetrain attributes internal combustion engines, transmissions, electric motors, etc.", 
        "type": "branch", 
        "children": {
          "Transmission": {
            "type": "branch", 
            "children": {
              "DriveType": {
                "description": "Drive type.", 
                "type": "String", 
                "enum": [
                  "unknown", 
                  "fwd", 
                  "rwd", 
                  "awd"
                ], 
                "id": 9, 
                "value": "unknown"
              }, 
              "Type": {
                "description": "Transmission type.", 
                "type": "String", 
                "enum": [
                  "unknown", 
                  "sequential", 
                  "H", 
                  "automatic", 
                  "DSG", 
                  "CVT"
                ], 
                "id": 7, 
                "value": "unknown"
              }, 
              "GearCount": {
                "type": "UInt8", 
                "id": 8, 
                "value": 0, 
                "description": "Number of forward gears in the transmission. -1 = CVT."
              }
            }, 
            "description": "Transmission-specific attributes, stopping at the drive shafts."
          }, 
          "FuelCell": {
            "type": "branch", 
            "children": {}, 
            "description": "Fuel Cell attributes"
          }, 
          "BatteryManagement": {
            "description": "Battery Management attributes", 
            "type": "branch", 
            "children": {}
          }, 
          "InternalCombustionEngine": {
            "description": "Engine-specific attributes, stopping at the bell housing.", 
            "type": "branch", 
            "children": {
              "FuelType": {
                "description": "Type of fuel that the engine runs on.", 
                "default": "unknown", 
                "type": "String", 
                "enum": [
                  "unknown", 
                  "gasoline", 
                  "diesel", 
                  "E85", 
                  "CNG"
                ], 
                "id": 6
              }, 
              "Configuration": {
                "description": "Engine configuration.", 
                "default": "unknown", 
                "type": "String", 
                "enum": [
                  "unknown", 
                  "straight", 
                  "V", 
                  "boxer", 
                  "W", 
                  "rotary", 
                  "radial", 
                  "square", 
                  "H", 
                  "U", 
                  "opposed", 
                  "X"
                ], 
                "id": 3
              }, 
              "MaxTorque": {
                "default": 0, 
                "type": "UInt16", 
                "id": 5, 
                "description": "Peak power, in newton meter, that the engine can generate."
              }, 
              "Displacement": {
                "type": "UInt16", 
                "id": 2, 
                "description": "Displacement in cubic centimetres."
              }, 
              "MaxPower": {
                "default": 0, 
                "type": "UInt16", 
                "id": 4, 
                "description": "Peak power, in kilowatts, that engine can generate."
              }
            }
          }, 
          "FuelSystem": {
            "description": "Fuel System attributes", 
            "type": "branch", 
            "children": {
              "TankCapacity": {
                "unit": "l", 
                "type": "UInt16", 
                "id": 10, 
                "value": 0, 
                "description": "Capacity of the fuel tank in liters"
              }
            }
          }
        }
      }, 
      "ADAS": {
        "description": "All Advanced Driver Assist Systems attributes", 
        "type": "branch", 
        "children": {}
      }, 
      "Chassis": {
        "description": "All attributes concerning steering, suspension, wheels, and brakes.", 
        "type": "branch", 
        "children": {
          "Track": {
            "description": "Overall wheel tracking, in mm.", 
            "type": "UInt16", 
            "id": 28, 
            "value": 0
          }, 
          "TowWeight": {
            "type": "UInt16", 
            "id": 23, 
            "value": 0, 
            "description": "Maximum weight, in kilos, of trailer."
          }, 
          "Width": {
            "description": "Overall vehicle width, in mm.", 
            "type": "UInt16", 
            "id": 26, 
            "value": 0
          }, 
          "Length": {
            "description": "Overall vehicle length, in mm.", 
            "type": "UInt16", 
            "id": 24, 
            "value": 0
          }, 
          "Axle": {
            "description": "Axle configuration attributes", 
            "type": "branch", 
            "children": {
              "Count": {
                "type": "UInt8", 
                "id": 11, 
                "value": 2, 
                "description": "Number of axles on the vehicle"
              }, 
              "Row1": {
                "description": "Axle configuration attributes for axle row", 
                "type": "branch", 
                "children": {
                  "WheelCount": {
                    "type": "UInt8", 
                    "id": 12, 
                    "description": "Number of wheels on the first axle"
                  }, 
                  "WheelWidth": {
                    "type": "UInt8", 
                    "id": 14, 
                    "unit": "inch", 
                    "description": "Width of wheels (without tires), in inches, as per ETRO / TRA standard."
                  }, 
                  "TireDiameter": {
                    "description": "Diameter of tires, in inches, as per ETRO / TRA standard.", 
                    "type": "UInt8", 
                    "id": 17, 
                    "unit": "inch"
                  }, 
                  "WheelDiameter": {
                    "description": "Diameter of wheels (without tires), in inches, as per ETRO / TRA standard.", 
                    "type": "UInt8", 
                    "id": 13, 
                    "unit": "inch"
                  }, 
                  "TireWidth": {
                    "type": "UInt8", 
                    "id": 18, 
                    "unit": "inch", 
                    "description": "Width of tires, in inches, as per ETRO / TRA standard."
                  }
                }
              }, 
              "Row2": {
                "type": "branch", 
                "children": {
                  "WheelWidth": {
                    "description": "Width of wheels (without tires), in inches, as per ETRO / TRA standard.", 
                    "type": "UInt8", 
                    "id": 16, 
                    "unit": "inch"
                  }, 
                  "TireDiameter": {
                    "type": "UInt8", 
                    "id": 19, 
                    "unit": "inch", 
                    "description": "Diameter of tires, in inches, as per ETRO / TRA standard."
                  }, 
                  "WheelDiameter": {
                    "description": "Diameter of wheels (without tires), in inches, as per ETRO / TRA standard.", 
                    "type": "UInt8", 
                    "id": 15, 
                    "unit": "inch"
                  }, 
                  "TireWidth": {
                    "description": "Width of tires, in inches, as per ETRO / TRA standard.", 
                    "type": "UInt8", 
                    "id": 20, 
                    "unit": "inch"
                  }
                }, 
                "description": "Axle configuration attributes for axle row"
              }
            }
          }, 
          "CurbWeight": {
            "description": "Vehicle curb weight, in kg, including all liquids and full tank of fuel, but no cargo or passengers.", 
            "type": "UInt16", 
            "id": 21, 
            "value": 0
          }, 
          "Height": {
            "type": "UInt16", 
            "id": 25, 
            "value": 0, 
            "description": "Overall vehicle height, in mm."
          }, 
          "Wheelbase": {
            "type": "UInt16", 
            "id": 27, 
            "value": 0, 
            "description": "Overall wheel base, in mm."
          }, 
          "GrossWeight": {
            "type": "UInt16", 
            "id": 22, 
            "value": 0, 
            "description": "Curb weight of vehicle, including all liquids and full tank of fuel and full load of cargo and passengers."
          }
        }
      }, 
      "Vehicle": {
        "type": "branch", 
        "children": {
          "VehicleIdentification": {
            "type": "branch", 
            "children": {
              "Model": {
                "description": "Vehicle model", 
                "type": "String", 
                "id": 43
              }, 
              "WMI": {
                "description": "3-character World Manufacturer Identification (WMI) as defined by ISO 3780", 
                "type": "String", 
                "id": 41
              }, 
              "VIN": {
                "description": "17-character Vehicle Identification Number (VIN) as defined by ISO 3779", 
                "type": "String", 
                "id": 40
              }, 
              "Brand": {
                "description": "Vehicle brand or manufacturer", 
                "type": "String", 
                "id": 42
              }, 
              "Year": {
                "description": "Model year of the vehicle", 
                "type": "UInt16", 
                "id": 44
              }
            }, 
            "description": "Attributes that identify a vehicle"
          }
        }, 
        "description": "All Advanced Driver Assist Systems attributes"
      }, 
      "Cabin": {
        "description": "All in-cabin components, including doors.", 
        "type": "branch", 
        "children": {
          "Seat": {
            "type": "branch", 
            "children": {
              "Row4PosCount": {
                "description": "Number of seats across row 4", 
                "type": "UInt8", 
                "id": 38, 
                "value": 0
              }, 
              "Row1PosCount": {
                "description": "Number of seats across row 1 (frontmost)", 
                "type": "UInt8", 
                "id": 35, 
                "value": 0
              }, 
              "RowCount": {
                "description": "Number of seat rows in vehicle", 
                "type": "UInt8", 
                "id": 34, 
                "value": 0
              }, 
              "Row5PosCount": {
                "description": "Number of seats across row 5", 
                "type": "UInt8", 
                "id": 39, 
                "value": 0
              }, 
              "Row2PosCount": {
                "type": "UInt8", 
                "id": 36, 
                "value": 0, 
                "description": "Number of seats across row 2"
              }, 
              "Row3PosCount": {
                "description": "Number of seats across row 3", 
                "type": "UInt8", 
                "id": 37, 
                "value": 0
              }, 
              "DriverPostion": {
                "description": "The position of the driver seat in row 1. (1-5)", 
                "type": "UInt8", 
                "id": 33, 
                "value": 0
              }
            }, 
            "description": "Seat configuration attributes"
          }, 
          "Door": {
            "description": "Door configuration attributes", 
            "type": "branch", 
            "children": {
              "Count": {
                "description": "Number of doors in vehicle", 
                "type": "UInt8", 
                "id": 31, 
                "value": 0
              }
            }
          }, 
          "SteeringWheel": {
            "type": "branch", 
            "children": {
              "Position": {
                "type": "String", 
                "enum": [
                  "front_left", 
                  "front_right"
                ], 
                "id": 32, 
                "value": "front_left", 
                "description": "Position of the steering wheel inside the cabin"
              }
            }, 
            "description": "Steering wheel configuration attributes"
          }
        }
      }
    }
  }, 
  "Signal": {
    "description": "All signals that can dynamically be updated by the vehicle", 
    "type": "branch", 
    "children": {
      "Body": {
        "description": "All body components", 
        "type": "branch", 
        "children": {
          "Mirrors": {
            "type": "branch", 
            "children": {
              "Right": {
                "type": "branch", 
                "children": {
                  "Tilt": {
                    "description": "Mirror tilt as a percentage. 0 = Center Position. 100 = Fully Upward Position. -100 = Fully Downward Position.", 
                    "type": "Int8", 
                    "id": 111, 
                    "unit": "percentage"
                  }, 
                  "Pan": {
                    "type": "Int8", 
                    "id": 112, 
                    "unit": "percentage", 
                    "description": "Mirror pan as a percentage. 0 = Center Position. 100 = Fully Left Position. -100 = Fully Right Position."
                  }, 
                  "Heater": {
                    "description": "Mirror heater signals", 
                    "type": "branch", 
                    "children": {
                      "Status": {
                        "description": "Mirror Heater on or off. True = Heater On. False = Heater Off.", 
                        "type": "Boolean", 
                        "id": 113
                      }
                    }
                  }
                }, 
                "description": "Right mirrors"
              }, 
              "Left": {
                "description": "Left mirrors", 
                "type": "branch", 
                "children": {
                  "Tilt": {
                    "description": "Mirror tilt as a percentage. 0 = Center Position. 100 = Fully Upward Position. -100 = Fully Downward Position.", 
                    "type": "Int8", 
                    "id": 108, 
                    "unit": "percentage"
                  }, 
                  "Pan": {
                    "type": "Int8", 
                    "id": 109, 
                    "unit": "percentage", 
                    "description": "Mirror pan as a percentage. 0 = Center Position. 100 = Fully Left Position. -100 = Fully Right Position."
                  }, 
                  "Heater": {
                    "description": "Mirror heater signals", 
                    "type": "branch", 
                    "children": {
                      "Status": {
                        "description": "Mirror Heater on or off. True = Heater On. False = Heater Off.", 
                        "type": "Boolean", 
                        "id": 110
                      }
                    }
                  }
                }
              }
            }, 
            "description": "All mirrors"
          }, 
          "Horn": {
            "type": "branch", 
            "children": {
              "IsActive": {
                "description": "Horn active or inactive. True = Active. False = Inactive.", 
                "type": "Boolean", 
                "id": 87
              }
            }, 
            "description": "Horn signals"
          }, 
          "Lights": {
            "description": "All lights", 
            "type": "branch", 
            "children": {
              "IsLeftIndicatorOn": {
                "description": "Is left indicator flashing", 
                "type": "Boolean", 
                "id": 106
              }, 
              "IsLowBeamOn": {
                "description": "Is low beam on", 
                "type": "Boolean", 
                "id": 98
              }, 
              "IsHighBeamOn": {
                "description": "Is high beam on", 
                "type": "Boolean", 
                "id": 97
              }, 
              "IsFrontFogOn": {
                "description": "Is front fog light on", 
                "type": "Boolean", 
                "id": 104
              }, 
              "IsBrakeOn": {
                "description": "Is brake light on", 
                "type": "Boolean", 
                "id": 102
              }, 
              "IsRightIndicatorOn": {
                "description": "Is right indicator flashing", 
                "type": "Boolean", 
                "id": 107
              }, 
              "IsBackupOn": {
                "type": "Boolean", 
                "id": 100, 
                "description": "Is backup (reverse) light on"
              }, 
              "IsParkingOn": {
                "description": "Is parking light on", 
                "type": "Boolean", 
                "id": 101
              }, 
              "IsRearFogOn": {
                "description": "Is rear fog light on", 
                "type": "Boolean", 
                "id": 103
              }, 
              "IsHazardOn": {
                "description": "Are hazards on", 
                "type": "Boolean", 
                "id": 105
              }, 
              "IsRunningOn": {
                "type": "Boolean", 
                "id": 99, 
                "description": "Are running lights on"
              }
            }
          }, 
          "Rainsensor": {
            "description": "Rainsensor signals", 
            "type": "branch", 
            "children": {
              "Intensity": {
                "type": "UInt8", 
                "id": 88, 
                "unit": "percentage", 
                "description": "Rain intensity. 0 = Dry, No Rain. 100 = Covered."
              }
            }
          }, 
          "Trunk": {
            "type": "branch", 
            "children": {
              "IsLocked": {
                "description": "Is trunk locked or unlocked. True = Locked. False = Unlocked.", 
                "type": "Boolean", 
                "id": 86
              }, 
              "IsOpen": {
                "description": "Trunk open or closed. True = Open. False = Closed", 
                "type": "Boolean", 
                "id": 85
              }
            }, 
            "description": "Trunk status"
          }, 
          "Windshield": {
            "description": "Windshield signals", 
            "type": "branch", 
            "children": {
              "Front": {
                "description": "Front windshield signals", 
                "type": "branch", 
                "children": {
                  "Heater": {
                    "description": "Front windshield heater signals", 
                    "type": "branch", 
                    "children": {
                      "Status": {
                        "type": "String", 
                        "enum": [
                          "off", 
                          "on"
                        ], 
                        "id": 90, 
                        "description": "Front windshield heater status"
                      }
                    }
                  }, 
                  "Wiper": {
                    "type": "branch", 
                    "children": {
                      "Status": {
                        "description": "Front wiper status", 
                        "type": "String", 
                        "enum": [
                          "off", 
                          "slow", 
                          "medium", 
                          "fast", 
                          "interval", 
                          "rainsensor"
                        ], 
                        "id": 89
                      }
                    }, 
                    "description": "Front windshield wiper signals"
                  }, 
                  "WasherFluid": {
                    "description": "Front windshield washer fluid signals", 
                    "type": "branch", 
                    "children": {
                      "LevelLow": {
                        "type": "Boolean", 
                        "id": 91, 
                        "description": "Low level indication for washer fluid. True = Level Low. False = Level OK."
                      }, 
                      "Level": {
                        "type": "UInt8", 
                        "id": 92, 
                        "unit": "percent", 
                        "description": "Washer fluid level as a percentage. 0 = Empty. 100 = Full."
                      }
                    }
                  }
                }
              }, 
              "Rear": {
                "description": "Rear windshield signals", 
                "type": "branch", 
                "children": {
                  "Heater": {
                    "description": "Rear windshield heater signals", 
                    "type": "branch", 
                    "children": {
                      "Status": {
                        "type": "String", 
                        "enum": [
                          "off", 
                          "on"
                        ], 
                        "id": 94, 
                        "description": "Rear windshield heater status"
                      }
                    }
                  }, 
                  "Wiper": {
                    "type": "branch", 
                    "children": {
                      "Status": {
                        "description": "Rear wiper status", 
                        "type": "String", 
                        "enum": [
                          "off", 
                          "slow", 
                          "medium", 
                          "fast", 
                          "interval", 
                          "rainsensor"
                        ], 
                        "id": 93
                      }
                    }, 
                    "description": "Rear windshield wiper signals"
                  }, 
                  "WasherFluid": {
                    "description": "Rear windshield washer fluid signals", 
                    "type": "branch", 
                    "children": {
                      "LevelLow": {
                        "description": "Low level indication for washer fluid. True = Level Low. False = Level OK.", 
                        "type": "Boolean", 
                        "id": 95
                      }, 
                      "Level": {
                        "description": "Washer fluid level as a percentage. 0 = Empty. 100 = Full.", 
                        "type": "UInt8", 
                        "id": 96, 
                        "unit": "percent"
                      }
                    }
                  }
                }
              }
            }
          }, 
          "Hood": {
            "description": "Hood status", 
            "type": "branch", 
            "children": {
              "IsOpen": {
                "description": "hood open or closed. True = Open. False = Closed", 
                "type": "Boolean", 
                "id": 84
              }
            }
          }
        }
      }, 
      "Drivetrain": {
        "description": "Drivetrain data for internal combustion engines, transmissions, electric motors, etc.", 
        "type": "branch", 
        "children": {
          "FuelCell": {
            "type": "branch", 
            "children": {}, 
            "description": "Fuel Cell signals"
          }, 
          "FuelSystem": {
            "description": "Fuel system signals", 
            "type": "branch", 
            "children": {
              "ConsumptionSinceStart": {
                "description": "Fuel amount consumed since start in milliliters.", 
                "type": "UInt32", 
                "id": 82, 
                "unit": "ml"
              }, 
              "TimeSinceStart": {
                "type": "UInt32", 
                "id": 83, 
                "unit": "s", 
                "description": "Time elapsed since start in seconds."
              }, 
              "InstantConsumption": {
                "description": "Current consumption in milliliters per 100 km.", 
                "type": "UInt32", 
                "id": 80, 
                "unit": "ml/100km"
              }, 
              "Level": {
                "type": "UInt8", 
                "id": 78, 
                "unit": "percentage", 
                "description": "Level in fuel tank as percentage of capacity. 0 = empty. 100 = full."
              }, 
              "Range": {
                "description": "Range in meters.", 
                "type": "UInt32", 
                "id": 79, 
                "unit": "m"
              }, 
              "AverageConsumption": {
                "description": "Average consumption in milliliters per 100 km.", 
                "type": "UInt32", 
                "id": 81, 
                "unit": "ml/100km"
              }
            }
          }, 
          "Transmission": {
            "type": "branch", 
            "children": {
              "Temperature": {
                "min": -50, 
                "max": 200, 
                "type": "Int16", 
                "id": 74, 
                "unit": "celsius", 
                "description": "The current gearbox temperature"
              }, 
              "Odometer": {
                "type": "UInt32", 
                "id": 70, 
                "unit": "m", 
                "description": "Odometer reading"
              }, 
              "PerformanceMode": {
                "description": "Current gearbox performance mode.", 
                "type": "String", 
                "enum": [
                  "normal", 
                  "sport", 
                  "economy", 
                  "snow", 
                  "rain"
                ], 
                "id": 72
              }, 
              "ClutchWear": {
                "description": "Clutch wear as a percentage. 0 = no wear. 100 = worn.", 
                "type": "UInt8", 
                "id": 75, 
                "unit": "percentage"
              }, 
              "Speed": {
                "description": "Vehicle speed, as sensed by the gearbox.", 
                "min": -250, 
                "max": 250, 
                "type": "Int32", 
                "id": 69, 
                "unit": "m/s"
              }, 
              "GearChangeMode": {
                "description": "Is the gearbox in automatic or manual (paddle) mode.", 
                "type": "String", 
                "enum": [
                  "manual", 
                  "automatic"
                ], 
                "id": 73
              }, 
              "Gear": {
                "type": "Int8", 
                "description": "Current gear. 0=Neutral. -1=Reverse", 
                "min": -1, 
                "max": 16, 
                "id": 71
              }
            }, 
            "description": "Transmission-specific data, stopping at the drive shafts."
          }, 
          "ElectricMotor": {
            "description": "Electric Motor specific signals.", 
            "type": "branch", 
            "children": {}
          }, 
          "InternalCombustionEngine": {
            "description": "Engine-specific data, stopping at the bell housing.", 
            "type": "branch", 
            "children": {
              "EOP": {
                "description": "Engine oil pressure.", 
                "min": 0, 
                "max": 10000, 
                "type": "Int16", 
                "id": 65, 
                "unit": "mbar"
              }, 
              "MAP": {
                "description": "Manifold air pressure possibly boosted using forced induction.", 
                "min": 0, 
                "max": 10000, 
                "type": "Int16", 
                "id": 62, 
                "unit": "mbar"
              }, 
              "Power": {
                "description": "Current engine power output.", 
                "min": 0, 
                "max": 2000, 
                "type": "Int16", 
                "id": 66, 
                "unit": "kW"
              }, 
              "EOT": {
                "description": "Engine oil temperature.", 
                "min": -50, 
                "max": 300, 
                "type": "Int16", 
                "id": 61, 
                "unit": "celsius"
              }, 
              "Torque": {
                "description": "Current engine torque.", 
                "min": 0, 
                "max": 3000, 
                "type": "Int16", 
                "id": 67, 
                "unit": "Nm"
              }, 
              "AmbientAirTemperature": {
                "type": "Float", 
                "id": 68, 
                "unit": "celsius", 
                "description": "Ambient air temperature"
              }, 
              "ECT": {
                "description": "Engine coolant temperature.", 
                "min": -50, 
                "max": 200, 
                "type": "Int16", 
                "id": 60, 
                "unit": "celsius"
              }, 
              "TPS": {
                "description": "Current throttle position.", 
                "min": 0, 
                "max": 100, 
                "type": "Int8", 
                "id": 64, 
                "unit": "percent"
              }, 
              "MAF": {
                "description": "Grams of air drawn into engine per second.", 
                "min": 0, 
                "max": 3000, 
                "type": "Int16", 
                "id": 63, 
                "unit": "g/s"
              }, 
              "RPM": {
                "description": "Engine speed measured as rotations per minute.", 
                "min": 0, 
                "max": 20000, 
                "type": "UInt16", 
                "id": 59, 
                "unit": "rpm",
                "sensor": "Tachometer"
              }
            }
          }, 
          "BatteryManagement": {
            "description": "Battery Management signals", 
            "type": "branch", 
            "children": {
              "BatteryCapacity": {
                "description": "Remaining capacity of the batter pack", 
                "type": "Int8", 
                "id": 77, 
                "unit": "percentage"
              }, 
              "BatteryTemperature": {
                "type": "Float", 
                "id": 76, 
                "unit": "celsius", 
                "description": "Temperature of the battery pack"
              }
            }
          }
        }
      }, 
      "OBD": {
        "description": "OBD data.", 
        "type": "branch", 
        "children": {
          "TimingAdvance": {
            "description": "PID 0E - Time advance", 
            "type": "Float", 
            "id": 1010, 
            "unit": "degree"
          }, 
          "DistanceSinceDTCClear": {
            "description": "PID 31 - Distance traveled since codes cleared", 
            "type": "Float", 
            "id": 1067, 
            "unit": "km"
          }, 
          "IntakeTemp": {
            "description": "PID 0F - Intake temperature", 
            "type": "Float", 
            "id": 1011, 
            "unit": "celsius"
          }, 
          "LongTermO2Trim1": {
            "description": "PID 56 - Long term secondary O2 trim - Bank 1", 
            "type": "UInt8", 
            "id": 1096, 
            "unit": "percent"
          }, 
          "WarmupsSinceDTCClear": {
            "description": "PID 30 - Number of warm-ups since codes cleared", 
            "type": "UInt16", 
            "id": 1066
          }, 
          "MaxMAF": {
            "description": "PID 50 - Maximum flow for mass air flow sensor", 
            "type": "Float", 
            "id": 1090, 
            "unit": "g/s"
          }, 
          "ControlModuleVoltage": {
            "description": "PID 42 - Control module voltage", 
            "type": "Float", 
            "id": 1077, 
            "unit": "V"
          }, 
          "AcceleratorPositionE": {
            "type": "UInt8", 
            "id": 1085, 
            "unit": "percent", 
            "description": "PID 4A - Accelerator pedal position E"
          }, 
          "FuelStatus": {
            "description": "PID 03 - Fuel status", 
            "type": "String", 
            "id": 999
          }, 
          "FuelPressure": {
            "description": "PID 0A - Fuel pressure", 
            "type": "Float", 
            "id": 1006, 
            "unit": "kpa"
          }, 
          "O2SensorsAlt": {
            "type": "branch", 
            "children": {
              "Bank2": {
                "type": "branch", 
                "children": {
                  "Sensor1": {
                    "description": "Alternate oxygen sensor", 
                    "type": "branch", 
                    "children": {
                      "Present": {
                        "type": "Boolean", 
                        "id": 1036, 
                        "description": "Sensor present - True = sensor present, False = sensor not present"
                      }
                    }
                  }, 
                  "Sensor3": {
                    "description": "Alternate oxygen sensor", 
                    "type": "branch", 
                    "children": {
                      "Present": {
                        "description": "Sensor present - True = sensor present, False = sensor not present", 
                        "type": "Boolean", 
                        "id": 1038
                      }
                    }
                  }, 
                  "Sensor2": {
                    "type": "branch", 
                    "children": {
                      "Present": {
                        "description": "Sensor present - True = sensor present, False = sensor not present", 
                        "type": "Boolean", 
                        "id": 1037
                      }
                    }, 
                    "description": "Alternate oxygen sensor"
                  }, 
                  "Sensor4": {
                    "description": "Alternate oxygen sensor", 
                    "type": "branch", 
                    "children": {
                      "Present": {
                        "description": "Sensor present - True = sensor present, False = sensor not present", 
                        "type": "Boolean", 
                        "id": 1039
                      }
                    }
                  }
                }, 
                "description": "Alternate oxygen sensors on bank 2, at most 4 sensors per bank"
              }, 
              "Bank1": {
                "description": "Alternate oxygen sensors on bank 1, at most 4 sensors per bank", 
                "type": "branch", 
                "children": {
                  "Sensor1": {
                    "description": "Alternate oxygen sensor", 
                    "type": "branch", 
                    "children": {
                      "Present": {
                        "description": "Sensor present - True = sensor present, False = sensor not present", 
                        "type": "Boolean", 
                        "id": 1032
                      }
                    }
                  }, 
                  "Sensor3": {
                    "description": "Alternate oxygen sensor", 
                    "type": "branch", 
                    "children": {
                      "Present": {
                        "description": "Sensor present - True = sensor present, False = sensor not present", 
                        "type": "Boolean", 
                        "id": 1034
                      }
                    }
                  }, 
                  "Sensor2": {
                    "description": "Alternate oxygen sensor", 
                    "type": "branch", 
                    "children": {
                      "Present": {
                        "description": "Sensor present - True = sensor present, False = sensor not present", 
                        "type": "Boolean", 
                        "id": 1033
                      }
                    }
                  }, 
                  "Sensor4": {
                    "description": "Alternate oxygen sensor", 
                    "type": "branch", 
                    "children": {
                      "Present": {
                        "description": "Sensor present - True = sensor present, False = sensor not present", 
                        "type": "Boolean", 
                        "id": 1035
                      }
                    }
                  }
                }
              }
            }, 
            "description": "PID 1D - Presence of alternate oxygen sensors for the banks"
          }, 
          "ShortTermFuelTrim2": {
            "description": "PID 08 - Short Term (immediate) Fuel Trim - Bank 2 - negative percentage leaner, positive percentage richer", 
            "type": "Int8", 
            "id": 1004, 
            "unit": "percentage"
          }, 
          "TimeSinceDTCCleared": {
            "description": "PID 4E - Time since trouble codes cleared", 
            "type": "UInt32", 
            "id": 1089, 
            "unit": "min"
          }, 
          "AuxInputStatus": {
            "description": "PID 1E - Auxiliary input status (power take off)", 
            "type": "Boolean", 
            "id": 1040
          }, 
          "ShortTermFuelTrim1": {
            "description": "PID 06 - Short Term (immediate) Fuel Trim - Bank 1 - negative percentage leaner, positive percentage richer", 
            "type": "Int8", 
            "id": 1002, 
            "unit": "percentage"
          }, 
          "FuelRailPressureDirect": {
            "description": "PID 23 - Fuel rail pressure direct inject", 
            "type": "Float", 
            "id": 1045, 
            "unit": "kpa"
          }, 
          "RelativeThrottlePosition": {
            "type": "UInt8", 
            "id": 1080, 
            "unit": "percent", 
            "description": "PID 45 - Relative throttle position"
          }, 
          "Status": {
            "description": "PID 01 - OBD status", 
            "type": "branch", 
            "children": {
              "DTCCount": {
                "description": "Number of Diagnostic Trouble Codes (DTC)", 
                "type": "UInt32", 
                "id": 997
              }, 
              "IgnitionType": {
                "description": "Type of the ignition for ICE - spark = spark plug ignition, compression = self-igniting (Diesel engines)", 
                "enum": [
                  "spark", 
                  "compression"
                ], 
                "type": "branch", 
                "children": {}
              }, 
              "MIL": {
                "description": "Malfunction Indicator Light (MIL) False = Off, True = On", 
                "type": "Boolean", 
                "id": 996
              }
            }
          }, 
          "AirStatus": {
            "description": "PID 12 - Secondary air status", 
            "type": "String", 
            "id": 1014
          }, 
          "EVAPVaporPressure": {
            "description": "PID 32 - Evaporative purge (EVAP) system pressure", 
            "type": "Float", 
            "id": 1068, 
            "unit": "pa"
          }, 
          "FuelInjectionTiming": {
            "type": "Int16", 
            "id": 1103, 
            "unit": "degree", 
            "description": "PID 5D - Fuel injection timing"
          }, 
          "FuelRate": {
            "description": "PID 5E - Engine fuel rate", 
            "type": "Float", 
            "id": 1104, 
            "unit": "l/h"
          }, 
          "LongTermFuelTrim1": {
            "description": "PID 07 - Long Term (learned) Fuel Trim - Bank 1 - negative percentage leaner, positive percentage richer", 
            "type": "Int8", 
            "id": 1003, 
            "unit": "percentage"
          }, 
          "AcceleratorPositionF": {
            "type": "UInt8", 
            "id": 1086, 
            "unit": "percent", 
            "description": "PID 4B - Accelerator pedal position F"
          }, 
          "EthanolPercent": {
            "type": "UInt8", 
            "id": 1092, 
            "unit": "percent", 
            "description": "PID 52 - Percentage of ethanol in the fuel"
          }, 
          "LongTermFuelTrim2": {
            "type": "Int8", 
            "id": 1005, 
            "unit": "percentage", 
            "description": "PID 09 - Long Term (learned) Fuel Trim - Bank 2 - negative percentage leaner, positive percentage richer"
          }, 
          "CoolantTemperature": {
            "description": "PID 05 - Coolant temperature", 
            "type": "Float", 
            "id": 1001, 
            "unit": "celsius"
          }, 
          "CommandedEVAP": {
            "description": "PID 2E - Commanded evaporative purge (EVAP) valve", 
            "type": "UInt8", 
            "id": 1064, 
            "unit": "percentage"
          }, 
          "Catalyst": {
            "type": "branch", 
            "children": {
              "Bank2": {
                "type": "branch", 
                "children": {
                  "Temperature2": {
                    "description": "PID 3F - Catalyst temperature from bank 2, sensor 2", 
                    "type": "Float", 
                    "id": 1073, 
                    "unit": "celsius"
                  }, 
                  "Temperature1": {
                    "type": "Float", 
                    "id": 1072, 
                    "unit": "celsius", 
                    "description": "PID 3D - Catalyst temperature from bank 2, sensor 1"
                  }
                }, 
                "description": "Catalyst bank 2 signals"
              }, 
              "Bank1": {
                "description": "Catalyst bank 1 signals", 
                "type": "branch", 
                "children": {
                  "Temperature2": {
                    "description": "PID 3E - Catalyst temperature from bank 1, sensor 2", 
                    "type": "Float", 
                    "id": 1071, 
                    "unit": "celsius"
                  }, 
                  "Temperature1": {
                    "description": "PID 3C - Catalyst temperature from bank 1, sensor 1", 
                    "type": "Float", 
                    "id": 1070, 
                    "unit": "celsius"
                  }
                }
              }
            }, 
            "description": "Catalyst signals"
          }, 
          "AcceleratorPositionD": {
            "description": "PID 49 - Accelerator pedal position D", 
            "type": "UInt8", 
            "id": 1084, 
            "unit": "percent"
          }, 
          "RPM": {
            "description": "PID 0C - Engine speed measured as rotations per minute", 
            "type": "Float", 
            "id": 1008, 
            "unit": "rpm"
          }, 
          "PidsB": {
            "type": "UInt32", 
            "id": 1042, 
            "description": "PID 20 - Bitarry of the supported pids 21 to 40"
          }, 
          "PidsA": {
            "description": "PID 00 - Bitarry of the supported pids 01 to 20", 
            "type": "UInt32", 
            "id": 995
          }, 
          "AbsoluteLoad": {
            "type": "UInt8", 
            "id": 1078, 
            "unit": "percent", 
            "description": "PID 43 - Absolute load value"
          }, 
          "EGRError": {
            "description": "PID 2D - Exhaust gas recirculation (EGR) error", 
            "type": "UInt8", 
            "id": 1063, 
            "unit": "percentage"
          }, 
          "RunTimeMIL": {
            "description": "PID 4D - Run time with MIL on", 
            "type": "UInt32", 
            "id": 1088, 
            "unit": "min"
          }, 
          "CommandedEGR": {
            "type": "UInt8", 
            "id": 1062, 
            "unit": "percentage", 
            "description": "PID 2C - Commanded exhaust gas recirculation (EGR)"
          }, 
          "FuelRailPressureAbsolute": {
            "type": "Float", 
            "id": 1099, 
            "unit": "kpa", 
            "description": "PID 59 - Absolute fuel rail pressure"
          }, 
          "FuelLevel": {
            "type": "UInt8", 
            "id": 1065, 
            "unit": "percentage", 
            "description": "PID 2F - Fuel level in the fuel tank"
          }, 
          "CommandedEquivalenceRatio": {
            "description": "PID 44 - Commanded equivalence ratio", 
            "type": "Float", 
            "id": 1079, 
            "unit": "ratio"
          }, 
          "AmbientAirTemperature": {
            "type": "Float", 
            "id": 1081, 
            "unit": "celsius", 
            "description": "PID 46 - Ambient air temperature"
          }, 
          "ThrottlePositionB": {
            "description": "PID 47 - Absolute throttle position B", 
            "type": "UInt8", 
            "id": 1082, 
            "unit": "percent"
          }, 
          "ThrottlePositionC": {
            "type": "UInt8", 
            "id": 1083, 
            "unit": "percent", 
            "description": "PID 48 - Absolute throttle position C"
          }, 
          "ShortTermO2Trim1": {
            "description": "PID 55 - Short term secondary O2 trim - Bank 1", 
            "type": "UInt8", 
            "id": 1095, 
            "unit": "percent"
          }, 
          "DistanceWithMIL": {
            "description": "PID 21 - Distance traveled with MIL on", 
            "type": "UInt32", 
            "id": 1043, 
            "unit": "kilometer"
          }, 
          "EVAPVaporPressureAbsolute": {
            "type": "Float", 
            "id": 1093, 
            "unit": "kpa", 
            "description": "PID 53 - Absolute evaporative purge (EVAP) system pressure"
          }, 
          "ThrottleActuator": {
            "type": "UInt8", 
            "id": 1087, 
            "unit": "percent", 
            "description": "PID 4C - Commanded throttle actuator"
          }, 
          "O2SensorsWR": {
            "description": "Wide range/band oxygen sensors", 
            "type": "branch", 
            "children": {
              "Sensor8": {
                "description": "Wide range/band oxygen senor 8", 
                "type": "branch", 
                "children": {
                  "Current": {
                    "description": "PID 3B - Lambda current for wide range/band oxygen sensor 8", 
                    "type": "Float", 
                    "id": 1061, 
                    "unit": "A"
                  }, 
                  "Voltage": {
                    "description": "PID 2B - Lambda voltage for wide range/band oxygen sensor 8", 
                    "type": "Float", 
                    "id": 1060, 
                    "unit": "V"
                  }
                }
              }, 
              "Sensor1": {
                "type": "branch", 
                "children": {
                  "Current": {
                    "description": "PID 34 - Lambda current for wide range/band oxygen sensor 1", 
                    "type": "Float", 
                    "id": 1047, 
                    "unit": "A"
                  }, 
                  "Voltage": {
                    "type": "Float", 
                    "id": 1046, 
                    "unit": "V", 
                    "description": "PID 24 - Lambda voltage for wide range/band oxygen sensor 1"
                  }
                }, 
                "description": "Wide range/band oxygen senor 1"
              }, 
              "Sensor3": {
                "type": "branch", 
                "children": {
                  "Current": {
                    "type": "Float", 
                    "id": 1051, 
                    "unit": "A", 
                    "description": "PID 36 - Lambda current for wide range/band oxygen sensor 4"
                  }, 
                  "Voltage": {
                    "type": "Float", 
                    "id": 1050, 
                    "unit": "V", 
                    "description": "PID 26 - Lambda voltage for wide range/band oxygen sensor 3"
                  }
                }, 
                "description": "Wide range/band oxygen senor 3"
              }, 
              "Sensor2": {
                "description": "Wide range/band oxygen senor 2", 
                "type": "branch", 
                "children": {
                  "Current": {
                    "type": "Float", 
                    "id": 1049, 
                    "unit": "A", 
                    "description": "PID 35 - Lambda current for wide range/band oxygen sensor 2"
                  }, 
                  "Voltage": {
                    "description": "PID 25 - Lambda voltage for wide range/band oxygen sensor 2", 
                    "type": "Float", 
                    "id": 1048, 
                    "unit": "V"
                  }
                }
              }, 
              "Sensor5": {
                "description": "Wide range/band oxygen senor 5", 
                "type": "branch", 
                "children": {
                  "Current": {
                    "description": "PID 38 - Lambda current for wide range/band oxygen sensor 5", 
                    "type": "Float", 
                    "id": 1055, 
                    "unit": "A"
                  }, 
                  "Voltage": {
                    "description": "PID 28 - Lambda voltage for wide range/band oxygen sensor 5", 
                    "type": "Float", 
                    "id": 1054, 
                    "unit": "V"
                  }
                }
              }, 
              "Sensor4": {
                "description": "Wide range/band oxygen senor 4", 
                "type": "branch", 
                "children": {
                  "Current": {
                    "type": "Float", 
                    "id": 1053, 
                    "unit": "A", 
                    "description": "PID 37 - Lambda current for wide range/band oxygen sensor 4"
                  }, 
                  "Voltage": {
                    "description": "PID 27 - Lambda voltage for wide range/band oxygen sensor 4", 
                    "type": "Float", 
                    "id": 1052, 
                    "unit": "V"
                  }
                }
              }, 
              "Sensor7": {
                "description": "Wide range/band oxygen senor 7", 
                "type": "branch", 
                "children": {
                  "Current": {
                    "description": "PID 3A - Lambda current for wide range/band oxygen sensor 7", 
                    "type": "Float", 
                    "id": 1059, 
                    "unit": "A"
                  }, 
                  "Voltage": {
                    "description": "PID 2A - Lambda voltage for wide range/band oxygen sensor 7", 
                    "type": "Float", 
                    "id": 1058, 
                    "unit": "V"
                  }
                }
              }, 
              "Sensor6": {
                "description": "Wide range/band oxygen senor 6", 
                "type": "branch", 
                "children": {
                  "Current": {
                    "description": "PID 39 - Lambda current for wide range/band oxygen sensor 6", 
                    "type": "Float", 
                    "id": 1057, 
                    "unit": "A"
                  }, 
                  "Voltage": {
                    "type": "Float", 
                    "id": 1056, 
                    "unit": "V", 
                    "description": "PID 29 - Lambda voltage for wide range/band oxygen sensor 6"
                  }
                }
              }
            }
          }, 
          "OilTemperature": {
            "description": "PID 5C - Engine oil temperature", 
            "type": "UInt8", 
            "id": 1102, 
            "unit": "celsius"
          }, 
          "MAP": {
            "description": "PID 0B - Intake manifold pressure", 
            "type": "Float", 
            "id": 1007, 
            "unit": "kpa"
          }, 
          "LongTermO2Trim2": {
            "description": "PID 58 - Long term secondary O2 trim - Bank 2", 
            "type": "UInt8", 
            "id": 1098, 
            "unit": "percent"
          }, 
          "OBDCompliance": {
            "type": "String", 
            "id": 1031, 
            "description": "PID 1C - Compliance details of OBD"
          }, 
          "DriveCycleStatus": {
            "description": "PID 41 - OBD status for the current drive cycle", 
            "type": "branch", 
            "children": {
              "DTCCount": {
                "type": "UInt32", 
                "id": 1076, 
                "description": "Number of Diagnostic Trouble Codes (DTC)"
              }, 
              "IgnitionType": {
                "description": "Type of the ignition for ICE - spark = spark plug ignition, compression = self-igniting (Diesel engines)", 
                "enum": [
                  "spark", 
                  "compression"
                ], 
                "type": "branch", 
                "children": {}
              }, 
              "MIL": {
                "description": "Malfunction Indicator Light (MIL) - False = Off, True = On", 
                "type": "Boolean", 
                "id": 1075
              }
            }
          }, 
          "O2Sensors": {
            "description": "PID 13 - Presence of oxygen sensors for the banks", 
            "type": "branch", 
            "children": {
              "Bank2": {
                "description": "Oxygen sensors on bank 2, at most 4 sensors per bank", 
                "type": "branch", 
                "children": {
                  "Sensor1": {
                    "description": "Oxygen sensor", 
                    "type": "branch", 
                    "children": {
                      "Voltage": {
                        "description": "PID 18 - Sensor voltage", 
                        "type": "Float", 
                        "id": 1024, 
                        "unit": "V"
                      }, 
                      "Present": {
                        "description": "Sensor present - True = sensor present, False = sensor not present", 
                        "type": "Boolean", 
                        "id": 1023
                      }
                    }
                  }, 
                  "Sensor3": {
                    "description": "Oxygen sensor", 
                    "type": "branch", 
                    "children": {
                      "Voltage": {
                        "description": "PID 1A - Sensor voltage", 
                        "type": "Float", 
                        "id": 1028, 
                        "unit": "V"
                      }, 
                      "Present": {
                        "type": "Boolean", 
                        "id": 1027, 
                        "description": "Sensor present - True = sensor present, False = sensor not present"
                      }
                    }
                  }, 
                  "Sensor2": {
                    "type": "branch", 
                    "children": {
                      "Voltage": {
                        "type": "Float", 
                        "id": 1026, 
                        "unit": "V", 
                        "description": "PID 19 - Sensor voltage"
                      }, 
                      "Present": {
                        "description": "Sensor present - True = sensor present, False = sensor not present", 
                        "type": "Boolean", 
                        "id": 1025
                      }
                    }, 
                    "description": "Oxygen sensor"
                  }, 
                  "Sensor4": {
                    "description": "Oxygen sensor", 
                    "type": "branch", 
                    "children": {
                      "Voltage": {
                        "description": "PID 1B - Sensor voltage", 
                        "type": "Float", 
                        "id": 1030, 
                        "unit": "V"
                      }, 
                      "Present": {
                        "description": "Sensor present - True = sensor present, False = sensor not present", 
                        "type": "Boolean", 
                        "id": 1029
                      }
                    }
                  }
                }
              }, 
              "Bank1": {
                "description": "Oxygen sensors on bank 1, at most 4 sensors per bank", 
                "type": "branch", 
                "children": {
                  "Sensor1": {
                    "description": "Oxygen sensor", 
                    "type": "branch", 
                    "children": {
                      "Voltage": {
                        "description": "PID 14 - Sensor voltage", 
                        "type": "Float", 
                        "id": 1016, 
                        "unit": "V"
                      }, 
                      "Present": {
                        "description": "Sensor present - True = sensor present, False = sensor not present", 
                        "type": "Boolean", 
                        "id": 1015
                      }
                    }
                  }, 
                  "Sensor3": {
                    "description": "Oxygen sensor", 
                    "type": "branch", 
                    "children": {
                      "Voltage": {
                        "description": "PID 16 - Sensor voltage", 
                        "type": "Float", 
                        "id": 1020, 
                        "unit": "V"
                      }, 
                      "Present": {
                        "description": "Sensor present - True = sensor present, False = sensor not present", 
                        "type": "Boolean", 
                        "id": 1019
                      }
                    }
                  }, 
                  "Sensor2": {
                    "description": "Oxygen sensor", 
                    "type": "branch", 
                    "children": {
                      "Voltage": {
                        "description": "PID 15 - Sensor voltage", 
                        "type": "Float", 
                        "id": 1018, 
                        "unit": "V"
                      }, 
                      "Present": {
                        "type": "Boolean", 
                        "id": 1017, 
                        "description": "Sensor present - True = sensor present, False = sensor not present"
                      }
                    }
                  }, 
                  "Sensor4": {
                    "description": "Oxygen sensor", 
                    "type": "branch", 
                    "children": {
                      "Voltage": {
                        "description": "PID 17 - Sensor voltage", 
                        "type": "Float", 
                        "id": 1022, 
                        "unit": "V"
                      }, 
                      "Present": {
                        "type": "Boolean", 
                        "id": 1021, 
                        "description": "Sensor present - True = sensor present, False = sensor not present"
                      }
                    }
                  }
                }
              }
            }
          }, 
          "ShortTermO2Trim2": {
            "description": "PID 57 - Short term secondary O2 trim - Bank 2", 
            "type": "UInt8", 
            "id": 1097, 
            "unit": "percent"
          }, 
          "PidsC": {
            "description": "PID 40 - Bitarry of the supported pids 41 to 60", 
            "type": "UInt32", 
            "id": 1074
          }, 
          "HybridBatteryRemaining": {
            "type": "UInt8", 
            "id": 1101, 
            "unit": "percent", 
            "description": "PID 5B - Remaining life of hybrid battery"
          }, 
          "RelativeAcceleratorPosition": {
            "type": "UInt8", 
            "id": 1100, 
            "unit": "percent", 
            "description": "PID 5A - Relative accelerator pedal position"
          }, 
          "FreezeDTC": {
            "description": "PID 02 - DTC that triggered the freeze frame", 
            "type": "String", 
            "id": 998
          }, 
          "FuelType": {
            "description": "PID 51 - Fuel type", 
            "type": "String", 
            "id": 1091
          }, 
          "EngineLoad": {
            "description": "PID 04 - Engine load in percent - 0 = no load, 100 = full load", 
            "type": "UInt8", 
            "id": 1000, 
            "unit": "percentage"
          }, 
          "BarometricPressure": {
            "type": "Float", 
            "id": 1069, 
            "unit": "kpa", 
            "description": "PID 33 - Barometric pressure"
          }, 
          "FuelRailPressureVac": {
            "type": "Float", 
            "id": 1044, 
            "unit": "kpa", 
            "description": "PID 22 - Fuel rail pressure relative to vacuum"
          }, 
          "MAF": {
            "type": "Int16", 
            "id": 1012, 
            "unit": "g/s", 
            "description": "PID 10 - Grams of air drawn into engine per second"
          }, 
          "EVAPVaporPressureAlternate": {
            "description": "PID 54 - Alternate evaporative purge (EVAP) system pressure", 
            "type": "Float", 
            "id": 1094, 
            "unit": "pa"
          }, 
          "RunTime": {
            "description": "PID 1F - Engine run time", 
            "type": "UInt32", 
            "id": 1041, 
            "unit": "s"
          }, 
          "Speed": {
            "description": "PID 0D - Vehicle speed", 
            "type": "Float", 
            "id": 1009, 
            "unit": "km/h",
            "sensor":"Speedometer"
          }, 
          "ThrottlePosition": {
            "type": "UInt8", 
            "id": 1013, 
            "unit": "percentage", 
            "description": "PID 11 - Throttle position - 0 = closed throttle, 100 = open throttle"
          }
        }
      }, 
      "ADAS": {
        "description": "All Advanced Driver Assist Systems signals", 
        "type": "branch", 
        "children": {
          "ObstacleSensor": {
            "description": "Signals form Obstacle Sensor System", 
            "type": "branch", 
            "children": {
              "DistanceToObject": {
                "description": "Distance signals form Obstacle Sensor System", 
                "type": "branch", 
                "children": {
                  "RearLeft": {
                    "type": "UInt16", 
                    "id": 950, 
                    "unit": "mm", 
                    "description": "Rear left distance to object in millimeters"
                  }, 
                  "FrontLeft": {
                    "type": "UInt16", 
                    "id": 948, 
                    "unit": "mm", 
                    "description": "Front left distance to object in millimeters"
                  }, 
                  "FrontRight": {
                    "type": "UInt16", 
                    "id": 949, 
                    "unit": "mm", 
                    "description": "Front right distance to object in millimeters"
                  }, 
                  "RearRight": {
                    "description": "Rear right distance to object in millimeters", 
                    "type": "UInt16", 
                    "id": 951, 
                    "unit": "mm"
                  }
                }
              }, 
              "IsActive": {
                "description": "Indicates if obstacle sensor system is enabled. Tue = Enabled. False = Disabled.", 
                "type": "Boolean", 
                "id": 946
              }, 
              "Error": {
                "type": "Boolean", 
                "id": 947, 
                "description": "Indicates if obstacle sensor system incurred an error condition. True = Error. False = No Error."
              }
            }
          }, 
          "TCS": {
            "type": "branch", 
            "children": {
              "IsEngaged": {
                "description": "Indicates if TCS is currently regulating traction. True = Engaged. False = Not Engaged.", 
                "type": "Boolean", 
                "id": 957
              }, 
              "IsActive": {
                "description": "Indicates if TCS is enabled. Tue = Enabled. False = Disabled.", 
                "type": "Boolean", 
                "id": 955
              }, 
              "Error": {
                "type": "Boolean", 
                "id": 956, 
                "description": "Indicates if TCS incurred an error condition. True = Error. False = No Error."
              }
            }, 
            "description": "Traction Control System signals"
          }, 
          "CruiseControl": {
            "description": "Signals from Cruise Control system", 
            "type": "branch", 
            "children": {
              "SpeedSet": {
                "description": "Set cruise control speed in meters per hour", 
                "type": "Int32", 
                "id": 941, 
                "unit": "mps"
              }, 
              "IsActive": {
                "description": "Indicates if cruise control system is enabled. True = Enabled. False = Disabled.", 
                "type": "Boolean", 
                "id": 940
              }, 
              "Error": {
                "description": "Indicates if cruise control system incurred and error condition. True = Error. False = NoError.", 
                "type": "Boolean", 
                "id": 942
              }
            }
          }, 
          "ABS": {
            "description": "Antilock Braking System signals", 
            "type": "branch", 
            "children": {
              "IsEngaged": {
                "description": "Indicates if ABS is currently regulating brake pressure. True = Engaged. False = Not Engaged.", 
                "type": "Boolean", 
                "id": 954
              }, 
              "IsActive": {
                "description": "Indicates if ABS is enabled. Tue = Enabled. False = Disabled.", 
                "type": "Boolean", 
                "id": 952
              }, 
              "Error": {
                "type": "Boolean", 
                "id": 953, 
                "description": "Indicates if ABS incurred an error condition. True = Error. False = No Error."
              }
            }
          }, 
          "ESC": {
            "description": "Electronic Stability Control System signals", 
            "type": "branch", 
            "children": {
              "IsEngaged": {
                "description": "Indicates if ESC is currently regulating vehicle stability. True = Engaged. False = Not Engaged.", 
                "type": "Boolean", 
                "id": 960
              }, 
              "IsActive": {
                "type": "Boolean", 
                "id": 958, 
                "description": "Indicates if ECS is enabled. Tue = Enabled. False = Disabled."
              }, 
              "Error": {
                "description": "Indicates if ESC incurred an error condition. True = Error. False = No Error.", 
                "type": "Boolean", 
                "id": 959
              }
            }
          }, 
          "LaneDepartureDetection": {
            "description": "Signals from Land Departure Detection System", 
            "type": "branch", 
            "children": {
              "Warning": {
                "type": "Boolean", 
                "id": 944, 
                "description": "Indicates if lane departure detection registered a lane departure"
              }, 
              "IsActive": {
                "description": "Indicates if lane departure detection system is enabled. True = Enabled. False = Disabled.", 
                "type": "Boolean", 
                "id": 943
              }, 
              "Error": {
                "description": "Indicates if lane departure system incurred an error condition. True = Error. False = No Error.", 
                "type": "Boolean", 
                "id": 945
              }
            }
          }
        }
      }, 
      "Chassis": {
        "description": "All signals concerning steering, suspension, wheels, and brakes.", 
        "type": "branch", 
        "children": {
          "Accelerator": {
            "description": "Accelerator signals", 
            "type": "branch", 
            "children": {
              "PedalPosition": {
                "type": "UInt8", 
                "id": 993, 
                "unit": "percentage", 
                "description": "Accelerator pedal position as percentage. 0 = Not depressed. 100 = Fully depressed."
              }
            }
          }, 
          "Brake": {
            "description": "Brake system signals", 
            "type": "branch", 
            "children": {
              "PedalPosition": {
                "description": "Brake pedal position as percentage. 0 = Not depressed. 100 = Fully depressed.", 
                "type": "UInt8", 
                "id": 994, 
                "unit": "percentage"
              }
            }
          }, 
          "ParkingBrake": {
            "type": "branch", 
            "children": {
              "IsEngaged": {
                "description": "Parking brake status. True = Parking Brake is Engaged. False = Parking Brake is not Engaged.", 
                "type": "Boolean", 
                "id": 989
              }
            }, 
            "description": "Parking brake signals"
          }, 
          "Axle": {
            "description": "Axle signals", 
            "type": "branch", 
            "children": {
              "Row1": {
                "description": "Axle signals for first row", 
                "type": "branch", 
                "children": {
                  "Wheel": {
                    "description": "Brake signals for first row", 
                    "type": "branch", 
                    "children": {
                      "Right": {
                        "type": "branch", 
                        "children": {
                          "Brake": {
                            "description": "Brake signals for wheel", 
                            "type": "branch", 
                            "children": {
                              "FluidLevel": {
                                "type": "UInt8", 
                                "id": 968, 
                                "unit": "percentage", 
                                "description": "Brake fluid level as percentage. 0 = Empty. 100 = Full."
                              }, 
                              "FluidLevelLow": {
                                "description": "Brake fluid level status. True = Brake fluid level low. False = Brake fluid level OK.", 
                                "type": "Boolean", 
                                "id": 969
                              }, 
                              "BrakesWorn": {
                                "type": "Boolean", 
                                "id": 971, 
                                "description": "Brake pad wear status. True = Worn. False = Not Worn."
                              }, 
                              "PadWear": {
                                "description": "Brake pad wear as percentage. 0 = No Wear. 100 = Worn.", 
                                "type": "UInt8", 
                                "id": 970
                              }
                            }
                          }, 
                          "Tire": {
                            "description": "Tire signals for wheel", 
                            "type": "branch", 
                            "children": {
                              "Pressure": {
                                "description": "Tire pressure in kilo-Pascal", 
                                "type": "UInt8", 
                                "id": 972, 
                                "unit": "kpa"
                              }, 
                              "PressureLow": {
                                "description": "Tire Pressure Status. True = Low tire pressure. False = Good tire pressure.", 
                                "type": "Boolean", 
                                "id": 973
                              }, 
                              "Temperature": {
                                "type": "Float", 
                                "id": 974, 
                                "unit": "celsius", 
                                "description": "Tire temperature in Celsius."
                              }
                            }
                          }
                        }, 
                        "description": "Row1 wheel right."
                      }, 
                      "Left": {
                        "description": "Row1 wheel left.", 
                        "type": "branch", 
                        "children": {
                          "Brake": {
                            "description": "Brake signals for wheel", 
                            "type": "branch", 
                            "children": {
                              "FluidLevel": {
                                "type": "UInt8", 
                                "id": 961, 
                                "unit": "percentage", 
                                "description": "Brake fluid level as percentage. 0 = Empty. 100 = Full."
                              }, 
                              "FluidLevelLow": {
                                "description": "Brake fluid level status. True = Brake fluid level low. False = Brake fluid level OK.", 
                                "type": "Boolean", 
                                "id": 962
                              }, 
                              "BrakesWorn": {
                                "type": "Boolean", 
                                "id": 964, 
                                "description": "Brake pad wear status. True = Worn. False = Not Worn."
                              }, 
                              "PadWear": {
                                "description": "Brake pad wear as percentage. 0 = No Wear. 100 = Worn.", 
                                "type": "UInt8", 
                                "id": 963
                              }
                            }
                          }, 
                          "Tire": {
                            "description": "Tire signals for wheel", 
                            "type": "branch", 
                            "children": {
                              "Pressure": {
                                "description": "Tire pressure in kilo-Pascal", 
                                "type": "UInt8", 
                                "id": 965, 
                                "unit": "kpa"
                              }, 
                              "PressureLow": {
                                "description": "Tire Pressure Status. True = Low tire pressure. False = Good tire pressure.", 
                                "type": "Boolean", 
                                "id": 966
                              }, 
                              "Temperature": {
                                "type": "Float", 
                                "id": 967, 
                                "unit": "celsius", 
                                "description": "Tire temperature in Celsius."
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }, 
              "Row2": {
                "type": "branch", 
                "children": {
                  "Wheel": {
                    "description": "Wheel signals for second row", 
                    "type": "branch", 
                    "children": {
                      "Right": {
                        "description": "Row2 wheel right.", 
                        "type": "branch", 
                        "children": {
                          "Brake": {
                            "description": "Brake signals for wheel", 
                            "type": "branch", 
                            "children": {
                              "FluidLevel": {
                                "type": "UInt8", 
                                "id": 982, 
                                "unit": "percentage", 
                                "description": "Brake fluid level as percentage. 0 = Empty. 100 = Full."
                              }, 
                              "FluidLevelLow": {
                                "description": "Brake fluid level status. True = Brake fluid level low. False = Brake fluid level OK.", 
                                "type": "Boolean", 
                                "id": 983
                              }, 
                              "BrakesWorn": {
                                "type": "Boolean", 
                                "id": 985, 
                                "description": "Brake pad wear status. True = Worn. False = Not Worn."
                              }, 
                              "PadWear": {
                                "description": "Brake pad wear as percentage. 0 = No Wear. 100 = Worn.", 
                                "type": "UInt8", 
                                "id": 984
                              }
                            }
                          }, 
                          "Tire": {
                            "description": "Tire signals for wheel", 
                            "type": "branch", 
                            "children": {
                              "Pressure": {
                                "description": "Tire pressure in kilo-Pascal", 
                                "type": "UInt8", 
                                "id": 986, 
                                "unit": "kpa"
                              }, 
                              "PressureLow": {
                                "description": "Tire Pressure Status. True = Low tire pressure. False = Good tire pressure.", 
                                "type": "Boolean", 
                                "id": 987
                              }, 
                              "Temperature": {
                                "type": "Float", 
                                "id": 988, 
                                "unit": "celsius", 
                                "description": "Tire temperature in Celsius."
                              }
                            }
                          }
                        }
                      }, 
                      "Left": {
                        "description": "Row2 wheel left.", 
                        "type": "branch", 
                        "children": {
                          "Brake": {
                            "description": "Brake signals for wheel", 
                            "type": "branch", 
                            "children": {
                              "FluidLevel": {
                                "type": "UInt8", 
                                "id": 975, 
                                "unit": "percentage", 
                                "description": "Brake fluid level as percentage. 0 = Empty. 100 = Full."
                              }, 
                              "FluidLevelLow": {
                                "description": "Brake fluid level status. True = Brake fluid level low. False = Brake fluid level OK.", 
                                "type": "Boolean", 
                                "id": 976
                              }, 
                              "BrakesWorn": {
                                "type": "Boolean", 
                                "id": 978, 
                                "description": "Brake pad wear status. True = Worn. False = Not Worn."
                              }, 
                              "PadWear": {
                                "description": "Brake pad wear as percentage. 0 = No Wear. 100 = Worn.", 
                                "type": "UInt8", 
                                "id": 977
                              }
                            }
                          }, 
                          "Tire": {
                            "description": "Tire signals for wheel", 
                            "type": "branch", 
                            "children": {
                              "Pressure": {
                                "description": "Tire pressure in kilo-Pascal", 
                                "type": "UInt8", 
                                "id": 979, 
                                "unit": "kpa"
                              }, 
                              "PressureLow": {
                                "description": "Tire Pressure Status. True = Low tire pressure. False = Good tire pressure.", 
                                "type": "Boolean", 
                                "id": 980
                              }, 
                              "Temperature": {
                                "type": "Float", 
                                "id": 981, 
                                "unit": "celsius", 
                                "description": "Tire temperature in Celsius."
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }, 
                "description": "Axle signals for second row"
              }
            }
          }, 
          "SteeringWheel": {
            "type": "branch", 
            "children": {
              "Tilt": {
                "type": "UInt8", 
                "id": 991, 
                "unit": "percentage", 
                "description": "Steering wheel column tilt. 0 = Lowest position. 100 = Highest position."
              }, 
              "Angle": {
                "description": "Steering wheel angle. Positive = degrees to the left. Negative = degrees to the right.", 
                "type": "Int16", 
                "id": 990, 
                "unit": "degree"
              }, 
              "Extension": {
                "description": "Steering wheel column extension from dashboard. 0 = Closest to dashboard. 100 = Furthest from dashboard.", 
                "type": "UInt8", 
                "id": 992, 
                "unit": "percentage"
              }
            }, 
            "description": "Steering wheel signals"
          }
        }
      }, 
      "Vehicle": {
        "type": "branch", 
        "children": {
          "Acceleration": {
            "description": "Spacial acceleration", 
            "type": "branch", 
            "children": {
              "Y": {
                "description": "Vehicle acceleration in Y (lateral acceleration).", 
                "type": "Int32", 
                "id": 54, 
                "unit": "cm/s2"
              }, 
              "X": {
                "description": "Vehicle acceleration in X (longitudinal acceleration).", 
                "type": "Int32", 
                "id": 53, 
                "unit": "cm/s2"
              }, 
              "Yaw": {
                "description": "Vehicle rotation rate along Z (vertical).", 
                "type": "Int16", 
                "id": 58, 
                "unit": "degrees/s"
              }, 
              "Z": {
                "description": "Vehicle acceleration in Z (vertical acceleration).", 
                "type": "Int32", 
                "id": 55, 
                "unit": "cm/s2"
              }, 
              "Pitch": {
                "type": "Int16", 
                "id": 57, 
                "unit": "degrees/s", 
                "description": "Vehicle rotation rate along Y (lateral)."
              }
            }
          }, 
          "IdleTime": {
            "description": "Accumulated idle time in seconds.", 
            "type": "UInt32", 
            "id": 48, 
            "unit": "s"
          }, 
          "Odometer": {
            "type": "UInt32", 
            "id": 50, 
            "unit": "m", 
            "description": "Odometer reading"
          }, 
          "DriveTime": {
            "description": "Accumulated drive time in seconds.", 
            "type": "UInt32", 
            "id": 47, 
            "unit": "s"
          }, 
          "Gyro": {
            "description": "Spacial rotation", 
            "type": "branch", 
            "children": {
              "Roll": {
                "type": "Int16", 
                "id": 56, 
                "unit": "degrees/s", 
                "description": "Vehicle rotation rate along X (longitudinal)."
              }
            }
          }, 
          "IgnitionOffTime": {
            "description": "Accumulated ignition off time in seconds.", 
            "type": "UInt32", 
            "id": 46, 
            "unit": "s"
          }, 
          "TripMeter": {
            "description": "Current trip meter reading", 
            "type": "UInt32", 
            "id": 51, 
            "unit": "m"
          }, 
          "AmbientAirTemperature": {
            "type": "Float", 
            "id": 52, 
            "unit": "celsius", 
            "description": "Ambient air temperature"
          }, 
          "Speed": {
            "description": "Vehicle speed, as sensed by the gearbox.", 
            "min": -250, 
            "max": 250, 
            "type": "Int32", 
            "id": 49, 
            "unit": "m/s"
          }, 
          "IgnitionOnTime": {
            "type": "UInt32", 
            "id": 45, 
            "unit": "s", 
            "description": "Accumulated ignition on time in seconds."
          }
        }, 
        "description": "Highlevel vehicle data."
      }, 
      "Cabin": {
        "description": "All in-cabin components, including doors.", 
        "type": "branch", 
        "children": {
          "Door": {
            "description": "All doors, including windows and switches", 
            "type": "branch", 
            "children": {
              "Row1": {
                "description": "Front doors", 
                "type": "branch", 
                "children": {
                  "Right": {
                    "description": "Right front door", 
                    "type": "branch", 
                    "children": {
                      "IsChildLockActive": {
                        "description": "Is door child lock engaged. True = Engaged. False = Disengaged.", 
                        "type": "Boolean", 
                        "id": 195
                      }, 
                      "IsLocked": {
                        "description": "Is door locked or unlocked. True = Locked. False = Unlocked.", 
                        "type": "Boolean", 
                        "id": 192
                      }, 
                      "Shade": {
                        "description": "Side window shade", 
                        "type": "branch", 
                        "children": {
                          "Position": {
                            "type": "UInt8", 
                            "min": 0, 
                            "max": 100, 
                            "id": 197, 
                            "description": "Position of side window blind. 0 = Fully retracted. 100 = Fully deployed."
                          }, 
                          "Switch": {
                            "description": "Switch controlling sliding action such as window, sunroof, or blind.", 
                            "type": "String", 
                            "enum": [
                              "Inactive", 
                              "Close", 
                              "Open", 
                              "OneShotClose", 
                              "OneShotOpen"
                            ], 
                            "id": 196
                          }
                        }
                      }, 
                      "Window": {
                        "description": "Door window status", 
                        "type": "branch", 
                        "children": {
                          "Position": {
                            "type": "UInt8", 
                            "min": 0, 
                            "max": 100, 
                            "id": 193, 
                            "description": "Window position. 0 = Fully closed 100 = Fully opened."
                          }, 
                          "Switch": {
                            "description": "Switch controlling sliding action such as window, sunroof, or blind.", 
                            "type": "String", 
                            "enum": [
                              "Inactive", 
                              "Close", 
                              "Open", 
                              "OneShotClose", 
                              "OneShotOpen"
                            ], 
                            "id": 194
                          }
                        }
                      }, 
                      "IsOpen": {
                        "description": "Is door open or closed", 
                        "type": "Boolean", 
                        "id": 191
                      }
                    }
                  }, 
                  "Left": {
                    "description": "Left front door", 
                    "type": "branch", 
                    "children": {
                      "IsChildLockActive": {
                        "description": "Is door child lock engaged. True = Engaged. False = Disengaged.", 
                        "type": "Boolean", 
                        "id": 188
                      }, 
                      "IsLocked": {
                        "description": "Is door locked or unlocked. True = Locked. False = Unlocked.", 
                        "type": "Boolean", 
                        "id": 185
                      }, 
                      "Shade": {
                        "description": "Side window shade", 
                        "type": "branch", 
                        "children": {
                          "Position": {
                            "type": "UInt8", 
                            "min": 0, 
                            "max": 100, 
                            "id": 190, 
                            "description": "Position of side window blind. 0 = Fully retracted. 100 = Fully deployed."
                          }, 
                          "Switch": {
                            "description": "Switch controlling sliding action such as window, sunroof, or blind.", 
                            "type": "String", 
                            "enum": [
                              "Inactive", 
                              "Close", 
                              "Open", 
                              "OneShotClose", 
                              "OneShotOpen"
                            ], 
                            "id": 189
                          }
                        }
                      }, 
                      "Window": {
                        "description": "Door window status", 
                        "type": "branch", 
                        "children": {
                          "Position": {
                            "type": "UInt8", 
                            "min": 0, 
                            "max": 100, 
                            "id": 186, 
                            "description": "Window position. 0 = Fully closed 100 = Fully opened."
                          }, 
                          "Switch": {
                            "description": "Switch controlling sliding action such as window, sunroof, or blind.", 
                            "type": "String", 
                            "enum": [
                              "Inactive", 
                              "Close", 
                              "Open", 
                              "OneShotClose", 
                              "OneShotOpen"
                            ], 
                            "id": 187
                          }
                        }
                      }, 
                      "IsOpen": {
                        "description": "Is door open or closed", 
                        "type": "Boolean", 
                        "id": 184
                      }
                    }
                  }
                }
              }, 
              "Row2": {
                "type": "branch", 
                "children": {
                  "Right": {
                    "description": "Right second row door", 
                    "type": "branch", 
                    "children": {
                      "IsChildLockActive": {
                        "description": "Is door child lock engaged. True = Engaged. False = Disengaged.", 
                        "type": "Boolean", 
                        "id": 209
                      }, 
                      "IsLocked": {
                        "description": "Is door locked or unlocked. True = Locked. False = Unlocked.", 
                        "type": "Boolean", 
                        "id": 206
                      }, 
                      "Shade": {
                        "description": "Side window shade", 
                        "type": "branch", 
                        "children": {
                          "Position": {
                            "type": "UInt8", 
                            "min": 0, 
                            "max": 100, 
                            "id": 211, 
                            "description": "Position of side window blind. 0 = Fully retracted. 100 = Fully deployed."
                          }, 
                          "Switch": {
                            "description": "Switch controlling sliding action such as window, sunroof, or blind.", 
                            "type": "String", 
                            "enum": [
                              "Inactive", 
                              "Close", 
                              "Open", 
                              "OneShotClose", 
                              "OneShotOpen"
                            ], 
                            "id": 210
                          }
                        }
                      }, 
                      "Window": {
                        "description": "Door window status", 
                        "type": "branch", 
                        "children": {
                          "Position": {
                            "type": "UInt8", 
                            "min": 0, 
                            "max": 100, 
                            "id": 207, 
                            "description": "Window position. 0 = Fully closed 100 = Fully opened."
                          }, 
                          "Switch": {
                            "description": "Switch controlling sliding action such as window, sunroof, or blind.", 
                            "type": "String", 
                            "enum": [
                              "Inactive", 
                              "Close", 
                              "Open", 
                              "OneShotClose", 
                              "OneShotOpen"
                            ], 
                            "id": 208
                          }
                        }
                      }, 
                      "IsOpen": {
                        "description": "Is door open or closed", 
                        "type": "Boolean", 
                        "id": 205
                      }
                    }
                  }, 
                  "Left": {
                    "type": "branch", 
                    "children": {
                      "IsChildLockActive": {
                        "description": "Is door child lock engaged. True = Engaged. False = Disengaged.", 
                        "type": "Boolean", 
                        "id": 202
                      }, 
                      "IsLocked": {
                        "description": "Is door locked or unlocked. True = Locked. False = Unlocked.", 
                        "type": "Boolean", 
                        "id": 199
                      }, 
                      "Shade": {
                        "description": "Side window shade", 
                        "type": "branch", 
                        "children": {
                          "Position": {
                            "type": "UInt8", 
                            "min": 0, 
                            "max": 100, 
                            "id": 204, 
                            "description": "Position of side window blind. 0 = Fully retracted. 100 = Fully deployed."
                          }, 
                          "Switch": {
                            "description": "Switch controlling sliding action such as window, sunroof, or blind.", 
                            "type": "String", 
                            "enum": [
                              "Inactive", 
                              "Close", 
                              "Open", 
                              "OneShotClose", 
                              "OneShotOpen"
                            ], 
                            "id": 203
                          }
                        }
                      }, 
                      "Window": {
                        "description": "Door window status", 
                        "type": "branch", 
                        "children": {
                          "Position": {
                            "type": "UInt8", 
                            "min": 0, 
                            "max": 100, 
                            "id": 200, 
                            "description": "Window position. 0 = Fully closed 100 = Fully opened."
                          }, 
                          "Switch": {
                            "description": "Switch controlling sliding action such as window, sunroof, or blind.", 
                            "type": "String", 
                            "enum": [
                              "Inactive", 
                              "Close", 
                              "Open", 
                              "OneShotClose", 
                              "OneShotOpen"
                            ], 
                            "id": 201
                          }
                        }
                      }, 
                      "IsOpen": {
                        "description": "Is door open or closed", 
                        "type": "Boolean", 
                        "id": 198
                      }
                    }, 
                    "description": "Left second row door"
                  }
                }, 
                "description": "Second row doors"
              }, 
              "Row3": {
                "description": "Third row doors", 
                "type": "branch", 
                "children": {
                  "Right": {
                    "description": "Right third row door", 
                    "type": "branch", 
                    "children": {
                      "IsChildLockActive": {
                        "description": "Is door child lock engaged. True = Engaged. False = Disengaged.", 
                        "type": "Boolean", 
                        "id": 223
                      }, 
                      "IsLocked": {
                        "description": "Is door locked or unlocked. True = Locked. False = Unlocked.", 
                        "type": "Boolean", 
                        "id": 220
                      }, 
                      "Shade": {
                        "description": "Side window shade", 
                        "type": "branch", 
                        "children": {
                          "Position": {
                            "type": "UInt8", 
                            "min": 0, 
                            "max": 100, 
                            "id": 225, 
                            "description": "Position of side window blind. 0 = Fully retracted. 100 = Fully deployed."
                          }, 
                          "Switch": {
                            "description": "Switch controlling sliding action such as window, sunroof, or blind.", 
                            "type": "String", 
                            "enum": [
                              "Inactive", 
                              "Close", 
                              "Open", 
                              "OneShotClose", 
                              "OneShotOpen"
                            ], 
                            "id": 224
                          }
                        }
                      }, 
                      "Window": {
                        "description": "Door window status", 
                        "type": "branch", 
                        "children": {
                          "Position": {
                            "type": "UInt8", 
                            "min": 0, 
                            "max": 100, 
                            "id": 221, 
                            "description": "Window position. 0 = Fully closed 100 = Fully opened."
                          }, 
                          "Switch": {
                            "description": "Switch controlling sliding action such as window, sunroof, or blind.", 
                            "type": "String", 
                            "enum": [
                              "Inactive", 
                              "Close", 
                              "Open", 
                              "OneShotClose", 
                              "OneShotOpen"
                            ], 
                            "id": 222
                          }
                        }
                      }, 
                      "IsOpen": {
                        "description": "Is door open or closed", 
                        "type": "Boolean", 
                        "id": 219
                      }
                    }
                  }, 
                  "Left": {
                    "description": "Left third row door", 
                    "type": "branch", 
                    "children": {
                      "IsChildLockActive": {
                        "description": "Is door child lock engaged. True = Engaged. False = Disengaged.", 
                        "type": "Boolean", 
                        "id": 216
                      }, 
                      "IsLocked": {
                        "description": "Is door locked or unlocked. True = Locked. False = Unlocked.", 
                        "type": "Boolean", 
                        "id": 213
                      }, 
                      "Shade": {
                        "description": "Side window shade", 
                        "type": "branch", 
                        "children": {
                          "Position": {
                            "type": "UInt8", 
                            "min": 0, 
                            "max": 100, 
                            "id": 218, 
                            "description": "Position of side window blind. 0 = Fully retracted. 100 = Fully deployed."
                          }, 
                          "Switch": {
                            "description": "Switch controlling sliding action such as window, sunroof, or blind.", 
                            "type": "String", 
                            "enum": [
                              "Inactive", 
                              "Close", 
                              "Open", 
                              "OneShotClose", 
                              "OneShotOpen"
                            ], 
                            "id": 217
                          }
                        }
                      }, 
                      "Window": {
                        "description": "Door window status", 
                        "type": "branch", 
                        "children": {
                          "Position": {
                            "type": "UInt8", 
                            "min": 0, 
                            "max": 100, 
                            "id": 214, 
                            "description": "Window position. 0 = Fully closed 100 = Fully opened."
                          }, 
                          "Switch": {
                            "description": "Switch controlling sliding action such as window, sunroof, or blind.", 
                            "type": "String", 
                            "enum": [
                              "Inactive", 
                              "Close", 
                              "Open", 
                              "OneShotClose", 
                              "OneShotOpen"
                            ], 
                            "id": 215
                          }
                        }
                      }, 
                      "IsOpen": {
                        "description": "Is door open or closed", 
                        "type": "Boolean", 
                        "id": 212
                      }
                    }
                  }
                }
              }, 
              "Row4": {
                "description": "Fourth row doors", 
                "type": "branch", 
                "children": {
                  "Right": {
                    "description": "Right fourth row door", 
                    "type": "branch", 
                    "children": {
                      "IsChildLockActive": {
                        "description": "Is door child lock engaged. True = Engaged. False = Disengaged.", 
                        "type": "Boolean", 
                        "id": 237
                      }, 
                      "IsLocked": {
                        "description": "Is door locked or unlocked. True = Locked. False = Unlocked.", 
                        "type": "Boolean", 
                        "id": 234
                      }, 
                      "Shade": {
                        "description": "Side window shade", 
                        "type": "branch", 
                        "children": {
                          "Position": {
                            "type": "UInt8", 
                            "min": 0, 
                            "max": 100, 
                            "id": 239, 
                            "description": "Position of side window blind. 0 = Fully retracted. 100 = Fully deployed."
                          }, 
                          "Switch": {
                            "description": "Switch controlling sliding action such as window, sunroof, or blind.", 
                            "type": "String", 
                            "enum": [
                              "Inactive", 
                              "Close", 
                              "Open", 
                              "OneShotClose", 
                              "OneShotOpen"
                            ], 
                            "id": 238
                          }
                        }
                      }, 
                      "Window": {
                        "description": "Door window status", 
                        "type": "branch", 
                        "children": {
                          "Position": {
                            "type": "UInt8", 
                            "min": 0, 
                            "max": 100, 
                            "id": 235, 
                            "description": "Window position. 0 = Fully closed 100 = Fully opened."
                          }, 
                          "Switch": {
                            "description": "Switch controlling sliding action such as window, sunroof, or blind.", 
                            "type": "String", 
                            "enum": [
                              "Inactive", 
                              "Close", 
                              "Open", 
                              "OneShotClose", 
                              "OneShotOpen"
                            ], 
                            "id": 236
                          }
                        }
                      }, 
                      "IsOpen": {
                        "description": "Is door open or closed", 
                        "type": "Boolean", 
                        "id": 233
                      }
                    }
                  }, 
                  "Left": {
                    "type": "branch", 
                    "children": {
                      "IsChildLockActive": {
                        "description": "Is door child lock engaged. True = Engaged. False = Disengaged.", 
                        "type": "Boolean", 
                        "id": 230
                      }, 
                      "IsLocked": {
                        "description": "Is door locked or unlocked. True = Locked. False = Unlocked.", 
                        "type": "Boolean", 
                        "id": 227
                      }, 
                      "Shade": {
                        "description": "Side window shade", 
                        "type": "branch", 
                        "children": {
                          "Position": {
                            "type": "UInt8", 
                            "min": 0, 
                            "max": 100, 
                            "id": 232, 
                            "description": "Position of side window blind. 0 = Fully retracted. 100 = Fully deployed."
                          }, 
                          "Switch": {
                            "description": "Switch controlling sliding action such as window, sunroof, or blind.", 
                            "type": "String", 
                            "enum": [
                              "Inactive", 
                              "Close", 
                              "Open", 
                              "OneShotClose", 
                              "OneShotOpen"
                            ], 
                            "id": 231
                          }
                        }
                      }, 
                      "Window": {
                        "description": "Door window status", 
                        "type": "branch", 
                        "children": {
                          "Position": {
                            "type": "UInt8", 
                            "min": 0, 
                            "max": 100, 
                            "id": 228, 
                            "description": "Window position. 0 = Fully closed 100 = Fully opened."
                          }, 
                          "Switch": {
                            "description": "Switch controlling sliding action such as window, sunroof, or blind.", 
                            "type": "String", 
                            "enum": [
                              "Inactive", 
                              "Close", 
                              "Open", 
                              "OneShotClose", 
                              "OneShotOpen"
                            ], 
                            "id": 229
                          }
                        }
                      }, 
                      "IsOpen": {
                        "description": "Is door open or closed", 
                        "type": "Boolean", 
                        "id": 226
                      }
                    }, 
                    "description": "Left fourth row door"
                  }
                }
              }
            }
          }, 
          "HVAC": {
            "description": "Climate control", 
            "type": "branch", 
            "children": {
              "Row1": {
                "description": "Frontmost row HVAC.", 
                "type": "branch", 
                "children": {
                  "Right": {
                    "type": "branch", 
                    "children": {
                      "FanSpeed": {
                        "type": "UInt8", 
                        "min": 0, 
                        "max": 20, 
                        "id": 119, 
                        "description": "Fan Speed, 0 = off. 20 = max"
                      }, 
                      "Temperature": {
                        "min": -50, 
                        "max": 50, 
                        "type": "Int8", 
                        "id": 120, 
                        "unit": "celsius", 
                        "description": "Temperature"
                      }, 
                      "AirDistribution": {
                        "type": "String", 
                        "enum": [
                          "up", 
                          "middle", 
                          "down"
                        ], 
                        "id": 121, 
                        "description": "Direction of airstream"
                      }
                    }, 
                    "description": "Frontmost row right HVAC."
                  }, 
                  "Left": {
                    "type": "branch", 
                    "children": {
                      "FanSpeed": {
                        "type": "UInt8", 
                        "min": 0, 
                        "max": 20, 
                        "id": 116, 
                        "description": "Fan Speed, 0 = off. 20 = max"
                      }, 
                      "Temperature": {
                        "min": -50, 
                        "max": 50, 
                        "type": "Int8", 
                        "id": 117, 
                        "unit": "celsius", 
                        "description": "Temperature"
                      }, 
                      "AirDistribution": {
                        "type": "String", 
                        "enum": [
                          "up", 
                          "middle", 
                          "down"
                        ], 
                        "id": 118, 
                        "description": "Direction of airstream"
                      }
                    }, 
                    "description": "Frontmost row left HVAC."
                  }
                }
              }, 
              "Row2": {
                "description": "Second row HVAC.", 
                "type": "branch", 
                "children": {
                  "Right": {
                    "description": "Second row right HVAC.", 
                    "type": "branch", 
                    "children": {
                      "FanSpeed": {
                        "type": "UInt8", 
                        "min": 0, 
                        "max": 20, 
                        "id": 125, 
                        "description": "Fan Speed, 0 = off. 20 = max"
                      }, 
                      "Temperature": {
                        "min": -50, 
                        "max": 50, 
                        "type": "Int8", 
                        "id": 126, 
                        "unit": "celsius", 
                        "description": "Temperature"
                      }, 
                      "AirDistribution": {
                        "type": "String", 
                        "enum": [
                          "up", 
                          "middle", 
                          "down"
                        ], 
                        "id": 127, 
                        "description": "Direction of airstream"
                      }
                    }
                  }, 
                  "Left": {
                    "description": "Second row left HVAC.", 
                    "type": "branch", 
                    "children": {
                      "FanSpeed": {
                        "type": "UInt8", 
                        "min": 0, 
                        "max": 20, 
                        "id": 122, 
                        "description": "Fan Speed, 0 = off. 20 = max"
                      }, 
                      "Temperature": {
                        "min": -50, 
                        "max": 50, 
                        "type": "Int8", 
                        "id": 123, 
                        "unit": "celsius", 
                        "description": "Temperature"
                      }, 
                      "AirDistribution": {
                        "type": "String", 
                        "enum": [
                          "up", 
                          "middle", 
                          "down"
                        ], 
                        "id": 124, 
                        "description": "Direction of airstream"
                      }
                    }
                  }
                }
              }, 
              "Row3": {
                "description": "Third row HVAC.", 
                "type": "branch", 
                "children": {
                  "Right": {
                    "description": "Third row right HVAC.", 
                    "type": "branch", 
                    "children": {
                      "FanSpeed": {
                        "type": "UInt8", 
                        "min": 0, 
                        "max": 20, 
                        "id": 131, 
                        "description": "Fan Speed, 0 = off. 20 = max"
                      }, 
                      "Temperature": {
                        "min": -50, 
                        "max": 50, 
                        "type": "Int8", 
                        "id": 132, 
                        "unit": "celsius", 
                        "description": "Temperature"
                      }, 
                      "AirDistribution": {
                        "type": "String", 
                        "enum": [
                          "up", 
                          "middle", 
                          "down"
                        ], 
                        "id": 133, 
                        "description": "Direction of airstream"
                      }
                    }
                  }, 
                  "Left": {
                    "type": "branch", 
                    "children": {
                      "FanSpeed": {
                        "type": "UInt8", 
                        "min": 0, 
                        "max": 20, 
                        "id": 128, 
                        "description": "Fan Speed, 0 = off. 20 = max"
                      }, 
                      "Temperature": {
                        "min": -50, 
                        "max": 50, 
                        "type": "Int8", 
                        "id": 129, 
                        "unit": "celsius", 
                        "description": "Temperature"
                      }, 
                      "AirDistribution": {
                        "type": "String", 
                        "enum": [
                          "up", 
                          "middle", 
                          "down"
                        ], 
                        "id": 130, 
                        "description": "Direction of airstream"
                      }
                    }, 
                    "description": "Third row left HVAC."
                  }
                }
              }, 
              "Row4": {
                "description": "Fourth row HVAC.", 
                "type": "branch", 
                "children": {
                  "Right": {
                    "description": "Fourth row right HVAC.", 
                    "type": "branch", 
                    "children": {
                      "FanSpeed": {
                        "type": "UInt8", 
                        "min": 0, 
                        "max": 20, 
                        "id": 137, 
                        "description": "Fan Speed, 0 = off. 20 = max"
                      }, 
                      "Temperature": {
                        "min": -50, 
                        "max": 50, 
                        "type": "Int8", 
                        "id": 138, 
                        "unit": "celsius", 
                        "description": "Temperature"
                      }, 
                      "AirDistribution": {
                        "type": "String", 
                        "enum": [
                          "up", 
                          "middle", 
                          "down"
                        ], 
                        "id": 139, 
                        "description": "Direction of airstream"
                      }
                    }
                  }, 
                  "Left": {
                    "description": "Fourth row left HVAC.", 
                    "type": "branch", 
                    "children": {
                      "FanSpeed": {
                        "type": "UInt8", 
                        "min": 0, 
                        "max": 20, 
                        "id": 134, 
                        "description": "Fan Speed, 0 = off. 20 = max"
                      }, 
                      "Temperature": {
                        "min": -50, 
                        "max": 50, 
                        "type": "Int8", 
                        "id": 135, 
                        "unit": "celsius", 
                        "description": "Temperature"
                      }, 
                      "AirDistribution": {
                        "type": "String", 
                        "enum": [
                          "up", 
                          "middle", 
                          "down"
                        ], 
                        "id": 136, 
                        "description": "Direction of airstream"
                      }
                    }
                  }
                }
              }, 
              "AmbientAirTemperature": {
                "type": "Float", 
                "id": 144, 
                "unit": "celsius", 
                "description": "Ambient air temperature"
              }, 
              "IsRearDefrosterActive": {
                "description": "Is rear defroster active.", 
                "type": "Boolean", 
                "id": 142
              }, 
              "IsRecirculationActive": {
                "description": "Is recirculation active.", 
                "type": "Boolean", 
                "id": 140
              }, 
              "IsFrontDefrosterActive": {
                "type": "Boolean", 
                "id": 141, 
                "description": "Is front defroster active."
              }, 
              "IsAirConditioningActive": {
                "description": "Is Air conditioning active.", 
                "type": "Boolean", 
                "id": 143
              }
            }
          }, 
          "Infotainment": {
            "description": "Infotainment system", 
            "type": "branch", 
            "children": {
              "Media": {
                "description": "All Media actions", 
                "type": "branch", 
                "children": {
                  "Action": {
                    "description": "Tells if the media was", 
                    "type": "String", 
                    "enum": [
                      "unknown", 
                      "Stop", 
                      "Play", 
                      "FastForward", 
                      "FastBackward", 
                      "SkipForward", 
                      "SkipBackward"
                    ], 
                    "id": 145
                  }, 
                  "SelectedURI": {
                    "description": "URI of suggested media that was selected", 
                    "type": "String", 
                    "id": 152
                  }, 
                  "Volume": {
                    "type": "UInt8", 
                    "min": 0, 
                    "max": 100, 
                    "id": 153, 
                    "description": "Current Media Volume"
                  }, 
                  "DeclinedURI": {
                    "type": "String", 
                    "id": 151, 
                    "description": "URI of suggested media that was declined"
                  }, 
                  "Played": {
                    "aggregate": true, 
                    "type": "branch", 
                    "children": {
                      "Album": {
                        "description": "Name of album being played", 
                        "type": "String", 
                        "id": 148
                      }, 
                      "Source": {
                        "description": "Media selected for playback", 
                        "type": "String", 
                        "enum": [
                          "unknown", 
                          "SiriusXM", 
                          "AM", 
                          "FM", 
                          "DAB", 
                          "TV", 
                          "CD", 
                          "DVD", 
                          "AUX", 
                          "USB", 
                          "Disk", 
                          "Bluetooth", 
                          "Internet", 
                          "Voice", 
                          "Beep"
                        ], 
                        "id": 146
                      }, 
                      "Track": {
                        "description": "Name of track being played", 
                        "type": "String", 
                        "id": 149
                      }, 
                      "URI": {
                        "type": "String", 
                        "id": 150, 
                        "description": "User Resource associated with the media"
                      }, 
                      "Artist": {
                        "description": "Name of artist being played", 
                        "type": "String", 
                        "id": 147
                      }
                    }, 
                    "description": "Collection of signals updated in concert when a new media is played"
                  }
                }
              }, 
              "Navigation": {
                "description": "All navigation actions", 
                "type": "branch", 
                "children": {
                  "DestinatonSet": {
                    "description": "A navigation has been selected.", 
                    "aggregate": true, 
                    "type": "branch", 
                    "children": {
                      "Latitude": {
                        "type": "Double", 
                        "min": -90, 
                        "max": 90, 
                        "id": 154, 
                        "description": "Latitude of destination"
                      }, 
                      "Longitude": {
                        "type": "Double", 
                        "min": -180, 
                        "max": 180, 
                        "id": 155, 
                        "description": "Longitude of destination"
                      }
                    }
                  }, 
                  "CurrentLocation": {
                    "description": "The current latitude and longitude of the vehicle.", 
                    "aggregate": true, 
                    "type": "branch", 
                    "children": {
                      "Altitude": {
                        "type": "Double", 
                        "id": 160, 
                        "unit": "m", 
                        "description": "Current elevation of the position in meters."
                      }, 
                      "Longitude": {
                        "type": "Double", 
                        "min": -180, 
                        "max": 180, 
                        "id": 157, 
                        "description": "Current longitude of vehicle, as reported by GPS."
                      }, 
                      "Latitude": {
                        "type": "Double", 
                        "min": -90, 
                        "max": 90, 
                        "id": 156, 
                        "description": "Current latitude of vehicle, as reported by GPS."
                      }, 
                      "Speed": {
                        "description": "Vehicle speed, as sensed by the GPS receiver.", 
                        "min": 0, 
                        "max": 250, 
                        "type": "UInt16", 
                        "id": 161, 
                        "unit": "m/s"
                      }, 
                      "Heading": {
                        "type": "Double", 
                        "min": 0, 
                        "max": 360, 
                        "id": 158, 
                        "description": "Current magnetic compass heading, in degrees."
                      }, 
                      "Accuracy": {
                        "description": "Accuracy level of the latitude and longitude coordinates in meters.", 
                        "type": "Double", 
                        "id": 159, 
                        "unit": "m"
                      }
                    }
                  }
                }
              }
            }
          }, 
          "Sunroof": {
            "description": "Sun roof status.", 
            "type": "branch", 
            "children": {
              "Position": {
                "type": "Int8", 
                "min": -100, 
                "max": 100, 
                "id": 162, 
                "description": "Sunroof position. 0 = Fully closed 100 = Fully opened. -100 = Fully tilted"
              }, 
              "Switch": {
                "description": "Switch controlling sliding action such as window, sunroof, or shade.", 
                "type": "String", 
                "enum": [
                  "Inactive", 
                  "Close", 
                  "Open", 
                  "OneShotClose", 
                  "OneShotOpen", 
                  "TiltUp", 
                  "TiltDown"
                ], 
                "id": 163
              }, 
              "Shade": {
                "description": "Sun roof shade status", 
                "type": "branch", 
                "children": {
                  "Position": {
                    "type": "UInt8", 
                    "min": 0, 
                    "max": 100, 
                    "id": 165, 
                    "description": "Position of side window blind. 0 = Fully retracted. 100 = Fully deployed."
                  }, 
                  "Switch": {
                    "description": "Switch controlling sliding action such as window, sunroof, or blind.", 
                    "type": "String", 
                    "enum": [
                      "Inactive", 
                      "Close", 
                      "Open", 
                      "OneShotClose", 
                      "OneShotOpen"
                    ], 
                    "id": 164
                  }
                }
              }
            }
          }, 
          "Seat": {
            "type": "branch", 
            "children": {
              "Row1": {
                "description": "Front seats", 
                "type": "branch", 
                "children": {
                  "Pos4": {
                    "description": "Fourth seat from left, front row", 
                    "type": "branch", 
                    "children": {
                      "HeadRestraint": {
                        "type": "branch", 
                        "children": {
                          "Height": {
                            "description": "Height of head restraint. 0 = Bottommost. 255 = Topmost.", 
                            "min": 0, 
                            "max": 255, 
                            "type": "UInt8", 
                            "id": 356, 
                            "unit": "mm"
                          }
                        }, 
                        "description": "Head restraint settings"
                      }, 
                      "Recline": {
                        "description": "Recline level. -90 = Max forward recline. 90 max backward recline", 
                        "min": -90, 
                        "max": 90, 
                        "type": "Int8", 
                        "id": 349, 
                        "unit": "degree"
                      }, 
                      "HasPassenger": {
                        "description": "Does the seat have a passenger in it.", 
                        "type": "Boolean", 
                        "id": 345
                      }, 
                      "Heating": {
                        "type": "Int8", 
                        "description": "Seat cooling / heating. 0 = off. -10 = max cold. +10 = max heat", 
                        "min": -10, 
                        "max": 10, 
                        "id": 347
                      }, 
                      "Lumbar": {
                        "type": "branch", 
                        "children": {
                          "Inflation": {
                            "type": "UInt8", 
                            "description": "Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.", 
                            "min": 0, 
                            "max": 255, 
                            "id": 353
                          }, 
                          "Height": {
                            "type": "UInt8", 
                            "description": "Lumbar support position. 0 = Lowermost. 255 = Uppermost.", 
                            "min": 0, 
                            "max": 255, 
                            "id": 354
                          }
                        }, 
                        "description": "Lumbar signals"
                      }, 
                      "Airbag": {
                        "description": "Airbag signals", 
                        "type": "branch", 
                        "children": {
                          "IsDeployed": {
                            "description": "Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.", 
                            "type": "Boolean", 
                            "id": 357
                          }
                        }
                      }, 
                      "Switch": {
                        "description": "Seat switch signals", 
                        "type": "branch", 
                        "children": {
                          "HeadRestraint": {
                            "description": "Head restraint switches", 
                            "type": "branch", 
                            "children": {
                              "Down": {
                                "type": "Boolean", 
                                "id": 365, 
                                "description": "Head restraint down switch engaged"
                              }, 
                              "Up": {
                                "description": "Head restraint up switch engaged", 
                                "type": "Boolean", 
                                "id": 364
                              }
                            }
                          }, 
                          "Cooler": {
                            "type": "Boolean", 
                            "id": 359, 
                            "description": "Cooler switch for Seat heater"
                          }, 
                          "Recline": {
                            "description": "Recline switches", 
                            "type": "branch", 
                            "children": {
                              "Forward": {
                                "type": "Boolean", 
                                "id": 369, 
                                "description": "Seatback recline forward switch engaged"
                              }, 
                              "Backward": {
                                "description": "Seatback recline backward switch engaged", 
                                "type": "Boolean", 
                                "id": 368
                              }
                            }
                          }, 
                          "Up": {
                            "description": "Seat up switch engaged", 
                            "type": "Boolean", 
                            "id": 362
                          }, 
                          "Lumbar": {
                            "description": "Lumbar switches", 
                            "type": "branch", 
                            "children": {
                              "Down": {
                                "type": "Boolean", 
                                "id": 375, 
                                "description": "Lumbar down switch engaged"
                              }, 
                              "Inflate": {
                                "description": "Lumbar inflation switch engaged", 
                                "type": "Boolean", 
                                "id": 376
                              }, 
                              "Up": {
                                "description": "Lumbar up switch engaged", 
                                "type": "Boolean", 
                                "id": 374
                              }, 
                              "Deflate": {
                                "type": "Boolean", 
                                "id": 377, 
                                "description": "Lumbar deflation switch engaged"
                              }
                            }
                          }, 
                          "Down": {
                            "description": "Seat down switch engaged", 
                            "type": "Boolean", 
                            "id": 363
                          }, 
                          "Warmer": {
                            "type": "Boolean", 
                            "id": 358, 
                            "description": "Warmer switch for Seat heater"
                          }, 
                          "Cushion": {
                            "description": "Cushion switches", 
                            "type": "branch", 
                            "children": {
                              "Down": {
                                "description": "Seat cushion down switch engaged", 
                                "type": "Boolean", 
                                "id": 371
                              }, 
                              "Forward": {
                                "description": "Seat cushion forward/lengthen switch engaged", 
                                "type": "Boolean", 
                                "id": 372
                              }, 
                              "Backward": {
                                "type": "Boolean", 
                                "id": 373, 
                                "description": "Seat cushion backward/shorten switch engaged"
                              }, 
                              "Up": {
                                "type": "Boolean", 
                                "id": 370, 
                                "description": "Seat cushion up switch engaged"
                              }
                            }
                          }, 
                          "Forward": {
                            "type": "Boolean", 
                            "id": 360, 
                            "description": "Seat forward switch engaged"
                          }, 
                          "Backward": {
                            "description": "Seat forward switch engaged", 
                            "type": "Boolean", 
                            "id": 361
                          }, 
                          "Massage": {
                            "type": "branch", 
                            "children": {
                              "Increase": {
                                "description": "Increase massage level switch engaged", 
                                "type": "Boolean", 
                                "id": 366
                              }, 
                              "Decrease": {
                                "description": "Decrease massage level switch engaged", 
                                "type": "Boolean", 
                                "id": 367
                              }
                            }, 
                            "description": "Massage switches"
                          }, 
                          "SideBolster": {
                            "description": "Side bolster switches", 
                            "type": "branch", 
                            "children": {
                              "Inflate": {
                                "description": "Lumbar inflation switch engaged", 
                                "type": "Boolean", 
                                "id": 378
                              }, 
                              "Deflate": {
                                "type": "Boolean", 
                                "id": 379, 
                                "description": "Lumbar deflation switch engaged"
                              }
                            }
                          }
                        }
                      }, 
                      "Cushion": {
                        "description": "Cushion signals.", 
                        "type": "branch", 
                        "children": {
                          "Length": {
                            "description": "Forward length of cushion (leg support). 0 = Rearmost. 500 = Forwardmost.", 
                            "min": 0, 
                            "max": 500, 
                            "type": "UInt16", 
                            "id": 352, 
                            "unit": "mm"
                          }, 
                          "Height": {
                            "description": "Height of the seat front. 0 = Lowermost. 500 = Uppermost.", 
                            "min": 0, 
                            "max": 500, 
                            "type": "UInt16", 
                            "id": 351, 
                            "unit": "mm"
                          }
                        }
                      }, 
                      "IsBelted": {
                        "description": "Is the belt engaged.", 
                        "type": "Boolean", 
                        "id": 346
                      }, 
                      "Position": {
                        "description": "Seat horizontal position. 0 = Frontmost. 1000 = Rearmost", 
                        "min": 0, 
                        "max": 1000, 
                        "type": "UInt16", 
                        "id": 350, 
                        "unit": "mm"
                      }, 
                      "SideBolster": {
                        "type": "branch", 
                        "children": {
                          "Inflation": {
                            "type": "UInt8", 
                            "description": "Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.", 
                            "min": 0, 
                            "max": 255, 
                            "id": 355
                          }
                        }, 
                        "description": "Side bolster settings"
                      }, 
                      "Massage": {
                        "type": "UInt8", 
                        "min": 0, 
                        "max": 10, 
                        "id": 348, 
                        "description": "Seat massage level. 0 = off. 10 = max massage."
                      }
                    }
                  }, 
                  "Pos5": {
                    "description": "Fifth seat from left, front row", 
                    "type": "branch", 
                    "children": {
                      "HeadRestraint": {
                        "type": "branch", 
                        "children": {
                          "Height": {
                            "description": "Height of head restraint. 0 = Bottommost. 255 = Topmost.", 
                            "min": 0, 
                            "max": 255, 
                            "type": "UInt8", 
                            "id": 391, 
                            "unit": "mm"
                          }
                        }, 
                        "description": "Head restraint settings"
                      }, 
                      "Recline": {
                        "description": "Recline level. -90 = Max forward recline. 90 max backward recline", 
                        "min": -90, 
                        "max": 90, 
                        "type": "Int8", 
                        "id": 384, 
                        "unit": "degree"
                      }, 
                      "HasPassenger": {
                        "description": "Does the seat have a passenger in it.", 
                        "type": "Boolean", 
                        "id": 380
                      }, 
                      "Heating": {
                        "type": "Int8", 
                        "description": "Seat cooling / heating. 0 = off. -10 = max cold. +10 = max heat", 
                        "min": -10, 
                        "max": 10, 
                        "id": 382
                      }, 
                      "Lumbar": {
                        "type": "branch", 
                        "children": {
                          "Inflation": {
                            "type": "UInt8", 
                            "description": "Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.", 
                            "min": 0, 
                            "max": 255, 
                            "id": 388
                          }, 
                          "Height": {
                            "type": "UInt8", 
                            "description": "Lumbar support position. 0 = Lowermost. 255 = Uppermost.", 
                            "min": 0, 
                            "max": 255, 
                            "id": 389
                          }
                        }, 
                        "description": "Lumbar signals"
                      }, 
                      "Airbag": {
                        "description": "Airbag signals", 
                        "type": "branch", 
                        "children": {
                          "IsDeployed": {
                            "description": "Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.", 
                            "type": "Boolean", 
                            "id": 392
                          }
                        }
                      }, 
                      "Switch": {
                        "description": "Seat switch signals", 
                        "type": "branch", 
                        "children": {
                          "HeadRestraint": {
                            "description": "Head restraint switches", 
                            "type": "branch", 
                            "children": {
                              "Down": {
                                "type": "Boolean", 
                                "id": 400, 
                                "description": "Head restraint down switch engaged"
                              }, 
                              "Up": {
                                "description": "Head restraint up switch engaged", 
                                "type": "Boolean", 
                                "id": 399
                              }
                            }
                          }, 
                          "Cooler": {
                            "type": "Boolean", 
                            "id": 394, 
                            "description": "Cooler switch for Seat heater"
                          }, 
                          "Recline": {
                            "description": "Recline switches", 
                            "type": "branch", 
                            "children": {
                              "Forward": {
                                "type": "Boolean", 
                                "id": 404, 
                                "description": "Seatback recline forward switch engaged"
                              }, 
                              "Backward": {
                                "description": "Seatback recline backward switch engaged", 
                                "type": "Boolean", 
                                "id": 403
                              }
                            }
                          }, 
                          "Up": {
                            "description": "Seat up switch engaged", 
                            "type": "Boolean", 
                            "id": 397
                          }, 
                          "Lumbar": {
                            "description": "Lumbar switches", 
                            "type": "branch", 
                            "children": {
                              "Down": {
                                "type": "Boolean", 
                                "id": 410, 
                                "description": "Lumbar down switch engaged"
                              }, 
                              "Inflate": {
                                "description": "Lumbar inflation switch engaged", 
                                "type": "Boolean", 
                                "id": 411
                              }, 
                              "Up": {
                                "description": "Lumbar up switch engaged", 
                                "type": "Boolean", 
                                "id": 409
                              }, 
                              "Deflate": {
                                "type": "Boolean", 
                                "id": 412, 
                                "description": "Lumbar deflation switch engaged"
                              }
                            }
                          }, 
                          "Down": {
                            "description": "Seat down switch engaged", 
                            "type": "Boolean", 
                            "id": 398
                          }, 
                          "Warmer": {
                            "type": "Boolean", 
                            "id": 393, 
                            "description": "Warmer switch for Seat heater"
                          }, 
                          "Cushion": {
                            "description": "Cushion switches", 
                            "type": "branch", 
                            "children": {
                              "Down": {
                                "description": "Seat cushion down switch engaged", 
                                "type": "Boolean", 
                                "id": 406
                              }, 
                              "Forward": {
                                "description": "Seat cushion forward/lengthen switch engaged", 
                                "type": "Boolean", 
                                "id": 407
                              }, 
                              "Backward": {
                                "type": "Boolean", 
                                "id": 408, 
                                "description": "Seat cushion backward/shorten switch engaged"
                              }, 
                              "Up": {
                                "type": "Boolean", 
                                "id": 405, 
                                "description": "Seat cushion up switch engaged"
                              }
                            }
                          }, 
                          "Forward": {
                            "type": "Boolean", 
                            "id": 395, 
                            "description": "Seat forward switch engaged"
                          }, 
                          "Backward": {
                            "description": "Seat forward switch engaged", 
                            "type": "Boolean", 
                            "id": 396
                          }, 
                          "Massage": {
                            "type": "branch", 
                            "children": {
                              "Increase": {
                                "description": "Increase massage level switch engaged", 
                                "type": "Boolean", 
                                "id": 401
                              }, 
                              "Decrease": {
                                "description": "Decrease massage level switch engaged", 
                                "type": "Boolean", 
                                "id": 402
                              }
                            }, 
                            "description": "Massage switches"
                          }, 
                          "SideBolster": {
                            "description": "Side bolster switches", 
                            "type": "branch", 
                            "children": {
                              "Inflate": {
                                "description": "Lumbar inflation switch engaged", 
                                "type": "Boolean", 
                                "id": 413
                              }, 
                              "Deflate": {
                                "type": "Boolean", 
                                "id": 414, 
                                "description": "Lumbar deflation switch engaged"
                              }
                            }
                          }
                        }
                      }, 
                      "Cushion": {
                        "description": "Cushion signals.", 
                        "type": "branch", 
                        "children": {
                          "Length": {
                            "description": "Forward length of cushion (leg support). 0 = Rearmost. 500 = Forwardmost.", 
                            "min": 0, 
                            "max": 500, 
                            "type": "UInt16", 
                            "id": 387, 
                            "unit": "mm"
                          }, 
                          "Height": {
                            "description": "Height of the seat front. 0 = Lowermost. 500 = Uppermost.", 
                            "min": 0, 
                            "max": 500, 
                            "type": "UInt16", 
                            "id": 386, 
                            "unit": "mm"
                          }
                        }
                      }, 
                      "IsBelted": {
                        "description": "Is the belt engaged.", 
                        "type": "Boolean", 
                        "id": 381
                      }, 
                      "Position": {
                        "description": "Seat horizontal position. 0 = Frontmost. 1000 = Rearmost", 
                        "min": 0, 
                        "max": 1000, 
                        "type": "UInt16", 
                        "id": 385, 
                        "unit": "mm"
                      }, 
                      "SideBolster": {
                        "type": "branch", 
                        "children": {
                          "Inflation": {
                            "type": "UInt8", 
                            "description": "Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.", 
                            "min": 0, 
                            "max": 255, 
                            "id": 390
                          }
                        }, 
                        "description": "Side bolster settings"
                      }, 
                      "Massage": {
                        "type": "UInt8", 
                        "min": 0, 
                        "max": 10, 
                        "id": 383, 
                        "description": "Seat massage level. 0 = off. 10 = max massage."
                      }
                    }
                  }, 
                  "Pos2": {
                    "description": "Second seat from left, front row", 
                    "type": "branch", 
                    "children": {
                      "HeadRestraint": {
                        "type": "branch", 
                        "children": {
                          "Height": {
                            "description": "Height of head restraint. 0 = Bottommost. 255 = Topmost.", 
                            "min": 0, 
                            "max": 255, 
                            "type": "UInt8", 
                            "id": 286, 
                            "unit": "mm"
                          }
                        }, 
                        "description": "Head restraint settings"
                      }, 
                      "Recline": {
                        "description": "Recline level. -90 = Max forward recline. 90 max backward recline", 
                        "min": -90, 
                        "max": 90, 
                        "type": "Int8", 
                        "id": 279, 
                        "unit": "degree"
                      }, 
                      "HasPassenger": {
                        "description": "Does the seat have a passenger in it.", 
                        "type": "Boolean", 
                        "id": 275
                      }, 
                      "Heating": {
                        "type": "Int8", 
                        "description": "Seat cooling / heating. 0 = off. -10 = max cold. +10 = max heat", 
                        "min": -10, 
                        "max": 10, 
                        "id": 277
                      }, 
                      "Lumbar": {
                        "type": "branch", 
                        "children": {
                          "Inflation": {
                            "type": "UInt8", 
                            "description": "Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.", 
                            "min": 0, 
                            "max": 255, 
                            "id": 283
                          }, 
                          "Height": {
                            "type": "UInt8", 
                            "description": "Lumbar support position. 0 = Lowermost. 255 = Uppermost.", 
                            "min": 0, 
                            "max": 255, 
                            "id": 284
                          }
                        }, 
                        "description": "Lumbar signals"
                      }, 
                      "Airbag": {
                        "description": "Airbag signals", 
                        "type": "branch", 
                        "children": {
                          "IsDeployed": {
                            "description": "Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.", 
                            "type": "Boolean", 
                            "id": 287
                          }
                        }
                      }, 
                      "Switch": {
                        "description": "Seat switch signals", 
                        "type": "branch", 
                        "children": {
                          "HeadRestraint": {
                            "description": "Head restraint switches", 
                            "type": "branch", 
                            "children": {
                              "Down": {
                                "type": "Boolean", 
                                "id": 295, 
                                "description": "Head restraint down switch engaged"
                              }, 
                              "Up": {
                                "description": "Head restraint up switch engaged", 
                                "type": "Boolean", 
                                "id": 294
                              }
                            }
                          }, 
                          "Cooler": {
                            "type": "Boolean", 
                            "id": 289, 
                            "description": "Cooler switch for Seat heater"
                          }, 
                          "Recline": {
                            "description": "Recline switches", 
                            "type": "branch", 
                            "children": {
                              "Forward": {
                                "type": "Boolean", 
                                "id": 299, 
                                "description": "Seatback recline forward switch engaged"
                              }, 
                              "Backward": {
                                "description": "Seatback recline backward switch engaged", 
                                "type": "Boolean", 
                                "id": 298
                              }
                            }
                          }, 
                          "Up": {
                            "description": "Seat up switch engaged", 
                            "type": "Boolean", 
                            "id": 292
                          }, 
                          "Lumbar": {
                            "description": "Lumbar switches", 
                            "type": "branch", 
                            "children": {
                              "Down": {
                                "type": "Boolean", 
                                "id": 305, 
                                "description": "Lumbar down switch engaged"
                              }, 
                              "Inflate": {
                                "description": "Lumbar inflation switch engaged", 
                                "type": "Boolean", 
                                "id": 306
                              }, 
                              "Up": {
                                "description": "Lumbar up switch engaged", 
                                "type": "Boolean", 
                                "id": 304
                              }, 
                              "Deflate": {
                                "type": "Boolean", 
                                "id": 307, 
                                "description": "Lumbar deflation switch engaged"
                              }
                            }
                          }, 
                          "Down": {
                            "description": "Seat down switch engaged", 
                            "type": "Boolean", 
                            "id": 293
                          }, 
                          "Warmer": {
                            "type": "Boolean", 
                            "id": 288, 
                            "description": "Warmer switch for Seat heater"
                          }, 
                          "Cushion": {
                            "description": "Cushion switches", 
                            "type": "branch", 
                            "children": {
                              "Down": {
                                "description": "Seat cushion down switch engaged", 
                                "type": "Boolean", 
                                "id": 301
                              }, 
                              "Forward": {
                                "description": "Seat cushion forward/lengthen switch engaged", 
                                "type": "Boolean", 
                                "id": 302
                              }, 
                              "Backward": {
                                "type": "Boolean", 
                                "id": 303, 
                                "description": "Seat cushion backward/shorten switch engaged"
                              }, 
                              "Up": {
                                "type": "Boolean", 
                                "id": 300, 
                                "description": "Seat cushion up switch engaged"
                              }
                            }
                          }, 
                          "Forward": {
                            "type": "Boolean", 
                            "id": 290, 
                            "description": "Seat forward switch engaged"
                          }, 
                          "Backward": {
                            "description": "Seat forward switch engaged", 
                            "type": "Boolean", 
                            "id": 291
                          }, 
                          "Massage": {
                            "type": "branch", 
                            "children": {
                              "Increase": {
                                "description": "Increase massage level switch engaged", 
                                "type": "Boolean", 
                                "id": 296
                              }, 
                              "Decrease": {
                                "description": "Decrease massage level switch engaged", 
                                "type": "Boolean", 
                                "id": 297
                              }
                            }, 
                            "description": "Massage switches"
                          }, 
                          "SideBolster": {
                            "description": "Side bolster switches", 
                            "type": "branch", 
                            "children": {
                              "Inflate": {
                                "description": "Lumbar inflation switch engaged", 
                                "type": "Boolean", 
                                "id": 308
                              }, 
                              "Deflate": {
                                "type": "Boolean", 
                                "id": 309, 
                                "description": "Lumbar deflation switch engaged"
                              }
                            }
                          }
                        }
                      }, 
                      "Cushion": {
                        "description": "Cushion signals.", 
                        "type": "branch", 
                        "children": {
                          "Length": {
                            "description": "Forward length of cushion (leg support). 0 = Rearmost. 500 = Forwardmost.", 
                            "min": 0, 
                            "max": 500, 
                            "type": "UInt16", 
                            "id": 282, 
                            "unit": "mm"
                          }, 
                          "Height": {
                            "description": "Height of the seat front. 0 = Lowermost. 500 = Uppermost.", 
                            "min": 0, 
                            "max": 500, 
                            "type": "UInt16", 
                            "id": 281, 
                            "unit": "mm"
                          }
                        }
                      }, 
                      "IsBelted": {
                        "description": "Is the belt engaged.", 
                        "type": "Boolean", 
                        "id": 276
                      }, 
                      "Position": {
                        "description": "Seat horizontal position. 0 = Frontmost. 1000 = Rearmost", 
                        "min": 0, 
                        "max": 1000, 
                        "type": "UInt16", 
                        "id": 280, 
                        "unit": "mm"
                      }, 
                      "SideBolster": {
                        "type": "branch", 
                        "children": {
                          "Inflation": {
                            "type": "UInt8", 
                            "description": "Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.", 
                            "min": 0, 
                            "max": 255, 
                            "id": 285
                          }
                        }, 
                        "description": "Side bolster settings"
                      }, 
                      "Massage": {
                        "type": "UInt8", 
                        "min": 0, 
                        "max": 10, 
                        "id": 278, 
                        "description": "Seat massage level. 0 = off. 10 = max massage."
                      }
                    }
                  }, 
                  "Pos3": {
                    "type": "branch", 
                    "children": {
                      "HeadRestraint": {
                        "type": "branch", 
                        "children": {
                          "Height": {
                            "description": "Height of head restraint. 0 = Bottommost. 255 = Topmost.", 
                            "min": 0, 
                            "max": 255, 
                            "type": "UInt8", 
                            "id": 321, 
                            "unit": "mm"
                          }
                        }, 
                        "description": "Head restraint settings"
                      }, 
                      "Recline": {
                        "description": "Recline level. -90 = Max forward recline. 90 max backward recline", 
                        "min": -90, 
                        "max": 90, 
                        "type": "Int8", 
                        "id": 314, 
                        "unit": "degree"
                      }, 
                      "HasPassenger": {
                        "description": "Does the seat have a passenger in it.", 
                        "type": "Boolean", 
                        "id": 310
                      }, 
                      "Heating": {
                        "type": "Int8", 
                        "description": "Seat cooling / heating. 0 = off. -10 = max cold. +10 = max heat", 
                        "min": -10, 
                        "max": 10, 
                        "id": 312
                      }, 
                      "Lumbar": {
                        "type": "branch", 
                        "children": {
                          "Inflation": {
                            "type": "UInt8", 
                            "description": "Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.", 
                            "min": 0, 
                            "max": 255, 
                            "id": 318
                          }, 
                          "Height": {
                            "type": "UInt8", 
                            "description": "Lumbar support position. 0 = Lowermost. 255 = Uppermost.", 
                            "min": 0, 
                            "max": 255, 
                            "id": 319
                          }
                        }, 
                        "description": "Lumbar signals"
                      }, 
                      "Airbag": {
                        "description": "Airbag signals", 
                        "type": "branch", 
                        "children": {
                          "IsDeployed": {
                            "description": "Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.", 
                            "type": "Boolean", 
                            "id": 322
                          }
                        }
                      }, 
                      "Switch": {
                        "description": "Seat switch signals", 
                        "type": "branch", 
                        "children": {
                          "HeadRestraint": {
                            "description": "Head restraint switches", 
                            "type": "branch", 
                            "children": {
                              "Down": {
                                "type": "Boolean", 
                                "id": 330, 
                                "description": "Head restraint down switch engaged"
                              }, 
                              "Up": {
                                "description": "Head restraint up switch engaged", 
                                "type": "Boolean", 
                                "id": 329
                              }
                            }
                          }, 
                          "Cooler": {
                            "type": "Boolean", 
                            "id": 324, 
                            "description": "Cooler switch for Seat heater"
                          }, 
                          "Recline": {
                            "description": "Recline switches", 
                            "type": "branch", 
                            "children": {
                              "Forward": {
                                "type": "Boolean", 
                                "id": 334, 
                                "description": "Seatback recline forward switch engaged"
                              }, 
                              "Backward": {
                                "description": "Seatback recline backward switch engaged", 
                                "type": "Boolean", 
                                "id": 333
                              }
                            }
                          }, 
                          "Up": {
                            "description": "Seat up switch engaged", 
                            "type": "Boolean", 
                            "id": 327
                          }, 
                          "Lumbar": {
                            "description": "Lumbar switches", 
                            "type": "branch", 
                            "children": {
                              "Down": {
                                "type": "Boolean", 
                                "id": 340, 
                                "description": "Lumbar down switch engaged"
                              }, 
                              "Inflate": {
                                "description": "Lumbar inflation switch engaged", 
                                "type": "Boolean", 
                                "id": 341
                              }, 
                              "Up": {
                                "description": "Lumbar up switch engaged", 
                                "type": "Boolean", 
                                "id": 339
                              }, 
                              "Deflate": {
                                "type": "Boolean", 
                                "id": 342, 
                                "description": "Lumbar deflation switch engaged"
                              }
                            }
                          }, 
                          "Down": {
                            "description": "Seat down switch engaged", 
                            "type": "Boolean", 
                            "id": 328
                          }, 
                          "Warmer": {
                            "type": "Boolean", 
                            "id": 323, 
                            "description": "Warmer switch for Seat heater"
                          }, 
                          "Cushion": {
                            "description": "Cushion switches", 
                            "type": "branch", 
                            "children": {
                              "Down": {
                                "description": "Seat cushion down switch engaged", 
                                "type": "Boolean", 
                                "id": 336
                              }, 
                              "Forward": {
                                "description": "Seat cushion forward/lengthen switch engaged", 
                                "type": "Boolean", 
                                "id": 337
                              }, 
                              "Backward": {
                                "type": "Boolean", 
                                "id": 338, 
                                "description": "Seat cushion backward/shorten switch engaged"
                              }, 
                              "Up": {
                                "type": "Boolean", 
                                "id": 335, 
                                "description": "Seat cushion up switch engaged"
                              }
                            }
                          }, 
                          "Forward": {
                            "type": "Boolean", 
                            "id": 325, 
                            "description": "Seat forward switch engaged"
                          }, 
                          "Backward": {
                            "description": "Seat forward switch engaged", 
                            "type": "Boolean", 
                            "id": 326
                          }, 
                          "Massage": {
                            "type": "branch", 
                            "children": {
                              "Increase": {
                                "description": "Increase massage level switch engaged", 
                                "type": "Boolean", 
                                "id": 331
                              }, 
                              "Decrease": {
                                "description": "Decrease massage level switch engaged", 
                                "type": "Boolean", 
                                "id": 332
                              }
                            }, 
                            "description": "Massage switches"
                          }, 
                          "SideBolster": {
                            "description": "Side bolster switches", 
                            "type": "branch", 
                            "children": {
                              "Inflate": {
                                "description": "Lumbar inflation switch engaged", 
                                "type": "Boolean", 
                                "id": 343
                              }, 
                              "Deflate": {
                                "type": "Boolean", 
                                "id": 344, 
                                "description": "Lumbar deflation switch engaged"
                              }
                            }
                          }
                        }
                      }, 
                      "Cushion": {
                        "description": "Cushion signals.", 
                        "type": "branch", 
                        "children": {
                          "Length": {
                            "description": "Forward length of cushion (leg support). 0 = Rearmost. 500 = Forwardmost.", 
                            "min": 0, 
                            "max": 500, 
                            "type": "UInt16", 
                            "id": 317, 
                            "unit": "mm"
                          }, 
                          "Height": {
                            "description": "Height of the seat front. 0 = Lowermost. 500 = Uppermost.", 
                            "min": 0, 
                            "max": 500, 
                            "type": "UInt16", 
                            "id": 316, 
                            "unit": "mm"
                          }
                        }
                      }, 
                      "IsBelted": {
                        "description": "Is the belt engaged.", 
                        "type": "Boolean", 
                        "id": 311
                      }, 
                      "Position": {
                        "description": "Seat horizontal position. 0 = Frontmost. 1000 = Rearmost", 
                        "min": 0, 
                        "max": 1000, 
                        "type": "UInt16", 
                        "id": 315, 
                        "unit": "mm"
                      }, 
                      "SideBolster": {
                        "type": "branch", 
                        "children": {
                          "Inflation": {
                            "type": "UInt8", 
                            "description": "Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.", 
                            "min": 0, 
                            "max": 255, 
                            "id": 320
                          }
                        }, 
                        "description": "Side bolster settings"
                      }, 
                      "Massage": {
                        "type": "UInt8", 
                        "min": 0, 
                        "max": 10, 
                        "id": 313, 
                        "description": "Seat massage level. 0 = off. 10 = max massage."
                      }
                    }, 
                    "description": "Third seat from left, front row"
                  }, 
                  "Pos1": {
                    "type": "branch", 
                    "children": {
                      "HeadRestraint": {
                        "type": "branch", 
                        "children": {
                          "Height": {
                            "description": "Height of head restraint. 0 = Bottommost. 255 = Topmost.", 
                            "min": 0, 
                            "max": 255, 
                            "type": "UInt8", 
                            "id": 251, 
                            "unit": "mm"
                          }
                        }, 
                        "description": "Head restraint settings"
                      }, 
                      "Recline": {
                        "description": "Recline level. -90 = Max forward recline. 90 max backward recline", 
                        "min": -90, 
                        "max": 90, 
                        "type": "Int8", 
                        "id": 244, 
                        "unit": "degree"
                      }, 
                      "HasPassenger": {
                        "description": "Does the seat have a passenger in it.", 
                        "type": "Boolean", 
                        "id": 240
                      }, 
                      "Heating": {
                        "type": "Int8", 
                        "description": "Seat cooling / heating. 0 = off. -10 = max cold. +10 = max heat", 
                        "min": -10, 
                        "max": 10, 
                        "id": 242
                      }, 
                      "Lumbar": {
                        "type": "branch", 
                        "children": {
                          "Inflation": {
                            "type": "UInt8", 
                            "description": "Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.", 
                            "min": 0, 
                            "max": 255, 
                            "id": 248
                          }, 
                          "Height": {
                            "type": "UInt8", 
                            "description": "Lumbar support position. 0 = Lowermost. 255 = Uppermost.", 
                            "min": 0, 
                            "max": 255, 
                            "id": 249
                          }
                        }, 
                        "description": "Lumbar signals"
                      }, 
                      "Airbag": {
                        "description": "Airbag signals", 
                        "type": "branch", 
                        "children": {
                          "IsDeployed": {
                            "description": "Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.", 
                            "type": "Boolean", 
                            "id": 252
                          }
                        }
                      }, 
                      "Switch": {
                        "description": "Seat switch signals", 
                        "type": "branch", 
                        "children": {
                          "HeadRestraint": {
                            "description": "Head restraint switches", 
                            "type": "branch", 
                            "children": {
                              "Down": {
                                "type": "Boolean", 
                                "id": 260, 
                                "description": "Head restraint down switch engaged"
                              }, 
                              "Up": {
                                "description": "Head restraint up switch engaged", 
                                "type": "Boolean", 
                                "id": 259
                              }
                            }
                          }, 
                          "Cooler": {
                            "type": "Boolean", 
                            "id": 254, 
                            "description": "Cooler switch for Seat heater"
                          }, 
                          "Recline": {
                            "description": "Recline switches", 
                            "type": "branch", 
                            "children": {
                              "Forward": {
                                "type": "Boolean", 
                                "id": 264, 
                                "description": "Seatback recline forward switch engaged"
                              }, 
                              "Backward": {
                                "description": "Seatback recline backward switch engaged", 
                                "type": "Boolean", 
                                "id": 263
                              }
                            }
                          }, 
                          "Up": {
                            "description": "Seat up switch engaged", 
                            "type": "Boolean", 
                            "id": 257
                          }, 
                          "Lumbar": {
                            "description": "Lumbar switches", 
                            "type": "branch", 
                            "children": {
                              "Down": {
                                "type": "Boolean", 
                                "id": 270, 
                                "description": "Lumbar down switch engaged"
                              }, 
                              "Inflate": {
                                "description": "Lumbar inflation switch engaged", 
                                "type": "Boolean", 
                                "id": 271
                              }, 
                              "Up": {
                                "description": "Lumbar up switch engaged", 
                                "type": "Boolean", 
                                "id": 269
                              }, 
                              "Deflate": {
                                "type": "Boolean", 
                                "id": 272, 
                                "description": "Lumbar deflation switch engaged"
                              }
                            }
                          }, 
                          "Down": {
                            "description": "Seat down switch engaged", 
                            "type": "Boolean", 
                            "id": 258
                          }, 
                          "Warmer": {
                            "type": "Boolean", 
                            "id": 253, 
                            "description": "Warmer switch for Seat heater"
                          }, 
                          "Cushion": {
                            "description": "Cushion switches", 
                            "type": "branch", 
                            "children": {
                              "Down": {
                                "description": "Seat cushion down switch engaged", 
                                "type": "Boolean", 
                                "id": 266
                              }, 
                              "Forward": {
                                "description": "Seat cushion forward/lengthen switch engaged", 
                                "type": "Boolean", 
                                "id": 267
                              }, 
                              "Backward": {
                                "type": "Boolean", 
                                "id": 268, 
                                "description": "Seat cushion backward/shorten switch engaged"
                              }, 
                              "Up": {
                                "type": "Boolean", 
                                "id": 265, 
                                "description": "Seat cushion up switch engaged"
                              }
                            }
                          }, 
                          "Forward": {
                            "type": "Boolean", 
                            "id": 255, 
                            "description": "Seat forward switch engaged"
                          }, 
                          "Backward": {
                            "description": "Seat forward switch engaged", 
                            "type": "Boolean", 
                            "id": 256
                          }, 
                          "Massage": {
                            "type": "branch", 
                            "children": {
                              "Increase": {
                                "description": "Increase massage level switch engaged", 
                                "type": "Boolean", 
                                "id": 261
                              }, 
                              "Decrease": {
                                "description": "Decrease massage level switch engaged", 
                                "type": "Boolean", 
                                "id": 262
                              }
                            }, 
                            "description": "Massage switches"
                          }, 
                          "SideBolster": {
                            "description": "Side bolster switches", 
                            "type": "branch", 
                            "children": {
                              "Inflate": {
                                "description": "Lumbar inflation switch engaged", 
                                "type": "Boolean", 
                                "id": 273
                              }, 
                              "Deflate": {
                                "type": "Boolean", 
                                "id": 274, 
                                "description": "Lumbar deflation switch engaged"
                              }
                            }
                          }
                        }
                      }, 
                      "Cushion": {
                        "description": "Cushion signals.", 
                        "type": "branch", 
                        "children": {
                          "Length": {
                            "description": "Forward length of cushion (leg support). 0 = Rearmost. 500 = Forwardmost.", 
                            "min": 0, 
                            "max": 500, 
                            "type": "UInt16", 
                            "id": 247, 
                            "unit": "mm"
                          }, 
                          "Height": {
                            "description": "Height of the seat front. 0 = Lowermost. 500 = Uppermost.", 
                            "min": 0, 
                            "max": 500, 
                            "type": "UInt16", 
                            "id": 246, 
                            "unit": "mm"
                          }
                        }
                      }, 
                      "IsBelted": {
                        "description": "Is the belt engaged.", 
                        "type": "Boolean", 
                        "id": 241
                      }, 
                      "Position": {
                        "description": "Seat horizontal position. 0 = Frontmost. 1000 = Rearmost", 
                        "min": 0, 
                        "max": 1000, 
                        "type": "UInt16", 
                        "id": 245, 
                        "unit": "mm"
                      }, 
                      "SideBolster": {
                        "type": "branch", 
                        "children": {
                          "Inflation": {
                            "type": "UInt8", 
                            "description": "Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.", 
                            "min": 0, 
                            "max": 255, 
                            "id": 250
                          }
                        }, 
                        "description": "Side bolster settings"
                      }, 
                      "Massage": {
                        "type": "UInt8", 
                        "min": 0, 
                        "max": 10, 
                        "id": 243, 
                        "description": "Seat massage level. 0 = off. 10 = max massage."
                      }
                    }, 
                    "description": "First seat from left, front row"
                  }
                }
              }, 
              "Row2": {
                "description": "Front seats", 
                "type": "branch", 
                "children": {
                  "Pos4": {
                    "type": "branch", 
                    "children": {
                      "HeadRestraint": {
                        "type": "branch", 
                        "children": {
                          "Height": {
                            "description": "Height of head restraint. 0 = Bottommost. 255 = Topmost.", 
                            "min": 0, 
                            "max": 255, 
                            "type": "UInt8", 
                            "id": 531, 
                            "unit": "mm"
                          }
                        }, 
                        "description": "Head restraint settings"
                      }, 
                      "Recline": {
                        "description": "Recline level. -90 = Max forward recline. 90 max backward recline", 
                        "min": -90, 
                        "max": 90, 
                        "type": "Int8", 
                        "id": 524, 
                        "unit": "degree"
                      }, 
                      "HasPassenger": {
                        "description": "Does the seat have a passenger in it.", 
                        "type": "Boolean", 
                        "id": 520
                      }, 
                      "Heating": {
                        "type": "Int8", 
                        "description": "Seat cooling / heating. 0 = off. -10 = max cold. +10 = max heat", 
                        "min": -10, 
                        "max": 10, 
                        "id": 522
                      }, 
                      "Lumbar": {
                        "type": "branch", 
                        "children": {
                          "Inflation": {
                            "type": "UInt8", 
                            "description": "Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.", 
                            "min": 0, 
                            "max": 255, 
                            "id": 528
                          }, 
                          "Height": {
                            "type": "UInt8", 
                            "description": "Lumbar support position. 0 = Lowermost. 255 = Uppermost.", 
                            "min": 0, 
                            "max": 255, 
                            "id": 529
                          }
                        }, 
                        "description": "Lumbar signals"
                      }, 
                      "Airbag": {
                        "description": "Airbag signals", 
                        "type": "branch", 
                        "children": {
                          "IsDeployed": {
                            "description": "Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.", 
                            "type": "Boolean", 
                            "id": 532
                          }
                        }
                      }, 
                      "Switch": {
                        "description": "Seat switch signals", 
                        "type": "branch", 
                        "children": {
                          "HeadRestraint": {
                            "description": "Head restraint switches", 
                            "type": "branch", 
                            "children": {
                              "Down": {
                                "type": "Boolean", 
                                "id": 540, 
                                "description": "Head restraint down switch engaged"
                              }, 
                              "Up": {
                                "description": "Head restraint up switch engaged", 
                                "type": "Boolean", 
                                "id": 539
                              }
                            }
                          }, 
                          "Cooler": {
                            "type": "Boolean", 
                            "id": 534, 
                            "description": "Cooler switch for Seat heater"
                          }, 
                          "Recline": {
                            "description": "Recline switches", 
                            "type": "branch", 
                            "children": {
                              "Forward": {
                                "type": "Boolean", 
                                "id": 544, 
                                "description": "Seatback recline forward switch engaged"
                              }, 
                              "Backward": {
                                "description": "Seatback recline backward switch engaged", 
                                "type": "Boolean", 
                                "id": 543
                              }
                            }
                          }, 
                          "Up": {
                            "description": "Seat up switch engaged", 
                            "type": "Boolean", 
                            "id": 537
                          }, 
                          "Lumbar": {
                            "description": "Lumbar switches", 
                            "type": "branch", 
                            "children": {
                              "Down": {
                                "type": "Boolean", 
                                "id": 550, 
                                "description": "Lumbar down switch engaged"
                              }, 
                              "Inflate": {
                                "description": "Lumbar inflation switch engaged", 
                                "type": "Boolean", 
                                "id": 551
                              }, 
                              "Up": {
                                "description": "Lumbar up switch engaged", 
                                "type": "Boolean", 
                                "id": 549
                              }, 
                              "Deflate": {
                                "type": "Boolean", 
                                "id": 552, 
                                "description": "Lumbar deflation switch engaged"
                              }
                            }
                          }, 
                          "Down": {
                            "description": "Seat down switch engaged", 
                            "type": "Boolean", 
                            "id": 538
                          }, 
                          "Warmer": {
                            "type": "Boolean", 
                            "id": 533, 
                            "description": "Warmer switch for Seat heater"
                          }, 
                          "Cushion": {
                            "description": "Cushion switches", 
                            "type": "branch", 
                            "children": {
                              "Down": {
                                "description": "Seat cushion down switch engaged", 
                                "type": "Boolean", 
                                "id": 546
                              }, 
                              "Forward": {
                                "description": "Seat cushion forward/lengthen switch engaged", 
                                "type": "Boolean", 
                                "id": 547
                              }, 
                              "Backward": {
                                "type": "Boolean", 
                                "id": 548, 
                                "description": "Seat cushion backward/shorten switch engaged"
                              }, 
                              "Up": {
                                "type": "Boolean", 
                                "id": 545, 
                                "description": "Seat cushion up switch engaged"
                              }
                            }
                          }, 
                          "Forward": {
                            "type": "Boolean", 
                            "id": 535, 
                            "description": "Seat forward switch engaged"
                          }, 
                          "Backward": {
                            "description": "Seat forward switch engaged", 
                            "type": "Boolean", 
                            "id": 536
                          }, 
                          "Massage": {
                            "type": "branch", 
                            "children": {
                              "Increase": {
                                "description": "Increase massage level switch engaged", 
                                "type": "Boolean", 
                                "id": 541
                              }, 
                              "Decrease": {
                                "description": "Decrease massage level switch engaged", 
                                "type": "Boolean", 
                                "id": 542
                              }
                            }, 
                            "description": "Massage switches"
                          }, 
                          "SideBolster": {
                            "description": "Side bolster switches", 
                            "type": "branch", 
                            "children": {
                              "Inflate": {
                                "description": "Lumbar inflation switch engaged", 
                                "type": "Boolean", 
                                "id": 553
                              }, 
                              "Deflate": {
                                "type": "Boolean", 
                                "id": 554, 
                                "description": "Lumbar deflation switch engaged"
                              }
                            }
                          }
                        }
                      }, 
                      "Cushion": {
                        "description": "Cushion signals.", 
                        "type": "branch", 
                        "children": {
                          "Length": {
                            "description": "Forward length of cushion (leg support). 0 = Rearmost. 500 = Forwardmost.", 
                            "min": 0, 
                            "max": 500, 
                            "type": "UInt16", 
                            "id": 527, 
                            "unit": "mm"
                          }, 
                          "Height": {
                            "description": "Height of the seat front. 0 = Lowermost. 500 = Uppermost.", 
                            "min": 0, 
                            "max": 500, 
                            "type": "UInt16", 
                            "id": 526, 
                            "unit": "mm"
                          }
                        }
                      }, 
                      "IsBelted": {
                        "description": "Is the belt engaged.", 
                        "type": "Boolean", 
                        "id": 521
                      }, 
                      "Position": {
                        "description": "Seat horizontal position. 0 = Frontmost. 1000 = Rearmost", 
                        "min": 0, 
                        "max": 1000, 
                        "type": "UInt16", 
                        "id": 525, 
                        "unit": "mm"
                      }, 
                      "SideBolster": {
                        "type": "branch", 
                        "children": {
                          "Inflation": {
                            "type": "UInt8", 
                            "description": "Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.", 
                            "min": 0, 
                            "max": 255, 
                            "id": 530
                          }
                        }, 
                        "description": "Side bolster settings"
                      }, 
                      "Massage": {
                        "type": "UInt8", 
                        "min": 0, 
                        "max": 10, 
                        "id": 523, 
                        "description": "Seat massage level. 0 = off. 10 = max massage."
                      }
                    }, 
                    "description": "Fourth seat from left, second row"
                  }, 
                  "Pos5": {
                    "description": "Fifth seat from left, second row", 
                    "type": "branch", 
                    "children": {
                      "HeadRestraint": {
                        "type": "branch", 
                        "children": {
                          "Height": {
                            "description": "Height of head restraint. 0 = Bottommost. 255 = Topmost.", 
                            "min": 0, 
                            "max": 255, 
                            "type": "UInt8", 
                            "id": 566, 
                            "unit": "mm"
                          }
                        }, 
                        "description": "Head restraint settings"
                      }, 
                      "Recline": {
                        "description": "Recline level. -90 = Max forward recline. 90 max backward recline", 
                        "min": -90, 
                        "max": 90, 
                        "type": "Int8", 
                        "id": 559, 
                        "unit": "degree"
                      }, 
                      "HasPassenger": {
                        "description": "Does the seat have a passenger in it.", 
                        "type": "Boolean", 
                        "id": 555
                      }, 
                      "Heating": {
                        "type": "Int8", 
                        "description": "Seat cooling / heating. 0 = off. -10 = max cold. +10 = max heat", 
                        "min": -10, 
                        "max": 10, 
                        "id": 557
                      }, 
                      "Lumbar": {
                        "type": "branch", 
                        "children": {
                          "Inflation": {
                            "type": "UInt8", 
                            "description": "Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.", 
                            "min": 0, 
                            "max": 255, 
                            "id": 563
                          }, 
                          "Height": {
                            "type": "UInt8", 
                            "description": "Lumbar support position. 0 = Lowermost. 255 = Uppermost.", 
                            "min": 0, 
                            "max": 255, 
                            "id": 564
                          }
                        }, 
                        "description": "Lumbar signals"
                      }, 
                      "Airbag": {
                        "description": "Airbag signals", 
                        "type": "branch", 
                        "children": {
                          "IsDeployed": {
                            "description": "Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.", 
                            "type": "Boolean", 
                            "id": 567
                          }
                        }
                      }, 
                      "Switch": {
                        "description": "Seat switch signals", 
                        "type": "branch", 
                        "children": {
                          "HeadRestraint": {
                            "description": "Head restraint switches", 
                            "type": "branch", 
                            "children": {
                              "Down": {
                                "type": "Boolean", 
                                "id": 575, 
                                "description": "Head restraint down switch engaged"
                              }, 
                              "Up": {
                                "description": "Head restraint up switch engaged", 
                                "type": "Boolean", 
                                "id": 574
                              }
                            }
                          }, 
                          "Cooler": {
                            "type": "Boolean", 
                            "id": 569, 
                            "description": "Cooler switch for Seat heater"
                          }, 
                          "Recline": {
                            "description": "Recline switches", 
                            "type": "branch", 
                            "children": {
                              "Forward": {
                                "type": "Boolean", 
                                "id": 579, 
                                "description": "Seatback recline forward switch engaged"
                              }, 
                              "Backward": {
                                "description": "Seatback recline backward switch engaged", 
                                "type": "Boolean", 
                                "id": 578
                              }
                            }
                          }, 
                          "Up": {
                            "description": "Seat up switch engaged", 
                            "type": "Boolean", 
                            "id": 572
                          }, 
                          "Lumbar": {
                            "description": "Lumbar switches", 
                            "type": "branch", 
                            "children": {
                              "Down": {
                                "type": "Boolean", 
                                "id": 585, 
                                "description": "Lumbar down switch engaged"
                              }, 
                              "Inflate": {
                                "description": "Lumbar inflation switch engaged", 
                                "type": "Boolean", 
                                "id": 586
                              }, 
                              "Up": {
                                "description": "Lumbar up switch engaged", 
                                "type": "Boolean", 
                                "id": 584
                              }, 
                              "Deflate": {
                                "type": "Boolean", 
                                "id": 587, 
                                "description": "Lumbar deflation switch engaged"
                              }
                            }
                          }, 
                          "Down": {
                            "description": "Seat down switch engaged", 
                            "type": "Boolean", 
                            "id": 573
                          }, 
                          "Warmer": {
                            "type": "Boolean", 
                            "id": 568, 
                            "description": "Warmer switch for Seat heater"
                          }, 
                          "Cushion": {
                            "description": "Cushion switches", 
                            "type": "branch", 
                            "children": {
                              "Down": {
                                "description": "Seat cushion down switch engaged", 
                                "type": "Boolean", 
                                "id": 581
                              }, 
                              "Forward": {
                                "description": "Seat cushion forward/lengthen switch engaged", 
                                "type": "Boolean", 
                                "id": 582
                              }, 
                              "Backward": {
                                "type": "Boolean", 
                                "id": 583, 
                                "description": "Seat cushion backward/shorten switch engaged"
                              }, 
                              "Up": {
                                "type": "Boolean", 
                                "id": 580, 
                                "description": "Seat cushion up switch engaged"
                              }
                            }
                          }, 
                          "Forward": {
                            "type": "Boolean", 
                            "id": 570, 
                            "description": "Seat forward switch engaged"
                          }, 
                          "Backward": {
                            "description": "Seat forward switch engaged", 
                            "type": "Boolean", 
                            "id": 571
                          }, 
                          "Massage": {
                            "type": "branch", 
                            "children": {
                              "Increase": {
                                "description": "Increase massage level switch engaged", 
                                "type": "Boolean", 
                                "id": 576
                              }, 
                              "Decrease": {
                                "description": "Decrease massage level switch engaged", 
                                "type": "Boolean", 
                                "id": 577
                              }
                            }, 
                            "description": "Massage switches"
                          }, 
                          "SideBolster": {
                            "description": "Side bolster switches", 
                            "type": "branch", 
                            "children": {
                              "Inflate": {
                                "description": "Lumbar inflation switch engaged", 
                                "type": "Boolean", 
                                "id": 588
                              }, 
                              "Deflate": {
                                "type": "Boolean", 
                                "id": 589, 
                                "description": "Lumbar deflation switch engaged"
                              }
                            }
                          }
                        }
                      }, 
                      "Cushion": {
                        "description": "Cushion signals.", 
                        "type": "branch", 
                        "children": {
                          "Length": {
                            "description": "Forward length of cushion (leg support). 0 = Rearmost. 500 = Forwardmost.", 
                            "min": 0, 
                            "max": 500, 
                            "type": "UInt16", 
                            "id": 562, 
                            "unit": "mm"
                          }, 
                          "Height": {
                            "description": "Height of the seat front. 0 = Lowermost. 500 = Uppermost.", 
                            "min": 0, 
                            "max": 500, 
                            "type": "UInt16", 
                            "id": 561, 
                            "unit": "mm"
                          }
                        }
                      }, 
                      "IsBelted": {
                        "description": "Is the belt engaged.", 
                        "type": "Boolean", 
                        "id": 556
                      }, 
                      "Position": {
                        "description": "Seat horizontal position. 0 = Frontmost. 1000 = Rearmost", 
                        "min": 0, 
                        "max": 1000, 
                        "type": "UInt16", 
                        "id": 560, 
                        "unit": "mm"
                      }, 
                      "SideBolster": {
                        "type": "branch", 
                        "children": {
                          "Inflation": {
                            "type": "UInt8", 
                            "description": "Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.", 
                            "min": 0, 
                            "max": 255, 
                            "id": 565
                          }
                        }, 
                        "description": "Side bolster settings"
                      }, 
                      "Massage": {
                        "type": "UInt8", 
                        "min": 0, 
                        "max": 10, 
                        "id": 558, 
                        "description": "Seat massage level. 0 = off. 10 = max massage."
                      }
                    }
                  }, 
                  "Pos2": {
                    "description": "Second seat from left, second row", 
                    "type": "branch", 
                    "children": {
                      "HeadRestraint": {
                        "type": "branch", 
                        "children": {
                          "Height": {
                            "description": "Height of head restraint. 0 = Bottommost. 255 = Topmost.", 
                            "min": 0, 
                            "max": 255, 
                            "type": "UInt8", 
                            "id": 461, 
                            "unit": "mm"
                          }
                        }, 
                        "description": "Head restraint settings"
                      }, 
                      "Recline": {
                        "description": "Recline level. -90 = Max forward recline. 90 max backward recline", 
                        "min": -90, 
                        "max": 90, 
                        "type": "Int8", 
                        "id": 454, 
                        "unit": "degree"
                      }, 
                      "HasPassenger": {
                        "description": "Does the seat have a passenger in it.", 
                        "type": "Boolean", 
                        "id": 450
                      }, 
                      "Heating": {
                        "type": "Int8", 
                        "description": "Seat cooling / heating. 0 = off. -10 = max cold. +10 = max heat", 
                        "min": -10, 
                        "max": 10, 
                        "id": 452
                      }, 
                      "Lumbar": {
                        "type": "branch", 
                        "children": {
                          "Inflation": {
                            "type": "UInt8", 
                            "description": "Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.", 
                            "min": 0, 
                            "max": 255, 
                            "id": 458
                          }, 
                          "Height": {
                            "type": "UInt8", 
                            "description": "Lumbar support position. 0 = Lowermost. 255 = Uppermost.", 
                            "min": 0, 
                            "max": 255, 
                            "id": 459
                          }
                        }, 
                        "description": "Lumbar signals"
                      }, 
                      "Airbag": {
                        "description": "Airbag signals", 
                        "type": "branch", 
                        "children": {
                          "IsDeployed": {
                            "description": "Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.", 
                            "type": "Boolean", 
                            "id": 462
                          }
                        }
                      }, 
                      "Switch": {
                        "description": "Seat switch signals", 
                        "type": "branch", 
                        "children": {
                          "HeadRestraint": {
                            "description": "Head restraint switches", 
                            "type": "branch", 
                            "children": {
                              "Down": {
                                "type": "Boolean", 
                                "id": 470, 
                                "description": "Head restraint down switch engaged"
                              }, 
                              "Up": {
                                "description": "Head restraint up switch engaged", 
                                "type": "Boolean", 
                                "id": 469
                              }
                            }
                          }, 
                          "Cooler": {
                            "type": "Boolean", 
                            "id": 464, 
                            "description": "Cooler switch for Seat heater"
                          }, 
                          "Recline": {
                            "description": "Recline switches", 
                            "type": "branch", 
                            "children": {
                              "Forward": {
                                "type": "Boolean", 
                                "id": 474, 
                                "description": "Seatback recline forward switch engaged"
                              }, 
                              "Backward": {
                                "description": "Seatback recline backward switch engaged", 
                                "type": "Boolean", 
                                "id": 473
                              }
                            }
                          }, 
                          "Up": {
                            "description": "Seat up switch engaged", 
                            "type": "Boolean", 
                            "id": 467
                          }, 
                          "Lumbar": {
                            "description": "Lumbar switches", 
                            "type": "branch", 
                            "children": {
                              "Down": {
                                "type": "Boolean", 
                                "id": 480, 
                                "description": "Lumbar down switch engaged"
                              }, 
                              "Inflate": {
                                "description": "Lumbar inflation switch engaged", 
                                "type": "Boolean", 
                                "id": 481
                              }, 
                              "Up": {
                                "description": "Lumbar up switch engaged", 
                                "type": "Boolean", 
                                "id": 479
                              }, 
                              "Deflate": {
                                "type": "Boolean", 
                                "id": 482, 
                                "description": "Lumbar deflation switch engaged"
                              }
                            }
                          }, 
                          "Down": {
                            "description": "Seat down switch engaged", 
                            "type": "Boolean", 
                            "id": 468
                          }, 
                          "Warmer": {
                            "type": "Boolean", 
                            "id": 463, 
                            "description": "Warmer switch for Seat heater"
                          }, 
                          "Cushion": {
                            "description": "Cushion switches", 
                            "type": "branch", 
                            "children": {
                              "Down": {
                                "description": "Seat cushion down switch engaged", 
                                "type": "Boolean", 
                                "id": 476
                              }, 
                              "Forward": {
                                "description": "Seat cushion forward/lengthen switch engaged", 
                                "type": "Boolean", 
                                "id": 477
                              }, 
                              "Backward": {
                                "type": "Boolean", 
                                "id": 478, 
                                "description": "Seat cushion backward/shorten switch engaged"
                              }, 
                              "Up": {
                                "type": "Boolean", 
                                "id": 475, 
                                "description": "Seat cushion up switch engaged"
                              }
                            }
                          }, 
                          "Forward": {
                            "type": "Boolean", 
                            "id": 465, 
                            "description": "Seat forward switch engaged"
                          }, 
                          "Backward": {
                            "description": "Seat forward switch engaged", 
                            "type": "Boolean", 
                            "id": 466
                          }, 
                          "Massage": {
                            "type": "branch", 
                            "children": {
                              "Increase": {
                                "description": "Increase massage level switch engaged", 
                                "type": "Boolean", 
                                "id": 471
                              }, 
                              "Decrease": {
                                "description": "Decrease massage level switch engaged", 
                                "type": "Boolean", 
                                "id": 472
                              }
                            }, 
                            "description": "Massage switches"
                          }, 
                          "SideBolster": {
                            "description": "Side bolster switches", 
                            "type": "branch", 
                            "children": {
                              "Inflate": {
                                "description": "Lumbar inflation switch engaged", 
                                "type": "Boolean", 
                                "id": 483
                              }, 
                              "Deflate": {
                                "type": "Boolean", 
                                "id": 484, 
                                "description": "Lumbar deflation switch engaged"
                              }
                            }
                          }
                        }
                      }, 
                      "Cushion": {
                        "description": "Cushion signals.", 
                        "type": "branch", 
                        "children": {
                          "Length": {
                            "description": "Forward length of cushion (leg support). 0 = Rearmost. 500 = Forwardmost.", 
                            "min": 0, 
                            "max": 500, 
                            "type": "UInt16", 
                            "id": 457, 
                            "unit": "mm"
                          }, 
                          "Height": {
                            "description": "Height of the seat front. 0 = Lowermost. 500 = Uppermost.", 
                            "min": 0, 
                            "max": 500, 
                            "type": "UInt16", 
                            "id": 456, 
                            "unit": "mm"
                          }
                        }
                      }, 
                      "IsBelted": {
                        "description": "Is the belt engaged.", 
                        "type": "Boolean", 
                        "id": 451
                      }, 
                      "Position": {
                        "description": "Seat horizontal position. 0 = Frontmost. 1000 = Rearmost", 
                        "min": 0, 
                        "max": 1000, 
                        "type": "UInt16", 
                        "id": 455, 
                        "unit": "mm"
                      }, 
                      "SideBolster": {
                        "type": "branch", 
                        "children": {
                          "Inflation": {
                            "type": "UInt8", 
                            "description": "Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.", 
                            "min": 0, 
                            "max": 255, 
                            "id": 460
                          }
                        }, 
                        "description": "Side bolster settings"
                      }, 
                      "Massage": {
                        "type": "UInt8", 
                        "min": 0, 
                        "max": 10, 
                        "id": 453, 
                        "description": "Seat massage level. 0 = off. 10 = max massage."
                      }
                    }
                  }, 
                  "Pos3": {
                    "description": "Third seat from left, second row", 
                    "type": "branch", 
                    "children": {
                      "HeadRestraint": {
                        "type": "branch", 
                        "children": {
                          "Height": {
                            "description": "Height of head restraint. 0 = Bottommost. 255 = Topmost.", 
                            "min": 0, 
                            "max": 255, 
                            "type": "UInt8", 
                            "id": 496, 
                            "unit": "mm"
                          }
                        }, 
                        "description": "Head restraint settings"
                      }, 
                      "Recline": {
                        "description": "Recline level. -90 = Max forward recline. 90 max backward recline", 
                        "min": -90, 
                        "max": 90, 
                        "type": "Int8", 
                        "id": 489, 
                        "unit": "degree"
                      }, 
                      "HasPassenger": {
                        "description": "Does the seat have a passenger in it.", 
                        "type": "Boolean", 
                        "id": 485
                      }, 
                      "Heating": {
                        "type": "Int8", 
                        "description": "Seat cooling / heating. 0 = off. -10 = max cold. +10 = max heat", 
                        "min": -10, 
                        "max": 10, 
                        "id": 487
                      }, 
                      "Lumbar": {
                        "type": "branch", 
                        "children": {
                          "Inflation": {
                            "type": "UInt8", 
                            "description": "Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.", 
                            "min": 0, 
                            "max": 255, 
                            "id": 493
                          }, 
                          "Height": {
                            "type": "UInt8", 
                            "description": "Lumbar support position. 0 = Lowermost. 255 = Uppermost.", 
                            "min": 0, 
                            "max": 255, 
                            "id": 494
                          }
                        }, 
                        "description": "Lumbar signals"
                      }, 
                      "Airbag": {
                        "description": "Airbag signals", 
                        "type": "branch", 
                        "children": {
                          "IsDeployed": {
                            "description": "Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.", 
                            "type": "Boolean", 
                            "id": 497
                          }
                        }
                      }, 
                      "Switch": {
                        "description": "Seat switch signals", 
                        "type": "branch", 
                        "children": {
                          "HeadRestraint": {
                            "description": "Head restraint switches", 
                            "type": "branch", 
                            "children": {
                              "Down": {
                                "type": "Boolean", 
                                "id": 505, 
                                "description": "Head restraint down switch engaged"
                              }, 
                              "Up": {
                                "description": "Head restraint up switch engaged", 
                                "type": "Boolean", 
                                "id": 504
                              }
                            }
                          }, 
                          "Cooler": {
                            "type": "Boolean", 
                            "id": 499, 
                            "description": "Cooler switch for Seat heater"
                          }, 
                          "Recline": {
                            "description": "Recline switches", 
                            "type": "branch", 
                            "children": {
                              "Forward": {
                                "type": "Boolean", 
                                "id": 509, 
                                "description": "Seatback recline forward switch engaged"
                              }, 
                              "Backward": {
                                "description": "Seatback recline backward switch engaged", 
                                "type": "Boolean", 
                                "id": 508
                              }
                            }
                          }, 
                          "Up": {
                            "description": "Seat up switch engaged", 
                            "type": "Boolean", 
                            "id": 502
                          }, 
                          "Lumbar": {
                            "description": "Lumbar switches", 
                            "type": "branch", 
                            "children": {
                              "Down": {
                                "type": "Boolean", 
                                "id": 515, 
                                "description": "Lumbar down switch engaged"
                              }, 
                              "Inflate": {
                                "description": "Lumbar inflation switch engaged", 
                                "type": "Boolean", 
                                "id": 516
                              }, 
                              "Up": {
                                "description": "Lumbar up switch engaged", 
                                "type": "Boolean", 
                                "id": 514
                              }, 
                              "Deflate": {
                                "type": "Boolean", 
                                "id": 517, 
                                "description": "Lumbar deflation switch engaged"
                              }
                            }
                          }, 
                          "Down": {
                            "description": "Seat down switch engaged", 
                            "type": "Boolean", 
                            "id": 503
                          }, 
                          "Warmer": {
                            "type": "Boolean", 
                            "id": 498, 
                            "description": "Warmer switch for Seat heater"
                          }, 
                          "Cushion": {
                            "description": "Cushion switches", 
                            "type": "branch", 
                            "children": {
                              "Down": {
                                "description": "Seat cushion down switch engaged", 
                                "type": "Boolean", 
                                "id": 511
                              }, 
                              "Forward": {
                                "description": "Seat cushion forward/lengthen switch engaged", 
                                "type": "Boolean", 
                                "id": 512
                              }, 
                              "Backward": {
                                "type": "Boolean", 
                                "id": 513, 
                                "description": "Seat cushion backward/shorten switch engaged"
                              }, 
                              "Up": {
                                "type": "Boolean", 
                                "id": 510, 
                                "description": "Seat cushion up switch engaged"
                              }
                            }
                          }, 
                          "Forward": {
                            "type": "Boolean", 
                            "id": 500, 
                            "description": "Seat forward switch engaged"
                          }, 
                          "Backward": {
                            "description": "Seat forward switch engaged", 
                            "type": "Boolean", 
                            "id": 501
                          }, 
                          "Massage": {
                            "type": "branch", 
                            "children": {
                              "Increase": {
                                "description": "Increase massage level switch engaged", 
                                "type": "Boolean", 
                                "id": 506
                              }, 
                              "Decrease": {
                                "description": "Decrease massage level switch engaged", 
                                "type": "Boolean", 
                                "id": 507
                              }
                            }, 
                            "description": "Massage switches"
                          }, 
                          "SideBolster": {
                            "description": "Side bolster switches", 
                            "type": "branch", 
                            "children": {
                              "Inflate": {
                                "description": "Lumbar inflation switch engaged", 
                                "type": "Boolean", 
                                "id": 518
                              }, 
                              "Deflate": {
                                "type": "Boolean", 
                                "id": 519, 
                                "description": "Lumbar deflation switch engaged"
                              }
                            }
                          }
                        }
                      }, 
                      "Cushion": {
                        "description": "Cushion signals.", 
                        "type": "branch", 
                        "children": {
                          "Length": {
                            "description": "Forward length of cushion (leg support). 0 = Rearmost. 500 = Forwardmost.", 
                            "min": 0, 
                            "max": 500, 
                            "type": "UInt16", 
                            "id": 492, 
                            "unit": "mm"
                          }, 
                          "Height": {
                            "description": "Height of the seat front. 0 = Lowermost. 500 = Uppermost.", 
                            "min": 0, 
                            "max": 500, 
                            "type": "UInt16", 
                            "id": 491, 
                            "unit": "mm"
                          }
                        }
                      }, 
                      "IsBelted": {
                        "description": "Is the belt engaged.", 
                        "type": "Boolean", 
                        "id": 486
                      }, 
                      "Position": {
                        "description": "Seat horizontal position. 0 = Frontmost. 1000 = Rearmost", 
                        "min": 0, 
                        "max": 1000, 
                        "type": "UInt16", 
                        "id": 490, 
                        "unit": "mm"
                      }, 
                      "SideBolster": {
                        "type": "branch", 
                        "children": {
                          "Inflation": {
                            "type": "UInt8", 
                            "description": "Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.", 
                            "min": 0, 
                            "max": 255, 
                            "id": 495
                          }
                        }, 
                        "description": "Side bolster settings"
                      }, 
                      "Massage": {
                        "type": "UInt8", 
                        "min": 0, 
                        "max": 10, 
                        "id": 488, 
                        "description": "Seat massage level. 0 = off. 10 = max massage."
                      }
                    }
                  }, 
                  "Pos1": {
                    "description": "First seat from left, second row", 
                    "type": "branch", 
                    "children": {
                      "HeadRestraint": {
                        "type": "branch", 
                        "children": {
                          "Height": {
                            "description": "Height of head restraint. 0 = Bottommost. 255 = Topmost.", 
                            "min": 0, 
                            "max": 255, 
                            "type": "UInt8", 
                            "id": 426, 
                            "unit": "mm"
                          }
                        }, 
                        "description": "Head restraint settings"
                      }, 
                      "Recline": {
                        "description": "Recline level. -90 = Max forward recline. 90 max backward recline", 
                        "min": -90, 
                        "max": 90, 
                        "type": "Int8", 
                        "id": 419, 
                        "unit": "degree"
                      }, 
                      "HasPassenger": {
                        "description": "Does the seat have a passenger in it.", 
                        "type": "Boolean", 
                        "id": 415
                      }, 
                      "Heating": {
                        "type": "Int8", 
                        "description": "Seat cooling / heating. 0 = off. -10 = max cold. +10 = max heat", 
                        "min": -10, 
                        "max": 10, 
                        "id": 417
                      }, 
                      "Lumbar": {
                        "type": "branch", 
                        "children": {
                          "Inflation": {
                            "type": "UInt8", 
                            "description": "Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.", 
                            "min": 0, 
                            "max": 255, 
                            "id": 423
                          }, 
                          "Height": {
                            "type": "UInt8", 
                            "description": "Lumbar support position. 0 = Lowermost. 255 = Uppermost.", 
                            "min": 0, 
                            "max": 255, 
                            "id": 424
                          }
                        }, 
                        "description": "Lumbar signals"
                      }, 
                      "Airbag": {
                        "description": "Airbag signals", 
                        "type": "branch", 
                        "children": {
                          "IsDeployed": {
                            "description": "Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.", 
                            "type": "Boolean", 
                            "id": 427
                          }
                        }
                      }, 
                      "Switch": {
                        "description": "Seat switch signals", 
                        "type": "branch", 
                        "children": {
                          "HeadRestraint": {
                            "description": "Head restraint switches", 
                            "type": "branch", 
                            "children": {
                              "Down": {
                                "type": "Boolean", 
                                "id": 435, 
                                "description": "Head restraint down switch engaged"
                              }, 
                              "Up": {
                                "description": "Head restraint up switch engaged", 
                                "type": "Boolean", 
                                "id": 434
                              }
                            }
                          }, 
                          "Cooler": {
                            "type": "Boolean", 
                            "id": 429, 
                            "description": "Cooler switch for Seat heater"
                          }, 
                          "Recline": {
                            "description": "Recline switches", 
                            "type": "branch", 
                            "children": {
                              "Forward": {
                                "type": "Boolean", 
                                "id": 439, 
                                "description": "Seatback recline forward switch engaged"
                              }, 
                              "Backward": {
                                "description": "Seatback recline backward switch engaged", 
                                "type": "Boolean", 
                                "id": 438
                              }
                            }
                          }, 
                          "Up": {
                            "description": "Seat up switch engaged", 
                            "type": "Boolean", 
                            "id": 432
                          }, 
                          "Lumbar": {
                            "description": "Lumbar switches", 
                            "type": "branch", 
                            "children": {
                              "Down": {
                                "type": "Boolean", 
                                "id": 445, 
                                "description": "Lumbar down switch engaged"
                              }, 
                              "Inflate": {
                                "description": "Lumbar inflation switch engaged", 
                                "type": "Boolean", 
                                "id": 446
                              }, 
                              "Up": {
                                "description": "Lumbar up switch engaged", 
                                "type": "Boolean", 
                                "id": 444
                              }, 
                              "Deflate": {
                                "type": "Boolean", 
                                "id": 447, 
                                "description": "Lumbar deflation switch engaged"
                              }
                            }
                          }, 
                          "Down": {
                            "description": "Seat down switch engaged", 
                            "type": "Boolean", 
                            "id": 433
                          }, 
                          "Warmer": {
                            "type": "Boolean", 
                            "id": 428, 
                            "description": "Warmer switch for Seat heater"
                          }, 
                          "Cushion": {
                            "description": "Cushion switches", 
                            "type": "branch", 
                            "children": {
                              "Down": {
                                "description": "Seat cushion down switch engaged", 
                                "type": "Boolean", 
                                "id": 441
                              }, 
                              "Forward": {
                                "description": "Seat cushion forward/lengthen switch engaged", 
                                "type": "Boolean", 
                                "id": 442
                              }, 
                              "Backward": {
                                "type": "Boolean", 
                                "id": 443, 
                                "description": "Seat cushion backward/shorten switch engaged"
                              }, 
                              "Up": {
                                "type": "Boolean", 
                                "id": 440, 
                                "description": "Seat cushion up switch engaged"
                              }
                            }
                          }, 
                          "Forward": {
                            "type": "Boolean", 
                            "id": 430, 
                            "description": "Seat forward switch engaged"
                          }, 
                          "Backward": {
                            "description": "Seat forward switch engaged", 
                            "type": "Boolean", 
                            "id": 431
                          }, 
                          "Massage": {
                            "type": "branch", 
                            "children": {
                              "Increase": {
                                "description": "Increase massage level switch engaged", 
                                "type": "Boolean", 
                                "id": 436
                              }, 
                              "Decrease": {
                                "description": "Decrease massage level switch engaged", 
                                "type": "Boolean", 
                                "id": 437
                              }
                            }, 
                            "description": "Massage switches"
                          }, 
                          "SideBolster": {
                            "description": "Side bolster switches", 
                            "type": "branch", 
                            "children": {
                              "Inflate": {
                                "description": "Lumbar inflation switch engaged", 
                                "type": "Boolean", 
                                "id": 448
                              }, 
                              "Deflate": {
                                "type": "Boolean", 
                                "id": 449, 
                                "description": "Lumbar deflation switch engaged"
                              }
                            }
                          }
                        }
                      }, 
                      "Cushion": {
                        "description": "Cushion signals.", 
                        "type": "branch", 
                        "children": {
                          "Length": {
                            "description": "Forward length of cushion (leg support). 0 = Rearmost. 500 = Forwardmost.", 
                            "min": 0, 
                            "max": 500, 
                            "type": "UInt16", 
                            "id": 422, 
                            "unit": "mm"
                          }, 
                          "Height": {
                            "description": "Height of the seat front. 0 = Lowermost. 500 = Uppermost.", 
                            "min": 0, 
                            "max": 500, 
                            "type": "UInt16", 
                            "id": 421, 
                            "unit": "mm"
                          }
                        }
                      }, 
                      "IsBelted": {
                        "description": "Is the belt engaged.", 
                        "type": "Boolean", 
                        "id": 416
                      }, 
                      "Position": {
                        "description": "Seat horizontal position. 0 = Frontmost. 1000 = Rearmost", 
                        "min": 0, 
                        "max": 1000, 
                        "type": "UInt16", 
                        "id": 420, 
                        "unit": "mm"
                      }, 
                      "SideBolster": {
                        "type": "branch", 
                        "children": {
                          "Inflation": {
                            "type": "UInt8", 
                            "description": "Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.", 
                            "min": 0, 
                            "max": 255, 
                            "id": 425
                          }
                        }, 
                        "description": "Side bolster settings"
                      }, 
                      "Massage": {
                        "type": "UInt8", 
                        "min": 0, 
                        "max": 10, 
                        "id": 418, 
                        "description": "Seat massage level. 0 = off. 10 = max massage."
                      }
                    }
                  }
                }
              }, 
              "Row3": {
                "description": "Front seats", 
                "type": "branch", 
                "children": {
                  "Pos4": {
                    "description": "Fourth seat from left, third row", 
                    "type": "branch", 
                    "children": {
                      "HeadRestraint": {
                        "type": "branch", 
                        "children": {
                          "Height": {
                            "description": "Height of head restraint. 0 = Bottommost. 255 = Topmost.", 
                            "min": 0, 
                            "max": 255, 
                            "type": "UInt8", 
                            "id": 706, 
                            "unit": "mm"
                          }
                        }, 
                        "description": "Head restraint settings"
                      }, 
                      "Recline": {
                        "description": "Recline level. -90 = Max forward recline. 90 max backward recline", 
                        "min": -90, 
                        "max": 90, 
                        "type": "Int8", 
                        "id": 699, 
                        "unit": "degree"
                      }, 
                      "HasPassenger": {
                        "description": "Does the seat have a passenger in it.", 
                        "type": "Boolean", 
                        "id": 695
                      }, 
                      "Heating": {
                        "type": "Int8", 
                        "description": "Seat cooling / heating. 0 = off. -10 = max cold. +10 = max heat", 
                        "min": -10, 
                        "max": 10, 
                        "id": 697
                      }, 
                      "Lumbar": {
                        "type": "branch", 
                        "children": {
                          "Inflation": {
                            "type": "UInt8", 
                            "description": "Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.", 
                            "min": 0, 
                            "max": 255, 
                            "id": 703
                          }, 
                          "Height": {
                            "type": "UInt8", 
                            "description": "Lumbar support position. 0 = Lowermost. 255 = Uppermost.", 
                            "min": 0, 
                            "max": 255, 
                            "id": 704
                          }
                        }, 
                        "description": "Lumbar signals"
                      }, 
                      "Airbag": {
                        "description": "Airbag signals", 
                        "type": "branch", 
                        "children": {
                          "IsDeployed": {
                            "description": "Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.", 
                            "type": "Boolean", 
                            "id": 707
                          }
                        }
                      }, 
                      "Switch": {
                        "description": "Seat switch signals", 
                        "type": "branch", 
                        "children": {
                          "HeadRestraint": {
                            "description": "Head restraint switches", 
                            "type": "branch", 
                            "children": {
                              "Down": {
                                "type": "Boolean", 
                                "id": 715, 
                                "description": "Head restraint down switch engaged"
                              }, 
                              "Up": {
                                "description": "Head restraint up switch engaged", 
                                "type": "Boolean", 
                                "id": 714
                              }
                            }
                          }, 
                          "Cooler": {
                            "type": "Boolean", 
                            "id": 709, 
                            "description": "Cooler switch for Seat heater"
                          }, 
                          "Recline": {
                            "description": "Recline switches", 
                            "type": "branch", 
                            "children": {
                              "Forward": {
                                "type": "Boolean", 
                                "id": 719, 
                                "description": "Seatback recline forward switch engaged"
                              }, 
                              "Backward": {
                                "description": "Seatback recline backward switch engaged", 
                                "type": "Boolean", 
                                "id": 718
                              }
                            }
                          }, 
                          "Up": {
                            "description": "Seat up switch engaged", 
                            "type": "Boolean", 
                            "id": 712
                          }, 
                          "Lumbar": {
                            "description": "Lumbar switches", 
                            "type": "branch", 
                            "children": {
                              "Down": {
                                "type": "Boolean", 
                                "id": 725, 
                                "description": "Lumbar down switch engaged"
                              }, 
                              "Inflate": {
                                "description": "Lumbar inflation switch engaged", 
                                "type": "Boolean", 
                                "id": 726
                              }, 
                              "Up": {
                                "description": "Lumbar up switch engaged", 
                                "type": "Boolean", 
                                "id": 724
                              }, 
                              "Deflate": {
                                "type": "Boolean", 
                                "id": 727, 
                                "description": "Lumbar deflation switch engaged"
                              }
                            }
                          }, 
                          "Down": {
                            "description": "Seat down switch engaged", 
                            "type": "Boolean", 
                            "id": 713
                          }, 
                          "Warmer": {
                            "type": "Boolean", 
                            "id": 708, 
                            "description": "Warmer switch for Seat heater"
                          }, 
                          "Cushion": {
                            "description": "Cushion switches", 
                            "type": "branch", 
                            "children": {
                              "Down": {
                                "description": "Seat cushion down switch engaged", 
                                "type": "Boolean", 
                                "id": 721
                              }, 
                              "Forward": {
                                "description": "Seat cushion forward/lengthen switch engaged", 
                                "type": "Boolean", 
                                "id": 722
                              }, 
                              "Backward": {
                                "type": "Boolean", 
                                "id": 723, 
                                "description": "Seat cushion backward/shorten switch engaged"
                              }, 
                              "Up": {
                                "type": "Boolean", 
                                "id": 720, 
                                "description": "Seat cushion up switch engaged"
                              }
                            }
                          }, 
                          "Forward": {
                            "type": "Boolean", 
                            "id": 710, 
                            "description": "Seat forward switch engaged"
                          }, 
                          "Backward": {
                            "description": "Seat forward switch engaged", 
                            "type": "Boolean", 
                            "id": 711
                          }, 
                          "Massage": {
                            "type": "branch", 
                            "children": {
                              "Increase": {
                                "description": "Increase massage level switch engaged", 
                                "type": "Boolean", 
                                "id": 716
                              }, 
                              "Decrease": {
                                "description": "Decrease massage level switch engaged", 
                                "type": "Boolean", 
                                "id": 717
                              }
                            }, 
                            "description": "Massage switches"
                          }, 
                          "SideBolster": {
                            "description": "Side bolster switches", 
                            "type": "branch", 
                            "children": {
                              "Inflate": {
                                "description": "Lumbar inflation switch engaged", 
                                "type": "Boolean", 
                                "id": 728
                              }, 
                              "Deflate": {
                                "type": "Boolean", 
                                "id": 729, 
                                "description": "Lumbar deflation switch engaged"
                              }
                            }
                          }
                        }
                      }, 
                      "Cushion": {
                        "description": "Cushion signals.", 
                        "type": "branch", 
                        "children": {
                          "Length": {
                            "description": "Forward length of cushion (leg support). 0 = Rearmost. 500 = Forwardmost.", 
                            "min": 0, 
                            "max": 500, 
                            "type": "UInt16", 
                            "id": 702, 
                            "unit": "mm"
                          }, 
                          "Height": {
                            "description": "Height of the seat front. 0 = Lowermost. 500 = Uppermost.", 
                            "min": 0, 
                            "max": 500, 
                            "type": "UInt16", 
                            "id": 701, 
                            "unit": "mm"
                          }
                        }
                      }, 
                      "IsBelted": {
                        "description": "Is the belt engaged.", 
                        "type": "Boolean", 
                        "id": 696
                      }, 
                      "Position": {
                        "description": "Seat horizontal position. 0 = Frontmost. 1000 = Rearmost", 
                        "min": 0, 
                        "max": 1000, 
                        "type": "UInt16", 
                        "id": 700, 
                        "unit": "mm"
                      }, 
                      "SideBolster": {
                        "type": "branch", 
                        "children": {
                          "Inflation": {
                            "type": "UInt8", 
                            "description": "Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.", 
                            "min": 0, 
                            "max": 255, 
                            "id": 705
                          }
                        }, 
                        "description": "Side bolster settings"
                      }, 
                      "Massage": {
                        "type": "UInt8", 
                        "min": 0, 
                        "max": 10, 
                        "id": 698, 
                        "description": "Seat massage level. 0 = off. 10 = max massage."
                      }
                    }
                  }, 
                  "Pos5": {
                    "description": "Fifth seat from left, third row", 
                    "type": "branch", 
                    "children": {
                      "HeadRestraint": {
                        "type": "branch", 
                        "children": {
                          "Height": {
                            "description": "Height of head restraint. 0 = Bottommost. 255 = Topmost.", 
                            "min": 0, 
                            "max": 255, 
                            "type": "UInt8", 
                            "id": 741, 
                            "unit": "mm"
                          }
                        }, 
                        "description": "Head restraint settings"
                      }, 
                      "Recline": {
                        "description": "Recline level. -90 = Max forward recline. 90 max backward recline", 
                        "min": -90, 
                        "max": 90, 
                        "type": "Int8", 
                        "id": 734, 
                        "unit": "degree"
                      }, 
                      "HasPassenger": {
                        "description": "Does the seat have a passenger in it.", 
                        "type": "Boolean", 
                        "id": 730
                      }, 
                      "Heating": {
                        "type": "Int8", 
                        "description": "Seat cooling / heating. 0 = off. -10 = max cold. +10 = max heat", 
                        "min": -10, 
                        "max": 10, 
                        "id": 732
                      }, 
                      "Lumbar": {
                        "type": "branch", 
                        "children": {
                          "Inflation": {
                            "type": "UInt8", 
                            "description": "Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.", 
                            "min": 0, 
                            "max": 255, 
                            "id": 738
                          }, 
                          "Height": {
                            "type": "UInt8", 
                            "description": "Lumbar support position. 0 = Lowermost. 255 = Uppermost.", 
                            "min": 0, 
                            "max": 255, 
                            "id": 739
                          }
                        }, 
                        "description": "Lumbar signals"
                      }, 
                      "Airbag": {
                        "description": "Airbag signals", 
                        "type": "branch", 
                        "children": {
                          "IsDeployed": {
                            "description": "Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.", 
                            "type": "Boolean", 
                            "id": 742
                          }
                        }
                      }, 
                      "Switch": {
                        "description": "Seat switch signals", 
                        "type": "branch", 
                        "children": {
                          "HeadRestraint": {
                            "description": "Head restraint switches", 
                            "type": "branch", 
                            "children": {
                              "Down": {
                                "type": "Boolean", 
                                "id": 750, 
                                "description": "Head restraint down switch engaged"
                              }, 
                              "Up": {
                                "description": "Head restraint up switch engaged", 
                                "type": "Boolean", 
                                "id": 749
                              }
                            }
                          }, 
                          "Cooler": {
                            "type": "Boolean", 
                            "id": 744, 
                            "description": "Cooler switch for Seat heater"
                          }, 
                          "Recline": {
                            "description": "Recline switches", 
                            "type": "branch", 
                            "children": {
                              "Forward": {
                                "type": "Boolean", 
                                "id": 754, 
                                "description": "Seatback recline forward switch engaged"
                              }, 
                              "Backward": {
                                "description": "Seatback recline backward switch engaged", 
                                "type": "Boolean", 
                                "id": 753
                              }
                            }
                          }, 
                          "Up": {
                            "description": "Seat up switch engaged", 
                            "type": "Boolean", 
                            "id": 747
                          }, 
                          "Lumbar": {
                            "description": "Lumbar switches", 
                            "type": "branch", 
                            "children": {
                              "Down": {
                                "type": "Boolean", 
                                "id": 760, 
                                "description": "Lumbar down switch engaged"
                              }, 
                              "Inflate": {
                                "description": "Lumbar inflation switch engaged", 
                                "type": "Boolean", 
                                "id": 761
                              }, 
                              "Up": {
                                "description": "Lumbar up switch engaged", 
                                "type": "Boolean", 
                                "id": 759
                              }, 
                              "Deflate": {
                                "type": "Boolean", 
                                "id": 762, 
                                "description": "Lumbar deflation switch engaged"
                              }
                            }
                          }, 
                          "Down": {
                            "description": "Seat down switch engaged", 
                            "type": "Boolean", 
                            "id": 748
                          }, 
                          "Warmer": {
                            "type": "Boolean", 
                            "id": 743, 
                            "description": "Warmer switch for Seat heater"
                          }, 
                          "Cushion": {
                            "description": "Cushion switches", 
                            "type": "branch", 
                            "children": {
                              "Down": {
                                "description": "Seat cushion down switch engaged", 
                                "type": "Boolean", 
                                "id": 756
                              }, 
                              "Forward": {
                                "description": "Seat cushion forward/lengthen switch engaged", 
                                "type": "Boolean", 
                                "id": 757
                              }, 
                              "Backward": {
                                "type": "Boolean", 
                                "id": 758, 
                                "description": "Seat cushion backward/shorten switch engaged"
                              }, 
                              "Up": {
                                "type": "Boolean", 
                                "id": 755, 
                                "description": "Seat cushion up switch engaged"
                              }
                            }
                          }, 
                          "Forward": {
                            "type": "Boolean", 
                            "id": 745, 
                            "description": "Seat forward switch engaged"
                          }, 
                          "Backward": {
                            "description": "Seat forward switch engaged", 
                            "type": "Boolean", 
                            "id": 746
                          }, 
                          "Massage": {
                            "type": "branch", 
                            "children": {
                              "Increase": {
                                "description": "Increase massage level switch engaged", 
                                "type": "Boolean", 
                                "id": 751
                              }, 
                              "Decrease": {
                                "description": "Decrease massage level switch engaged", 
                                "type": "Boolean", 
                                "id": 752
                              }
                            }, 
                            "description": "Massage switches"
                          }, 
                          "SideBolster": {
                            "description": "Side bolster switches", 
                            "type": "branch", 
                            "children": {
                              "Inflate": {
                                "description": "Lumbar inflation switch engaged", 
                                "type": "Boolean", 
                                "id": 763
                              }, 
                              "Deflate": {
                                "type": "Boolean", 
                                "id": 764, 
                                "description": "Lumbar deflation switch engaged"
                              }
                            }
                          }
                        }
                      }, 
                      "Cushion": {
                        "description": "Cushion signals.", 
                        "type": "branch", 
                        "children": {
                          "Length": {
                            "description": "Forward length of cushion (leg support). 0 = Rearmost. 500 = Forwardmost.", 
                            "min": 0, 
                            "max": 500, 
                            "type": "UInt16", 
                            "id": 737, 
                            "unit": "mm"
                          }, 
                          "Height": {
                            "description": "Height of the seat front. 0 = Lowermost. 500 = Uppermost.", 
                            "min": 0, 
                            "max": 500, 
                            "type": "UInt16", 
                            "id": 736, 
                            "unit": "mm"
                          }
                        }
                      }, 
                      "IsBelted": {
                        "description": "Is the belt engaged.", 
                        "type": "Boolean", 
                        "id": 731
                      }, 
                      "Position": {
                        "description": "Seat horizontal position. 0 = Frontmost. 1000 = Rearmost", 
                        "min": 0, 
                        "max": 1000, 
                        "type": "UInt16", 
                        "id": 735, 
                        "unit": "mm"
                      }, 
                      "SideBolster": {
                        "type": "branch", 
                        "children": {
                          "Inflation": {
                            "type": "UInt8", 
                            "description": "Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.", 
                            "min": 0, 
                            "max": 255, 
                            "id": 740
                          }
                        }, 
                        "description": "Side bolster settings"
                      }, 
                      "Massage": {
                        "type": "UInt8", 
                        "min": 0, 
                        "max": 10, 
                        "id": 733, 
                        "description": "Seat massage level. 0 = off. 10 = max massage."
                      }
                    }
                  }, 
                  "Pos2": {
                    "description": "Third seat from left, third row", 
                    "type": "branch", 
                    "children": {
                      "HeadRestraint": {
                        "type": "branch", 
                        "children": {
                          "Height": {
                            "description": "Height of head restraint. 0 = Bottommost. 255 = Topmost.", 
                            "min": 0, 
                            "max": 255, 
                            "type": "UInt8", 
                            "id": 636, 
                            "unit": "mm"
                          }
                        }, 
                        "description": "Head restraint settings"
                      }, 
                      "Recline": {
                        "description": "Recline level. -90 = Max forward recline. 90 max backward recline", 
                        "min": -90, 
                        "max": 90, 
                        "type": "Int8", 
                        "id": 629, 
                        "unit": "degree"
                      }, 
                      "HasPassenger": {
                        "description": "Does the seat have a passenger in it.", 
                        "type": "Boolean", 
                        "id": 625
                      }, 
                      "Heating": {
                        "type": "Int8", 
                        "description": "Seat cooling / heating. 0 = off. -10 = max cold. +10 = max heat", 
                        "min": -10, 
                        "max": 10, 
                        "id": 627
                      }, 
                      "Lumbar": {
                        "type": "branch", 
                        "children": {
                          "Inflation": {
                            "type": "UInt8", 
                            "description": "Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.", 
                            "min": 0, 
                            "max": 255, 
                            "id": 633
                          }, 
                          "Height": {
                            "type": "UInt8", 
                            "description": "Lumbar support position. 0 = Lowermost. 255 = Uppermost.", 
                            "min": 0, 
                            "max": 255, 
                            "id": 634
                          }
                        }, 
                        "description": "Lumbar signals"
                      }, 
                      "Airbag": {
                        "description": "Airbag signals", 
                        "type": "branch", 
                        "children": {
                          "IsDeployed": {
                            "description": "Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.", 
                            "type": "Boolean", 
                            "id": 637
                          }
                        }
                      }, 
                      "Switch": {
                        "description": "Seat switch signals", 
                        "type": "branch", 
                        "children": {
                          "HeadRestraint": {
                            "description": "Head restraint switches", 
                            "type": "branch", 
                            "children": {
                              "Down": {
                                "type": "Boolean", 
                                "id": 645, 
                                "description": "Head restraint down switch engaged"
                              }, 
                              "Up": {
                                "description": "Head restraint up switch engaged", 
                                "type": "Boolean", 
                                "id": 644
                              }
                            }
                          }, 
                          "Cooler": {
                            "type": "Boolean", 
                            "id": 639, 
                            "description": "Cooler switch for Seat heater"
                          }, 
                          "Recline": {
                            "description": "Recline switches", 
                            "type": "branch", 
                            "children": {
                              "Forward": {
                                "type": "Boolean", 
                                "id": 649, 
                                "description": "Seatback recline forward switch engaged"
                              }, 
                              "Backward": {
                                "description": "Seatback recline backward switch engaged", 
                                "type": "Boolean", 
                                "id": 648
                              }
                            }
                          }, 
                          "Up": {
                            "description": "Seat up switch engaged", 
                            "type": "Boolean", 
                            "id": 642
                          }, 
                          "Lumbar": {
                            "description": "Lumbar switches", 
                            "type": "branch", 
                            "children": {
                              "Down": {
                                "type": "Boolean", 
                                "id": 655, 
                                "description": "Lumbar down switch engaged"
                              }, 
                              "Inflate": {
                                "description": "Lumbar inflation switch engaged", 
                                "type": "Boolean", 
                                "id": 656
                              }, 
                              "Up": {
                                "description": "Lumbar up switch engaged", 
                                "type": "Boolean", 
                                "id": 654
                              }, 
                              "Deflate": {
                                "type": "Boolean", 
                                "id": 657, 
                                "description": "Lumbar deflation switch engaged"
                              }
                            }
                          }, 
                          "Down": {
                            "description": "Seat down switch engaged", 
                            "type": "Boolean", 
                            "id": 643
                          }, 
                          "Warmer": {
                            "type": "Boolean", 
                            "id": 638, 
                            "description": "Warmer switch for Seat heater"
                          }, 
                          "Cushion": {
                            "description": "Cushion switches", 
                            "type": "branch", 
                            "children": {
                              "Down": {
                                "description": "Seat cushion down switch engaged", 
                                "type": "Boolean", 
                                "id": 651
                              }, 
                              "Forward": {
                                "description": "Seat cushion forward/lengthen switch engaged", 
                                "type": "Boolean", 
                                "id": 652
                              }, 
                              "Backward": {
                                "type": "Boolean", 
                                "id": 653, 
                                "description": "Seat cushion backward/shorten switch engaged"
                              }, 
                              "Up": {
                                "type": "Boolean", 
                                "id": 650, 
                                "description": "Seat cushion up switch engaged"
                              }
                            }
                          }, 
                          "Forward": {
                            "type": "Boolean", 
                            "id": 640, 
                            "description": "Seat forward switch engaged"
                          }, 
                          "Backward": {
                            "description": "Seat forward switch engaged", 
                            "type": "Boolean", 
                            "id": 641
                          }, 
                          "Massage": {
                            "type": "branch", 
                            "children": {
                              "Increase": {
                                "description": "Increase massage level switch engaged", 
                                "type": "Boolean", 
                                "id": 646
                              }, 
                              "Decrease": {
                                "description": "Decrease massage level switch engaged", 
                                "type": "Boolean", 
                                "id": 647
                              }
                            }, 
                            "description": "Massage switches"
                          }, 
                          "SideBolster": {
                            "description": "Side bolster switches", 
                            "type": "branch", 
                            "children": {
                              "Inflate": {
                                "description": "Lumbar inflation switch engaged", 
                                "type": "Boolean", 
                                "id": 658
                              }, 
                              "Deflate": {
                                "type": "Boolean", 
                                "id": 659, 
                                "description": "Lumbar deflation switch engaged"
                              }
                            }
                          }
                        }
                      }, 
                      "Cushion": {
                        "description": "Cushion signals.", 
                        "type": "branch", 
                        "children": {
                          "Length": {
                            "description": "Forward length of cushion (leg support). 0 = Rearmost. 500 = Forwardmost.", 
                            "min": 0, 
                            "max": 500, 
                            "type": "UInt16", 
                            "id": 632, 
                            "unit": "mm"
                          }, 
                          "Height": {
                            "description": "Height of the seat front. 0 = Lowermost. 500 = Uppermost.", 
                            "min": 0, 
                            "max": 500, 
                            "type": "UInt16", 
                            "id": 631, 
                            "unit": "mm"
                          }
                        }
                      }, 
                      "IsBelted": {
                        "description": "Is the belt engaged.", 
                        "type": "Boolean", 
                        "id": 626
                      }, 
                      "Position": {
                        "description": "Seat horizontal position. 0 = Frontmost. 1000 = Rearmost", 
                        "min": 0, 
                        "max": 1000, 
                        "type": "UInt16", 
                        "id": 630, 
                        "unit": "mm"
                      }, 
                      "SideBolster": {
                        "type": "branch", 
                        "children": {
                          "Inflation": {
                            "type": "UInt8", 
                            "description": "Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.", 
                            "min": 0, 
                            "max": 255, 
                            "id": 635
                          }
                        }, 
                        "description": "Side bolster settings"
                      }, 
                      "Massage": {
                        "type": "UInt8", 
                        "min": 0, 
                        "max": 10, 
                        "id": 628, 
                        "description": "Seat massage level. 0 = off. 10 = max massage."
                      }
                    }
                  }, 
                  "Pos3": {
                    "type": "branch", 
                    "children": {
                      "HeadRestraint": {
                        "type": "branch", 
                        "children": {
                          "Height": {
                            "description": "Height of head restraint. 0 = Bottommost. 255 = Topmost.", 
                            "min": 0, 
                            "max": 255, 
                            "type": "UInt8", 
                            "id": 671, 
                            "unit": "mm"
                          }
                        }, 
                        "description": "Head restraint settings"
                      }, 
                      "Recline": {
                        "description": "Recline level. -90 = Max forward recline. 90 max backward recline", 
                        "min": -90, 
                        "max": 90, 
                        "type": "Int8", 
                        "id": 664, 
                        "unit": "degree"
                      }, 
                      "HasPassenger": {
                        "description": "Does the seat have a passenger in it.", 
                        "type": "Boolean", 
                        "id": 660
                      }, 
                      "Heating": {
                        "type": "Int8", 
                        "description": "Seat cooling / heating. 0 = off. -10 = max cold. +10 = max heat", 
                        "min": -10, 
                        "max": 10, 
                        "id": 662
                      }, 
                      "Lumbar": {
                        "type": "branch", 
                        "children": {
                          "Inflation": {
                            "type": "UInt8", 
                            "description": "Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.", 
                            "min": 0, 
                            "max": 255, 
                            "id": 668
                          }, 
                          "Height": {
                            "type": "UInt8", 
                            "description": "Lumbar support position. 0 = Lowermost. 255 = Uppermost.", 
                            "min": 0, 
                            "max": 255, 
                            "id": 669
                          }
                        }, 
                        "description": "Lumbar signals"
                      }, 
                      "Airbag": {
                        "description": "Airbag signals", 
                        "type": "branch", 
                        "children": {
                          "IsDeployed": {
                            "description": "Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.", 
                            "type": "Boolean", 
                            "id": 672
                          }
                        }
                      }, 
                      "Switch": {
                        "description": "Seat switch signals", 
                        "type": "branch", 
                        "children": {
                          "HeadRestraint": {
                            "description": "Head restraint switches", 
                            "type": "branch", 
                            "children": {
                              "Down": {
                                "type": "Boolean", 
                                "id": 680, 
                                "description": "Head restraint down switch engaged"
                              }, 
                              "Up": {
                                "description": "Head restraint up switch engaged", 
                                "type": "Boolean", 
                                "id": 679
                              }
                            }
                          }, 
                          "Cooler": {
                            "type": "Boolean", 
                            "id": 674, 
                            "description": "Cooler switch for Seat heater"
                          }, 
                          "Recline": {
                            "description": "Recline switches", 
                            "type": "branch", 
                            "children": {
                              "Forward": {
                                "type": "Boolean", 
                                "id": 684, 
                                "description": "Seatback recline forward switch engaged"
                              }, 
                              "Backward": {
                                "description": "Seatback recline backward switch engaged", 
                                "type": "Boolean", 
                                "id": 683
                              }
                            }
                          }, 
                          "Up": {
                            "description": "Seat up switch engaged", 
                            "type": "Boolean", 
                            "id": 677
                          }, 
                          "Lumbar": {
                            "description": "Lumbar switches", 
                            "type": "branch", 
                            "children": {
                              "Down": {
                                "type": "Boolean", 
                                "id": 690, 
                                "description": "Lumbar down switch engaged"
                              }, 
                              "Inflate": {
                                "description": "Lumbar inflation switch engaged", 
                                "type": "Boolean", 
                                "id": 691
                              }, 
                              "Up": {
                                "description": "Lumbar up switch engaged", 
                                "type": "Boolean", 
                                "id": 689
                              }, 
                              "Deflate": {
                                "type": "Boolean", 
                                "id": 692, 
                                "description": "Lumbar deflation switch engaged"
                              }
                            }
                          }, 
                          "Down": {
                            "description": "Seat down switch engaged", 
                            "type": "Boolean", 
                            "id": 678
                          }, 
                          "Warmer": {
                            "type": "Boolean", 
                            "id": 673, 
                            "description": "Warmer switch for Seat heater"
                          }, 
                          "Cushion": {
                            "description": "Cushion switches", 
                            "type": "branch", 
                            "children": {
                              "Down": {
                                "description": "Seat cushion down switch engaged", 
                                "type": "Boolean", 
                                "id": 686
                              }, 
                              "Forward": {
                                "description": "Seat cushion forward/lengthen switch engaged", 
                                "type": "Boolean", 
                                "id": 687
                              }, 
                              "Backward": {
                                "type": "Boolean", 
                                "id": 688, 
                                "description": "Seat cushion backward/shorten switch engaged"
                              }, 
                              "Up": {
                                "type": "Boolean", 
                                "id": 685, 
                                "description": "Seat cushion up switch engaged"
                              }
                            }
                          }, 
                          "Forward": {
                            "type": "Boolean", 
                            "id": 675, 
                            "description": "Seat forward switch engaged"
                          }, 
                          "Backward": {
                            "description": "Seat forward switch engaged", 
                            "type": "Boolean", 
                            "id": 676
                          }, 
                          "Massage": {
                            "type": "branch", 
                            "children": {
                              "Increase": {
                                "description": "Increase massage level switch engaged", 
                                "type": "Boolean", 
                                "id": 681
                              }, 
                              "Decrease": {
                                "description": "Decrease massage level switch engaged", 
                                "type": "Boolean", 
                                "id": 682
                              }
                            }, 
                            "description": "Massage switches"
                          }, 
                          "SideBolster": {
                            "description": "Side bolster switches", 
                            "type": "branch", 
                            "children": {
                              "Inflate": {
                                "description": "Lumbar inflation switch engaged", 
                                "type": "Boolean", 
                                "id": 693
                              }, 
                              "Deflate": {
                                "type": "Boolean", 
                                "id": 694, 
                                "description": "Lumbar deflation switch engaged"
                              }
                            }
                          }
                        }
                      }, 
                      "Cushion": {
                        "description": "Cushion signals.", 
                        "type": "branch", 
                        "children": {
                          "Length": {
                            "description": "Forward length of cushion (leg support). 0 = Rearmost. 500 = Forwardmost.", 
                            "min": 0, 
                            "max": 500, 
                            "type": "UInt16", 
                            "id": 667, 
                            "unit": "mm"
                          }, 
                          "Height": {
                            "description": "Height of the seat front. 0 = Lowermost. 500 = Uppermost.", 
                            "min": 0, 
                            "max": 500, 
                            "type": "UInt16", 
                            "id": 666, 
                            "unit": "mm"
                          }
                        }
                      }, 
                      "IsBelted": {
                        "description": "Is the belt engaged.", 
                        "type": "Boolean", 
                        "id": 661
                      }, 
                      "Position": {
                        "description": "Seat horizontal position. 0 = Frontmost. 1000 = Rearmost", 
                        "min": 0, 
                        "max": 1000, 
                        "type": "UInt16", 
                        "id": 665, 
                        "unit": "mm"
                      }, 
                      "SideBolster": {
                        "type": "branch", 
                        "children": {
                          "Inflation": {
                            "type": "UInt8", 
                            "description": "Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.", 
                            "min": 0, 
                            "max": 255, 
                            "id": 670
                          }
                        }, 
                        "description": "Side bolster settings"
                      }, 
                      "Massage": {
                        "type": "UInt8", 
                        "min": 0, 
                        "max": 10, 
                        "id": 663, 
                        "description": "Seat massage level. 0 = off. 10 = max massage."
                      }
                    }, 
                    "description": "Third seat from left, third row"
                  }, 
                  "Pos1": {
                    "type": "branch", 
                    "children": {
                      "HeadRestraint": {
                        "type": "branch", 
                        "children": {
                          "Height": {
                            "description": "Height of head restraint. 0 = Bottommost. 255 = Topmost.", 
                            "min": 0, 
                            "max": 255, 
                            "type": "UInt8", 
                            "id": 601, 
                            "unit": "mm"
                          }
                        }, 
                        "description": "Head restraint settings"
                      }, 
                      "Recline": {
                        "description": "Recline level. -90 = Max forward recline. 90 max backward recline", 
                        "min": -90, 
                        "max": 90, 
                        "type": "Int8", 
                        "id": 594, 
                        "unit": "degree"
                      }, 
                      "HasPassenger": {
                        "description": "Does the seat have a passenger in it.", 
                        "type": "Boolean", 
                        "id": 590
                      }, 
                      "Heating": {
                        "type": "Int8", 
                        "description": "Seat cooling / heating. 0 = off. -10 = max cold. +10 = max heat", 
                        "min": -10, 
                        "max": 10, 
                        "id": 592
                      }, 
                      "Lumbar": {
                        "type": "branch", 
                        "children": {
                          "Inflation": {
                            "type": "UInt8", 
                            "description": "Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.", 
                            "min": 0, 
                            "max": 255, 
                            "id": 598
                          }, 
                          "Height": {
                            "type": "UInt8", 
                            "description": "Lumbar support position. 0 = Lowermost. 255 = Uppermost.", 
                            "min": 0, 
                            "max": 255, 
                            "id": 599
                          }
                        }, 
                        "description": "Lumbar signals"
                      }, 
                      "Airbag": {
                        "description": "Airbag signals", 
                        "type": "branch", 
                        "children": {
                          "IsDeployed": {
                            "description": "Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.", 
                            "type": "Boolean", 
                            "id": 602
                          }
                        }
                      }, 
                      "Switch": {
                        "description": "Seat switch signals", 
                        "type": "branch", 
                        "children": {
                          "HeadRestraint": {
                            "description": "Head restraint switches", 
                            "type": "branch", 
                            "children": {
                              "Down": {
                                "type": "Boolean", 
                                "id": 610, 
                                "description": "Head restraint down switch engaged"
                              }, 
                              "Up": {
                                "description": "Head restraint up switch engaged", 
                                "type": "Boolean", 
                                "id": 609
                              }
                            }
                          }, 
                          "Cooler": {
                            "type": "Boolean", 
                            "id": 604, 
                            "description": "Cooler switch for Seat heater"
                          }, 
                          "Recline": {
                            "description": "Recline switches", 
                            "type": "branch", 
                            "children": {
                              "Forward": {
                                "type": "Boolean", 
                                "id": 614, 
                                "description": "Seatback recline forward switch engaged"
                              }, 
                              "Backward": {
                                "description": "Seatback recline backward switch engaged", 
                                "type": "Boolean", 
                                "id": 613
                              }
                            }
                          }, 
                          "Up": {
                            "description": "Seat up switch engaged", 
                            "type": "Boolean", 
                            "id": 607
                          }, 
                          "Lumbar": {
                            "description": "Lumbar switches", 
                            "type": "branch", 
                            "children": {
                              "Down": {
                                "type": "Boolean", 
                                "id": 620, 
                                "description": "Lumbar down switch engaged"
                              }, 
                              "Inflate": {
                                "description": "Lumbar inflation switch engaged", 
                                "type": "Boolean", 
                                "id": 621
                              }, 
                              "Up": {
                                "description": "Lumbar up switch engaged", 
                                "type": "Boolean", 
                                "id": 619
                              }, 
                              "Deflate": {
                                "type": "Boolean", 
                                "id": 622, 
                                "description": "Lumbar deflation switch engaged"
                              }
                            }
                          }, 
                          "Down": {
                            "description": "Seat down switch engaged", 
                            "type": "Boolean", 
                            "id": 608
                          }, 
                          "Warmer": {
                            "type": "Boolean", 
                            "id": 603, 
                            "description": "Warmer switch for Seat heater"
                          }, 
                          "Cushion": {
                            "description": "Cushion switches", 
                            "type": "branch", 
                            "children": {
                              "Down": {
                                "description": "Seat cushion down switch engaged", 
                                "type": "Boolean", 
                                "id": 616
                              }, 
                              "Forward": {
                                "description": "Seat cushion forward/lengthen switch engaged", 
                                "type": "Boolean", 
                                "id": 617
                              }, 
                              "Backward": {
                                "type": "Boolean", 
                                "id": 618, 
                                "description": "Seat cushion backward/shorten switch engaged"
                              }, 
                              "Up": {
                                "type": "Boolean", 
                                "id": 615, 
                                "description": "Seat cushion up switch engaged"
                              }
                            }
                          }, 
                          "Forward": {
                            "type": "Boolean", 
                            "id": 605, 
                            "description": "Seat forward switch engaged"
                          }, 
                          "Backward": {
                            "description": "Seat forward switch engaged", 
                            "type": "Boolean", 
                            "id": 606
                          }, 
                          "Massage": {
                            "type": "branch", 
                            "children": {
                              "Increase": {
                                "description": "Increase massage level switch engaged", 
                                "type": "Boolean", 
                                "id": 611
                              }, 
                              "Decrease": {
                                "description": "Decrease massage level switch engaged", 
                                "type": "Boolean", 
                                "id": 612
                              }
                            }, 
                            "description": "Massage switches"
                          }, 
                          "SideBolster": {
                            "description": "Side bolster switches", 
                            "type": "branch", 
                            "children": {
                              "Inflate": {
                                "description": "Lumbar inflation switch engaged", 
                                "type": "Boolean", 
                                "id": 623
                              }, 
                              "Deflate": {
                                "type": "Boolean", 
                                "id": 624, 
                                "description": "Lumbar deflation switch engaged"
                              }
                            }
                          }
                        }
                      }, 
                      "Cushion": {
                        "description": "Cushion signals.", 
                        "type": "branch", 
                        "children": {
                          "Length": {
                            "description": "Forward length of cushion (leg support). 0 = Rearmost. 500 = Forwardmost.", 
                            "min": 0, 
                            "max": 500, 
                            "type": "UInt16", 
                            "id": 597, 
                            "unit": "mm"
                          }, 
                          "Height": {
                            "description": "Height of the seat front. 0 = Lowermost. 500 = Uppermost.", 
                            "min": 0, 
                            "max": 500, 
                            "type": "UInt16", 
                            "id": 596, 
                            "unit": "mm"
                          }
                        }
                      }, 
                      "IsBelted": {
                        "description": "Is the belt engaged.", 
                        "type": "Boolean", 
                        "id": 591
                      }, 
                      "Position": {
                        "description": "Seat horizontal position. 0 = Frontmost. 1000 = Rearmost", 
                        "min": 0, 
                        "max": 1000, 
                        "type": "UInt16", 
                        "id": 595, 
                        "unit": "mm"
                      }, 
                      "SideBolster": {
                        "type": "branch", 
                        "children": {
                          "Inflation": {
                            "type": "UInt8", 
                            "description": "Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.", 
                            "min": 0, 
                            "max": 255, 
                            "id": 600
                          }
                        }, 
                        "description": "Side bolster settings"
                      }, 
                      "Massage": {
                        "type": "UInt8", 
                        "min": 0, 
                        "max": 10, 
                        "id": 593, 
                        "description": "Seat massage level. 0 = off. 10 = max massage."
                      }
                    }, 
                    "description": "First seat from left, third row"
                  }
                }
              }, 
              "Row4": {
                "description": "Front seats", 
                "type": "branch", 
                "children": {
                  "Pos4": {
                    "type": "branch", 
                    "children": {
                      "HeadRestraint": {
                        "type": "branch", 
                        "children": {
                          "Height": {
                            "description": "Height of head restraint. 0 = Bottommost. 255 = Topmost.", 
                            "min": 0, 
                            "max": 255, 
                            "type": "UInt8", 
                            "id": 881, 
                            "unit": "mm"
                          }
                        }, 
                        "description": "Head restraint settings"
                      }, 
                      "Recline": {
                        "description": "Recline level. -90 = Max forward recline. 90 max backward recline", 
                        "min": -90, 
                        "max": 90, 
                        "type": "Int8", 
                        "id": 874, 
                        "unit": "degree"
                      }, 
                      "HasPassenger": {
                        "description": "Does the seat have a passenger in it.", 
                        "type": "Boolean", 
                        "id": 870
                      }, 
                      "Heating": {
                        "type": "Int8", 
                        "description": "Seat cooling / heating. 0 = off. -10 = max cold. +10 = max heat", 
                        "min": -10, 
                        "max": 10, 
                        "id": 872
                      }, 
                      "Lumbar": {
                        "type": "branch", 
                        "children": {
                          "Inflation": {
                            "type": "UInt8", 
                            "description": "Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.", 
                            "min": 0, 
                            "max": 255, 
                            "id": 878
                          }, 
                          "Height": {
                            "type": "UInt8", 
                            "description": "Lumbar support position. 0 = Lowermost. 255 = Uppermost.", 
                            "min": 0, 
                            "max": 255, 
                            "id": 879
                          }
                        }, 
                        "description": "Lumbar signals"
                      }, 
                      "Airbag": {
                        "description": "Airbag signals", 
                        "type": "branch", 
                        "children": {
                          "IsDeployed": {
                            "description": "Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.", 
                            "type": "Boolean", 
                            "id": 882
                          }
                        }
                      }, 
                      "Switch": {
                        "description": "Seat switch signals", 
                        "type": "branch", 
                        "children": {
                          "HeadRestraint": {
                            "description": "Head restraint switches", 
                            "type": "branch", 
                            "children": {
                              "Down": {
                                "type": "Boolean", 
                                "id": 890, 
                                "description": "Head restraint down switch engaged"
                              }, 
                              "Up": {
                                "description": "Head restraint up switch engaged", 
                                "type": "Boolean", 
                                "id": 889
                              }
                            }
                          }, 
                          "Cooler": {
                            "type": "Boolean", 
                            "id": 884, 
                            "description": "Cooler switch for Seat heater"
                          }, 
                          "Recline": {
                            "description": "Recline switches", 
                            "type": "branch", 
                            "children": {
                              "Forward": {
                                "type": "Boolean", 
                                "id": 894, 
                                "description": "Seatback recline forward switch engaged"
                              }, 
                              "Backward": {
                                "description": "Seatback recline backward switch engaged", 
                                "type": "Boolean", 
                                "id": 893
                              }
                            }
                          }, 
                          "Up": {
                            "description": "Seat up switch engaged", 
                            "type": "Boolean", 
                            "id": 887
                          }, 
                          "Lumbar": {
                            "description": "Lumbar switches", 
                            "type": "branch", 
                            "children": {
                              "Down": {
                                "type": "Boolean", 
                                "id": 900, 
                                "description": "Lumbar down switch engaged"
                              }, 
                              "Inflate": {
                                "description": "Lumbar inflation switch engaged", 
                                "type": "Boolean", 
                                "id": 901
                              }, 
                              "Up": {
                                "description": "Lumbar up switch engaged", 
                                "type": "Boolean", 
                                "id": 899
                              }, 
                              "Deflate": {
                                "type": "Boolean", 
                                "id": 902, 
                                "description": "Lumbar deflation switch engaged"
                              }
                            }
                          }, 
                          "Down": {
                            "description": "Seat down switch engaged", 
                            "type": "Boolean", 
                            "id": 888
                          }, 
                          "Warmer": {
                            "type": "Boolean", 
                            "id": 883, 
                            "description": "Warmer switch for Seat heater"
                          }, 
                          "Cushion": {
                            "description": "Cushion switches", 
                            "type": "branch", 
                            "children": {
                              "Down": {
                                "description": "Seat cushion down switch engaged", 
                                "type": "Boolean", 
                                "id": 896
                              }, 
                              "Forward": {
                                "description": "Seat cushion forward/lengthen switch engaged", 
                                "type": "Boolean", 
                                "id": 897
                              }, 
                              "Backward": {
                                "type": "Boolean", 
                                "id": 898, 
                                "description": "Seat cushion backward/shorten switch engaged"
                              }, 
                              "Up": {
                                "type": "Boolean", 
                                "id": 895, 
                                "description": "Seat cushion up switch engaged"
                              }
                            }
                          }, 
                          "Forward": {
                            "type": "Boolean", 
                            "id": 885, 
                            "description": "Seat forward switch engaged"
                          }, 
                          "Backward": {
                            "description": "Seat forward switch engaged", 
                            "type": "Boolean", 
                            "id": 886
                          }, 
                          "Massage": {
                            "type": "branch", 
                            "children": {
                              "Increase": {
                                "description": "Increase massage level switch engaged", 
                                "type": "Boolean", 
                                "id": 891
                              }, 
                              "Decrease": {
                                "description": "Decrease massage level switch engaged", 
                                "type": "Boolean", 
                                "id": 892
                              }
                            }, 
                            "description": "Massage switches"
                          }, 
                          "SideBolster": {
                            "description": "Side bolster switches", 
                            "type": "branch", 
                            "children": {
                              "Inflate": {
                                "description": "Lumbar inflation switch engaged", 
                                "type": "Boolean", 
                                "id": 903
                              }, 
                              "Deflate": {
                                "type": "Boolean", 
                                "id": 904, 
                                "description": "Lumbar deflation switch engaged"
                              }
                            }
                          }
                        }
                      }, 
                      "Cushion": {
                        "description": "Cushion signals.", 
                        "type": "branch", 
                        "children": {
                          "Length": {
                            "description": "Forward length of cushion (leg support). 0 = Rearmost. 500 = Forwardmost.", 
                            "min": 0, 
                            "max": 500, 
                            "type": "UInt16", 
                            "id": 877, 
                            "unit": "mm"
                          }, 
                          "Height": {
                            "description": "Height of the seat front. 0 = Lowermost. 500 = Uppermost.", 
                            "min": 0, 
                            "max": 500, 
                            "type": "UInt16", 
                            "id": 876, 
                            "unit": "mm"
                          }
                        }
                      }, 
                      "IsBelted": {
                        "description": "Is the belt engaged.", 
                        "type": "Boolean", 
                        "id": 871
                      }, 
                      "Position": {
                        "description": "Seat horizontal position. 0 = Frontmost. 1000 = Rearmost", 
                        "min": 0, 
                        "max": 1000, 
                        "type": "UInt16", 
                        "id": 875, 
                        "unit": "mm"
                      }, 
                      "SideBolster": {
                        "type": "branch", 
                        "children": {
                          "Inflation": {
                            "type": "UInt8", 
                            "description": "Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.", 
                            "min": 0, 
                            "max": 255, 
                            "id": 880
                          }
                        }, 
                        "description": "Side bolster settings"
                      }, 
                      "Massage": {
                        "type": "UInt8", 
                        "min": 0, 
                        "max": 10, 
                        "id": 873, 
                        "description": "Seat massage level. 0 = off. 10 = max massage."
                      }
                    }, 
                    "description": "Fourth seat from left, fourth row"
                  }, 
                  "Pos5": {
                    "description": "Fifth seat from left, fourth row", 
                    "type": "branch", 
                    "children": {
                      "HeadRestraint": {
                        "type": "branch", 
                        "children": {
                          "Height": {
                            "description": "Height of head restraint. 0 = Bottommost. 255 = Topmost.", 
                            "min": 0, 
                            "max": 255, 
                            "type": "UInt8", 
                            "id": 916, 
                            "unit": "mm"
                          }
                        }, 
                        "description": "Head restraint settings"
                      }, 
                      "Recline": {
                        "description": "Recline level. -90 = Max forward recline. 90 max backward recline", 
                        "min": -90, 
                        "max": 90, 
                        "type": "Int8", 
                        "id": 909, 
                        "unit": "degree"
                      }, 
                      "HasPassenger": {
                        "description": "Does the seat have a passenger in it.", 
                        "type": "Boolean", 
                        "id": 905
                      }, 
                      "Heating": {
                        "type": "Int8", 
                        "description": "Seat cooling / heating. 0 = off. -10 = max cold. +10 = max heat", 
                        "min": -10, 
                        "max": 10, 
                        "id": 907
                      }, 
                      "Lumbar": {
                        "type": "branch", 
                        "children": {
                          "Inflation": {
                            "type": "UInt8", 
                            "description": "Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.", 
                            "min": 0, 
                            "max": 255, 
                            "id": 913
                          }, 
                          "Height": {
                            "type": "UInt8", 
                            "description": "Lumbar support position. 0 = Lowermost. 255 = Uppermost.", 
                            "min": 0, 
                            "max": 255, 
                            "id": 914
                          }
                        }, 
                        "description": "Lumbar signals"
                      }, 
                      "Airbag": {
                        "description": "Airbag signals", 
                        "type": "branch", 
                        "children": {
                          "IsDeployed": {
                            "description": "Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.", 
                            "type": "Boolean", 
                            "id": 917
                          }
                        }
                      }, 
                      "Switch": {
                        "description": "Seat switch signals", 
                        "type": "branch", 
                        "children": {
                          "HeadRestraint": {
                            "description": "Head restraint switches", 
                            "type": "branch", 
                            "children": {
                              "Down": {
                                "type": "Boolean", 
                                "id": 925, 
                                "description": "Head restraint down switch engaged"
                              }, 
                              "Up": {
                                "description": "Head restraint up switch engaged", 
                                "type": "Boolean", 
                                "id": 924
                              }
                            }
                          }, 
                          "Cooler": {
                            "type": "Boolean", 
                            "id": 919, 
                            "description": "Cooler switch for Seat heater"
                          }, 
                          "Recline": {
                            "description": "Recline switches", 
                            "type": "branch", 
                            "children": {
                              "Forward": {
                                "type": "Boolean", 
                                "id": 929, 
                                "description": "Seatback recline forward switch engaged"
                              }, 
                              "Backward": {
                                "description": "Seatback recline backward switch engaged", 
                                "type": "Boolean", 
                                "id": 928
                              }
                            }
                          }, 
                          "Up": {
                            "description": "Seat up switch engaged", 
                            "type": "Boolean", 
                            "id": 922
                          }, 
                          "Lumbar": {
                            "description": "Lumbar switches", 
                            "type": "branch", 
                            "children": {
                              "Down": {
                                "type": "Boolean", 
                                "id": 935, 
                                "description": "Lumbar down switch engaged"
                              }, 
                              "Inflate": {
                                "description": "Lumbar inflation switch engaged", 
                                "type": "Boolean", 
                                "id": 936
                              }, 
                              "Up": {
                                "description": "Lumbar up switch engaged", 
                                "type": "Boolean", 
                                "id": 934
                              }, 
                              "Deflate": {
                                "type": "Boolean", 
                                "id": 937, 
                                "description": "Lumbar deflation switch engaged"
                              }
                            }
                          }, 
                          "Down": {
                            "description": "Seat down switch engaged", 
                            "type": "Boolean", 
                            "id": 923
                          }, 
                          "Warmer": {
                            "type": "Boolean", 
                            "id": 918, 
                            "description": "Warmer switch for Seat heater"
                          }, 
                          "Cushion": {
                            "description": "Cushion switches", 
                            "type": "branch", 
                            "children": {
                              "Down": {
                                "description": "Seat cushion down switch engaged", 
                                "type": "Boolean", 
                                "id": 931
                              }, 
                              "Forward": {
                                "description": "Seat cushion forward/lengthen switch engaged", 
                                "type": "Boolean", 
                                "id": 932
                              }, 
                              "Backward": {
                                "type": "Boolean", 
                                "id": 933, 
                                "description": "Seat cushion backward/shorten switch engaged"
                              }, 
                              "Up": {
                                "type": "Boolean", 
                                "id": 930, 
                                "description": "Seat cushion up switch engaged"
                              }
                            }
                          }, 
                          "Forward": {
                            "type": "Boolean", 
                            "id": 920, 
                            "description": "Seat forward switch engaged"
                          }, 
                          "Backward": {
                            "description": "Seat forward switch engaged", 
                            "type": "Boolean", 
                            "id": 921
                          }, 
                          "Massage": {
                            "type": "branch", 
                            "children": {
                              "Increase": {
                                "description": "Increase massage level switch engaged", 
                                "type": "Boolean", 
                                "id": 926
                              }, 
                              "Decrease": {
                                "description": "Decrease massage level switch engaged", 
                                "type": "Boolean", 
                                "id": 927
                              }
                            }, 
                            "description": "Massage switches"
                          }, 
                          "SideBolster": {
                            "description": "Side bolster switches", 
                            "type": "branch", 
                            "children": {
                              "Inflate": {
                                "description": "Lumbar inflation switch engaged", 
                                "type": "Boolean", 
                                "id": 938
                              }, 
                              "Deflate": {
                                "type": "Boolean", 
                                "id": 939, 
                                "description": "Lumbar deflation switch engaged"
                              }
                            }
                          }
                        }
                      }, 
                      "Cushion": {
                        "description": "Cushion signals.", 
                        "type": "branch", 
                        "children": {
                          "Length": {
                            "description": "Forward length of cushion (leg support). 0 = Rearmost. 500 = Forwardmost.", 
                            "min": 0, 
                            "max": 500, 
                            "type": "UInt16", 
                            "id": 912, 
                            "unit": "mm"
                          }, 
                          "Height": {
                            "description": "Height of the seat front. 0 = Lowermost. 500 = Uppermost.", 
                            "min": 0, 
                            "max": 500, 
                            "type": "UInt16", 
                            "id": 911, 
                            "unit": "mm"
                          }
                        }
                      }, 
                      "IsBelted": {
                        "description": "Is the belt engaged.", 
                        "type": "Boolean", 
                        "id": 906
                      }, 
                      "Position": {
                        "description": "Seat horizontal position. 0 = Frontmost. 1000 = Rearmost", 
                        "min": 0, 
                        "max": 1000, 
                        "type": "UInt16", 
                        "id": 910, 
                        "unit": "mm"
                      }, 
                      "SideBolster": {
                        "type": "branch", 
                        "children": {
                          "Inflation": {
                            "type": "UInt8", 
                            "description": "Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.", 
                            "min": 0, 
                            "max": 255, 
                            "id": 915
                          }
                        }, 
                        "description": "Side bolster settings"
                      }, 
                      "Massage": {
                        "type": "UInt8", 
                        "min": 0, 
                        "max": 10, 
                        "id": 908, 
                        "description": "Seat massage level. 0 = off. 10 = max massage."
                      }
                    }
                  }, 
                  "Pos2": {
                    "description": "Fourth seat from left, fourth row", 
                    "type": "branch", 
                    "children": {
                      "HeadRestraint": {
                        "type": "branch", 
                        "children": {
                          "Height": {
                            "description": "Height of head restraint. 0 = Bottommost. 255 = Topmost.", 
                            "min": 0, 
                            "max": 255, 
                            "type": "UInt8", 
                            "id": 811, 
                            "unit": "mm"
                          }
                        }, 
                        "description": "Head restraint settings"
                      }, 
                      "Recline": {
                        "description": "Recline level. -90 = Max forward recline. 90 max backward recline", 
                        "min": -90, 
                        "max": 90, 
                        "type": "Int8", 
                        "id": 804, 
                        "unit": "degree"
                      }, 
                      "HasPassenger": {
                        "description": "Does the seat have a passenger in it.", 
                        "type": "Boolean", 
                        "id": 800
                      }, 
                      "Heating": {
                        "type": "Int8", 
                        "description": "Seat cooling / heating. 0 = off. -10 = max cold. +10 = max heat", 
                        "min": -10, 
                        "max": 10, 
                        "id": 802
                      }, 
                      "Lumbar": {
                        "type": "branch", 
                        "children": {
                          "Inflation": {
                            "type": "UInt8", 
                            "description": "Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.", 
                            "min": 0, 
                            "max": 255, 
                            "id": 808
                          }, 
                          "Height": {
                            "type": "UInt8", 
                            "description": "Lumbar support position. 0 = Lowermost. 255 = Uppermost.", 
                            "min": 0, 
                            "max": 255, 
                            "id": 809
                          }
                        }, 
                        "description": "Lumbar signals"
                      }, 
                      "Airbag": {
                        "description": "Airbag signals", 
                        "type": "branch", 
                        "children": {
                          "IsDeployed": {
                            "description": "Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.", 
                            "type": "Boolean", 
                            "id": 812
                          }
                        }
                      }, 
                      "Switch": {
                        "description": "Seat switch signals", 
                        "type": "branch", 
                        "children": {
                          "HeadRestraint": {
                            "description": "Head restraint switches", 
                            "type": "branch", 
                            "children": {
                              "Down": {
                                "type": "Boolean", 
                                "id": 820, 
                                "description": "Head restraint down switch engaged"
                              }, 
                              "Up": {
                                "description": "Head restraint up switch engaged", 
                                "type": "Boolean", 
                                "id": 819
                              }
                            }
                          }, 
                          "Cooler": {
                            "type": "Boolean", 
                            "id": 814, 
                            "description": "Cooler switch for Seat heater"
                          }, 
                          "Recline": {
                            "description": "Recline switches", 
                            "type": "branch", 
                            "children": {
                              "Forward": {
                                "type": "Boolean", 
                                "id": 824, 
                                "description": "Seatback recline forward switch engaged"
                              }, 
                              "Backward": {
                                "description": "Seatback recline backward switch engaged", 
                                "type": "Boolean", 
                                "id": 823
                              }
                            }
                          }, 
                          "Up": {
                            "description": "Seat up switch engaged", 
                            "type": "Boolean", 
                            "id": 817
                          }, 
                          "Lumbar": {
                            "description": "Lumbar switches", 
                            "type": "branch", 
                            "children": {
                              "Down": {
                                "type": "Boolean", 
                                "id": 830, 
                                "description": "Lumbar down switch engaged"
                              }, 
                              "Inflate": {
                                "description": "Lumbar inflation switch engaged", 
                                "type": "Boolean", 
                                "id": 831
                              }, 
                              "Up": {
                                "description": "Lumbar up switch engaged", 
                                "type": "Boolean", 
                                "id": 829
                              }, 
                              "Deflate": {
                                "type": "Boolean", 
                                "id": 832, 
                                "description": "Lumbar deflation switch engaged"
                              }
                            }
                          }, 
                          "Down": {
                            "description": "Seat down switch engaged", 
                            "type": "Boolean", 
                            "id": 818
                          }, 
                          "Warmer": {
                            "type": "Boolean", 
                            "id": 813, 
                            "description": "Warmer switch for Seat heater"
                          }, 
                          "Cushion": {
                            "description": "Cushion switches", 
                            "type": "branch", 
                            "children": {
                              "Down": {
                                "description": "Seat cushion down switch engaged", 
                                "type": "Boolean", 
                                "id": 826
                              }, 
                              "Forward": {
                                "description": "Seat cushion forward/lengthen switch engaged", 
                                "type": "Boolean", 
                                "id": 827
                              }, 
                              "Backward": {
                                "type": "Boolean", 
                                "id": 828, 
                                "description": "Seat cushion backward/shorten switch engaged"
                              }, 
                              "Up": {
                                "type": "Boolean", 
                                "id": 825, 
                                "description": "Seat cushion up switch engaged"
                              }
                            }
                          }, 
                          "Forward": {
                            "type": "Boolean", 
                            "id": 815, 
                            "description": "Seat forward switch engaged"
                          }, 
                          "Backward": {
                            "description": "Seat forward switch engaged", 
                            "type": "Boolean", 
                            "id": 816
                          }, 
                          "Massage": {
                            "type": "branch", 
                            "children": {
                              "Increase": {
                                "description": "Increase massage level switch engaged", 
                                "type": "Boolean", 
                                "id": 821
                              }, 
                              "Decrease": {
                                "description": "Decrease massage level switch engaged", 
                                "type": "Boolean", 
                                "id": 822
                              }
                            }, 
                            "description": "Massage switches"
                          }, 
                          "SideBolster": {
                            "description": "Side bolster switches", 
                            "type": "branch", 
                            "children": {
                              "Inflate": {
                                "description": "Lumbar inflation switch engaged", 
                                "type": "Boolean", 
                                "id": 833
                              }, 
                              "Deflate": {
                                "type": "Boolean", 
                                "id": 834, 
                                "description": "Lumbar deflation switch engaged"
                              }
                            }
                          }
                        }
                      }, 
                      "Cushion": {
                        "description": "Cushion signals.", 
                        "type": "branch", 
                        "children": {
                          "Length": {
                            "description": "Forward length of cushion (leg support). 0 = Rearmost. 500 = Forwardmost.", 
                            "min": 0, 
                            "max": 500, 
                            "type": "UInt16", 
                            "id": 807, 
                            "unit": "mm"
                          }, 
                          "Height": {
                            "description": "Height of the seat front. 0 = Lowermost. 500 = Uppermost.", 
                            "min": 0, 
                            "max": 500, 
                            "type": "UInt16", 
                            "id": 806, 
                            "unit": "mm"
                          }
                        }
                      }, 
                      "IsBelted": {
                        "description": "Is the belt engaged.", 
                        "type": "Boolean", 
                        "id": 801
                      }, 
                      "Position": {
                        "description": "Seat horizontal position. 0 = Frontmost. 1000 = Rearmost", 
                        "min": 0, 
                        "max": 1000, 
                        "type": "UInt16", 
                        "id": 805, 
                        "unit": "mm"
                      }, 
                      "SideBolster": {
                        "type": "branch", 
                        "children": {
                          "Inflation": {
                            "type": "UInt8", 
                            "description": "Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.", 
                            "min": 0, 
                            "max": 255, 
                            "id": 810
                          }
                        }, 
                        "description": "Side bolster settings"
                      }, 
                      "Massage": {
                        "type": "UInt8", 
                        "min": 0, 
                        "max": 10, 
                        "id": 803, 
                        "description": "Seat massage level. 0 = off. 10 = max massage."
                      }
                    }
                  }, 
                  "Pos3": {
                    "description": "Fourth seat from left, fourth row", 
                    "type": "branch", 
                    "children": {
                      "HeadRestraint": {
                        "type": "branch", 
                        "children": {
                          "Height": {
                            "description": "Height of head restraint. 0 = Bottommost. 255 = Topmost.", 
                            "min": 0, 
                            "max": 255, 
                            "type": "UInt8", 
                            "id": 846, 
                            "unit": "mm"
                          }
                        }, 
                        "description": "Head restraint settings"
                      }, 
                      "Recline": {
                        "description": "Recline level. -90 = Max forward recline. 90 max backward recline", 
                        "min": -90, 
                        "max": 90, 
                        "type": "Int8", 
                        "id": 839, 
                        "unit": "degree"
                      }, 
                      "HasPassenger": {
                        "description": "Does the seat have a passenger in it.", 
                        "type": "Boolean", 
                        "id": 835
                      }, 
                      "Heating": {
                        "type": "Int8", 
                        "description": "Seat cooling / heating. 0 = off. -10 = max cold. +10 = max heat", 
                        "min": -10, 
                        "max": 10, 
                        "id": 837
                      }, 
                      "Lumbar": {
                        "type": "branch", 
                        "children": {
                          "Inflation": {
                            "type": "UInt8", 
                            "description": "Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.", 
                            "min": 0, 
                            "max": 255, 
                            "id": 843
                          }, 
                          "Height": {
                            "type": "UInt8", 
                            "description": "Lumbar support position. 0 = Lowermost. 255 = Uppermost.", 
                            "min": 0, 
                            "max": 255, 
                            "id": 844
                          }
                        }, 
                        "description": "Lumbar signals"
                      }, 
                      "Airbag": {
                        "description": "Airbag signals", 
                        "type": "branch", 
                        "children": {
                          "IsDeployed": {
                            "description": "Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.", 
                            "type": "Boolean", 
                            "id": 847
                          }
                        }
                      }, 
                      "Switch": {
                        "description": "Seat switch signals", 
                        "type": "branch", 
                        "children": {
                          "HeadRestraint": {
                            "description": "Head restraint switches", 
                            "type": "branch", 
                            "children": {
                              "Down": {
                                "type": "Boolean", 
                                "id": 855, 
                                "description": "Head restraint down switch engaged"
                              }, 
                              "Up": {
                                "description": "Head restraint up switch engaged", 
                                "type": "Boolean", 
                                "id": 854
                              }
                            }
                          }, 
                          "Cooler": {
                            "type": "Boolean", 
                            "id": 849, 
                            "description": "Cooler switch for Seat heater"
                          }, 
                          "Recline": {
                            "description": "Recline switches", 
                            "type": "branch", 
                            "children": {
                              "Forward": {
                                "type": "Boolean", 
                                "id": 859, 
                                "description": "Seatback recline forward switch engaged"
                              }, 
                              "Backward": {
                                "description": "Seatback recline backward switch engaged", 
                                "type": "Boolean", 
                                "id": 858
                              }
                            }
                          }, 
                          "Up": {
                            "description": "Seat up switch engaged", 
                            "type": "Boolean", 
                            "id": 852
                          }, 
                          "Lumbar": {
                            "description": "Lumbar switches", 
                            "type": "branch", 
                            "children": {
                              "Down": {
                                "type": "Boolean", 
                                "id": 865, 
                                "description": "Lumbar down switch engaged"
                              }, 
                              "Inflate": {
                                "description": "Lumbar inflation switch engaged", 
                                "type": "Boolean", 
                                "id": 866
                              }, 
                              "Up": {
                                "description": "Lumbar up switch engaged", 
                                "type": "Boolean", 
                                "id": 864
                              }, 
                              "Deflate": {
                                "type": "Boolean", 
                                "id": 867, 
                                "description": "Lumbar deflation switch engaged"
                              }
                            }
                          }, 
                          "Down": {
                            "description": "Seat down switch engaged", 
                            "type": "Boolean", 
                            "id": 853
                          }, 
                          "Warmer": {
                            "type": "Boolean", 
                            "id": 848, 
                            "description": "Warmer switch for Seat heater"
                          }, 
                          "Cushion": {
                            "description": "Cushion switches", 
                            "type": "branch", 
                            "children": {
                              "Down": {
                                "description": "Seat cushion down switch engaged", 
                                "type": "Boolean", 
                                "id": 861
                              }, 
                              "Forward": {
                                "description": "Seat cushion forward/lengthen switch engaged", 
                                "type": "Boolean", 
                                "id": 862
                              }, 
                              "Backward": {
                                "type": "Boolean", 
                                "id": 863, 
                                "description": "Seat cushion backward/shorten switch engaged"
                              }, 
                              "Up": {
                                "type": "Boolean", 
                                "id": 860, 
                                "description": "Seat cushion up switch engaged"
                              }
                            }
                          }, 
                          "Forward": {
                            "type": "Boolean", 
                            "id": 850, 
                            "description": "Seat forward switch engaged"
                          }, 
                          "Backward": {
                            "description": "Seat forward switch engaged", 
                            "type": "Boolean", 
                            "id": 851
                          }, 
                          "Massage": {
                            "type": "branch", 
                            "children": {
                              "Increase": {
                                "description": "Increase massage level switch engaged", 
                                "type": "Boolean", 
                                "id": 856
                              }, 
                              "Decrease": {
                                "description": "Decrease massage level switch engaged", 
                                "type": "Boolean", 
                                "id": 857
                              }
                            }, 
                            "description": "Massage switches"
                          }, 
                          "SideBolster": {
                            "description": "Side bolster switches", 
                            "type": "branch", 
                            "children": {
                              "Inflate": {
                                "description": "Lumbar inflation switch engaged", 
                                "type": "Boolean", 
                                "id": 868
                              }, 
                              "Deflate": {
                                "type": "Boolean", 
                                "id": 869, 
                                "description": "Lumbar deflation switch engaged"
                              }
                            }
                          }
                        }
                      }, 
                      "Cushion": {
                        "description": "Cushion signals.", 
                        "type": "branch", 
                        "children": {
                          "Length": {
                            "description": "Forward length of cushion (leg support). 0 = Rearmost. 500 = Forwardmost.", 
                            "min": 0, 
                            "max": 500, 
                            "type": "UInt16", 
                            "id": 842, 
                            "unit": "mm"
                          }, 
                          "Height": {
                            "description": "Height of the seat front. 0 = Lowermost. 500 = Uppermost.", 
                            "min": 0, 
                            "max": 500, 
                            "type": "UInt16", 
                            "id": 841, 
                            "unit": "mm"
                          }
                        }
                      }, 
                      "IsBelted": {
                        "description": "Is the belt engaged.", 
                        "type": "Boolean", 
                        "id": 836
                      }, 
                      "Position": {
                        "description": "Seat horizontal position. 0 = Frontmost. 1000 = Rearmost", 
                        "min": 0, 
                        "max": 1000, 
                        "type": "UInt16", 
                        "id": 840, 
                        "unit": "mm"
                      }, 
                      "SideBolster": {
                        "type": "branch", 
                        "children": {
                          "Inflation": {
                            "type": "UInt8", 
                            "description": "Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.", 
                            "min": 0, 
                            "max": 255, 
                            "id": 845
                          }
                        }, 
                        "description": "Side bolster settings"
                      }, 
                      "Massage": {
                        "type": "UInt8", 
                        "min": 0, 
                        "max": 10, 
                        "id": 838, 
                        "description": "Seat massage level. 0 = off. 10 = max massage."
                      }
                    }
                  }, 
                  "Pos1": {
                    "description": "First seat from left, fourth row", 
                    "type": "branch", 
                    "children": {
                      "HeadRestraint": {
                        "type": "branch", 
                        "children": {
                          "Height": {
                            "description": "Height of head restraint. 0 = Bottommost. 255 = Topmost.", 
                            "min": 0, 
                            "max": 255, 
                            "type": "UInt8", 
                            "id": 776, 
                            "unit": "mm"
                          }
                        }, 
                        "description": "Head restraint settings"
                      }, 
                      "Recline": {
                        "description": "Recline level. -90 = Max forward recline. 90 max backward recline", 
                        "min": -90, 
                        "max": 90, 
                        "type": "Int8", 
                        "id": 769, 
                        "unit": "degree"
                      }, 
                      "HasPassenger": {
                        "description": "Does the seat have a passenger in it.", 
                        "type": "Boolean", 
                        "id": 765
                      }, 
                      "Heating": {
                        "type": "Int8", 
                        "description": "Seat cooling / heating. 0 = off. -10 = max cold. +10 = max heat", 
                        "min": -10, 
                        "max": 10, 
                        "id": 767
                      }, 
                      "Lumbar": {
                        "type": "branch", 
                        "children": {
                          "Inflation": {
                            "type": "UInt8", 
                            "description": "Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.", 
                            "min": 0, 
                            "max": 255, 
                            "id": 773
                          }, 
                          "Height": {
                            "type": "UInt8", 
                            "description": "Lumbar support position. 0 = Lowermost. 255 = Uppermost.", 
                            "min": 0, 
                            "max": 255, 
                            "id": 774
                          }
                        }, 
                        "description": "Lumbar signals"
                      }, 
                      "Airbag": {
                        "description": "Airbag signals", 
                        "type": "branch", 
                        "children": {
                          "IsDeployed": {
                            "description": "Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.", 
                            "type": "Boolean", 
                            "id": 777
                          }
                        }
                      }, 
                      "Switch": {
                        "description": "Seat switch signals", 
                        "type": "branch", 
                        "children": {
                          "HeadRestraint": {
                            "description": "Head restraint switches", 
                            "type": "branch", 
                            "children": {
                              "Down": {
                                "type": "Boolean", 
                                "id": 785, 
                                "description": "Head restraint down switch engaged"
                              }, 
                              "Up": {
                                "description": "Head restraint up switch engaged", 
                                "type": "Boolean", 
                                "id": 784
                              }
                            }
                          }, 
                          "Cooler": {
                            "type": "Boolean", 
                            "id": 779, 
                            "description": "Cooler switch for Seat heater"
                          }, 
                          "Recline": {
                            "description": "Recline switches", 
                            "type": "branch", 
                            "children": {
                              "Forward": {
                                "type": "Boolean", 
                                "id": 789, 
                                "description": "Seatback recline forward switch engaged"
                              }, 
                              "Backward": {
                                "description": "Seatback recline backward switch engaged", 
                                "type": "Boolean", 
                                "id": 788
                              }
                            }
                          }, 
                          "Up": {
                            "description": "Seat up switch engaged", 
                            "type": "Boolean", 
                            "id": 782
                          }, 
                          "Lumbar": {
                            "description": "Lumbar switches", 
                            "type": "branch", 
                            "children": {
                              "Down": {
                                "type": "Boolean", 
                                "id": 795, 
                                "description": "Lumbar down switch engaged"
                              }, 
                              "Inflate": {
                                "description": "Lumbar inflation switch engaged", 
                                "type": "Boolean", 
                                "id": 796
                              }, 
                              "Up": {
                                "description": "Lumbar up switch engaged", 
                                "type": "Boolean", 
                                "id": 794
                              }, 
                              "Deflate": {
                                "type": "Boolean", 
                                "id": 797, 
                                "description": "Lumbar deflation switch engaged"
                              }
                            }
                          }, 
                          "Down": {
                            "description": "Seat down switch engaged", 
                            "type": "Boolean", 
                            "id": 783
                          }, 
                          "Warmer": {
                            "type": "Boolean", 
                            "id": 778, 
                            "description": "Warmer switch for Seat heater"
                          }, 
                          "Cushion": {
                            "description": "Cushion switches", 
                            "type": "branch", 
                            "children": {
                              "Down": {
                                "description": "Seat cushion down switch engaged", 
                                "type": "Boolean", 
                                "id": 791
                              }, 
                              "Forward": {
                                "description": "Seat cushion forward/lengthen switch engaged", 
                                "type": "Boolean", 
                                "id": 792
                              }, 
                              "Backward": {
                                "type": "Boolean", 
                                "id": 793, 
                                "description": "Seat cushion backward/shorten switch engaged"
                              }, 
                              "Up": {
                                "type": "Boolean", 
                                "id": 790, 
                                "description": "Seat cushion up switch engaged"
                              }
                            }
                          }, 
                          "Forward": {
                            "type": "Boolean", 
                            "id": 780, 
                            "description": "Seat forward switch engaged"
                          }, 
                          "Backward": {
                            "description": "Seat forward switch engaged", 
                            "type": "Boolean", 
                            "id": 781
                          }, 
                          "Massage": {
                            "type": "branch", 
                            "children": {
                              "Increase": {
                                "description": "Increase massage level switch engaged", 
                                "type": "Boolean", 
                                "id": 786
                              }, 
                              "Decrease": {
                                "description": "Decrease massage level switch engaged", 
                                "type": "Boolean", 
                                "id": 787
                              }
                            }, 
                            "description": "Massage switches"
                          }, 
                          "SideBolster": {
                            "description": "Side bolster switches", 
                            "type": "branch", 
                            "children": {
                              "Inflate": {
                                "description": "Lumbar inflation switch engaged", 
                                "type": "Boolean", 
                                "id": 798
                              }, 
                              "Deflate": {
                                "type": "Boolean", 
                                "id": 799, 
                                "description": "Lumbar deflation switch engaged"
                              }
                            }
                          }
                        }
                      }, 
                      "Cushion": {
                        "description": "Cushion signals.", 
                        "type": "branch", 
                        "children": {
                          "Length": {
                            "description": "Forward length of cushion (leg support). 0 = Rearmost. 500 = Forwardmost.", 
                            "min": 0, 
                            "max": 500, 
                            "type": "UInt16", 
                            "id": 772, 
                            "unit": "mm"
                          }, 
                          "Height": {
                            "description": "Height of the seat front. 0 = Lowermost. 500 = Uppermost.", 
                            "min": 0, 
                            "max": 500, 
                            "type": "UInt16", 
                            "id": 771, 
                            "unit": "mm"
                          }
                        }
                      }, 
                      "IsBelted": {
                        "description": "Is the belt engaged.", 
                        "type": "Boolean", 
                        "id": 766
                      }, 
                      "Position": {
                        "description": "Seat horizontal position. 0 = Frontmost. 1000 = Rearmost", 
                        "min": 0, 
                        "max": 1000, 
                        "type": "UInt16", 
                        "id": 770, 
                        "unit": "mm"
                      }, 
                      "SideBolster": {
                        "type": "branch", 
                        "children": {
                          "Inflation": {
                            "type": "UInt8", 
                            "description": "Lumbar support inflation. 0 = Fully deflated. 255 = Fully inflated.", 
                            "min": 0, 
                            "max": 255, 
                            "id": 775
                          }
                        }, 
                        "description": "Side bolster settings"
                      }, 
                      "Massage": {
                        "type": "UInt8", 
                        "min": 0, 
                        "max": 10, 
                        "id": 768, 
                        "description": "Seat massage level. 0 = off. 10 = max massage."
                      }
                    }
                  }
                }
              }
            }, 
            "description": "All seats."
          }, 
          "Lights": {
            "description": "Interior lights signals and sensors", 
            "type": "branch", 
            "children": {
              "Row1": {
                "description": "Front lights", 
                "type": "branch", 
                "children": {
                  "IsSharedOn": {
                    "description": "Is light shared across first row on", 
                    "type": "Boolean", 
                    "id": 172
                  }, 
                  "Right": {
                    "type": "branch", 
                    "children": {
                      "IsPassengerOn": {
                        "description": "Is passenger light on", 
                        "type": "Boolean", 
                        "id": 174
                      }
                    }, 
                    "description": "Right front lights"
                  }, 
                  "Left": {
                    "type": "branch", 
                    "children": {
                      "IsPassengerOn": {
                        "description": "Is passenger light on", 
                        "type": "Boolean", 
                        "id": 173
                      }
                    }, 
                    "description": "Left front lights"
                  }
                }
              }, 
              "Row2": {
                "description": "Front lights", 
                "type": "branch", 
                "children": {
                  "IsSharedOn": {
                    "description": "Is light shared across second row on", 
                    "type": "Boolean", 
                    "id": 175
                  }, 
                  "Right": {
                    "description": "Right second row lights", 
                    "type": "branch", 
                    "children": {
                      "IsPassengerOn": {
                        "description": "Is passenger light on", 
                        "type": "Boolean", 
                        "id": 177
                      }
                    }
                  }, 
                  "Left": {
                    "description": "Left second row lights", 
                    "type": "branch", 
                    "children": {
                      "IsPassengerOn": {
                        "description": "Is passenger light on", 
                        "type": "Boolean", 
                        "id": 176
                      }
                    }
                  }
                }
              }, 
              "Row3": {
                "description": "Front lights", 
                "type": "branch", 
                "children": {
                  "IsSharedOn": {
                    "description": "Is light shared third across row on", 
                    "type": "Boolean", 
                    "id": 178
                  }, 
                  "Right": {
                    "description": "Right third row lights", 
                    "type": "branch", 
                    "children": {
                      "IsPassengerOn": {
                        "description": "Is passenger light on", 
                        "type": "Boolean", 
                        "id": 180
                      }
                    }
                  }, 
                  "Left": {
                    "type": "branch", 
                    "children": {
                      "IsPassengerOn": {
                        "description": "Is passenger light on", 
                        "type": "Boolean", 
                        "id": 179
                      }
                    }, 
                    "description": "Left third row lights"
                  }
                }
              }, 
              "Row4": {
                "description": "Front lights", 
                "type": "branch", 
                "children": {
                  "IsSharedOn": {
                    "type": "Boolean", 
                    "id": 181, 
                    "description": "Is light shared across fourth row on"
                  }, 
                  "Right": {
                    "description": "Right fourth row lights", 
                    "type": "branch", 
                    "children": {
                      "IsPassengerOn": {
                        "type": "Boolean", 
                        "id": 183, 
                        "description": "Is passenger light on"
                      }
                    }
                  }, 
                  "Left": {
                    "description": "Left fourth row lights", 
                    "type": "branch", 
                    "children": {
                      "IsPassengerOn": {
                        "type": "Boolean", 
                        "id": 182, 
                        "description": "Is passenger light on"
                      }
                    }
                  }
                }
              }, 
              "IsGloveBoxOn": {
                "description": "Is glove box light on", 
                "type": "Boolean", 
                "id": 167
              }, 
              "IsDomeOn": {
                "description": "Is central dome light light on", 
                "type": "Boolean", 
                "id": 169
              }, 
              "IsTrunkOn": {
                "description": "Is trunk light light on", 
                "type": "Boolean", 
                "id": 168
              }, 
              "LightIntensity": {
                "description": "Intensity of the interior lights. 0 = Off. 100 = Full brightness.", 
                "min": 0, 
                "max": 100, 
                "type": "UInt8", 
                "id": 171, 
                "unit": "percent"
              }, 
              "AmbientLightSensor": {
                "description": "How much ambient light is detected in cabin. 0 = No ambient light. 100 = Full brightness", 
                "min": 0, 
                "max": 100, 
                "type": "UInt8", 
                "id": 170, 
                "unit": "percent"
              }
            }
          }, 
          "RearviewMirror": {
            "description": "Rearview mirror", 
            "type": "branch", 
            "children": {
              "Dimmed": {
                "type": "UInt8", 
                "id": 166, 
                "description": "Dimming level of rearview mirror. 0 = undimmed. 100 = fully dimmed"
              }
            }
          }, 
          "RearShade": {
            "desription": "Rear window shader.", 
            "type": "branch", 
            "children": {
              "Position": {
                "type": "UInt8", 
                "min": 0, 
                "max": 100, 
                "id": 115, 
                "description": "Position of side window blind. 0 = Fully retracted. 100 = Fully deployed."
              }, 
              "Switch": {
                "description": "Switch controlling sliding action such as window, sunroof, or blind.", 
                "type": "String", 
                "enum": [
                  "Inactive", 
                  "Close", 
                  "Open", 
                  "OneShotClose", 
                  "OneShotOpen"
                ], 
                "id": 114
              }
            }
          }
        }
      }
    }
  }, 
  "Private": {
    "description": "Uncontrolled branch where non-public signals can be defined.", 
    "type": "branch", 
    "children": {}
  }
}