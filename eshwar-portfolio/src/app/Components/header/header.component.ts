import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  headingarray=["Home","Skills","Education","Certification","Projects","Contacts"]
  public Skills: { name: string; percent: number;color:string }[] = [];
  public EduNCertification!: { Education: { qual: string; course: string; year: string; }[]; Certification: { cname: string; CompletedYear: string; }[]; };
  public skillbtn: boolean=false;
  public educationbtn: boolean=false;
  public certificatebtn: boolean=false;
  public contactbtn: boolean=false;
  
  ngOnInit(): void {
    this.Skills=[{name:"Angular",percent:65,color:"red"},{name:"SQL",percent:71,color:"yellow"}, {name:"C#",percent:75,color:"green"},{name:"Javascript",percent:65,color:"orange"},{name:"Dotnet",percent:65,color:"cyan"}]
    this.EduNCertification = {
      "Education": [
          { qual: "Bachelors Of Engineering", course: "Information Science & Engg", year: "2019-2022" },
          { qual: "Diploma", course: "Computer Science & Engg", year: "2016-2019" },
          { qual: "High School", course: "SSLC", year: "2014" }
      ],
      "Certification": [
          { cname: "Angular", CompletedYear: "March 2024" },
          { cname: "Angular", CompletedYear: "March 2024" },
          { cname: "C# advanced", CompletedYear: "March 2025" },
          { cname: "SQL", CompletedYear: "July 2024" }
      ]
  };
  
  }

  onClick(inp:string){
    this.skillbtn=false;
    this.educationbtn=false;
    this.certificatebtn=false;
    this.contactbtn=false;
    
    switch(inp.toLowerCase()){
      case 'skills':this.skillbtn=true;break;
      case 'education':this.certificatebtn=true;break;
      case 'certification':this.certificatebtn=true;break;
      case 'contacts':this.contactbtn=true;break;
    }

  }

}
