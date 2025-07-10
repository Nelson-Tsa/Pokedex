import { Component, Output, EventEmitter, Input, output, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css'
})
export class SearchBar {

  // @Input() search = 'Pikachu';
  search = model<string>('Pikachu');
// searchChange = output<string>();
  searchButtonClicked = output();
  
  // This decorator is used to define an output property
searchClick() {
    this.searchButtonClicked.emit();
    
  }

  //  updateSearch(value: string) {
  //   // this.searchChange.emit(value);
  //    this.search.set(value) // This method emits an event with the updated search value = value; // This method updates the search input value
  // }
}
