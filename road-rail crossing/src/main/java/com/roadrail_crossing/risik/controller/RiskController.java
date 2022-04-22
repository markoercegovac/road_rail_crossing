package com.roadrail_crossing.risik.controller;

import com.roadrail_crossing.risik.dto.RiskDto;
import com.roadrail_crossing.risik.service.CalculationService;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static com.roadrail_crossing.risik.controller.RiskController.*;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping(HOME_URL)
public class RiskController {
	public final static String HOME_URL = "/api/risk";
	public final static String ALL_URL = "/all";

	private final CalculationService calculationService;

	@GetMapping(ALL_URL)
	public ResponseEntity<List<RiskDto>> getAllRiskData(){
		return new ResponseEntity<>(calculationService.getRiskDtoList(), HttpStatus.OK);
	}
}
