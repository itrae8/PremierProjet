import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TroisiemeComponent } from './troisieme.component';

describe('TroisiemeComponent', () => {
  let component: TroisiemeComponent;
  let fixture: ComponentFixture<TroisiemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TroisiemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TroisiemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
