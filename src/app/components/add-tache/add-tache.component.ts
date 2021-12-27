import { Component, OnInit } from '@angular/core';
import { tache } from 'src/app/models/tache.model';
import { tacheService } from 'src/app/services/tache.service';

@Component({
  selector: 'app-add-tache',
  templateUrl: './add-tache.component.html',
  styleUrls: ['./add-tache.component.css']
})
export class AddtacheComponent implements OnInit {

  tache: tache = {
    title: '',
    description: '',
  };
  submitted = false;

  constructor(private tacheService: tacheService) { }

  ngOnInit(): void {
  }

  savetache(): void {
    const data = {
      title: this.tache.title,
      description: this.tache.description
    };

    this.tacheService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newtache(): void {
    this.submitted = false;
    this.tache = {
      title: '',
      description: '',
    };
  }

}
