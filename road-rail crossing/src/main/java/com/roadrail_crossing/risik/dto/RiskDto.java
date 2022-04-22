package com.roadrail_crossing.risik.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RiskDto {
	private String name;
	private String railName;
	private String roadName;
	private String safetyLevel;
	private Double reliability;
	private Double risk;
	private Long roadRailCrossingId;
}
