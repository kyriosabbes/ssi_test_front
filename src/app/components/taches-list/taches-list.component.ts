import { Component, OnInit } from '@angular/core';
import { tache } from 'src/app/models/tache.model';
import { tacheService } from 'src/app/services/tache.service';

@Component({
  selector: 'app-taches-list',
  templateUrl: './taches-list.component.html',
  styleUrls: ['./taches-list.component.css']
})
export class tachesListComponent implements OnInit {

  taches?: tache[];
  currenttache: tache = {};
  currentIndex = -1;
  title = '';

  constructor(private tacheService: tacheService) { }

  ngOnInit(): void {
    this.retrievetaches();
  }

  retrievetaches(): void {
    this.tacheService.getAll()
      .subscribe(
        data => {
          this.taches = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrievetaches();
    this.currenttache = {};
    this.currentIndex = -1;
  }

  setActivetache(tache: tache, index: number): void {
    this.currenttache = tache;
    this.currentIndex = index;
  }

  removeAlltaches(): void {
    this.tacheService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle(): void {
    this.currenttache = {};
    this.currentIndex = -1;

    this.tacheService.findByTitle(this.title)
      .subscribe(
        data => {
          this.taches = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
