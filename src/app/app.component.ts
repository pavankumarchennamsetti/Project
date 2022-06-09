import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'project';

  //DATA BINDING USING FUNCTION....
  welcome() {
    return ' printing HELLOOO using data binding of function :) ';
  }
  //*ngIf DIRECTIVE....
  UserLogged: boolean = false;
  //*ngFor DIRECTIVE.......
  students: Array<string> = ['Kiran', 'Ravi', 'Lahari'];
  //*ngFor COMPLEX ARRAY DIRECTIVE....
  data = [
    {
      firstname: 'pavan',
      lastname: 'kumar',
      age: 21,
    },
    {
      firstname: 'Ravi',
      lastname: 'Teja',
      age: 20,
    },
    {
      firstname: 'Kiran',
      lastname: 'sai',
      age: 22,
    },
  ];

  //*ngSwitch DIRECTIVE.....
  choose = '';

  //EVENT BINDING......
  clickMe() {
    alert('I WAS CLICKED!!');
  }

  //MULTIPLICATION FUNCTION USING NG FROMS

  multiply(data: any) {
    var n1 = data.valuea;
    var n2 = data.valueb;
    var n3 = n1 * n2;
    alert('answer :' + n3);
  }
  ///PIPES.......................

  name: string = 'pavan kumar';
  rupees: number = 45;
  date = new Date();

  /////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////
  ////////JSON////////////////
  friends: Array<String> = ['ravi', 'kiran', 'lahari'];
  //ADDING DATA TO ARRAY USING JSON.....////////////
  addFriend = '';
  add() {
    if (this.addFriend === '') {
      alert('Please enter your friend name to add:)');
    } else {
      this.friends.push(this.addFriend);
      this.addFriend = '';
    }
  }
  delete(index: number) {
    this.friends.splice(index, 1);
  }
}
