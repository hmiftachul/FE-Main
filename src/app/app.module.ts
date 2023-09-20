import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PacarModule } from './pacar/pacar.module';
import { RouterModule, Routes } from '@angular/router';
import { PacarComponent } from './pacar/pacar.component';
import { DetailComponent } from './pacar/detail/detail.component';
import { SharedModule } from './shared/shared.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CardComponent } from './pacar/card/card.component';

const appRoutes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'pacar', component: PacarComponent },
  { path: 'details/:id', component: DetailComponent }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PacarModule,
    SharedModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
