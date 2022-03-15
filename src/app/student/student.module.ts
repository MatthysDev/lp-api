import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { StudentListComponent } from './pages/student-list/student-list.component';
import { StudentDetailsComponent } from './pages/student-details/student-details.component';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { SharedModule } from '../shared/shared.module';
import { StudentService } from './services/student.service';

@NgModule({
  declarations: [
    StudentComponent,
    StudentListComponent,
    StudentDetailsComponent,
    StudentFormComponent,
  ],
  imports: [CommonModule, StudentRoutingModule, SharedModule],
  providers: [StudentService],
})
export class StudentModule {}
