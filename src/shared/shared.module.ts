import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { VoteServiceService } from "./vote-service.service";

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [VoteServiceService]
})
export class SharedModule {}
