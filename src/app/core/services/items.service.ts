import { Injectable } from '@angular/core';
import { ApiService, Response } from '../../shared/services/api.service';
import { Items } from '../interfaces/items';
import { Observable } from 'rxjs';

@Injectable()
export class ItemsService {
  constructor(private apiService: ApiService<Items>) {}

  list(): Observable<Response<Items[]>> {
    return this.apiService.list('items') as Observable<Response<Items[]>>;
  }
  
  completeItem(id: string): Observable<Response<Items>> {
    return this.apiService.update('item', id, { is_completed: true }) as Observable<Response<Items>>;
  }
}
