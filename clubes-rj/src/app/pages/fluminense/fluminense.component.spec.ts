import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluminenseComponent } from './fluminense.component';

describe('FluminenseComponent', () => {
  let component: FluminenseComponent;
  let fixture: ComponentFixture<FluminenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FluminenseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FluminenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
