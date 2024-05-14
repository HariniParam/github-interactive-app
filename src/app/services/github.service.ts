import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  constructor(private http: HttpClient) { }

  getUser(username: string): Observable<any> {
    const url = `https://api.github.com/users/${username}`;
    return this.http.get<any>(url);
  }
  getRepos(username: string): Observable<any[]> {
    const url = `https://api.github.com/users/${username}/repos`;
    return this.http.get<any[]>(url);
  }
}
