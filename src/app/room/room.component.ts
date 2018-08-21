import { Component, OnInit } from "@angular/core";
import { VoteServiceService } from "../../shared/vote-service.service";
import { isNumber } from "util";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "../../../node_modules/@angular/animations";

@Component({
  selector: "app-room",
  templateUrl: "./room.component.html",
  styleUrls: ["./room.component.css"],
  animations: [
    trigger("flipState", [
      state(
        "active",
        style({
          transform: "rotateY(179.9deg)"
        })
      ),
      state(
        "inactive",
        style({
          transform: "rotateY(0)"
        })
      ),
      transition("active => inactive", animate("500ms ease-out")),
      transition("inactive => active", animate("500ms ease-in"))
    ])
  ]
})
export class RoomComponent implements OnInit {
  votes = [];
  users: any;
  connection;
  vote: any;
  flip: string = "inactive";
  autoReveal: any = false;

  constructor(public voteService: VoteServiceService) {}

  sendVote() {
    this.voteService.sendVote(this.vote);
    this.vote = "";
  }

  ngOnInit() {
    this.connection = this.voteService.getVotes().subscribe(vote => {
      if (!isNumber(vote)) {
        this.votes.push(vote);
        if (this.autoReveal) {
          this.checkVotes();
        }
        console.log("VOTE", vote);
      } else {
        this.users = vote;
        console.log("Number of users", this.users);
      }
    });
  }
  checkVotes() {
    if (this.votes.length == this.users) {
      this.toggleFlip();
    }
  }
  clearVotes() {
    this.votes = [];
  }
  toggleFlip() {
    this.flip = this.flip == "inactive" ? "active" : "inactive";
    console.log("FLIPPING");
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }
}
