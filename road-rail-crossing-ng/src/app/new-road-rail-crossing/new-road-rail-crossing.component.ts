import { Component, OnInit } from '@angular/core';
import {RoadRailCrossing} from "../model/road-rail-crossing";
import {Form, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {from} from "rxjs";
import {RoadRailCrossingService} from "../services/road-rail-crossing-service";

@Component({
  selector: 'app-new-road-rail-crossing',
  templateUrl: './new-road-rail-crossing.component.html',
  styleUrls: ['./new-road-rail-crossing.component.css']
})
export class NewRoadRailCrossingComponent implements OnInit {

  newForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: RoadRailCrossingService) { }

  ngOnInit(): void {
    this.newForm = this.formBuilder.group({
      name: ['', Validators.required],
      railName: ['', Validators.required],
      roadName: ['', Validators.required],
      safetyLevel: ['', Validators.required],
      vehiclePerDay: [0, Validators.min(0)],
      trainPerDay: [0, Validators.min(0)],
      mediumLengthOfVehicle: [0, Validators.min(0)],
      criticalDistanceLengthOfVehicle: [0, Validators.min(0)],
      mediumVelocityOfVehicle: [0, Validators.min(0)],
      mediumLengthOfTrain: [0, Validators.min(0)],
      criticalDistanceLengthOfTrain: [0, Validators.min(0)],
      mediumVelocityOfTrain: [0, Validators.min(0)],
      numberOfYearsOfAccidents: [0, Validators.min(0)],
      totalNumberOfAccidents: [0, Validators.min(0)]
    });
  }

  createNewRoadRailCrossing(form: FormGroup) {
    if(form.valid){
      let newRoadRailCrossing = {
        name: form.value.name,
        railName: form.value.railName,
        roadName: form.value.roadName,
        safetyLevel: form.value.safetyLevel,
        vehiclePerDay: form.value.vehiclePerDay,
        trainPerDay: form.value.trainPerDay,
        mediumLengthOfVehicle: form.value.mediumLengthOfVehicle,
        criticalDistanceLengthOfVehicle: form.value.criticalDistanceLengthOfVehicle,
        mediumVelocityOfVehicle: form.value.mediumVelocityOfVehicle,
        mediumLengthOfTrain: form.value.mediumLengthOfTrain,
        criticalDistanceLengthOfTrain: form.value.criticalDistanceLengthOfTrain,
        mediumVelocityOfTrain: form.value.mediumVelocityOfTrain,
        numberOfYearsOfAccidents: form.value.numberOfYearsOfAccidents,
        totalNumberOfAccidents: form.value.totalNumberOfAccidents
      };
      this.service.save(newRoadRailCrossing).subscribe();
    }
  }

  get f() { return this.newForm.controls; }
}
