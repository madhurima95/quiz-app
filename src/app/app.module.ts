import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizContainerComponent } from './quiz-container/quiz-container.component';
import { QuizReesultComponent } from './quiz-reesult/quiz-reesult.component';
import { QuizserviceService } from './quizservice.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    QuizContainerComponent,
    QuizReesultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [QuizserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
