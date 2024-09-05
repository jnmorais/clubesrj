import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlamengoComponent } from './flamengo.component';

describe('FlamengoComponent', () => {
  let component: FlamengoComponent;
  let fixture: ComponentFixture<FlamengoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlamengoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlamengoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
