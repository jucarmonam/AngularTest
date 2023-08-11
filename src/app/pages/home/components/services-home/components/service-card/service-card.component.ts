import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.css'],
})
export class ServiceCardComponent {
  @Input() service: {
    service: string;
    title: string;
    message: string;
    more: string;
    image: string;
  };

  constructor() {
    this.service = {
      service: '',
      title: '',
      message: '',
      more: '',
      image: '',
    };
  }
}
