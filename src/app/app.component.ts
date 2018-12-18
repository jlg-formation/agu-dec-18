import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';
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
}
