import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from '@lib/auth';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: '@package/home/home.module#HomeModule'
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AuthModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
