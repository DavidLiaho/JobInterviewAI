import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataModel } from '../models/job-interview-model';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    public constructor(private http: HttpClient) { }

    public async getAll____(): Promise<DataModel[]> {
        return null;
    }

}
