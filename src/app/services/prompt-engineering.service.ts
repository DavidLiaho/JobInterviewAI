import { Injectable } from '@angular/core';
import { GptService } from './gpt.service';
import { JobInterviewModel } from '../models/job-interview-model';
import { Qna } from '../models/qna-model';

@Injectable({
    providedIn: 'root'
})
export class PromptEngineeringService {

    public constructor(private gptService: GptService) { }

    public async getQna(jobInterview: JobInterviewModel): Promise<Qna[]> {
        const systemContent = "job interview";
        const assistantContent = `You are a job recruiter, specialized in ${jobInterview.subject}`;
        const userContent = `Please write ${jobInterview.totalQuestions} job interview questions and answers suitable to ${jobInterview.level} level in ${jobInterview.subject}.
        Please return a JSON array containing the questions and answers in the following format:
        [
            {"question": "question 1", "answer": "answer 1" },
            {"question": "question 2", "answer": "answer 2" },
            {"question": "question 3", "answer": "answer 3" }
        ],
        don't reply with anything else but the JSON.`;

        const completion = await this.gptService.getCompletion(systemContent, assistantContent, userContent);
        const json = this.sanitizeJson(completion);
        const qnaArray = JSON.parse(json);
        return qnaArray;
    }

    private sanitizeJson(completion: string): string {
        const openBracketIndex = completion.indexOf("[");
        const closeBracketIndex = completion.lastIndexOf("]");
        const json = completion.substring(openBracketIndex, closeBracketIndex + 1);
        return json;
    }

}
