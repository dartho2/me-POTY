import { Component, OnInit } from '@angular/core';
import { Yoga } from '../yoga.model';
import { YogaService } from '../yoga.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-y-news',
  templateUrl: './y-news.component.html',
  styleUrls: ['./y-news.component.css']
})
export class YNewsComponent implements OnInit {
  contentYoga: any;
  
  yogas: Yoga[] = []
  private yogasSub: Subscription;

  constructor(public yogasService: YogaService) { }

  ngOnInit() {

    this.yogasService.getYogas()
    .subscribe((data: Yoga[]) => {
      // for(let i = 0; i < data.length; i++){
      //   if (data[i].name == "yoga") {
      //     this.yogas = data[i];
      //     this.yogas.push(this.yogas);

      //   }
      // }
      console.log(data[0])
      this.yogas = data.filter(data => data['name'] == "yoga")
    })
    //   this.yogasService.getYogas();
    // this.yogasSub = this.yogasService.getYogaUpdatedListener()
    //   .subscribe((yogas: Yoga[]) => {
    //     this.yogas = yogas;

    //   })

      // this.yogasService.getData().subscribe(res => this.contentYoga = res);
        

  }


}