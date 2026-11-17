# My_first_repository
## Chapter 7 Sketch Lab

A drawing-based practice app for CHEM 210 Exam 3 (Chapter 7: nucleophilic substitution and elimination). Draw an answer with Apple Pencil and have it marked against a point rubric.

- `index.html` is the app: topic and difficulty browser, drawing pad, grading.
- `questions.js` holds the 41 questions, answer keys and rubrics.
- `structures.js` holds the structure drawings. It is generated; after editing `questions.js` run
  `node tools/dump_smiles.js | python3 tools/build_structures.py` (needs `pip install rdkit`).

Each question also has an "Ask Claude" chat for follow-up questions. Grading and chat use Claude through the published page, so it works when the app is opened from claude.ai or the Claude app.
