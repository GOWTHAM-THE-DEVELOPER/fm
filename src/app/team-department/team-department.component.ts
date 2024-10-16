import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { TeamService ,Section } from '../team.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-team-department',
  templateUrl: './team-department.component.html',
  styleUrl: './team-department.component.scss'
})
export class TeamDepartmentComponent implements OnInit {
  selectedOption: number = 0;
  options = [
    { id: 1, option: 'Ceo' },
    { id: 2, option: 'Manager' },
    { id: 3, option: 'Hr' },
    { id: 4, option: 'Team Leader' },
    { id: 5, option: 'Full Stack' },
    { id: 6, option: 'Angular' },
    { id: 7, option: 'Java' }
  ];
  sections = [
    { id: 1, name: 'HR Department', details: 'Details about HR.' },
    { id: 2, name: 'Development Team', details: 'Details about Development.' },
    { id: 3, name: 'Marketing Team', details: 'Details about Marketing.' },
    // Add more sections as needed
  ];

  selectedOptionId = 0;

  constructor(private teamService: TeamService) {}

  ngOnInit() {
    this.loadSections();
  }

  loadSections() {
    this.teamService.getSections().subscribe((sections:any) => {
      this.sections = sections;
    });
  }

  // loadSections(){
  //   this.teamService.getSections().subscribe((res:any)=>{
  //     this.sections = res
  //   })
  // }


  getFilteredSections() {

    if (this.selectedOptionId === 0) {
      return this.sections; // Return all sections if "All" is selected
    } else {
      return this.sections.filter(section => section.id === this.selectedOptionId);

    }
  }

  // isSectionVisible(sectionId: number): boolean { debugger
  //   return this.selectedOption ===  0 || this.selectedOption === sectionId;
  // }

  // cliked(event:any){
  //   if(event.target.value === "All"){
  //       this.show= this.sections

  //   }
  }

