import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { QuizserviceService } from '../quizservice.service';

export interface Question {
  ID:number;
  question:string;
  anslistobj:string[];
  answer:string;
}
@Component({
  selector: 'app-quiz-container',
  templateUrl: './quiz-container.component.html',
  styleUrls: ['./quiz-container.component.css']
})
export class QuizContainerComponent implements OnInit {
  quizData:Question[];
  isChanged:boolean=false;
  selectedAnswerList=[];
  actualAnswerList=[];
  score:number=0;
  @Output() createscore:EventEmitter<any> = new EventEmitter();
  constructor(private service:QuizserviceService) { }

  ngOnInit() {
    this.service.getQuestion()
    .subscribe( data => {
      this.quizData = data;
  
    console.log(this.quizData)
    
  });
  }
  saveAnswer(event,data:Question) {
    this.selectedAnswerList[data.ID-1]=event.target.value;
    console.log(this.selectedAnswerList);
    console.log(event.target.value);
    
  }
  validatefilledIn() {
    var arr = document.getElementsByName('qty');
    console.log(arr)
    //console.log(arr.forEach( data=>console.log(data[0].value)));
    
    //  for(var i=0; i<arr.length;i++){
    //     console.log("lllll"+arr[3].[0].value);
    // }
} 
  populateMarks() {
    this.validatefilledIn();
    this.quizData.forEach(data=>{
      console.log("correct"+data.answer);
      console.log("given"+this.selectedAnswerList[data.ID-1]);
      // this.actualAnswerList.push(data.answer)
      if(data.answer===this.selectedAnswerList[data.ID-1]) {
        console.log("corrent")
        this.score++;
      }
      else console.log("incorrent");
    })
    console.log("scrore"+this.score)
    console.log(this.selectedAnswerList)
    this.service.getScore(this.score)
    this.score=0;
    // this.selectedAnswerList=[];
    // this.createscore.emit(this.score);
  }

  reset() {
    this.actualAnswerList=[];
    this.score=0;
    this.service.getScore(this.score)
  }
}
