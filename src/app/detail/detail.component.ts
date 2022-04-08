import { Component, Input, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  @Input() goal: Goal;

  constructor() {}

  ngOnInit(){
  }
}
