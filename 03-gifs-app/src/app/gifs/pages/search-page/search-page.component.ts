import { Component, inject, signal } from '@angular/core';
import { GifListItemComponent } from '../../components/gifs-list/gifs-list-item/gif-list-item/gif-list-item.component';
import { GifsListComponent } from "../../components/gifs-list/gifs-list/gifs-list.component";
import { GifService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-search-page',
  imports: [GifsListComponent],
  templateUrl: './search-page.component.html',
})
export default class SearchPageComponent {

  gifService = inject(GifService)
  gifs = signal<Gif[]>([]);

  onSearch(query: string) {
    this.gifService.searchGifs(query).subscribe((resp) => {
      this.gifs.set(resp);
    });
  }
}
