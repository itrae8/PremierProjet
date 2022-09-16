import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupErreurEditionActeurComponent } from './popup-erreur-edition-acteur.component';

describe('PopupErreurEditionActeurComponent', () => {
  let component: PopupErreurEditionActeurComponent;
  let fixture: ComponentFixture<PopupErreurEditionActeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupErreurEditionActeurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupErreurEditionActeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
