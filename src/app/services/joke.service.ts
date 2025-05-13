import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JokeService {
private apiUrl = 'https://v2.jokeapi.dev/joke/Any?type=twopart';
  constructor(private http: HttpClient) {}
  
 getRandomJoke(): Observable<{ setup: string; delivery: string }> {
  return this.http.get<{ setup: string; delivery: string }>(this.apiUrl);
}
}
