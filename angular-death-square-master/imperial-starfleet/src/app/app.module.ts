import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
// import { DeathSquareComponent } from './death-square/death-square.component';
// import { TurretComponent } from './turret/turret.component';
// import { LaserCannonComponent } from './laser-cannon/laser-cannon.component';
// import { TieFighterComponent } from './tie-fighter/tie-fighter.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
