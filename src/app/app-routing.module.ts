import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaoComponent } from './leao/leao.component';
import { EscorpiaoComponent } from './escorpiao/escorpiao.component';
import { GemeosComponent } from './gemeos/gemeos.component';
import { CancerComponent } from './cancer/cancer.component';
import { AriesComponent } from './aries/aries.component';

const routes: Routes = [
  { path: 'leao', component: LeaoComponent },
  { path: 'escorpiao', component: EscorpiaoComponent },
  { path: 'gemeos', component: GemeosComponent },
  { path: 'aries', component: AriesComponent },
  { path: 'cancer', component: CancerComponent },
  { path: '', redirectTo: '/leao', pathMatch: 'full' }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})


export class AppRoutingModule {}
