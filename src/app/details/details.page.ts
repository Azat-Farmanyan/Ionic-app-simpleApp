import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit, OnDestroy {
  link: string;
  paramsSubs: Subscription;

  constructor(private route: ActivatedRoute) {
    const param = this.route.snapshot.paramMap.get('link');
    if (param) this.link = param;
  }

  ngOnInit() {
    this.paramsSubs = this.route.params.subscribe((el) => {
      const id = el['id'];
      if (id) this.link = id;
    });
  }

  ngOnDestroy(): void {
    this.paramsSubs.unsubscribe();
  }
}
