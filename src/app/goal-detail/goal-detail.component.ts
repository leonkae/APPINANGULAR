import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {
  @Input() goal: Goal;
  @Output() isComplete = new EventEmitter <boolean>();

  goalupVote(goal:Goal){
    // this.isComplete.emit(complete);
    goal.votes++
    goal.upVote++
  }

  goalDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  goalDownVote(goal:Goal){
    // this.isComplete.emit(complete);
    if(goal.votes <= 0){
       goal.votes = 0;
    }else{goal.votes--;}
    
    goal.downVote ++
    
  }


  constructor() {}

  ngOnInit(){
  }

}
