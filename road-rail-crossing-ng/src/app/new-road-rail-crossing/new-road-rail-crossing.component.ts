import { Component, OnInit } from '@angular/core';
import {RoadRailCrossing} from "../model/road-rail-crossing";
import {Form, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {from} from "rxjs";
import {RoadRailCrossingService} from "../services/road-rail-crossing-service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-new-road-rail-crossing',
  templateUrl: './new-road-rail-crossing.component.html',
  styleUrls: ['./new-road-rail-crossing.component.css']
})
export class NewRoadRailCrossingComponent implements OnInit {

  newForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: RoadRailCrossingService, private router: Router) { }

  ngOnInit(): void {
    this.newForm = this.formBuilder.group({
      name: ['', Validators.required],
      railName: ['', Validators.required],
      roadName: ['', Validators.required],
      safetyLevel: ['', Validators.required],
      vehiclePerDay: [0, Validators.min(1)],
      trainPerDay: [0, Validators.min(1)],
      mediumLengthOfVehicle: [0, Validators.min(1)],
      criticalDistanceLengthOfVehicle: [0, Validators.min(1)],
      mediumVelocityOfVehicle: [0, Validators.min(1)],
      mediumLengthOfTrain: [0, Validators.min(1)],
      criticalDistanceLengthOfTrain: [0, Validators.min(1)],
      mediumVelocityOfTrain: [0, Validators.min(1)],
      numberOfYearsOfAccidents: [0, Validators.min(1)],
      totalNumberOfAccidents: [0, Validators.min(1)]
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
      this.service.save(newRoadRailCrossing).subscribe(
          (data) => this.router.navigateByUrl("/risk")
      );
    }
  }

  get f() { return this.newForm.controls; }
}
