package com.roadrail_crossing.risik.controller;

import com.roadrail_crossing.risik.dto.RoadRailCrossingDto;
import com.roadrail_crossing.risik.service.RoadRailCrossingService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import static com.roadrail_crossing.risik.controller.RoadRailCrossingController.*;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping(HOME_URL)
public class RoadRailCrossingController {
	public final static String SAVE_URL = "/save";
	public final static String HOME_URL = "/api/road-rail-crossing";

	private final RoadRailCrossingService service;

	@PostMapping(SAVE_URL)
	public void save(@RequestBody RoadRailCrossingDto dto){
		service.save(dto);
	}
}
