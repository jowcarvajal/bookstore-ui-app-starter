import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/templates/header/header.component';

import { MaterialModule } from 'src/app/shared/modules/material.module';
import { FooterComponent } from './components/templates/footer/footer.component';
import { NavComponent } from './components/templates/nav/nav.component';
import { HomeComponent } from './components/view/home/home.component';
import { CategoriaListComponent } from './components/view/categoria-list/categoria-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoriaCreateComponent } from './components/view/categoria-create/categoria-create.component';
import { CategoriaDeleteComponent } from './components/view/categoria-delete/categoria-delete.component';
import { CategoriaUpdateComponent } from './components/view/categoria-update/categoria-update.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    CategoriaListComponent,
    CategoriaCreateComponent,
    CategoriaDeleteComponent,
    CategoriaUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
