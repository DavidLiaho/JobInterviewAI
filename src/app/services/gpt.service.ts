import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { appConfig } from '../app.config';
import { firstValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GptService {

    constructor(private http: HttpClient) { }

    // system: איפה אנו נמצאים - מה הסביבה הכללית שבה אנו נמצאים
    // assistant: GPT אישיות או מומחיות של
    // user: מה אנו רוצים לקבל\לבצע

    public async getCompletion(systemContent: string, assistantContent: string, userContent: string): Promise<string> {
        const requestBody = {
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: systemContent },
                { role: "assistant", content: assistantContent },
                { role: "user", content: userContent }
            ]
        };

        const options = {
            headers: {
                authorization: "Bearer " + appConfig.apiKey
            }
        };

        const observable = this.http.post(appConfig.gptUrl, requestBody, options);
        const response: any = await firstValueFrom(observable);
        const completion = response.choices[0].message.content;
        return completion;
    }

}