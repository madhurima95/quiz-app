import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quiz-app';
  score:number=0;
  scratch(count) {
  this.score=count;
  console.log(this.score);
  }
}
