package com.roadrail_crossing.risik.controller;

import com.roadrail_crossing.risik.dto.RiskDto;
import com.roadrail_crossing.risik.dto.RoadRailCrossingDto;
import com.roadrail_crossing.risik.service.CalculationService;
import com.roadrail_crossing.risik.service.RoadRailCrossingService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.roadrail_crossing.risik.controller.RoadRailCrossingController.*;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping(HOME_URL)
public class RoadRailCrossingController {
	public final static String SAVE_URL = "/save";
	public final static String HOME_URL = "/api/road-rail-crossing";

	private final RoadRailCrossingService service;
	private final CalculationService calculationService;

	@PostMapping(SAVE_URL)
	public void save(@RequestBody RoadRailCrossingDto dto){
//		service.save(dto);
		List<RiskDto> risks = calculationService.getRiskDtoList();
		System.out.println("test");
	}
}
