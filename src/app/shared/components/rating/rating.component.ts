import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-rating',
  imports: [MatIcon, NgClass],
  templateUrl: './rating.component.html',
  styles: `
    .iluminado {
      color: gold;
    }
  `,
})
export class RatingComponent implements OnInit {

  // Inputs
  @Input({ required: true, transform: (valor: number) => Array(valor).fill(0) })
  maximumRating!: number[];
  @Input({ required: true }) selectedRating = 0;

  //Outputs
  @Output() votado = new EventEmitter<number>(); // Event emitter to notify when a rating is selected

  //maximumRatingArray: any[] = [];
  lastSelectedRating = 0; // Keep track of the last selected rating

  ngOnInit(): void {
    //this.maximumRatingArray = Array(this.maximumRating).fill(0);
    this.lastSelectedRating = this.selectedRating; // Initialize the last selected rating
  }

  manejarMouseEnter(index: number) {
    // Handle mouse enter event on a star
    this.selectedRating = index + 1; // Update the selected rating based on the hovered star index
  }

  manejarMouseLeave() { // Handle mouse leave event from the star rating component
    if (this.lastSelectedRating !== 0) {
      this.selectedRating = this.lastSelectedRating; // Restore the last selected rating when the mouse leaves
    } else {
      this.selectedRating = 0; // Reset the selected rating if no rating was previously selected
    }
  }

  manejarClick(index: number) {
    // Handle click event on a star
    this.selectedRating = index + 1; // Update the selected rating based on the clicked star index
    this.lastSelectedRating = this.selectedRating; // Store the last selected rating

    // emmit the selected rating to the parent component
    this.votado.emit(this.selectedRating);
  }

}
