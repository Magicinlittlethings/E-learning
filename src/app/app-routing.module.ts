import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CourseVideoComponent } from './course-video/course-video.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CoursesComponent } from './courses/courses.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'splash-screen', component:SplashScreenComponent},
  {path:'courses', component:CoursesComponent},
  {path:'course-detail', component:CourseDetailComponent},
  {path:'course', component:CourseVideoComponent},
  {path:'home', component:LandingPageComponent},
  {path:'sign-in', component:SignInComponent},
  {path:'sign-up', component:SignUpComponent},
  {path:'', redirectTo:'/splash-screen', pathMatch:'full'},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
