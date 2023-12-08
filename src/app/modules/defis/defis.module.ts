import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefisRoutingModule } from './defis-routing.module';
import { JournalierComponent } from './components/journalier/journalier.component';
import { HebdomadaireComponent } from './components/hebdomadaire/hebdomadaire.component';
import { MensuelComponent } from './components/mensuel/mensuel.component';
import { GlobalComponent } from './components/global/global.component';


@NgModule({
  declarations: [
    JournalierComponent,
    HebdomadaireComponent,
    MensuelComponent,
    GlobalComponent
  ],
  imports: [
    CommonModule,
    DefisRoutingModule
  ]
})
export class DefisModule { }
