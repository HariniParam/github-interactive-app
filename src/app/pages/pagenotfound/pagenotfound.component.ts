import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrl: './pagenotfound.component.css'
})
export class PagenotfoundComponent implements OnInit{
  ngOnInit(): void {}
  @Input() errorMessage!: string;
}
