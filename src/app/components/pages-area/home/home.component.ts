import { Component } from '@angular/core';
import { JobInterviewModel } from '../../../models/job-interview-model';
import { PromptEngineeringService } from '../../../services/prompt-engineering.service';
import { FormComponent } from '../../job-interview/form/form.component';
import { QnaComponent } from "../../job-interview/qna/qna.component";
import { Qna } from '../../../models/qna-model';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [FormComponent, QnaComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {

    public qnaArray: Qna[] = [];
    public loading: boolean = false;

    public constructor(private promptEngineeringService: PromptEngineeringService) { }

    public async fetch(jobInterview: JobInterviewModel) {
        this.qnaArray = [];
        this.loading = true;
        this.qnaArray = await this.promptEngineeringService.getQna(jobInterview);
        this.loading = false;
    }

}
