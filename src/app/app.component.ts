/* Created by Rintaspon on 28 April 2019 */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CheeseMakerService } from './service/cheese-maker.service';
import { Milk } from './entity/entity';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'cheese-rest-angular';
  message: string;
  isSuccess: boolean;
  milkForm: FormGroup;
  httpStatus: string;

  constructor(private cheeseMakerService: CheeseMakerService) {
    this.milkForm = new FormGroup({
      milkType: new FormControl(null),
      milkVolume: new FormControl(null),
    });
  }

  ngOnInit(): void {
    this.message = '-';
    this.httpStatus = '-';
    this.isSuccess = null;
  }

  submit() {
    const milkType = this.milkForm.controls.milkType.value;
    const milkVolume = this.milkForm.controls.milkVolume.value;
    const milk: Milk = {};
    milk.milkType = milkType;
    milk.milkVolume = milkVolume;
    this.cheeseMakerService.makeCheese(milk).subscribe((response: any) => {
      this.isSuccess = true;
      this.message = response.body;
      this.httpStatus = response.status;
    },
      (errorResponse: any) => {
        this.isSuccess = false;
        this.message = errorResponse.error;
        this.httpStatus = errorResponse.status;
      }
    );
  }
}
