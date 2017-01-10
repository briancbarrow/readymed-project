import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PuppiesService } from './shared/puppies.service'
import { FilterPipe } from './shared/filter.pipe'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PuppiesComponent } from './components/puppies/puppies.component';
import { PuppyComponent } from './components/puppy/puppy.component';
import { HomeComponent } from './components/home/home.component';
import { FilterFormComponent } from './components/form/form.component';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'puppies',
    component: PuppiesComponent
  }
], { useHash: true })

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PuppiesComponent,
    HomeComponent,
    PuppyComponent,
    FilterFormComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    rootRouting
  ],
  providers: [PuppiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
