import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { NgxSpinnerModule } from "ngx-spinner";
import { NgCircleProgressModule } from 'ng-circle-progress';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppHttpInterceptor } from './services/app-intercept.service';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { PopularComponent } from './components/popular/popular.component';
import { ScrollToDirective } from './directives/scroll-to.directive';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { BollywoodComponent } from './components/bollywood/bollywood.component';
import { HollywoodComponent } from './components/hollywood/hollywood.component';
import { RatePopularityComponent } from './components/rate-popularity/rate-popularity.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieDetailsComponent,
    PopularComponent,
    ScrollToDirective,
    HeaderComponent,
    HomeComponent,
    CarouselComponent,
    BollywoodComponent,
    HollywoodComponent,
    RatePopularityComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    NgCircleProgressModule.forRoot({
      subtitle: 'vote',
      showSubtitle: true,
      titleFontSize: '10'
    })
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AppHttpInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
