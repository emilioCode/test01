import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { ContactDialogComponent } from './contact-dialog/contact-dialog.component';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort!: MatSort;

  contacts$!: Observable<any>;
  columnsToDisplay: string[] = [
    'FirstName',
    'LastName',
    'BirthDate',
    'TelephoneNumber',
    'actions'
  ];
  constructor(
    private http: HttpService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getContacts();
    this.http.getData("api/Contact").subscribe(res => console.log(res));
  }

  getContacts = () => {
    this.contacts$ = this.http.getData("api/Contact");
    this.contacts$.subscribe(res => {
      if(res.success){
        this.setDataSource(res.data);
      }else{
        console.error(res.message);
        this.setDataSource([]);
      }
    },error => {
      console.error(error)
    });
  }

  setDataSource(data: any){
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog = (element: Object, action: string = 'read'): void => {
    const dialogRef = this.dialog.open(ContactDialogComponent, {
      height: '530px',
      width: '600px',
      data: { element, action }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result)this.getContacts();
    });
  }

}
