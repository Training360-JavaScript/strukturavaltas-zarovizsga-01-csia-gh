import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Construction } from './model/construction';
import { ConstructionService } from './service/construction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-3';
  constructions: Construction[] = [];

  constructor(private cService: ConstructionService) {}

  ngOnInit(): void {
    this.cService
      .getAll()
      .subscribe((constructions) => (this.constructions = constructions));
  }

  onDelete(construction: Construction): void {
    this.cService.delete(construction.id).subscribe(() => {
      this.constructions = this.constructions.filter(
        (c) => c.id !== construction.id
      );
    });
  }
}
