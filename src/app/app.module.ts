import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { RecipesComponent } from './recipes/recipes.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    RegisterComponent,
    AboutComponent,
    RecipesComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'register', component: RegisterComponent },
      { path: 'about', component: AboutComponent },
      { path: 'recipes', component: RecipesComponent },
      { path: '', component: WelcomeComponent },
      { path: '**', redirectTo:'welcome', pathMatch:'full' },
    ]),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
