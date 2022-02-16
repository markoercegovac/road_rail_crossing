import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public isHome;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  newLevelCrossing() {
    this.isHome = false;
    this.router.navigate(['/new-road-rail-crossing']);
  }

  home() {
    this.isHome = true;
    this.router.navigate(['']);
  }

  showRiskPage() {
      this.isHome = false;
      this.router.navigate(['/risk']);
  }
}
