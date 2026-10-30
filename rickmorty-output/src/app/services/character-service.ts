import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterListResponse } from '../interfaces/character-list-response';
import { CharacterDetailResponse } from '../interfaces/character-detail-response';

// STEP4: servicio que hace las peticiones a la API de Rick and Morty
@Service()
export class CharacterService {
    http = inject(HttpClient);

    getAll(): Observable<CharacterListResponse> {
        return this.http.get<CharacterListResponse>('https://rickandmortyapi.com/api/character');
    }

    // STEP4: obtiene la información de un personaje a partir de su ID
    getOne(id: number): Observable<CharacterDetailResponse> {
        return this.http.get<CharacterDetailResponse>(`https://rickandmortyapi.com/api/character/${id}`);
    }
}
