// STEP3: el detalle de un personaje (GET /api/character/{id}) tiene la misma forma que cada item de la lista
import { Character } from './character-list-response';

export type CharacterDetailResponse = Character;
