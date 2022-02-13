package com.roadrail_crossing.risik.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.function.DoubleBinaryOperator;

@Data
@Entity
public class RoadRailCrossing {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column
	private String name;

	@Column
	private String railName;

	@Column
	private String roadName;

	@Column
	private String safetyLevel;

	@Column
	private Double vehiclePerDay;

	@Column
	private Double trainPerDay;

	@Column
	private Double mediumLengthOfVehicle;

	@Column
	private Double criticalDistanceLengthOfVehicle;

	@Column
	private Double mediumVelocityOfVehicle;

	@Column
	private Double mediumLengthOfTrain;

	@Column
	private Double criticalDistanceLengthOfTrain;

	@Column
	private Double mediumVelocityOfTrain;

	@Column
	private Float numberOfYearsOfAccidents;

	@Column
	private Float totalNumberOfAccidents;

}
