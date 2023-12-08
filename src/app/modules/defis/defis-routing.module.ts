import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlobalComponent } from './components/global/global.component';
import { JournalierComponent } from './components/journalier/journalier.component';
import { HebdomadaireComponent } from './components/hebdomadaire/hebdomadaire.component';
import { MensuelComponent } from './components/mensuel/mensuel.component';

const routes: Routes = [
  { path: '', component: GlobalComponent },
  { path: 'journalier', component: JournalierComponent },
  { path: 'hebdomadaire', component: HebdomadaireComponent },
  { path: 'mensuel', component: MensuelComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DefisRoutingModule {}
