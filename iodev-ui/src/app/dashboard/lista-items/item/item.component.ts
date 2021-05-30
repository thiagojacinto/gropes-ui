import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges {

  @Input() item: any

  constructor() { }
  
  ngOnInit(): void { }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.item) {
      console.log(`[INFO] <item> ... Received item data: ${JSON.stringify(this.item)}`);
    }
  }

}
