import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestPageComponent } from './test-page/test-page.component';
import { TestPage2Component } from './test-page2/test-page2.component';

const routes: Routes = [
  {path:'', component:TestPageComponent},
  {path:'2', component:TestPage2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
