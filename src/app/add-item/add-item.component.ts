import { Component, OnInit } from '@angular/core';

import { ItemService } from './../../shared/services/item.service';
import { Item } from 'src/shared/models/item.model';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  defaultItem: Item = {
    description: '',
    hours: 0,
    hourlyRate: 0,
  };

  newItem: Item = {
    description: '',
    hours: 0,
    hourlyRate: 0,
  };

  constructor(
    public itemService: ItemService
  ) { }

  ngOnInit(): void {
  }

  onAddNewItem(item: Item): void {
    this.itemService.addItem(item);
    this.newItem = { ...this.defaultItem };
  }

}
