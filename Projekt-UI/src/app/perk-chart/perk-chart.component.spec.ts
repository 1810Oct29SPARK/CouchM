import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerkChartComponent } from './perk-chart.component';

describe('PerkChartComponent', () => {
  let component: PerkChartComponent;
  let fixture: ComponentFixture<PerkChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerkChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerkChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
