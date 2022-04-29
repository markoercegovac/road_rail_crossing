package com.roadrail_crossing.risik.converter;

import com.roadrail_crossing.risik.dto.RoadRailCrossingDto;
import com.roadrail_crossing.risik.entity.RoadRailCrossing;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

@Component
public class RoadRailCrossingEntityToDtoConverter implements Converter<RoadRailCrossing, RoadRailCrossingDto> {
	@Override
	public RoadRailCrossingDto convert(RoadRailCrossing entity) {
		RoadRailCrossingDto dto = new RoadRailCrossingDto();
		dto.setId(entity.getId());

		dto.setName(entity.getName());
		dto.setRailName(entity.getRailName());
		dto.setRoadName(entity.getRoadName());
		dto.setSafetyLevel(entity.getSafetyLevel());

		dto.setVehiclePerDay(entity.getVehiclePerDay());
		dto.setTrainPerDay(entity.getTrainPerDay());

		dto.setMediumLengthOfVehicle(entity.getMediumLengthOfVehicle());
		dto.setCriticalDistanceLengthOfVehicle(entity.getCriticalDistanceLengthOfVehicle());
		dto.setMediumVelocityOfVehicle(entity.getMediumVelocityOfVehicle());

		dto.setMediumLengthOfTrain(entity.getMediumLengthOfTrain());
		dto.setCriticalDistanceLengthOfTrain(entity.getCriticalDistanceLengthOfTrain());
		dto.setMediumVelocityOfTrain(entity.getMediumVelocityOfTrain());

		dto.setNumberOfYearsOfAccidents(entity.getNumberOfYearsOfAccidents());
		dto.setTotalNumberOfAccidents(entity.getTotalNumberOfAccidents());

		return dto;
	}
}
