import { TestBed } from '@angular/core/testing';

import { ItemsService } from './items.service';
import {ApiService} from "../../shared/services/api.service";
import DoneCallback = jest.DoneCallback;

describe('ItemsService', () => {
  let service: ItemsService;
  let apiService = {
    list: jest.fn(),
    update: jest.fn(),
  };
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemsService, { provide: ApiService, useValue: apiService}],
    });
    service = TestBed.inject(ItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('should list items', (done: DoneCallback) => {
    service.list().subscribe(r => {
      console.log(r);
      done();
    });
  });
});
