import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// angular2-modal
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

import { CobComponent } from './cob.component';
import { CobStep1 } from './step1/cob-step1.component';
import { CobStep2 } from './step2/cob-step2.component';
import { CobModel } from './cobModel';

console.log(' "COB" bundle loaded asynchronously');

// async components must be named routes for WebpackAsyncRoute
export const routes = [
  { path: '', component: CobComponent, pathMatch: 'full' },
  { path: 'cobstep1', component: CobStep1, pathMatch: 'full' },
  { path: 'cobstep2', component: CobStep2, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    CobComponent, CobStep1, CobStep2
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ModalModule.forRoot(),
    BootstrapModalModule
  ],
  providers : [
    CobModel
  ],
  entryComponents : [CobStep1]
})
export default class CobModule {
    static routes = routes;
}
