import { Component, OnInit } from '@angular/core';
import { Poty } from '../poty.model';
import { PotyService } from '../poty.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-p-news',
  templateUrl: './p-news.component.html',
  styleUrls: ['./p-news.component.css']
})
export class PNewsComponent implements OnInit {

  potys: Poty[] = []
  private potysSub: Subscription;

  constructor(public potysService: PotyService) { }

  ngOnInit() {
      this.potysService.getPotys();
    this.potysSub = this.potysService.getPotyUpdatedListener()
      .subscribe((potys: Poty[]) => {
        this.potys = potys;

      })

    }
  }
  
