import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-data-form',
  templateUrl: './personal-data-form.component.html',
  styleUrl: './personal-data-form.component.scss'
})
export class PersonalDataFormComponent {

  activeTab: string = 'personal-data';

  setActiveTab(tabName: string): void {
    this.activeTab = tabName;
    console.log(this.activeTab,'tabactive')
  }

  personalDataForm: FormGroup;
  base64Image!: string | ArrayBuffer | null;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.personalDataForm = this.fb.group({
      photo: [''] ,
      postAppliedFor: [''],
      firstName:[''],
      lastName: [''],
      middleName: [''],
      email: ['', Validators.email],
      birthDate: [''],
      birthPlace: [''],
      gender: [''],
      age: [''],
      maritalStatus: [''],
      marriageDate: [''],
      nativeState: [''],
      religion: [''],
      nationality: [''],
      stateOfDomicile: [''],
      category: [''],
      height: [''],
      weight: [''],
      bloodGroup: [''],
      passportNo: [''],
      passportIssueDate: [''],
      validUptoDate: [''],
      countryOfIssue: [''],
      validVisaDetails: [''],
      panNumber: [''],
      extraCurricularActivity: this.fb.group({

        activity: [''],
        institutionAssociationSocietyClub: [''],
        year: [''],
        positionHeld: [''],
        prizesWon: ['']
      }),
      skillsSummary: this.fb.group({

        projectTitle: [''],
        role: [''],
        teamSize: [''],
        duration: [''],
        languagePlatformOS: ['']
      }),
      workExperience: this.fb.group({

        employerNameAndAddress: [''],
        durationPeriod: [''],
        durationFrom: [''],
        durationTo: [''],
        lastPositionHeldDesignation: [''],
        natureOfDuties: [''],
        immediateSuperiorNameAndDesignation: [''],
        basicAtTimeOfJoining: [''],
        fixedAtTimeOfJoining: [''],
        variableAtTimeOfJoining: [''],
        grossAtTimeOfJoining: [''],
        lastDrawnFixed: [''],
        lastDrawnVariable: [''],
        lastDrawnGross: [''],
        significantAchievementsAndsuitedForPosition: ['']
      }),
      generalData: this.fb.group({
        criminalRecord: [''],
        interviewedByTVM: [''],
        dateYear: [''],
        position: [''],
        companyName: [''],
        relativesAcquaintanceInTVM: [''],
        name: [''],
        relativesPosition: [''],
        howDidYouComeToKnow: [''],
        relationship: [''],
        companyTelephoneNos: [''],
        howDidYouKnowPosition: [''],
        engagedInPersonalBusiness: [''],
        natureOfBusiness: [''],
        hasContractBond: [''],
        contractBondDetails: [''],
        whenCanYouJoin: [''],
        superior1Name: [''],
        superior1Address: [''],
        superior1TelephoneNos: [''],
        superior1Company: [''],
        superior1Position: [''],
        superior2Name: [''],
        superior2Address: [''],
        superior2TelephoneNos: [''],
        superior2Company: [''],
        superior2Position: [''],
        superiorEmailId1: [''],
        superiorEmailId2: ['']
      }),
      declaration: this.fb.group({

        partnerOrRelativeOfDirector: [''],
        place: [''],
        date: [''],
        applicantSignature: [''],
        connectedWithDirector: [''],
        directorOfTheCompany: ['']
      }),
      familyDetails: this.fb.array([this.createFamilyMember()]),

      presentHomeMailingAddress: this.fb.group({
        address: [''],
        pinCode: [''],
        cell: [''],
        telephoneCode: [''],
        telephone: ['']
      }),
      permanentHomeMailingAddress: this.fb.group({
        address: [''],
        pinCode: [''],
        cell: [''],
        telephoneCode: [''],
        telephone: ['']
      }),
      emergencyContact: this.fb.group({
        name: [''],
        relation: [''],
        address: [''],
        telephoneNo: ['']
      }),
      passportAndVisaDetails: this.fb.group({
        passportNo: [''],
        passportIssueDate: [''],
        validUptoDate: [''],
        countryOfIssue: [''],
        validVisaDetails: [''],
        panNumber: ['']
      }),
      healthData: this.fb.group({
        height: [''],
        weight: [''],
        bloodGroup: [''],
        eyesightRight: [''],
        eyesightLeft: [''],
        physicalDisability: [''],
        identificationMarks: ['']
      }),
      education: this.fb.array([this.createEducation()]),
      languagesKnown: this.fb.array([this.createLanguage()]),
      membershipOfProfessionalInstitute: this.fb.group({
        nameOfInstitute: [''],
        typeOfMembershipAndPositionHeld: [''],
        period: [''],
        fromDate: [''],
        toDate: ['']
      }),
      trainingCertification: this.fb.group({
        nameOfTrainingCourse: [''],
        duration: [''],
        year: [''],
        instituteOrganization: [''],
        certificateAwarded: [false]
      })
    });
  }

  // createFamilyMember(): FormGroup {
  //   return this.fb.group({
  //     familyMemberName: [''],
  //     familyMemberRelation: [''],
  //     familyMemberDateOfBirth: [''],
  //     familyMemberQualification: [''],
  //     familyMemberOccupation: [''],
  //     familyMemberDesignationAndPosition: ['']
  //   });
  // }
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.base64Image = reader.result;
        this.personalDataForm.patchValue({
          photo: this.base64Image // Update the form control with the base64 string
        });
      };
      reader.readAsDataURL(file); // Convert the file to base64 string
    }
  }

  createFamilyMember(): FormGroup {
    return this.fb.group({
      name: [''],
      relationship: [''],
      dateOfBirth: [''],
      qualification: [''],
      organization: [''],
      designationAndPosition: ['']
    });
  }

  createEducation(): FormGroup {
    return this.fb.group({
      examinationPassed: [''],
      specialisation: [''],
      schoolCollegeInstitution: [''],
      universityBoard: [''],
      courseCorres: [''],
      durationOfCourse: [''],
      monthYearOfPassing: [''],
      gradeMarks: [''],
      distinctions: ['']
    });
  }

  createLanguage(): FormGroup {
    return this.fb.group({
      languageName: [''],
      speakeLanguage: [''],
      readLanguage: [''],
      writeLanguage: ['']
    });
  }

  get familyDetails(): FormArray {
    return this.personalDataForm.get('familyDetails') as FormArray;
  }


  get educationControls(): FormArray {
    return this.personalDataForm.get('education') as FormArray;
  }

  get languagesKnown(): FormArray {
    return this.personalDataForm.get('languagesKnown') as FormArray;
  }

  addFamilyMember(): void {
    this.familyDetails.push(this.createFamilyMember());
  }

  removeFamilyMember(index: number): void {
    this.familyDetails.removeAt(index);
  }

  addEducation(): void {
    this.educationControls.push(this.createEducation());
  }

  removeEducation(index: number): void {
    this.educationControls.removeAt(index);
  }

  addLanguage(): void {
    this.languagesKnown.push(this.createLanguage());
  }

  removeLanguage(index: number): void {
    this.languagesKnown.removeAt(index);
  }

  onSubmit(): void {
    if (this.personalDataForm.valid) {
      this.http.post('http://localhost:8080/api/personal-data', this.personalDataForm.value)
        .subscribe({
          next: (response) => {
            console.log('Data submitted successfully', response);
            alert('Form Submitted')
            console.log(this.personalDataForm)
            this.router.navigate(['/success']);
          },
          error: (error) => {
            console.error('Error submitting data', error);
            alert(error)
          }
        });
    } else {
      console.log('Form is not valid');
    }
  }
}

