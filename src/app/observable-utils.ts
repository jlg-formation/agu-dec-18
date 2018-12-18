import { Observable } from 'rxjs';

export class ObservableUtils {

    static merge(...observables) {
        return Observable.create(
            observer => observables.forEach(
                obs => obs.subscribe(observer)));
    }

    static accumulate(observable) {
        let cache = '';
        return Observable.create(observer => {
            observable.subscribe({
                complete: observer.complete,
                error: observer.error,
                next: (n)=>{
                    cache = cache + ' ' + n;
                    observer.next(cache);
                }
            })
        });
        
    }
}

