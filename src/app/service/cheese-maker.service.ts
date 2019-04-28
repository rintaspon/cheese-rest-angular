/* Created by Rintaspon on 28 April 2019 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class CheeseMakerService {
  abstract makeCheese(milk: any);
}
