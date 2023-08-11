import { Component } from '@angular/core';

@Component({
  selector: 'app-search-home',
  templateUrl: './search-home.component.html',
  styleUrls: ['./search-home.component.css']
})
export class SearchHomeComponent {
  searchTerm: string = '';
  cities: string[] = [];

  constructor() { }

  searchCities() {
    // Implement the logic to search for cities based on the search term
  }
}
