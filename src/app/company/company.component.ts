import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  @Input() logo: string;
  @Input('company-title') title: string;
  @Input() function: string;
  @Input() framework: string;
  @Input() language: string;
  @Input() duration: string;

  constructor() { }

  ngOnInit(): void {
  }

}
