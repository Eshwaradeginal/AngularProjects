import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-educationand-certification',
  templateUrl: './educationand-certification.component.html',
  styleUrls: ['./educationand-certification.component.scss']
})
export class EducationandCertificationComponent implements OnInit {
  @Input() edu:any;
ngOnInit(): void {
  
}
}
