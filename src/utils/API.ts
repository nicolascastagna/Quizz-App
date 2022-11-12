import axios from "axios";

export type Question = {
    category: string,
    correct_answer: string,
    difficulty: string,
    incorrect_answer: string[],
    question: string,
    type: string,
}

export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard",
}

export const fetchQuizzQuestions = async (amount: number, difficulty: Difficulty) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const data = await (await axios.get(endpoint, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }).then((res) => {
        console.log(res.data.results);
    }))
}