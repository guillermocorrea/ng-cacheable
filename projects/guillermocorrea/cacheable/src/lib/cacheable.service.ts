import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

const cache = {};

export function cacheable() {
  // tslint:disable-next-line:only-arrow-functions
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    // keep a reference to the original function
    const originalMethod = descriptor.value;

    // Replace the original function with a wrapper
    descriptor.value = function(...args: any[]) {
      const key = propertyKey + '|' + args.join('|');
      if (cache[key]) {
        return cache[key];
      }

      // Call the original function
      const result$ = (originalMethod.apply(this, args) as Observable<any>).pipe(
        shareReplay()
      );
      cache[key] = result$;
      return result$;
    };

    return descriptor;
  };
}
