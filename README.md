# @guillermocorrea/cacheable

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
