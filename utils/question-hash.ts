import {
  createHash,
} from "crypto";

export function normalizeQuestion(
  question: string,
): string {
  return question
    .trim()
    .replace(/\s+/g, " ")
    .toLowerCase();
}

export function questionHash(
  question: string,
): string {
  const normalized =
    normalizeQuestion(question);

  return createHash("sha256")
    .update(normalized)
    .digest("hex");
}

export function sameQuestion(
  first: string,
  second: string,
): boolean {
  return (
    questionHash(first) ===
    questionHash(second)
  );
}

export function shortQuestionHash(
  question: string,
  length = 12,
): string {
  return questionHash(
    question,
  ).slice(0, length);
}

export function questionKey(
  marketId: bigint,
  question: string,
): string {
  return [
    marketId.toString(),
    shortQuestionHash(question),
  ].join(":");
}
