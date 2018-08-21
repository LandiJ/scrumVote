import { RoomComponent } from "./room/room.component";
import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

const appRoutes: Routes = [{ path: "hello", component: RoomComponent }];
export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
