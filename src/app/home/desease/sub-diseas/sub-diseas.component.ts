import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sub-diseas',
  templateUrl: './sub-diseas.component.html',
  styleUrls: ['./sub-diseas.component.scss']
})
export class SubDiseasComponent implements OnInit {
  @Input() subDiseas;

  constructor() {
  }

  ngOnInit(): void {
  }

}
