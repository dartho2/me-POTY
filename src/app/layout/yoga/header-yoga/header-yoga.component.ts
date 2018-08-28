import { Component, OnInit } from '@angular/core';
import { Yoga } from '../yoga.model';
import { YogaService } from '../yoga.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header-yoga',
  templateUrl: './header-yoga.component.html',
  styleUrls: ['./header-yoga.component.css']
})
export class HeaderYogaComponent implements OnInit {

  
  yogas: Yoga[] = []
  private yogasSub: Subscription;

  constructor(public yogasService: YogaService) { }

  ngOnInit() {

    this.yogasService.getYogas()
    .subscribe((data: Yoga[]) => {
      this.yogas = data.filter(data => data['name'] == "studio_jogi")
    })
  }
  
}