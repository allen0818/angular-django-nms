import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Device } from '../device/models/device';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  baseUrl = 'api/devices';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getAll(): Observable<Device[]> {
    return this.http.get<Device[]>(this.baseUrl).pipe(
      tap(_ => console.log('fetch devices')),
      catchError(this.handleError<Device[]>('getDevices', []))
    );
  }

  getOne(id: number): Observable<Device> {
    return this.http.get<Device>(`${this.baseUrl}/${id}`).pipe(
      tap(_ => console.log(`fetch devices id=${id}`)),
      catchError(this.handleError<Device>(`getDevice(${id})`))
    );
  }

  update(device: Device): Observable<Device> {
    return this.http.put<Device>(this.baseUrl, device).pipe(
      tap(_ => console.log(`update device id=${device.id}`)),
      catchError(this.handleError<Device>(`updateDevice`))
    );
  }

  create(device: Device): Observable<Device> {
    return this.http.post<Device>(this.baseUrl, device, this.httpOptions).pipe(
      tap((newDevice: Device) => console.log(`create device id=${newDevice.id}`)),
      catchError(this.handleError<Device>(`createDevice`))
    );
  }

  delete(device: Device | number): Observable<Device> {
    const id = typeof device === 'number' ? device : device.id;
    const url = `${this.baseUrl}/${id}`;

    return this.http.delete<Device>(url, this.httpOptions).pipe(
      tap(_ => console.log(`delete hero id=${id}`)),
      catchError(this.handleError<Device>(`deleteHero`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error}`);
      return of(result as T);
    }
  }
}
