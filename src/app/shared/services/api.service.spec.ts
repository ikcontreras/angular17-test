import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import DoneCallback = jest.DoneCallback;
import {HttpClient,  HttpErrorResponse} from "@angular/common/http";

interface MockData {
  id: number;
  name: string;
}

describe('ApiService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: ApiService<MockData>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // Provide the service-under-test and its dependencies
      providers: [ApiService],
      // Import the HttpClient mocking services
      imports: [ HttpClientTestingModule ]
    });
    // Inject the http, test controller, and service-under-test
    // as they will be referenced by each test.
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ApiService<MockData>);
  });
  
  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('should list data with method get', (done: DoneCallback) => {
    const expectedHeroes = [{ id: 1, name: '::name::' }] as MockData[];
    const mockURL = '::path::';
    
    service.list(mockURL).subscribe(r => {
      expect(r.result).toEqual(expectedHeroes);
      done();
    });
    
    // HeroService should have made one request to GET heroes from expected URL
    const req = httpTestingController.expectOne(`api/${mockURL}`);
    
    expect(req.request.method).toEqual('GET');
    
    req.flush({
      succes: true,
      result: expectedHeroes,
      message: '::message::'
    });
  });
  
  it('should read data with method get', (done: DoneCallback) => {
    const expectedHeroes = [{ id: 1, name: '::name::' }] as MockData[];
    const mockURL = '::path::';
    const numberMock = 1 ;

    service.read(mockURL, numberMock).subscribe(r => {
      expect(r.result).toEqual(expectedHeroes);
      done();
    });

    // HeroService should have made one request to GET heroes from expected URL
    const req = httpTestingController.expectOne(`api/${mockURL}/${numberMock}`);

    expect(req.request.method).toEqual('GET');

    req.flush({
      succes: true,
      result: expectedHeroes,
      message: '::message::'
    });
  });
  
  it('should create data with method post', (done: DoneCallback) => {
    const expectedHeroes = [{ id: 1, name: '::name::' }] as MockData[];
    const mockURL = '::path::';
    const bodyMock = { id: 1, name: '::name::' } ;

    service.create(mockURL, bodyMock).subscribe(r => {
      expect(r.result).toEqual(expectedHeroes);
      done();
    });

    // HeroService should have made one request to GET heroes from expected URL
    const req = httpTestingController.expectOne(`api/${mockURL}`);

    expect(req.request.method).toEqual('POST');

    req.flush({
      succes: true,
      result: expectedHeroes,
      message: '::message::'
    });
  });
  
  it('should update data with method patch', (done: DoneCallback) => {
    const expectedHeroes = [{ id: 1, name: '::name::' }] as MockData[];
    const mockURL = '::path::';
    const numberMock = "1";
    const bodyMock = { id: 1, name: '::name::' } ;

    service.update(mockURL, numberMock, bodyMock).subscribe(r => {
      expect(r.result).toEqual(expectedHeroes);
      done();
    });

    // HeroService should have made one request to GET heroes from expected URL
    const req = httpTestingController.expectOne(`api/${mockURL}/${numberMock}`);

    expect(req.request.method).toEqual('PATCH');

    req.flush({
      succes: true,
      result: expectedHeroes,
      message: '::message::'
    });
  });
});
