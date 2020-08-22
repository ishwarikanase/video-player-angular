import { Component, OnInit } from '@angular/core';
import { VideoService } from '../../services/video.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css']
})
export class VideoCenterComponent implements OnInit {


  videos;
  showNewVideoForm:boolean=false;
  selectedVideo:[];

  constructor(private video_service:VideoService) { 

  }

  ngOnInit(): void {
    this.getAllVideos();
  }

  getAllVideos(){
    this.video_service.getServiceCall('getAllVideos').subscribe(res=>{
      console.log("getting all videos...."+res);
      this.videos=res['videos'];
    })
  }

  onSelectedVideo(video:any){
    this.showNewVideoForm=false;
    this.selectedVideo=video;
  }

  newVideo(){
    this.showNewVideoForm=true;
  }

  addVideo(video){
    this.video_service.postServiceCall('uploadVideo',video).subscribe(res=>{
      console.log("video uploaded successfully.....");
      this.getAllVideos();
    });
  }

  onDelete(video:any){
    this.getAllVideos();
  }

  onUpdate(video:any){
    // this.getAllVideos();
    // this.ngOnInit();
    
  }

}
