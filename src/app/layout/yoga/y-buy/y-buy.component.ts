import { Component, OnInit } from '@angular/core';
import { YogaService } from '../yoga.service';
import { Yoga } from '../yoga.model';

@Component({
  selector: 'app-y-buy',
  templateUrl: './y-buy.component.html',
  styleUrls: ['./y-buy.component.css']
})
export class YBuyComponent implements OnInit {
  yogas: Yoga[] = []
  constructor(private yogasService: YogaService) { }

  ngOnInit() {
    this.yogasService.getYogas()
    .subscribe((data: Yoga[]) => {
      this.yogas = data.filter(data => data['name'] == "studio_jogi")
      console.log(this.yogas)
    })
  }

}
