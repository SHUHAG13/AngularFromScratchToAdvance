import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile-card',
  imports: [FormsModule],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css'
})
export class ProfileCardComponent {
  name:string="Shuhag Mia";
  age:number=23;
  desc:string="I am shuhag.I am student of Computer Science and Engineering at Pabna University of Science and Techonology"

}
