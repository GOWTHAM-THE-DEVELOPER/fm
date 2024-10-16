import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnnouncementService } from '../announcement.service';
import { Announcement } from '../announcement.model';


@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})
export class AnnouncementsComponent  {

  
  announcements: any[] = [];
  selectedAnnouncement: any;
  isSearchActive = false;
  searchTerm: string = '';
  isFilterPopupActive = false;
  isModalOpen = false;  
  announcementForm: FormGroup;
  showCommentBox: boolean = false;
 commentText: string = '';
 isPopupOpen = false;

  constructor(private fb: FormBuilder, private announcementService: AnnouncementService) {
    this.announcementForm = this.fb.group({
      name: ['', Validators.required],
      title: ['', Validators.required],
      message: ['', Validators.required],
      attachment: [null],
      category: ['', Validators.required],
      expiry: ['', Validators.required],
      location: ['', Validators.required],
      disableComments: [false],
      pinAnnouncement: [false],
      notifyAll: [false]
    });

    this.loadAnnouncements();
  }


  loadAnnouncements(): void {
    this.announcementService.getAnnouncements().subscribe(
      (announcements: Announcement[]) => {
        this.announcements = announcements;
      },
      (error: any) => {
        console.error('Error loading announcements:', error);
      }
    );
  }

  toggleSearch(): void {
    this.isSearchActive = !this.isSearchActive;
    if (!this.isSearchActive) {
      this.searchTerm = ''; // Optionally clear the search term
    }
  }

  openAnnouncementModal(announcement: any = null) {
    this.selectedAnnouncement = announcement || {}; // Set to provided announcement or empty object
    this.isModalOpen = true;
  }
  closeAnnouncementModal() {
    this.isModalOpen = false;
  }

  submitAnnouncement(): void {
    if (this.announcementForm.valid) {
      const newAnnouncement = this.announcementForm.value as Announcement;
  
      // Log the form data (for debugging or tracking purposes)
      console.log('Form Submitted', newAnnouncement);
  
      // Save the announcement using the service
      this.announcementService.saveAnnouncement(newAnnouncement).subscribe(
        (announcement: Announcement) => {
          this.announcements.push(announcement);
          this.closeAnnouncementModal();
        },
        (error: any) => {
          console.error('Error saving announcement:', error);
        }
      );
    } else {
      // Mark all fields as touched to trigger validation messages
      this.announcementForm.markAllAsTouched();
    }
  }
  

  
  toggleCommentBox() {
    this.showCommentBox = !this.showCommentBox;
  }

  deleteAnnouncement(id: number): void {
    this.announcementService.deleteAnnouncement(id).subscribe(
      () => {
        this.announcements = this.announcements.filter(announcement => announcement.id !== id);
      },
      (error: any) => {
        console.error('Error deleting announcement:', error);
      }
    );
  }

  toggleFilterPopup(): void {
    this.isFilterPopupActive = !this.isFilterPopupActive;
  }

  applyFilter(): void {
    // Implement filter application logic here
    console.log('Filter applied');
    this.toggleFilterPopup(); // Close the popup after applying
  }

  resetFilter(): void {
    // Implement filter reset logic here
    console.log('Filter reset');
    this.toggleFilterPopup(); // Close the popup after resetting
  }

  likeAnnouncement(id: number): void {
    // Implement like functionality here
    console.log('Like announcement with id:', id);
  }

  openCommentModal(id: number): void {
    // Implement open comment modal functionality here
    console.log('Open comment modal for announcement with id:', id);
  }
  
  submitComment() {
    if (this.commentText) {
      // Add logic to submit the comment
      console.log('Comment submitted:', this.commentText);
      this.commentText = ''; // Clear the comment text after submission
      this.showCommentBox = false; // Optionally close the comment box
    }
  }

  openAnnouncementPopup(announcement: Announcement): void {
    this.selectedAnnouncement = announcement;
    this.isPopupOpen = true;
  }

  closeAnnouncementPopup(): void {
    this.isPopupOpen = false;
    this.selectedAnnouncement = null;
  }

  openCommentPopup(id: number | undefined): void {
    if (id !== undefined) {
      // Add your logic to open the comment popup
    }
}
}
