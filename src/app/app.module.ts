import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { LeaoComponent } from './leao/leao.component';
import { EscorpiaoComponent } from './escorpiao/escorpiao.component';
import { GemeosComponent } from './gemeos/gemeos.component';
import { AriesComponent } from './aries/aries.component';
import { CancerComponent } from './cancer/cancer.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    LeaoComponent,
    EscorpiaoComponent,
    GemeosComponent,
    AriesComponent,
    CancerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
