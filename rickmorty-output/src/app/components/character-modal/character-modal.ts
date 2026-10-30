import { Component, inject, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CharacterDetailResponse } from '../../interfaces/character-detail-response';

@Component({
  imports: [],
  selector: 'app-character-modal',
  styleUrl: './character-modal.css',
  templateUrl: './character-modal.html',
})
export class CharacterModal {
  // STEP11: NgbActiveModal controla el modal abierto
  activeModal = inject(NgbActiveModal);

  // Parámetro de entrada con el detalle del personaje
  @Input() characterDetail: CharacterDetailResponse | undefined;
}
