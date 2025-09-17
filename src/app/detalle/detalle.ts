import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detalle',
  imports: [CommonModule],
  templateUrl: './detalle.html',
  styleUrl: './detalle.scss',
})
export class Detalle {
  slug: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');
  }
   ngOnDestroy(): void {
    this.slug = null;
  }
}
