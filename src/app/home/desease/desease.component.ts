import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-desease',
  templateUrl: './desease.component.html',
  styleUrls: ['./desease.component.scss']
})
export class DeseaseComponent implements OnInit {
  @Input() disease;
  panelOpenState = false;
  value = 'search';

  constructor() {
  }

  ngOnInit(): void {
  }

}
