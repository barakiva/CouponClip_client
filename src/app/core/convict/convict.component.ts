import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-convict',
  templateUrl: './convict.component.html',
  styleUrls: ['./convict.component.scss']
})
export class ConvictComponent implements OnInit {
  @Input() deal;
  readonly param = '?geometry=520x300F';

  constructor() { }

  ngOnInit() {
  }

}
