# @guillermocorrea/cacheable

[![Build Status](https://travis-ci.org/guillermocorrea/ng-cacheable.svg?branch=master)](https://travis-ci.org/guillermocorrea/ng-cacheable)
[![codecov](https://codecov.io/gh/guillermocorrea/ng-cacheable/branch/master/graph/badge.svg)](https://codecov.io/gh/guillermocorrea/ng-cacheable)

Angular method decorator to cache Observable results.

## Install

`npm i @guillermocorrea/cacheable`

## Example

```ts
import {cacheable} from '@guillermocorrea/cacheable';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) {}

  @cacheable()
  getTodo(id: number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }
}
```
