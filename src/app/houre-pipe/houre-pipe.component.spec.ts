import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HourePipeComponent } from './houre-pipe.component';

describe('HourePipeComponent', () => {
  let component: HourePipeComponent;
  let fixture: ComponentFixture<HourePipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HourePipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HourePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
