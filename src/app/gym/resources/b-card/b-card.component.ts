import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-b-card',
  templateUrl: './b-card.component.html',
  styleUrls: ['./b-card.component.css']
})
export class BCardComponent implements OnInit {

  @Input() title!: string;
  @Input() description!: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToMemberships() {
    this.router.navigateByUrl('/dashboard/memberships')
  }

}
