import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlaveSecondComponent } from './slave-second.component';

describe('SlaveSecondComponent', () => {
  let component: SlaveSecondComponent;
  let fixture: ComponentFixture<SlaveSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlaveSecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlaveSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
