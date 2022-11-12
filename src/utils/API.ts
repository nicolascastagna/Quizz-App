import axios from "axios";
import { shuffleArray } from "./utils";

export type Question = {
    category: string,
    correct_answer: string,
    difficulty: string,
    incorrect_answers: string[],
    question: string,
    type: string,
}

export type QuestionsState = Question & { answers: string[] };

export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard",
}

export const fetchQuizzQuestions = async (amount: number, difficulty: Difficulty) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    await (await axios.get(endpoint, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }).then((res) => {
        console.log(res.data.results);
        return res.data.results.map((question: Question) => (
            {
                ...question,
                answers: shuffleArray([ ...question.incorrect_answers, question.correct_answer]),
            }
        ))
    }))
}