import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit{
  @Input() githubRepo!: any[]|null;
  constructor() {}
  ngOnInit(): void {}
}
