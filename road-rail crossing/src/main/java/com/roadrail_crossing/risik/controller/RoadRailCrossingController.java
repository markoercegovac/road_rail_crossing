package com.roadrail_crossing.risik.controller;

import com.roadrail_crossing.risik.dto.RiskDto;
import com.roadrail_crossing.risik.dto.RoadRailCrossingDto;
import com.roadrail_crossing.risik.service.RoadRailCrossingService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

import static com.roadrail_crossing.risik.controller.RoadRailCrossingController.*;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping(HOME_URL)
public class RoadRailCrossingController {
	public final static String SAVE_URL = "/save";
	public final static String EDIT_URL = "/edit/{id}";
	public final static String DELETE_URL = "/delete/{id}";
	public final static String HOME_URL = "/api/road-rail-crossing";

	private final RoadRailCrossingService service;

	@PostMapping(SAVE_URL)
	public void save(@RequestBody RoadRailCrossingDto dto){
		service.save(dto);
	}

	@GetMapping(EDIT_URL)
	public ResponseEntity<RoadRailCrossingDto> getOne(@PathVariable Long id){
		return new ResponseEntity<>(service.getOne(id), HttpStatus.OK);
	}

	@DeleteMapping(DELETE_URL)
	public void delete(@PathVariable Long id){
		service.delete(id);
	}
}
