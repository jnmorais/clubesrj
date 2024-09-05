import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VascoComponent } from './vasco.component';

describe('VascoComponent', () => {
  let component: VascoComponent;
  let fixture: ComponentFixture<VascoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VascoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VascoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
