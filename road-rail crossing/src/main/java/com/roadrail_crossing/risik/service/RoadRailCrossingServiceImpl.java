package com.roadrail_crossing.risik.service;

import com.roadrail_crossing.risik.dto.RoadRailCrossingDto;
import com.roadrail_crossing.risik.entity.RoadRailCrossing;
import com.roadrail_crossing.risik.repository.RoadRailCrossingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.core.convert.ConversionService;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RoadRailCrossingServiceImpl implements RoadRailCrossingService {

	private final ConversionService conversionService;
	private final RoadRailCrossingRepository repository;

	@Override
	public void save(RoadRailCrossingDto dto) {
		RoadRailCrossing roadRailCrossing = conversionService.convert(dto, RoadRailCrossing.class);
		repository.save(roadRailCrossing);
	}
}
