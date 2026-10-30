import { Component, input, output } from '@angular/core';
import { Character } from '../../interfaces/character-list-response';

@Component({
  imports: [],
  selector: 'app-character-item-component',
  styleUrl: './character-item-component.css',
  templateUrl: './character-item-component.html',
})
export class CharacterItemComponent {
  // STEP5: recibe como input el personaje que tiene que dibujar
  character = input<Character>();

  // STEP6: output para avisar al padre de que se ha hecho clic en el personaje
  characterClicked = output<number>();

  // STEP8: al hacer clic emitimos el id del personaje por el output
  emitCharacterClicked() {
    this.characterClicked.emit(this.character()!.id);
  }
}
