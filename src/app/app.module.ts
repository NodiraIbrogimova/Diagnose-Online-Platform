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
    RectangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
