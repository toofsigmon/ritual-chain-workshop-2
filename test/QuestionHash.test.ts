import { expect } from "chai";

import {
  normalizeQuestion,
  questionHash,
  sameQuestion,
  shortQuestionHash,
  questionKey,
} from "../utils/question-hash";

describe("question hash", function () {
  it("removes surrounding spaces", function () {
    expect(
      normalizeQuestion(
        "  Will ETH rise?  ",
      ),
    ).to.equal(
      "will eth rise?",
    );
  });

  it("normalizes repeated spaces", function () {
    expect(
      normalizeQuestion(
        "Will   ETH   rise?",
      ),
    ).to.equal(
      "will eth rise?",
    );
  });

  it("normalizes case", function () {
    expect(
      normalizeQuestion(
        "WILL ETH RISE?",
      ),
    ).to.equal(
      "will eth rise?",
    );
  });

  it("creates a deterministic hash", function () {
    const first =
      questionHash(
        "Will ETH rise?",
      );

    const second =
      questionHash(
        "Will ETH rise?",
      );

    expect(first)
      .to.equal(second);
  });

  it("treats normalized questions equally", function () {
    expect(
      sameQuestion(
        "Will ETH rise?",
        "  WILL   ETH RISE? ",
      ),
    ).to.equal(true);
  });

  it("returns a short hash", function () {
    expect(
      shortQuestionHash(
        "Will ETH rise?",
        8,
      ),
    ).to.have.length(8);
  });

  it("creates a market key", function () {
    const key =
      questionKey(
        10n,
        "Will ETH rise?",
      );

    expect(key)
      .to.match(/^10:/);
  });
});
