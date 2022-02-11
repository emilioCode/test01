import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConcatenateComponent } from './components/concatenate/concatenate.component';
import { ConsecutiveMultiplicationsComponent } from './components/consecutive-multiplications/consecutive-multiplications.component';
import { EvenOddComponent } from './components/even-odd/even-odd.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from './shared/shared.module';
import { ReverseComponent } from './components/reverse/reverse.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'even-odd', component: EvenOddComponent },
  { path: 'concatenate', component: ConcatenateComponent },
  { path: 'consecutive-multiplications', component: ConsecutiveMultiplicationsComponent },
  { path: 'algorithms', component: ReverseComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    HomeComponent,
    EvenOddComponent,
    ConcatenateComponent,
    ConsecutiveMultiplicationsComponent,
    ReverseComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    SharedModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
