package com.roadrail_crossing.risik.service;

import com.roadrail_crossing.risik.dto.RoadRailCrossingDto;
import com.roadrail_crossing.risik.entity.RoadRailCrossing;

public interface RoadRailCrossingService {
	void save(RoadRailCrossingDto dto);
	void delete(Long id);
	RoadRailCrossingDto getOne(Long id);
}
