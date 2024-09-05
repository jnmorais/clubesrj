import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotafogoComponent } from './botafogo.component';

describe('BotafogoComponent', () => {
  let component: BotafogoComponent;
  let fixture: ComponentFixture<BotafogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BotafogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotafogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
