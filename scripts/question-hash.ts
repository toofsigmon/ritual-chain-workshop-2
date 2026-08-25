import {
  normalizeQuestion,
  questionHash,
  sameQuestion,
  questionKey,
} from "../utils/question-hash";

const questions = [
  "Will ETH rise?",
  "  Will ETH rise? ",
  "WILL   ETH RISE?",
  "Will BTC rise?",
];

for (const question of questions) {
  console.log(
    "Original:",
    question,
  );

  console.log(
    "Normalized:",
    normalizeQuestion(
      question,
    ),
  );

  console.log(
    "Hash:",
    questionHash(question),
  );

  console.log(
    "Key:",
    questionKey(
      1n,
      question,
    ),
  );

  console.log(
    "----------------",
  );
}

console.log(
  "First two equivalent:",
  sameQuestion(
    questions[0],
    questions[1],
  ),
);
