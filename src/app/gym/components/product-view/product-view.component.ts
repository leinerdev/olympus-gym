import { Component, Input, OnInit } from '@angular/core';
import { Membership } from '../../pages/dashboard/memberships/memberships.component';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  @Input() data!: Membership;

  constructor() { }

  ngOnInit(): void {
  }

}
