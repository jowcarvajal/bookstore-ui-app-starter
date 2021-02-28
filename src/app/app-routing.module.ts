import { CategoriaUpdateComponent } from './components/view/categoria-update/categoria-update.component';
import { CategoriaDeleteComponent } from './components/view/categoria-delete/categoria-delete.component';
import { CategoriaCreateComponent } from './components/view/categoria-create/categoria-create.component';
import { CategoriaListComponent } from "./components/view/categoria-list/categoria-list.component";
import { HomeComponent } from "./components/view/home/home.component";
import { NgModule, Component } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'categoria', component: CategoriaListComponent },
  { path: 'categoria/create', component: CategoriaCreateComponent },
  { path: 'categoria/delete/:id', component: CategoriaDeleteComponent },
  { path: 'categoria/update/:id', component: CategoriaUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
