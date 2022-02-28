import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/model/car';
import { CarService } from '../../service/car.service';
import { switchMap, Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-car-editor',
  templateUrl: './car-editor.component.html',
  styleUrls: ['./car-editor.component.scss'],
})
export class CarEditorComponent implements OnInit {
  car$: Observable<Car> = this.ar.params.pipe(
    switchMap((params) => this.carService.get(params['id']))
  );

  constructor(private carService: CarService, private ar: ActivatedRoute) {}

  ngOnInit(): void {}

  onUpdate(car: NgForm) {
    this.carService.update(car.value).subscribe(() => {
      console.log('updated');
    });
  }
}
