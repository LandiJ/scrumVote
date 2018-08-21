import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import * as io from "socket.io-client/dist/socket.io";

@Injectable()
export class VoteServiceService {
  constructor() {}

  url = "http://scrumtime.herokuapp.com";
  socket;

  sendVote(vote) {
    this.socket.emit("add-vote", vote);
  }

  getVotes() {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on("vote", data => {
        observer.next(data);
      });
      this.socket.on("numberOfOnlineUsers", data => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }
}
