import { Injectable } from '@angular/core';
import { errorExtractor } from "error-extractor";
import { Notyf } from "notyf";

@Injectable({
    providedIn: 'root'
})
export class NotifyService {

    private notyf = new Notyf({ duration: 3000, position: { x: "center", y: "top" }, dismissible: true });

    public success(message: string): void {
        this.notyf.success(message);
    }

    public error(err: any): void {
        const message = errorExtractor.getMessage(err);
        this.notyf.error(message);
    }
}
