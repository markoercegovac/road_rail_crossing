package com.roadrail_crossing.risik.dto;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;

@Getter
@Setter
public class RoadRailCrossingDto {
	private Long id;
	private String name;
	private String railName;
	private String roadName;
	private String safetyLevel;
	private Double vehiclePerDay;
	private Double trainPerDay;
	private Double mediumLengthOfVehicle;
	private Double criticalDistanceLengthOfVehicle;
	private Double mediumVelocityOfVehicle;
	private Double mediumLengthOfTrain;
	private Double criticalDistanceLengthOfTrain;
	private Double mediumVelocityOfTrain;
	private Float numberOfYearsOfAccidents;
	private Float totalNumberOfAccidents;
}
