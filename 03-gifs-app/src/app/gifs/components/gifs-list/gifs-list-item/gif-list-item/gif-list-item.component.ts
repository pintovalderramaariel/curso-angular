import { NgFor } from '@angular/common';
import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'gif-list-item',
  imports: [NgFor],
  templateUrl: './gif-list-item.component.html',
})
export class GifListItemComponent {

  imageUrl = input.required<string>();


}
