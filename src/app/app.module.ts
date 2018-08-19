import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { RecipesComponent } from './recipes/recipes.component';
import { SharedModule } from './shared/shared.module';
import { CreatorComponent } from './about/creator/creator.component';
import { DatabaseComponent } from './about/database/database.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    RegisterComponent,
    AboutComponent,
    RecipesComponent,
    CreatorComponent,
    DatabaseComponent,
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
