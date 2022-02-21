import { Experience } from './../interface/experience';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  constructor(private http: HttpClient) { }

  getExperience(): Observable<Experience[]> {
    return this.http.get<Experience[]>('http://localhost:5000/api/experiences');
  }
}
