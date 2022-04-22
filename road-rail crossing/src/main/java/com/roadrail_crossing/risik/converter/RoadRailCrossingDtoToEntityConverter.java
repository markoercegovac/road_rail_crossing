package com.roadrail_crossing.risik.converter;

import com.roadrail_crossing.risik.dto.RoadRailCrossingDto;
import com.roadrail_crossing.risik.entity.RoadRailCrossing;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import java.util.Objects;

@Component
public class RoadRailCrossingDtoToEntityConverter implements Converter<RoadRailCrossingDto, RoadRailCrossing> {
	@Override
	public RoadRailCrossing convert(RoadRailCrossingDto dto) {
		RoadRailCrossing entity = new RoadRailCrossing();
		entity.setId(Objects.isNull(dto.getId()) ? null : dto.getId());
		entity.setName(dto.getName());
		entity.setRailName(dto.getRailName());
		entity.setRoadName(dto.getRoadName());
		entity.setSafetyLevel(dto.getSafetyLevel());

		entity.setVehiclePerDay(dto.getVehiclePerDay());
		entity.setTrainPerDay(dto.getTrainPerDay());

		entity.setMediumLengthOfVehicle(dto.getMediumLengthOfVehicle());
		entity.setCriticalDistanceLengthOfVehicle(dto.getCriticalDistanceLengthOfVehicle());
		entity.setMediumVelocityOfVehicle(dto.getMediumVelocityOfVehicle());

		entity.setMediumLengthOfTrain(dto.getMediumLengthOfTrain());
		entity.setCriticalDistanceLengthOfTrain(dto.getCriticalDistanceLengthOfTrain());
		entity.setMediumVelocityOfTrain(dto.getMediumVelocityOfTrain());

		entity.setNumberOfYearsOfAccidents(dto.getNumberOfYearsOfAccidents());
		entity.setTotalNumberOfAccidents(dto.getTotalNumberOfAccidents());

		return entity;
	}
}
