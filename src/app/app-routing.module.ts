import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoglistComponent } from './components/doglist/doglist.component';
import { NewDogComponent } from './components/new-dog/new-dog.component';

const routes: Routes = [
  { path: '', component: DoglistComponent },
  { path: 'newdog', component: NewDogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
