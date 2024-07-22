import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface StatusResponse {
  status: string;
  message: string;
  event_type: string;
  timestamp: string;
}

@Injectable({
  providedIn: 'root'
})
export class MonitorService {
  private apiUrl = 'http://127.0.0.1:8000/api/status';

  constructor(private http: HttpClient) { }

  getStatus(): Observable<StatusResponse> {
    return this.http.get<StatusResponse>(this.apiUrl);
  }
}
