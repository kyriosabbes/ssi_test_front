import { Component, OnInit } from '@angular/core';
import { tacheService } from 'src/app/services/tache.service';
import { ActivatedRoute, Router } from '@angular/router';
import { tache } from 'src/app/models/tache.model';

@Component({
  selector: 'app-tache-details',
  templateUrl: './tache-details.component.html',
  styleUrls: ['./tache-details.component.css']
})
export class tacheDetailsComponent implements OnInit {

  currenttache: tache = {
    title: '',
    description: '',
  };
  message = '';

  constructor(
    private tacheService: tacheService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.gettache(this.route.snapshot.params.id);
  }

  gettache(id: string): void {
    this.tacheService.get(id)
      .subscribe(
        data => {
          this.currenttache = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status: boolean): void {
    const data = {
      title: this.currenttache.title,
      description: this.currenttache.description,
      published: status
    };

    this.message = '';

    this.tacheService.update(this.currenttache.id, data)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'The status was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  updatetache(): void {
    this.message = '';

    this.tacheService.update(this.currenttache.id, this.currenttache)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'This tache was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deletetache(): void {
    this.tacheService.delete(this.currenttache.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/taches']);
        },
        error => {
          console.log(error);
        });
  }

}
