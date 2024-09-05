import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopoComponent } from './components/topo/topo.component';
import { FooterComponent } from './components/footer/footer.component';
import { CentroComponent } from './components/centro/centro.component';
import { FlamengoComponent } from './pages/flamengo/flamengo.component';
import { VascoComponent } from './pages/vasco/vasco.component';
import { FluminenseComponent } from './pages/fluminense/fluminense.component';
import { BotafogoComponent } from './pages/botafogo/botafogo.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    FooterComponent,
    CentroComponent,
    FlamengoComponent,
    VascoComponent,
    FluminenseComponent,
    BotafogoComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
