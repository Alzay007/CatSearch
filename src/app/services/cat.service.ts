import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cat } from '../models/cat'

@Injectable({
  providedIn: 'root',
})
export class catApiService {
  private apiUrl: string = 'https://api.thecatapi.com/v1'

  constructor(
    private http: HttpClient
  ) { }

  header = new HttpHeaders({
    'x-api-key': 'live_RDvZta48MMCBb9x9zWtgqgnli9KCLFilSXT7UHxMputLbH9kElGYMjR62bDdYFXf',
    'content-type': 'application/json',
  });

  getAllCats(x: number): Observable<Cat[]> {
    return this.http.get<Cat[]>(`${this.apiUrl}/images/search?limit=${x}&has_breeds=1`,
      { headers: this.header }
    )
  }

  getAllBreeds(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/breeds`,
      { headers: this.header }
    )
  }

  getBreedByID(id: string): Observable<Cat[]> {
    return this.http.get<Cat[]>(`${this.apiUrl}/images/search?breed_id=${id}`,
      { headers: this.header }
    )
  }
}
