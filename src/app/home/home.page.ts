import { Component } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private readonly resultset: AngularFireList<any>;

  constructor(database: AngularFireDatabase) {
    this.resultset = database.list('/');
    this.resultset.valueChanges().subscribe(data => {
      console.log(data);
    });
  }
}
