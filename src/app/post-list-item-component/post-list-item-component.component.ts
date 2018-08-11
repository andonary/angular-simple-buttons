import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-post-list-item-component",
  templateUrl: "./post-list-item-component.component.html",
  styleUrls: ["./post-list-item-component.component.scss"]
})
export class PostListItemComponentComponent implements OnInit {
  @Input()
  post: {
    title: string;
    content: string;
    loveIts: number;
    created_at: Date;
  };

  constructor() {}

  ngOnInit() {}

  numberUp() {
    this.post.loveIts++;
  }

  numberDown() {
    this.post.loveIts--;
  }
}
