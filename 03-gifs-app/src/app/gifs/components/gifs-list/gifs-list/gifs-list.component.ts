import { Component, input, Input } from '@angular/core';
import { GifListItemComponent } from "../gifs-list-item/gif-list-item/gif-list-item.component";
import { Gif } from 'src/app/gifs/interfaces/gif.interface';

@Component({
  selector: 'gifs-list',
  imports: [GifListItemComponent],
  templateUrl: './gifs-list.component.html',})
export class GifsListComponent {

   gifs = input.required<Gif[]>();


}
