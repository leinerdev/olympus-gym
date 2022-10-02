import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases-info',
  templateUrl: './clases-info.component.html',
  styleUrls: ['./clases-info.component.css']
})
export class ClasesInfoComponent implements OnInit {

  clases: any[] = [
    {
      name: 'Zumba',
      image: 'https://smartsite-production.s3.amazonaws.com/images/new_home_br/fitdance-cover.jpeg'
    },
    {
      name: 'Cross Training',
      image: 'https://smartsite-production.s3.amazonaws.com/images/new_home_br/smart-shape-cover.jpeg'
    },
    {
      name: 'Boxing',
      image: 'https://smartsite-production.s3.amazonaws.com/images/new_home_br/body-combat-cover.jpeg'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
