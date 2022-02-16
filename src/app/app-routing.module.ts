import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConcatenateComponent } from './components/concatenate/concatenate.component';
import { ConsecutiveMultiplicationsComponent } from './components/consecutive-multiplications/consecutive-multiplications.component';
import { EvenOddComponent } from './components/even-odd/even-odd.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from './shared/shared.module';
import { ReverseComponent } from './components/reverse/reverse.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { ToobalComponent } from './utilities/toobal/toobal.component';
import { ContactDialogComponent } from './components/agenda/contact-dialog/contact-dialog.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'even-odd', component: EvenOddComponent },
  { path: 'concatenate', component: ConcatenateComponent },
  { path: 'consecutive-multiplications', component: ConsecutiveMultiplicationsComponent },
  { path: 'algorithms', component: ReverseComponent },
  { path: 'agenda', component: AgendaComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    HomeComponent,
    EvenOddComponent,
    ConcatenateComponent,
    ConsecutiveMultiplicationsComponent,
    ReverseComponent,
    AgendaComponent,
    ToobalComponent,
    ContactDialogComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    SharedModule
  ],
  exports: [RouterModule],
  entryComponents: [
    ContactDialogComponent
  ]
})
export class AppRoutingModule { }
