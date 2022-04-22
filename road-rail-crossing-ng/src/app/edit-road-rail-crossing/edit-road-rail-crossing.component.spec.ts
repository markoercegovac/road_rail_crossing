import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRoadRailCrossingComponent } from './edit-road-rail-crossing.component';

describe('EditRoadRailCrossingComponent', () => {
  let component: EditRoadRailCrossingComponent;
  let fixture: ComponentFixture<EditRoadRailCrossingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRoadRailCrossingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRoadRailCrossingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
