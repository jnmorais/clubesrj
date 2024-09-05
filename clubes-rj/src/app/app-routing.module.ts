import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlamengoComponent } from './pages/flamengo/flamengo.component';
import { VascoComponent } from './pages/vasco/vasco.component';
import { BotafogoComponent } from './pages/botafogo/botafogo.component';
import { FluminenseComponent } from './pages/fluminense/fluminense.component';

const routes: Routes = [
  { path: '', redirectTo: 'flamengo', pathMatch: 'full' },
  { path: 'flamengo', component: FlamengoComponent },
  { path: 'vasco', component: VascoComponent },
  { path: 'botafogo', component: BotafogoComponent },
  { path: 'fluminense', component: FluminenseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
