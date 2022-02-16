import {Component, OnInit, ViewChild} from '@angular/core';
import {RiskService} from "../services/risk-service";
import {Risk} from "../model/risk";
import {MatSort, Sort} from "@angular/material/sort";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-risk',
  templateUrl: './risk.component.html',
  styleUrls: ['./risk.component.css']
})
export class RiskComponent implements OnInit {
  displayedColumns: string[] = ['name', 'safetyLevel','reliability','risk'];
  allRiskData: any;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private riskService: RiskService, private _liveAnnouncer: LiveAnnouncer) { }

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

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
