import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent {
  @Input('imageBuffer') droppedImage: string | ArrayBuffer | null = null;
  @Output('imageBufferChange') droppedImageChange = new EventEmitter<string | ArrayBuffer | null>();
  isDragging = false;

  allowDrop(event: any) {
    event.preventDefault();
    this.isDragging = true;
  }

  handleDragLeave(event: any) {
    event.preventDefault();
    this.isDragging = false;
  }

  handleDrop(event: any) {
    event.preventDefault();
    this.isDragging = false;
    const files: File[] = event.dataTransfer.files;
    if (files.length > 0) {
      const imageFile = files[0];
      if (this.isImageFile(imageFile)) {
        const reader = new FileReader();
        reader.onload = (ev) => {
          if (ev.target?.result) {
            this.droppedImage = ev.target?.result;
            this.droppedImageChange.emit(this.droppedImage);
          }
        };
        reader.readAsDataURL(imageFile);
      } else {
        alert('Invalid file format. Please drop an image file.');
      }
    }
  }

  isImageFile(file: File): boolean {
    return file.type.startsWith('image/');
  }

  browseFiles() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const files: FileList | null = (e.target as HTMLInputElement).files;
      if (files && files.length > 0) {
        if (this.isImageFile(files[0])) {
          const reader = new FileReader();
          reader.onload = (ev) => {
            if (ev.target?.result) {
              this.droppedImage = ev.target?.result;
              this.droppedImageChange.emit(this.droppedImage);
            }
          };
          reader.readAsDataURL(files[0]);

        } else {
          alert('Invalid file format. Please select an image file.');
        }
      }
    };
    input.click();
  }
}
