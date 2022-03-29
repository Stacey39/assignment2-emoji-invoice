import { ItemService } from './../../shared/services/item.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-totals',
  templateUrl: './totals.component.html',
  styleUrls: ['./totals.component.scss']
})
export class TotalsComponent implements OnInit {

  constructor(
    public itemService: ItemService
  ) { }

  ngOnInit(): void {
  }

}
