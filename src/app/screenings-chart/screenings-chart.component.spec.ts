import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreeningsChartComponent } from './screenings-chart.component';

describe('ScreeningsChartComponent', () => {
  let component: ScreeningsChartComponent;
  let fixture: ComponentFixture<ScreeningsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreeningsChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreeningsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
