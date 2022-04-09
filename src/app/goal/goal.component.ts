import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css'],
})
export class GoalComponent implements OnInit {
  // UpVote: number = 0;
  // DownVote: number = 0;
  totalVote:number = 0;

  goals: Goal[] = [
    new Goal(
      1,
      'Andre KAE',
      'its in life that you find the true meaning of death',
      'leonake',
      new Date(2022, 4, 7),
      0,
      0,
      0
    ),
    new Goal(
      2,
      'Bruv Dat',
      'The message is loud and clear Oreos are the shit',
      'Oreo King',
      new Date(2022, 4, 8),
      0,
      0,
      0
    ),
  ];

  // serves as click to vote

  toggleDetails(index: number) {
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  // serves as Upvote.
  goalupVote(isComplete: any, index: number) {
    if (isComplete) {
      // this.goals.splice(index, 1+);
      this.totalVote++
    }
  }

  // serves to downVote.
  goalDownVote(isComplete: any, index: number) {
    if (isComplete) {
      this.goals.splice(index, 1);
    }
  }

  // serves as delete Quote
  deleteGoal(isComplete: any, index: number) {
    if (isComplete) {
      let toDelete = confirm(
        `are you sure you want to delete ${this.goals[index].name}?`
      );

      if (toDelete) {
        this.goals.splice(index, 1);
      }
    }
  }

  // now serves as add new quote
  addNewGoal(goal: any) {
    let goalLength = this.goals.length;
    goal.id = goalLength + 1;
    goal.completeDate = new Date(goal.completeDate);
    this.goals.push(goal);
  }

  constructor() {}

  ngOnInit() {}
}
