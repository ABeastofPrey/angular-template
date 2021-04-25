import { Component, OnInit } from '@angular/core';
import { UploaderService } from '../../_services/uploader/uploader.service';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent implements OnInit {

  public message: string = '';

  constructor(private uploaderService: UploaderService) { }

  ngOnInit(): void { }

  onPicked(input: HTMLInputElement) {
    const file = input.files && input.files[0];
    if (file) {
      this.uploaderService.upload(file).subscribe(
        msg => {
          input.value = '';
          this.message = msg;
        }
      );
    }
  }
}
