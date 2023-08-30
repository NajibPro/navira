import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image-viewer',
  template: `
    <div class="image-viewer">
      <img [src]="imageSrc" alt="Image">
    </div>
  `,
  styleUrls: ['./image-viewer.component.css']
})
export class ImageViewerComponent implements OnInit {
  imageSrc: string | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.imageSrc = params['src'] || null;
    });
  }
}

