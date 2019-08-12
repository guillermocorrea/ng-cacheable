# @guillermocorrea/cacheable

Angular method decorator to cache Observable results.

## Example

```ts
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
