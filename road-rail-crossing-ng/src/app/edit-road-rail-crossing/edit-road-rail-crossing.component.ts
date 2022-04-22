import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import {Subscription} from "rxjs";
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RoadRailCrossing} from "../model/road-rail-crossing";
import {RoadRailCrossingService} from "../services/road-rail-crossing-service";

@Component({
  selector: 'app-edit-road-rail-crossing',
  templateUrl: './edit-road-rail-crossing.component.html',
  styleUrls: ['./edit-road-rail-crossing.component.css']
})
export class EditRoadRailCrossingComponent implements OnInit {
  private sub: Subscription;
  private id: any;
  private model: RoadRailCrossing;
  newForm: FormGroup;

  constructor(public route: ActivatedRoute,private formBuilder: FormBuilder, private service:RoadRailCrossingService, private router: Router) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.service.getOne(this.id).subscribe(
        value =>{
          this.model = value;

          this.newForm = this.formBuilder.group({
            name: [this.model.name, Validators.required],
            railName: [this.model.railName, Validators.required],
            roadName: [this.model.roadName, Validators.required],
            safetyLevel: [this.model.safetyLevel, Validators.required],
            vehiclePerDay: [this.model.vehiclePerDay, Validators.min(0)],
            trainPerDay: [this.model.trainPerDay, Validators.min(0)],
            mediumLengthOfVehicle: [this.model.mediumLengthOfVehicle, Validators.min(0)],
            criticalDistanceLengthOfVehicle: [this.model.criticalDistanceLengthOfVehicle, Validators.min(0)],
            mediumVelocityOfVehicle: [this.model.mediumVelocityOfVehicle, Validators.min(0)],
            mediumLengthOfTrain: [this.model.mediumLengthOfTrain, Validators.min(0)],
            criticalDistanceLengthOfTrain: [this.model.criticalDistanceLengthOfTrain, Validators.min(0)],
            mediumVelocityOfTrain: [this.model.mediumVelocityOfTrain, Validators.min(0)],
            numberOfYearsOfAccidents: [this.model.numberOfYearsOfAccidents, Validators.min(0)],
            totalNumberOfAccidents: [this.model.totalNumberOfAccidents, Validators.min(0)]
          });
        }
    )
  }
  createNewRoadRailCrossing(form: FormGroup) {
    if(form.valid){
      let newRoadRailCrossing = {
        id: this.id,
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
      this.service.save(newRoadRailCrossing).subscribe( (data) => this.router.navigateByUrl("/risk"));
    }
  }

  get f() { return this.newForm.controls; }
}
