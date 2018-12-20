import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface JsonObj { [key: string]: any };


@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  url = 'https://gist.githubusercontent.com/SiamKreative/f1074ed95507e69d08a0/raw/bbf2c9dbb156eef1cebf37c8846331f3f3493fa6/french-regions-departments.json';
  data: JsonObj;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<JsonObj>(this.url).subscribe({
      next: data => this.data = data,
      error: error => console.log('error', error)
    });
  }

}
