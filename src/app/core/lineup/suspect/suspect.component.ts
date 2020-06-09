import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-suspect',
  templateUrl: './suspect.component.html',
  styleUrls: ['./suspect.component.scss']
})
export class SuspectComponent implements OnInit {
  @Input() deal;
  readonly param = '&geometry=300x200';
  constructor() { }

  ngOnInit() {
  }

}
