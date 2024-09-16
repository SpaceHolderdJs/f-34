import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserItemComponent } from './user-item/user-item.component';
import { UserService } from './services/user.service';
import { UserNamePipe } from './pipes/user-name.pipe';



@NgModule({
  declarations: [UserItemComponent, UserNamePipe],
  exports: [UserItemComponent, UserNamePipe],
  providers: [UserService],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
