package com.roadrail_crossing.risik.service;

import com.roadrail_crossing.risik.dto.RiskDto;
import com.roadrail_crossing.risik.entity.RoadRailCrossing;
import com.roadrail_crossing.risik.repository.RoadRailCrossingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CalculationServiceImpl implements CalculationService{

	private final RoadRailCrossingRepository repository;

	@Override
	public List<RiskDto> getRiskDtoList() {
		List<RiskDto> calculatedRisks = new ArrayList<>();
		List<RoadRailCrossing> railCrossingList = repository.findAll();
		for(RoadRailCrossing r: railCrossingList){
			RiskDto dto = calculate(r);
			calculatedRisks.add(dto);
		}
		return calculatedRisks;
	}

	private RiskDto calculate(RoadRailCrossing entity){
		RiskDto riskDto = new RiskDto();

		Double niC = getNiC(entity.getMediumLengthOfVehicle()
				,entity.getCriticalDistanceLengthOfVehicle(),entity.getMediumVelocityOfVehicle());
		Double niT = getNiT(entity.getMediumLengthOfTrain(),entity.getCriticalDistanceLengthOfTrain()
				,entity.getMediumVelocityOfTrain());

		Double p11 = getP11(niC, niT, entity.getVehiclePerDay(), entity.getTrainPerDay());
		Double p10 = getP10(niC, niT, entity.getVehiclePerDay(), entity.getTrainPerDay());

		Double pReal = getPreal(entity.getTotalNumberOfAccidents().doubleValue()
				,entity.getNumberOfYearsOfAccidents().doubleValue(),entity.getVehiclePerDay());
		Double pTheory = getPtheor(p11,p10);

		Double reliability = getReliability(pTheory,pReal);
		Double risk = 1 - reliability;

		riskDto.setName(entity.getName());
		riskDto.setRailName(entity.getRailName());
		riskDto.setRoadName(entity.getRoadName());
		riskDto.setSafetyLevel(entity.getSafetyLevel());
		riskDto.setReliability(getRoundNumber(12, reliability));

		riskDto.setRisk(getRoundNumber(12, risk));
		riskDto.setRoadRailCrossingId(entity.getId());

		return riskDto;
	}

	private Double getNiC(Double lc, Double Lc, Double vc){
		return 86400 / ((lc + Lc)/(vc/3.6));
	}

	private Double getNiT(Double lt, Double Lt, Double vt){
		return 86400 / ((lt + Lt)/(vt/3.6));
	}

	private Double getP11(Double niC, Double niT, Double lambdaC, Double lambdaT){
		return (lambdaC * lambdaT)/((niC + lambdaC)*(niT + lambdaT));
	}

	private Double getP10(Double niC, Double niT, Double lambdaC, Double lambdaT){
		return (lambdaC * niT)/((niC + lambdaC)*(niT + lambdaT));
	}

	private Double getPreal(Double nreal, Double t, Double lambdaC){
		return nreal/(t * 365 * lambdaC);
	}

	private Double getPtheor(Double p11, Double p10){
		return p11/(p10+p11);
	}

	private Double getReliability(Double pTheory, Double preal){
		return (pTheory - preal)/pTheory;
	}

	private Double getRoundNumber(int decimals, Double number){
		BigDecimal bd = new BigDecimal(number).setScale(decimals,RoundingMode.HALF_EVEN);
		return bd.doubleValue();
	}
}
