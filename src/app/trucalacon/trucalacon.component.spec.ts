import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrucalaconComponent } from './trucalacon.component';

describe('TrucalaconComponent', () => {
  let component: TrucalaconComponent;
  let fixture: ComponentFixture<TrucalaconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrucalaconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrucalaconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
