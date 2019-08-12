import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { cacheable } from './cacheable.service';

const apiUrl = '/api/data';

@Injectable({
  providedIn: 'root'
})
class MockService {
  constructor(private http: HttpClient) {}

  @cacheable()
  getData(id: number): Observable<any> {
    return this.http.get(`${apiUrl}/${id}`);
  }
}

describe('Cacheable Decorator', () => {
  let httpTestingController: HttpTestingController;
  let service: MockService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockService],
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(MockService);
  });

  it('should cache results', () => {
    const mockData = {
      title: 'title'
    };

    new Array(2).fill(1).map(() => {
      service
        .getData(1)
        .subscribe(response => expect(response.title).toEqual('title'));
    });

    httpTestingController.expectOne(`${apiUrl}/1`).flush(mockData);
  });
});
