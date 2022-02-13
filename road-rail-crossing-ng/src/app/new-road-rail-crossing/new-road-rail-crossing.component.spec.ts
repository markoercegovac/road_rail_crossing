import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRoadRailCrossingComponent } from './new-road-rail-crossing.component';

describe('NewRoadRailCrossingComponent', () => {
  let component: NewRoadRailCrossingComponent;
  let fixture: ComponentFixture<NewRoadRailCrossingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRoadRailCrossingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRoadRailCrossingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
