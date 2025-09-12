import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaintingService, Painting } from '../../services/painting';
import { YearFormatPipe } from '../../pipes/year-format-pipe';

@Component({
  selector: 'app-painting',
  templateUrl: './painting.html',
  styleUrls: ['./painting.css'],
  imports: [CommonModule, YearFormatPipe],
})
export class PaintingComponent implements OnInit {
  painting!: Painting;
  showLocation: boolean = true;

  constructor(private paintingService: PaintingService) {}

  ngOnInit(): void {
    this.painting = this.paintingService.getPainting();
  }

  toggleLocation(): void {
    this.showLocation = !this.showLocation;
  }
}
