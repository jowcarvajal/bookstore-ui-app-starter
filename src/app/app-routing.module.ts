import { CategoriaListComponent } from "./components/view/categoria-list/categoria-list.component";
import { HomeComponent } from "./components/view/home/home.component";
import { NgModule, Component } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'categoria', component: CategoriaListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
