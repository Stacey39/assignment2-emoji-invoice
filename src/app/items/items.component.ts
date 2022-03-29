import { Component, OnInit } from '@angular/core';

import { ItemService } from './../../shared/services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  constructor(
    public itmeService: ItemService
  ) { }

  ngOnInit(): void {
  }

}
