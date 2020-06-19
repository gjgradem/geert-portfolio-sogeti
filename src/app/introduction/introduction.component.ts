import { Component, OnInit } from '@angular/core';
import { CloudData, CloudOptions } from 'angular-tag-cloud-module';


@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {

  constructor() { }

  options: CloudOptions = {
    width: .8,
    // if height is between 0 and 1 it will be set to the height of the upper element multiplied by the value 
    height: 400,
    overflow: false,
  };

  data: CloudData[] = [
    {text: 'Front end', weight: 6, color: '#0070ad'},
    {text: 'Javascript', weight: 5, color: '#0070ad'},
    {text: 'NodeJS', weight: 2, color: '#0070ad'},
    {text: 'React', weight: 4, color: '#0070ad'},
    {text: 'Vue', weight: 4, color: '#0070ad'},
    {text: 'Angular', weight: 3, color: '#0070ad'},
    {text: 'Motivated', weight: 4, color: '#0070ad'},
    {text: 'Enthusiastic', weight: 5, color: '#0070ad'},
    {text: 'Git', weight: 3, color: '#0070ad'},
    {text: 'UX/UI', weight: 3, color: '#0070ad'},
    {text: 'Design', weight: 2, color: '#0070ad'},
    {text: 'HTML5', weight: 4, color: '#0070ad'},
    {text: 'CSS3', weight: 3, color: '#0070ad'},
    {text: 'Ionic', weight: 3, color: '#0070ad'}
  ];

  ngOnInit(): void {
  }

}
