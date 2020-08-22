import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VideoService } from '../../services/video.service';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css']
})
export class VideoDetailsComponent implements OnInit {

  @Input() videos;
  @Output() deleted = new EventEmitter<string>();
  @Output() updated = new EventEmitter<string>();

  editTitle: boolean = false;
  constructor(private video_service: VideoService) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.editTitle = false;
  }
  onTitleClick() {
    this.editTitle = true;
  }

  updateVideo(id, body) {
    this.video_service.putServiceCall('updateVideo', id, body).subscribe(res => {
      console.log("successfully updated......");
      this.updated.emit(this.videos);
    });
  }

  deleteVideo(id) {
    this.video_service.deleteServiceCall('deleteVideo', id).subscribe(res => {
      console.log("deleted successfully....");
      this.deleted.emit(this.videos);
    })
  }



}
