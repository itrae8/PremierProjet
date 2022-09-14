import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { ComponentParentComponent } from './component-parent/component-parent.component';
import { DeuxiemeComponentComponent } from './deuxieme-component/deuxieme-component.component';
import { ListePersonnesComponent } from './liste-personnes/liste-personnes.component';
import { PersonneRoutingModule } from './personne-routing.module';
import { PremierComponentComponent } from './premier-component/premier-component.component';
import { TroisiemeComponent } from './troisieme/troisieme.component';

@NgModule({
  declarations: [
    ComponentParentComponent,
    PremierComponentComponent,
    DeuxiemeComponentComponent,
    ListePersonnesComponent,
    TroisiemeComponent
  ],
  exports: [
    ComponentParentComponent,
    PremierComponentComponent,
    DeuxiemeComponentComponent,
    ListePersonnesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CoreModule,
    SharedModule,
    PersonneRoutingModule
  ]
})
export class PersonneModule {}
