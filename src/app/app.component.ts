import { Component } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ObservableUtils } from './observable-utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';
  phone = '0123456789';
  myBoolean = false;
  mergedObs = ObservableUtils.merge(
    interval(300).pipe(map(n => String.fromCharCode(65 + (n % 26)))),
    interval(1000)
  );
  accumulateObs: Observable<string> =
    ObservableUtils.accumulate(this.mergedObs).pipe(take(10));
  nir: string;

}
