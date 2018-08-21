import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { appRouting } from "./app.routing";
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { RoomComponent } from "./room/room.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [AppComponent, RoomComponent],
  imports: [
    BrowserModule,
    RouterModule,
    appRouting,
    SharedModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
