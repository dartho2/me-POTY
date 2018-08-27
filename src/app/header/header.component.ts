import { Component, OnInit } from '@angular/core';
import { Home } from '../home/home.model';
import { HomeService } from '../home/home.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  contentYoga: any;
  yogas: Home[] = []
  private yogasSub: Subscription;

  constructor(public yogasService: HomeService) { }

  ngOnInit() {

    this.yogasService.getYogas().subscribe((data: Home[]) => {
      console.log(data[0])
      this.yogas = data;
    })
  }


}