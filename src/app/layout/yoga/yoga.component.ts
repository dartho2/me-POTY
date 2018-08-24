import { Component, OnInit } from '@angular/core';
import { Yoga } from './yoga.model';
import { YogaService } from './yoga.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-yoga',
  templateUrl: './yoga.component.html',
  styleUrls: ['./yoga.component.css']
})
export class YogaComponent implements OnInit {

  ngOnInit() {
  }
}