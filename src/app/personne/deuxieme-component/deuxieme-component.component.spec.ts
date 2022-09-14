import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeuxiemeComponentComponent } from './deuxieme-component.component';

describe('DeuxiemeComponentComponent', () => {
  let component: DeuxiemeComponentComponent;
  let fixture: ComponentFixture<DeuxiemeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeuxiemeComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeuxiemeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
