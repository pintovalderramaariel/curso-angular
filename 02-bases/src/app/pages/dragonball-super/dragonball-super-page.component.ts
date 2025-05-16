import { Component, inject } from "@angular/core";
import { CharacterListComponent } from "../../components/shared/navbar/dragonball/character-list/character-list.component";
import { CharacterAddComponent } from '../../components/shared/navbar/dragonball/character-add/character-add/character-add.component';
import { DragonballService } from "../../services/dragonball.service";

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: './dragonball-super-page.Component.html',
  imports: [CharacterListComponent, CharacterAddComponent]
})
export class DragonballSuperPageComponent {
  public dragonballService = inject(DragonballService);
}
