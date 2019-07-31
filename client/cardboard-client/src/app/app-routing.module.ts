import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MusicManagerComponent, PartManagerComponent, UserManagerComponent } from './routing-components';

const routes: Routes = [{ path: '', component: MusicManagerComponent},
                        { path: 'parts', component: PartManagerComponent},
                        { path: 'users', component: UserManagerComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
