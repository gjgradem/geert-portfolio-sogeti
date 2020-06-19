import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  @Input() percentage: number;
  @Input() skill: string = '';
  @Input() icon: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
