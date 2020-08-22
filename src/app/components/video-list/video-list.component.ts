import { Component, OnInit, Input , EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  @Input() public videos:[];
  @Output() public selectedVideo=new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(video){
    this.selectedVideo.emit(video);
  }
}
