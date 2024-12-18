import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JobInterviewModel } from '../../../models/job-interview-model';

@Component({
    selector: 'app-form',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './form.component.html',
    styleUrl: './form.component.css'
})
export class FormComponent {
    public jobInterview = new JobInterviewModel();

    // New event we're building (like click/change/mousemove...)
    @Output() // Enable parent to register the event in the html 
    public generate = new EventEmitter<JobInterviewModel>();

    public async send() {
        // Fire the event
        this.generate.emit(this.jobInterview);
    }
}
