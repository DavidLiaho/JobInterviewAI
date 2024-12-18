import { Component, Input } from '@angular/core';
import { Qna } from '../../../models/qna-model';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-qna',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './qna.component.html',
    styleUrl: './qna.component.css'
})
export class QnaComponent {
    
    @Input() // Enable parent component to send data in the html
    public qnaArray: Qna[] = [];

    @Input() // Enable parent component to send data in the html
    public loading: boolean;

    public visibility: boolean[] = [];

    public toggleAnswer(index: number): void {
        this.visibility[index] = !this.visibility[index];
    }
}
