import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VideoCenterComponent } from './components/video-center/video-center.component';
import { from } from 'rxjs';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'video', component: VideoCenterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
