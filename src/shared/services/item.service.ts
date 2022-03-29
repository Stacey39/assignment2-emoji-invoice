import { Injectable } from '@angular/core';

import { Item } from 'src/shared/models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items: Item[] = [
    {
      description: 'Web Design',
      hourlyRate: 50,
      hours: 20
    },
    {
      description: 'Web Development',
      hourlyRate: 75,
      hours: 100
    },
    {
      description: 'Project Management',
      hourlyRate: 55.3,
      hours: 12
    },
  ];

  constructor() { }

  addItem(newItem: Item): void {
    this.items.push({ ...newItem });
  }

  calculateTotalHours(): number {
    let totalHours = 0;
    const tempList = this.items.filter((i) => i.hours);
    tempList.forEach((i) => totalHours += +i.hours);
    return totalHours;
  }

  caculateTotals(): { total: number, subTotal: number, taxes: number} {
    let subTotal = 0;
    this.items.forEach((i) => {
      subTotal += (+i.hourlyRate * i.hours);
    });

    return {
      taxes: subTotal * 0.13,
      subTotal,
      total: subTotal + (subTotal * 0.13),
    };
  }

}
