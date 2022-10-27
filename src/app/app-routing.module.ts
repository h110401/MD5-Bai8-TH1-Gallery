import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DictionaryComponent} from "./dictionary/dictionary.component";
import {DetailComponent} from "./detail/detail.component";

const routes: Routes = [{
  path: 'dictionary',
  component: DictionaryComponent,
  children: [{
    path: 'translate/:eng',
    component: DetailComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
