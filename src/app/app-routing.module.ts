import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {YoutubePlaylistComponent} from "./youtube-playlist/youtube-playlist.component";
import {YoutubePlayerComponent} from "./youtube-player/youtube-player.component";

const routes: Routes = [{
  path: 'youtube',
  component: YoutubePlaylistComponent,
  children: [{
    path: ':iddd',
    component: YoutubePlayerComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
