import {Component, OnInit, ViewChild} from '@angular/core';
import {RiskService} from "../services/risk-service";
import {MatSort, Sort} from "@angular/material/sort";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatTableDataSource} from "@angular/material/table";
import {RoadRailCrossingService} from "../services/road-rail-crossing-service";

@Component({
  selector: 'app-risk',
  templateUrl: './risk.component.html',
  styleUrls: ['./risk.component.css']
})
export class RiskComponent implements OnInit {
  displayedColumns: string[] = ['name', 'safetyLevel','reliability','risk','edit','delete'];
  allRiskData: any;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private riskService: RiskService, private roadRailCrossingService:RoadRailCrossingService, private _liveAnnouncer: LiveAnnouncer) { }

  ngOnInit(): void {
    this.renderTable();

  }

  private renderTable() {
    this.riskService.getAllRiskData().subscribe(
        data=>{
          this.allRiskData = new MatTableDataSource(data);
          this.allRiskData.sort = this.sort;
        }

    );
  }

  delete(roadRailCrossingId: any){
    this.roadRailCrossingService.delete(roadRailCrossingId).subscribe(()=>{
      this.renderTable();
    });
  }
}
