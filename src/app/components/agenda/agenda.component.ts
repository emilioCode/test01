import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  contacts$!: Observable<any>;

  constructor(
    private http: HttpService
  ) { }

  ngOnInit(): void {
    this.contacts$ = this.http.getData("api/Contact");
    this.http.getData("api/Contact").subscribe(res => console.log(res));
  }

}
