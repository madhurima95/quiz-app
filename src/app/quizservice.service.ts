import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

export interface Question {
  ID:number;
  question:string;
  anslistobj:string[];
  answer:string;
}
@Injectable({
  providedIn: 'root'
})
export class QuizserviceService {
  private url="assets/data/quizData.json"
  private score = new Subject<number>();
  currentscore = this.score.asObservable();
  constructor(private http:HttpClient) { }

  getQuestion(): Observable<Question[]> {
    return this.http.get<Question[]>(this.url);
  }
  getScore(score : number) {
    // this.score.next(score);
    this.score.next(score);
  }
}
