import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, shareReplay, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  private cache = new Map<string, Observable<string>>();

  constructor(private http: HttpClient) {}

  /**
   * Retrieves an SVG icon by category and name.
   * Caches the observable to avoid duplicate HTTP requests for the same icon.
   */
  getIcon(category: string, name: string): Observable<string> {
    const url = `assets/icons/${category}/${name}.svg`;
    
    if (this.cache.has(url)) {
      return this.cache.get(url)!;
    }

    const request = this.http.get(url, { responseType: 'text' }).pipe(
      catchError(() => {
        console.error(`AssetService: Failed to load icon ${url}`);
        return of('');
      }),
      shareReplay(1)
    );

    this.cache.set(url, request);
    return request;
  }
}
