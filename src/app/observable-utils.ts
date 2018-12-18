import { Observable } from 'rxjs';

export class ObservableUtils {

    static merge(...observables) {
        return Observable.create(observer => observables.forEach(obs => obs.subscribe(observer)));
    }
}

