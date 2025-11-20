import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-footer',
  imports: [RouterOutlet,Navbar,Footer],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

}
