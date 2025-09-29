import { CreateNote } from './notes/create-note/create-note';
import { EditNote } from './notes/edit-note/edit-note';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Notes } from './notes/notes/notes';


const routes: Routes = [
    {path: '' , redirectTo : "/home", pathMatch: 'full' },
    {path: 'home', component: Notes},
    {path: 'createnote', component : CreateNote},
    {path: 'editnote/:id', component: EditNote }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
