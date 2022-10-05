import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

import { PopupErreurEditionActeurComponent } from './popup-erreur-edition-acteur.component';

describe('PopupErreurEditionActeurComponent', () => {
  let component: PopupErreurEditionActeurComponent;
  let fixture: ComponentFixture<PopupErreurEditionActeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopupErreurEditionActeurComponent],
      imports: [MatDialogModule],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
              acteur: {
                id: 'al-pacino',
                nom: 'Al Pacino',
                age: 81,
                nationalite: 'IT',
              }
          },
        },
        { provide: MatDialogRef, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PopupErreurEditionActeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
