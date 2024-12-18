import { Level } from "./level-model";

export class JobInterviewModel {
    public subject: string;
    public level = Level.Beginners; // Default
    public totalQuestions: number;
}
