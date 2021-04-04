import {Component, OnInit} from '@angular/core';
const diseases = [
  {
    name: 'disease1', type: 'disease', id: 1, subDiseases: [
      {name: 'subDisease1', id: 11, type: 'subDisease'},
      {name: 'subDisease2', id: 11, type: 'subDisease'}
    ]
  },
  {
    name: 'disease2', type: 'disease', id: 2, subDiseases: [
      {name: 'subDisease3', id: 22, type: 'subDisease'},
      {name: 'subDisease4', id: 23, type: 'subDisease'}
    ]
  }
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  panelOpenState = false;
  diseases = diseases;

  constructor() {
  }

  ngOnInit(): void {
  }

}
