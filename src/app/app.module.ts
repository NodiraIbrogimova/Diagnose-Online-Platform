import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogComponent } from './pages/blog/blog.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './parts/header/header.component';
import { FooterComponent } from './parts/footer/footer.component';
import { LogoComponent } from './parts/logo/logo.component';
import { CircleComponent } from './parts/circle/circle.component';
import { RectangeComponent } from './parts/rectange/rectange.component';
import { SurveyComponent } from './pages/survey/survey.component';
import { IconTwitterComponent } from './parts/icon-twitter/icon-twitter.component';
import { IconFacebookComponent } from './parts/icon-facebook/icon-facebook.component';
import { IconYoutubeComponent } from './parts/icon-youtube/icon-youtube.component';
import { IconLinkedinComponent } from './parts/icon-linkedin/icon-linkedin.component';
import { IconInstagramComponent } from './parts/icon-instagram/icon-instagram.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    BlogComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    CircleComponent,
    RectangeComponent,
    SurveyComponent,
    IconTwitterComponent,
    IconFacebookComponent,
    IconYoutubeComponent,
    IconLinkedinComponent,
    IconInstagramComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
