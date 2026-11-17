// Prints every distinct SMILES string used in questions.js as a JSON list.
const B = require('../questions.js');
const set = new Set();
for (const q of B.questions) { for (const it of q.scheme) if (it.s) set.add(it.s); for (const m of q.answer.mols) set.add(m.s); }
process.stdout.write(JSON.stringify([...set]));
