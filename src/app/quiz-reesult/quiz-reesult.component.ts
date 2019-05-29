import { Component, OnInit, Input, Host, AfterViewInit } from '@angular/core';
import * as CanvasJS from './canvasjs.min';
import { AppComponent } from '../app.component';
import { QuizContainerComponent } from '../quiz-container/quiz-container.component';
import { QuizserviceService } from '../quizservice.service';

@Component({
  selector: 'app-quiz-reesult',
  templateUrl: './quiz-reesult.component.html',
  styleUrls: ['./quiz-reesult.component.css']
})
export class QuizReesultComponent implements OnInit {
 
correct=0;
 @Input() score: QuizContainerComponent;
  constructor(private service : QuizserviceService) { }

  ngOnInit() {
    this.service.currentscore.subscribe(data=>{console.log("dta"+data)
   this.correct=data
  this.createGraph(this.correct)})
    //this.correct=this.score.score
    // console.log("lllllllllllllllll"+this.correct);
    // console.log("lllllllllllllllll"+this.score.score);
  //   let dataPoints = [
  //   { y: this.correct,label: "correct"  },
  //   { y: this.correct, label: "incorrect" },
   
   
  // ];
  
  // let chart = new CanvasJS.Chart("chartContainer",{
  //   animationEnabled: true,
  //   title:{
  //     text: "quiz result"
  //   },
  //   axisY: {
  //     title: "score"
  //   },
  //   data: [{
  //     type: "column",
  //     dataPoints : dataPoints
  //   }]
  // });
  // chart.render();}
  }
 
  createGraph(correct) {
    let dataPoints = [
      { y: correct,label: "correct"  },
      { y: 4-correct, label: "incorrect" },
     
     
    ];
    
    let chart = new CanvasJS.Chart("chartContainer",{
      animationEnabled: true,
      title:{
        text: "quiz result"
      },
      axisY: {
        title: "score"
      },
      data: [{
        type: "column",
        dataPoints : dataPoints
      }]
    });
    chart.render();
  }
}
