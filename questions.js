/* Question bank: CHEM 210, Chapter 7 (nucleophilic substitution and elimination).
   Structures are SMILES; the page draws them. Each rubric line is [points, what earns them]. */
const TS = 'OS(=O)(=O)c1ccc(C)cc1';

const BANK = {
  levels: [
    { n: 1, name: 'Warm-up', blurb: 'One idea, one structure' },
    { n: 2, name: 'Building', blurb: 'Arrows and simple products' },
    { n: 3, name: 'Core', blurb: 'Stereochemistry and full mechanisms' },
    { n: 4, name: 'Stretch', blurb: 'Rearrangements, rings, competing paths' },
    { n: 5, name: 'Exam-level', blurb: 'Multi-part problems in exam style' }
  ],
  topics: [
    { id: 'lg', name: 'Nucleophiles, electrophiles and leaving groups', short: 'The players', blurb: 'Who attacks, where, and what leaves' },
    { id: 'sn2', name: 'SN2', short: 'SN2', blurb: 'Backside attack and inversion' },
    { id: 'sn1', name: 'SN1 and carbocations', short: 'SN1', blurb: 'Ionization, capture, rearrangement' },
    { id: 'e2', name: 'E2', short: 'E2', blurb: 'Anti-periplanar elimination' },
    { id: 'e1', name: 'E1', short: 'E1', blurb: 'Elimination through a carbocation' },
    { id: 'pick', name: 'Substitution or elimination?', short: 'SN vs E', blurb: 'Predicting which pathway wins' },
    { id: 'synth', name: 'Sequences and synthesis', short: 'Synthesis', blurb: 'Chaining steps and tracking stereochemistry' }
  ],
  questions: [
    /* ---------- The players ---------- */
    {
      id: 'lg-1', topic: 'lg', level: 1, title: 'Mark up bromomethane',
      prompt: 'Redraw bromomethane as a full Lewis structure. Show every lone pair, label the electrophilic atom with δ+, and circle the leaving group.',
      scheme: [{ s: 'CBr', n: 'bromomethane' }],
      hint: 'Bromine is more electronegative than carbon. Which end of the C–Br bond is electron-poor?',
      answer: { mols: [{ s: 'CBr', n: 'bromomethane' }], text: 'Carbon carries δ+ (it is the electrophile). Bromine carries δ− and three lone pairs; Br is the leaving group and departs as Br⁻.' },
      rubric: [[1, 'All four atoms on carbon drawn (three H and Br)'], [1, 'Three lone pairs on Br'], [1, 'δ+ on carbon (δ− on Br is fine too)'], [1, 'Br identified as the leaving group']]
    },
    {
      id: 'lg-2', topic: 'lg', level: 2, title: 'Rank three leaving groups',
      prompt: 'Each compound could lose the group attached to the ethyl carbon. Draw the three leaving groups as they would leave (lone pairs and charge shown), then rank them from best to worst leaving group.',
      scheme: [{ s: 'CCO', n: 'ethanol' }, { s: 'CCCl', n: 'chloroethane' }, { s: 'CCI', n: 'iodoethane' }],
      hint: 'A good leaving group is a weak base. Compare the pKa values of H₂O, HCl and HI.',
      answer: { mols: [{ s: '[I-]', n: 'best' }, { s: '[Cl-]', n: 'middle' }, { s: '[OH-]', n: 'worst' }], text: 'I⁻ > Cl⁻ >> HO⁻. The weaker the base, the better the leaving group: HI (pKa about −10) and HCl (about −7) are strong acids, water (15.7) is not, so hydroxide is a very poor leaving group.' },
      rubric: [[1, 'I⁻ drawn with four lone pairs and a negative charge'], [1, 'Cl⁻ drawn with four lone pairs and a negative charge'], [1, 'HO⁻ drawn with three lone pairs and a negative charge'], [2, 'Ranking is I⁻ best, then Cl⁻, then HO⁻ worst']]
    },
    {
      id: 'lg-3', topic: 'lg', level: 3, title: 'Acetate as a nucleophile',
      prompt: 'Draw both resonance contributors of the acetate ion. Then draw the curved-arrow mechanism for its reaction with bromoethane and the organic product.',
      scheme: [{ s: 'CC(=O)[O-]', n: 'acetate' }, { plus: 1 }, { s: 'CCBr', n: 'bromoethane' }, { arrow: ['', 'DMF'] }, { q: '?' }],
      hint: 'Either oxygen can attack because the charge is shared. The carbon that is attacked is the one bonded to Br.',
      answer: { mols: [{ s: 'CCOC(C)=O', n: 'ethyl acetate' }], text: 'The negative charge is shared between both oxygens. An oxygen lone pair attacks the CH₂ bonded to Br while the C–Br bond breaks (SN2), giving ethyl acetate and Br⁻.' },
      rubric: [[2, 'Two acetate resonance contributors with the charge on different oxygens'], [1, 'Arrow from an oxygen lone pair to the CH₂ carbon bearing Br'], [1, 'Arrow from the C–Br bond to Br'], [2, 'Product is ethyl acetate (ester with a new O–CH₂ bond)']]
    },
    {
      id: 'lg-4', topic: 'lg', level: 4, title: 'Why mesylate leaves so well',
      prompt: 'Draw the methanesulfonate (mesylate) anion with all three of its equivalent resonance contributors, including lone pairs and formal charges. In one sentence, say why this makes it a good leaving group.',
      scheme: [{ s: 'CS(=O)(=O)[O-]', n: 'mesylate anion' }],
      hint: 'Move the negative charge onto each oxygen in turn using an S=O π bond.',
      answer: { mols: [{ s: 'CS(=O)(=O)[O-]', n: 'one of three contributors' }], text: 'Three contributors, each with two S=O bonds and one S–O⁻, the charge sitting on a different oxygen each time. Spreading the charge over three oxygens makes the anion a very weak base (its conjugate acid has pKa near −2), so it is a good leaving group.' },
      rubric: [[3, 'Three contributors drawn, the negative charge on a different oxygen in each'], [1, 'Sulfur keeps the CH₃ group and four bonds to its neighbours in each drawing'], [1, 'Lone pairs shown on the oxygens'], [1, 'Explanation links charge delocalization to a weak, stable base']]
    },
    {
      id: 'lg-5', topic: 'lg', level: 5, title: 'Two halides, one equivalent',
      prompt: 'Part of a published synthesis: 4-methoxyphenol is treated with K₂CO₃ and then one equivalent of 1-bromo-3-chloropropane. (a) Draw the species formed by K₂CO₃. (b) Draw the curved arrows for the bond-forming step. (c) Draw the major organic product.',
      scheme: [{ s: 'COc1ccc(O)cc1', n: '4-methoxyphenol' }, { arrow: ['1) K₂CO₃', '2) Br(CH₂)₃Cl, 1 equiv'] }, { q: '?' }],
      hint: 'Carbonate is a base. Then compare Br⁻ and Cl⁻ as leaving groups.',
      answer: { mols: [{ s: 'COc1ccc([O-])cc1', n: 'phenoxide' }, { s: 'COc1ccc(OCCCCl)cc1', n: 'major product' }], text: 'Carbonate removes the phenol O–H to give the phenoxide. The phenoxide oxygen attacks the carbon bearing bromine in an SN2 step, because Br⁻ is the better leaving group. The C–Cl bond survives.' },
      rubric: [[2, 'Phenoxide drawn (O⁻ on the ring, methoxy untouched)'], [2, 'Arrow from phenoxide O lone pair to the carbon bearing Br, and arrow from C–Br to Br'], [3, 'Product is the aryl ether with an intact CH₂CH₂CH₂Cl chain'], [1, 'Chlorine, not bromine, remains in the product']]
    },

    /* ---------- SN2 ---------- */
    {
      id: 'sn2-1', topic: 'sn2', level: 1, title: 'Cyanide and bromoethane',
      prompt: 'Draw the organic product.',
      scheme: [{ s: 'CCBr', n: 'bromoethane' }, { arrow: ['NaCN', 'DMSO'] }, { q: '?' }],
      hint: 'Cyanide attacks through carbon and replaces bromide.',
      answer: { mols: [{ s: 'CCC#N', n: 'propanenitrile' }], text: 'Cyanide carbon bonds to the CH₂ and bromide leaves: CH₃CH₂C≡N.' },
      rubric: [[2, 'New C–C bond from the CH₂ to the nitrile carbon'], [1, 'C≡N triple bond shown'], [1, 'Three carbons in total and no bromine left']]
    },
    {
      id: 'sn2-2', topic: 'sn2', level: 2, title: 'Arrows for hydroxide and bromomethane',
      prompt: 'Draw the complete curved-arrow mechanism. Show the lone pairs on hydroxide and on the bromide that leaves, all formal charges, and both products.',
      scheme: [{ s: '[OH-]', n: 'hydroxide' }, { plus: 1 }, { s: 'CBr', n: 'bromomethane' }, { arrow: ['', ''] }, { q: '?' }],
      hint: 'Two arrows, one step. Arrows start at electrons.',
      answer: { mols: [{ s: 'CO', n: 'methanol' }, { s: '[Br-]', n: 'bromide' }], text: 'One arrow from a lone pair on O to carbon, one arrow from the C–Br bond to Br, both in the same step. Products are CH₃OH and Br⁻.' },
      rubric: [[2, 'Arrow starts at an O lone pair (or the O⁻) and ends at carbon'], [2, 'Arrow starts at the C–Br bond and ends on Br'], [1, 'Methanol drawn as a neutral product'], [1, 'Bromide drawn with a negative charge']]
    },
    {
      id: 'sn2-3', topic: 'sn2', level: 3, title: 'Transition state',
      prompt: 'Draw the transition state for the reaction of hydroxide with bromomethane. Use dashed partial bonds, partial charges, the correct geometry at carbon, and brackets with the ‡ symbol.',
      scheme: [{ s: '[OH-]', n: 'hydroxide' }, { plus: 1 }, { s: 'CBr', n: 'bromomethane' }, { arrow: ['', ''] }, { t: '[ ? ]‡' }],
      hint: 'The nucleophile and leaving group sit 180° apart. What happens to the three hydrogens?',
      answer: { mols: [], text: 'HO···C···Br in a straight line with both bonds dashed, δ− on O and on Br. The three H atoms lie in one plane around carbon (trigonal bipyramidal carbon). The whole structure sits in brackets with ‡ and an overall charge of −1.' },
      rubric: [[2, 'O, C and Br collinear with partial (dashed) bonds to both O and Br'], [1, 'Three hydrogens drawn roughly planar around carbon'], [1, 'δ− on both O and Br'], [1, 'Brackets with ‡ (overall negative charge is a bonus)']]
    },
    {
      id: 'sn2-4', topic: 'sn2', level: 3, title: 'Azide and (R)-2-bromobutane',
      prompt: 'Draw the product with wedges and dashes, and assign R or S to its stereocenter.',
      scheme: [{ s: 'C[C@@H](Br)CC', n: '(R)-2-bromobutane' }, { arrow: ['NaN₃', 'DMF'] }, { q: '?' }],
      hint: 'The nucleophile arrives from the side opposite the leaving group.',
      answer: { mols: [{ s: 'C[C@H](N=[N+]=[N-])CC', n: '(S)-2-azidobutane' }], text: 'Backside attack inverts the stereocenter. N₃ takes the same priority rank that Br had, so R becomes S: (S)-2-azidobutane.' },
      rubric: [[2, 'Azide (N₃) bonded to C2 of a four-carbon chain'], [2, 'Configuration is inverted relative to the starting bromide'], [1, 'Stereocenter drawn unambiguously with a wedge or dash'], [1, 'Labelled S']]
    },
    {
      id: 'sn2-5', topic: 'sn2', level: 4, title: 'Thiolate on a ring',
      prompt: 'Draw the product showing the relative stereochemistry of the two ring substituents, and state whether it is cis or trans.',
      scheme: [{ s: 'C[C@H]1CC[C@@H](Br)CC1', n: 'cis-1-bromo-4-methylcyclohexane' }, { arrow: ['NaSCH₃', 'acetone'] }, { q: '?' }],
      hint: 'Only the carbon that is attacked changes. The methyl-bearing carbon is untouched.',
      answer: { mols: [{ s: 'C[C@H]1CC[C@H](SC)CC1', n: 'trans product' }], text: 'SN2 inverts the carbon that carried Br, so the new SCH₃ group ends up on the opposite face from the methyl group: trans-1-methyl-4-(methylthio)cyclohexane.' },
      rubric: [[2, 'SCH₃ replaces Br on the same ring carbon'], [3, 'SCH₃ and CH₃ drawn on opposite faces (one wedge, one dash, or clear chair positions)'], [1, 'Labelled trans']]
    },
    {
      id: 'sn2-6', topic: 'sn2', level: 5, title: 'A ring that closes on itself',
      prompt: 'trans-2-Chlorocyclohexanol reacts with NaH to give C₆H₁₀O. (a) Draw the species formed by NaH. (b) Draw the chair conformation from which the next step happens. (c) Draw the curved arrows for that step and the product. (d) The cis isomer does not give this product. Say why in a few words.',
      scheme: [{ s: 'O[C@@H]1CCCC[C@H]1Cl', n: 'trans-2-chlorocyclohexanol' }, { arrow: ['NaH', 'THF'] }, { t: 'C₆H₁₀O' }],
      hint: 'An intramolecular SN2 still needs backside attack. Where must O⁻ and Cl sit on the chair?',
      answer: { mols: [{ s: '[O-][C@@H]1CCCC[C@H]1Cl', n: 'alkoxide' }, { s: 'C1CCC2OC2C1', n: 'cyclohexene oxide' }], text: 'Hydride removes the O–H proton (H₂ is released). The ring flips so O⁻ and Cl are both axial, which puts them anti. The O⁻ lone pair attacks the carbon bearing Cl from the back and chloride leaves, giving the epoxide. In the cis isomer O⁻ and Cl can never be anti, so backside attack is impossible.' },
      rubric: [[1, 'Alkoxide drawn (O⁻, chlorine still attached)'], [2, 'Chair with O⁻ and Cl both axial on neighbouring carbons (trans-diaxial)'], [2, 'Arrow from O⁻ lone pair to the C bearing Cl, and arrow from C–Cl to Cl'], [2, 'Product is the epoxide fused to the six-membered ring'], [1, 'Explains that cis cannot place O⁻ anti to Cl']]
    },

    /* ---------- SN1 ---------- */
    {
      id: 'sn1-1', topic: 'sn1', level: 1, title: 'Ionize tert-butyl bromide',
      prompt: 'Draw the two species formed when the C–Br bond of tert-butyl bromide breaks on its own. Show formal charges and the lone pairs on bromine.',
      scheme: [{ s: 'CC(C)(C)Br', n: 'tert-butyl bromide' }, { arrow: ['', ''] }, { q: '?' }, { plus: 1 }, { q: '?' }],
      hint: 'Both bonding electrons leave with bromine.',
      answer: { mols: [{ s: 'C[C+](C)C', n: 'tert-butyl cation' }, { s: '[Br-]', n: 'bromide' }], text: 'A tert-butyl cation (carbon with three methyl groups and a + charge, trigonal planar) and bromide with four lone pairs and a − charge.' },
      rubric: [[2, 'Carbocation with three CH₃ groups on the positive carbon'], [1, 'Positive charge shown on the central carbon'], [1, 'Bromide with a negative charge'], [1, 'Four lone pairs on bromide']]
    },
    {
      id: 'sn1-2', topic: 'sn1', level: 2, title: 'Solvolysis in methanol',
      prompt: 'Draw the major substitution product.',
      scheme: [{ s: 'CC(C)(C)Br', n: 'tert-butyl bromide' }, { arrow: ['CH₃OH', 'warm'] }, { q: '?' }],
      hint: 'The solvent is the nucleophile, and it loses a proton at the end.',
      answer: { mols: [{ s: 'CC(C)(C)OC', n: 'tert-butyl methyl ether' }], text: 'Methanol captures the tert-butyl cation and then loses its proton: tert-butyl methyl ether.' },
      rubric: [[2, 'Oxygen bonded to the tertiary carbon'], [1, 'Methyl group on that oxygen (an ether, not an alcohol)'], [1, 'Product is neutral with no extra H on oxygen']]
    },
    {
      id: 'sn1-3', topic: 'sn1', level: 3, title: 'Three-step mechanism in water',
      prompt: 'Draw the full curved-arrow mechanism for the reaction of tert-butyl bromide with water to give tert-butyl alcohol. Show each intermediate with its formal charges.',
      scheme: [{ s: 'CC(C)(C)Br', n: 'tert-butyl bromide' }, { arrow: ['H₂O', ''] }, { s: 'CC(C)(C)O', n: 'tert-butyl alcohol' }],
      hint: 'Leave, attack, deprotonate. Three steps, two intermediates.',
      answer: { mols: [{ s: 'C[C+](C)C', n: 'intermediate 1' }, { s: 'CC(C)(C)[OH2+]', n: 'intermediate 2' }], text: 'Step 1: arrow from the C–Br bond to Br gives the tert-butyl cation and Br⁻. Step 2: arrow from a water lone pair to C⁺ gives the oxonium ion. Step 3: a second water (or Br⁻) removes a proton from O⁺, with the O–H electrons returning to oxygen.' },
      rubric: [[2, 'Step 1: arrow from C–Br bond to Br, giving the carbocation'], [2, 'Step 2: arrow from a water lone pair to the cationic carbon'], [1, 'Oxonium intermediate drawn with + on oxygen'], [2, 'Step 3: base takes H, arrow from O–H bond back to O'], [1, 'Steps drawn separately, not as one concerted step']]
    },
    {
      id: 'sn1-4', topic: 'sn1', level: 4, title: 'What happens to the stereocenter',
      prompt: 'Draw every substitution product with wedges and dashes, and state how the products are related and in roughly what ratio.',
      scheme: [{ s: 'CCC[C@@](C)(Br)CC', n: '(S)-3-bromo-3-methylhexane' }, { arrow: ['H₂O', ''] }, { q: '?' }],
      hint: 'The intermediate is flat. Water can add to either face.',
      answer: { mols: [{ s: 'CCC[C@](C)(O)CC', n: '(R)-3-methylhexan-3-ol' }, { s: 'CCC[C@@](C)(O)CC', n: '(S)-3-methylhexan-3-ol' }], text: 'The planar carbocation is attacked from both faces, giving both enantiomers of 3-methylhexan-3-ol in close to a 1:1 (racemic) mixture.' },
      rubric: [[2, 'Tertiary alcohol with methyl, ethyl and propyl on the carbinol carbon'], [2, 'Two products drawn with opposite configuration at that carbon'], [1, 'Called enantiomers'], [1, 'Ratio close to 1:1 or racemic']]
    },
    {
      id: 'sn1-5', topic: 'sn1', level: 4, title: 'A product with the oxygen on the wrong carbon',
      prompt: 'Heating 2-bromo-3-methylbutane in ethanol gives mostly a substitution product in which the ethoxy group is not on the carbon that carried bromine. Draw a curved-arrow mechanism that accounts for it, and the product.',
      scheme: [{ s: 'CC(Br)C(C)C', n: '2-bromo-3-methylbutane' }, { arrow: ['CH₃CH₂OH', 'heat'] }, { q: '?' }],
      hint: 'A secondary cation sits next to a carbon that still has an H. Could it become more stable?',
      answer: { mols: [{ s: 'C[CH+]C(C)C', n: 'secondary cation' }, { s: 'CC[C+](C)C', n: 'tertiary cation' }, { s: 'CCC(C)(C)OCC', n: '2-ethoxy-2-methylbutane' }], text: 'Ionization gives a secondary cation. A 1,2-hydride shift (the H moves with its bonding pair) gives the tertiary cation. Ethanol attacks, then loses its proton, giving 2-ethoxy-2-methylbutane.' },
      rubric: [[1, 'Ionization arrow from C–Br to Br, secondary cation drawn'], [3, '1,2-hydride shift: arrow from the neighbouring C–H bond to C⁺, tertiary cation drawn'], [1, 'Ethanol lone pair attacks the tertiary cation'], [1, 'Deprotonation of the oxonium ion'], [2, 'Product is 2-ethoxy-2-methylbutane']]
    },
    {
      id: 'sn1-6', topic: 'sn1', level: 5, title: 'A rate jump of ten thousand',
      prompt: 'Chloromethyl methyl ether reacts with water more than 10⁴ times faster than 1-chloropropane does. Draw the intermediate formed from chloromethyl methyl ether, including the resonance contributor that best explains the rate, with all lone pairs and formal charges. Add one sentence of explanation.',
      scheme: [{ s: 'COCCl', n: 'chloromethyl methyl ether' }, { t: 'vs' }, { s: 'CCCCl', n: '1-chloropropane' }],
      hint: 'Think about which mechanism each compound can use, and what an oxygen lone pair can do for a neighbouring C⁺.',
      answer: { mols: [{ s: 'CO[CH2+]', n: 'carbocation form' }, { s: 'C[O+]=C', n: 'oxocarbenium form' }], text: 'Loss of chloride gives a cation that is stabilized by the neighbouring oxygen: CH₃–O–CH₂⁺ ↔ CH₃–O⁺=CH₂. In the second contributor every atom has an octet, so the cation forms easily and the ether reacts by a fast SN1 path. 1-Chloropropane would give an unstabilized primary cation, so it cannot.' },
      rubric: [[2, 'Cation with + on the CH₂ carbon after chloride leaves'], [3, 'Contributor with an O=C double bond and + on oxygen'], [1, 'One lone pair on O⁺ in that contributor (two on the neutral O)'], [2, 'Explanation: oxygen lone pair stabilizes the cation, so ionization is fast']]
    },
    {
      id: 'sn1-7', topic: 'sn1', level: 5, title: 'Five steps to a bigger ring',
      prompt: '(1-Bromoethyl)cyclobutane in water gives 1-methylcyclopentan-1-ol. The mechanism has five steps and two rearrangements. Draw all five steps with curved arrows and every intermediate.',
      scheme: [{ s: 'CC(Br)C1CCC1', n: '(1-bromoethyl)cyclobutane' }, { arrow: ['H₂O', ''] }, { s: 'CC1(O)CCCC1', n: '1-methylcyclopentan-1-ol' }],
      hint: 'A strained four-membered ring next to C⁺ can expand by moving a ring bond. After that, look for a hydride shift.',
      answer: { mols: [{ s: 'C[CH+]C1CCC1', n: 'after step 1' }, { s: 'CC1[CH+]CCC1', n: 'after ring expansion' }, { s: 'C[C+]1CCCC1', n: 'after hydride shift' }], text: '1) Bromide leaves, giving a secondary cation beside the ring. 2) A ring C–C bond migrates to C⁺ (alkyl shift), expanding the ring to a 2-methylcyclopentyl cation and relieving ring strain. 3) A 1,2-hydride shift gives the tertiary 1-methylcyclopentyl cation. 4) Water attacks. 5) Deprotonation gives the alcohol.' },
      rubric: [[1, 'Step 1: ionization to the secondary cation next to the four-membered ring'], [3, 'Step 2: arrow from a ring C–C bond to C⁺, five-membered ring cation drawn'], [2, 'Step 3: hydride shift giving the tertiary cation bearing the methyl group'], [1, 'Step 4: water attacks the tertiary cation'], [1, 'Step 5: deprotonation to the neutral alcohol']]
    },

    /* ---------- E2 ---------- */
    {
      id: 'e2-1', topic: 'e2', level: 1, title: 'Ethoxide and 2-bromopropane',
      prompt: 'Draw the elimination product.',
      scheme: [{ s: 'CC(C)Br', n: '2-bromopropane' }, { arrow: ['NaOCH₂CH₃', 'CH₃CH₂OH, heat'] }, { q: '?' }],
      hint: 'Remove H from one carbon and Br from its neighbour.',
      answer: { mols: [{ s: 'CC=C', n: 'propene' }], text: 'Loss of H and Br from adjacent carbons gives propene.' },
      rubric: [[2, 'A C=C double bond between C1 and C2'], [1, 'Three carbons, no bromine'], [1, 'No other functional group added']]
    },
    {
      id: 'e2-2', topic: 'e2', level: 2, title: 'Three arrows, one step',
      prompt: 'Draw the curved-arrow mechanism for the E2 reaction of ethoxide with 2-bromopropane. Draw the β-hydrogen that is removed explicitly, and show all three products.',
      scheme: [{ s: 'CC[O-]', n: 'ethoxide' }, { plus: 1 }, { s: 'CC(C)Br', n: '2-bromopropane' }, { arrow: ['', ''] }, { q: '?' }],
      hint: 'Base to H, C–H bond to C=C, C–Br bond to Br.',
      answer: { mols: [{ s: 'CC=C', n: 'propene' }, { s: 'CCO', n: 'ethanol' }, { s: '[Br-]', n: 'bromide' }], text: 'Arrow 1: ethoxide lone pair to a β-hydrogen. Arrow 2: that C–H bond becomes the C=C π bond. Arrow 3: the C–Br bond goes to Br. All in one step. Products: propene, ethanol, Br⁻.' },
      rubric: [[2, 'Arrow from an ethoxide O lone pair to a β-hydrogen (H on the carbon next to C–Br)'], [2, 'Arrow from that C–H bond to the C–C bond between the two carbons'], [2, 'Arrow from C–Br bond to Br'], [1, 'Propene, ethanol and bromide all shown']]
    },
    {
      id: 'e2-3', topic: 'e2', level: 3, title: 'Small base, bulky base',
      prompt: 'Draw the major alkene from each reaction and label each one Zaitsev or Hofmann.',
      scheme: [{ s: 'CCC(C)(C)Br', n: '2-bromo-2-methylbutane' }, { arrow: ['(a) NaOCH₂CH₃', '(b) KOC(CH₃)₃'] }, { q: 'a' }, { q: 'b' }],
      hint: 'tert-Butoxide is too crowded to reach an internal hydrogen easily.',
      answer: { mols: [{ s: 'CC=C(C)C', n: '(a) 2-methylbut-2-ene, Zaitsev' }, { s: 'CCC(C)=C', n: '(b) 2-methylbut-1-ene, Hofmann' }], text: 'Ethoxide gives the more substituted (trisubstituted) alkene. The bulky tert-butoxide removes the more accessible CH₃ hydrogen and gives the less substituted (disubstituted) alkene.' },
      rubric: [[2, '(a) 2-methylbut-2-ene: trisubstituted, double bond inside the chain'], [2, '(b) 2-methylbut-1-ene: terminal =CH₂'], [1, '(a) labelled Zaitsev'], [1, '(b) labelled Hofmann']]
    },
    {
      id: 'e2-4', topic: 'e2', level: 4, title: 'Newman projection decides the alkene',
      prompt: 'Draw a Newman projection of the starting material, looking down the C1–C2 bond, in the conformation that reacts by E2. Then draw the alkene it gives and label it E or Z.',
      scheme: [{ s: 'Br[C@H](c1ccccc1)[C@H](C)c1ccccc1', n: '(1S,2R)-1-bromo-1,2-diphenylpropane' }, { arrow: ['NaOCH₂CH₃', 'CH₃CH₂OH'] }, { q: '?' }],
      hint: 'Put the H on C2 exactly opposite Br. Whatever is on the same side in that Newman projection ends up on the same side of the double bond.',
      answer: { mols: [{ s: 'C/C(c1ccccc1)=C\\c1ccccc1', n: '(E)-1,2-diphenylpropene' }], text: 'With H (on C2) anti to Br, the two phenyl groups are anti to each other, and the C1 hydrogen is anti to the methyl group. The phenyls end up on opposite sides of the double bond: (E)-1,2-diphenylpropene. E2 is stereospecific, so the Z isomer does not form from this diastereomer.' },
      rubric: [[2, 'Newman projection with H on C2 anti (180°) to Br on C1'], [2, 'Substituents placed correctly for this stereoisomer: the two phenyls anti'], [3, 'Alkene with the two phenyl groups on opposite sides of C=C'], [1, 'Labelled E']]
    },
    {
      id: 'e2-5', topic: 'e2', level: 5, title: 'A chair that refuses Zaitsev',
      prompt: 'trans-1-Chloro-2-methylcyclohexane reacts with sodium ethoxide to give 3-methylcyclohexene, not the more substituted 1-methylcyclohexene. (a) Draw both chair conformations. (b) Circle the chair that can undergo E2 and mark the hydrogen that is removed. (c) Draw the alkene. (d) Say in a few words why the Zaitsev alkene cannot form.',
      scheme: [{ s: 'C[C@@H]1CCCC[C@H]1Cl', n: 'trans-1-chloro-2-methylcyclohexane' }, { arrow: ['NaOCH₂CH₃', 'CH₃CH₂OH, heat'] }, { s: 'CC1CCCC=C1', n: '3-methylcyclohexene' }],
      hint: 'E2 on a cyclohexane needs Cl axial and an axial H on the next carbon. When Cl is axial here, where is the methyl group?',
      answer: { mols: [{ s: 'CC1CCCC=C1', n: '3-methylcyclohexene' }], text: 'One chair has Cl and CH₃ both equatorial (more stable, cannot react). The flipped chair has both axial. With Cl axial, the C2 position anti to Cl is occupied by the axial CH₃, so the C2 hydrogen is equatorial and not anti-periplanar. Only the axial H on C6 is anti to Cl, so elimination goes toward C6 and gives 3-methylcyclohexene.' },
      rubric: [[2, 'Both chairs drawn: one diequatorial, one diaxial'], [2, 'Diaxial chair (Cl axial) chosen as the reactive one'], [2, 'The removed H is axial on C6, the carbon without the methyl group'], [1, 'Alkene has the double bond away from the methyl-bearing carbon'], [1, 'Explanation: no anti-periplanar H on C2 because CH₃ occupies the axial position']]
    },

    /* ---------- E1 ---------- */
    {
      id: 'e1-1', topic: 'e1', level: 1, title: 'The alkene from tert-butyl chloride',
      prompt: 'Warming tert-butyl chloride in ethanol gives some alkene alongside the ether. Draw the alkene.',
      scheme: [{ s: 'CC(C)(C)Cl', n: 'tert-butyl chloride' }, { arrow: ['CH₃CH₂OH', 'heat'] }, { q: 'alkene' }],
      hint: 'Lose Cl from the central carbon and H from a methyl group.',
      answer: { mols: [{ s: 'CC(C)=C', n: '2-methylpropene' }], text: '2-Methylpropene: a C=CH₂ with two methyl groups on the other alkene carbon.' },
      rubric: [[2, 'C=C between the central carbon and one former methyl carbon'], [1, 'Two methyl groups remain on the central carbon'], [1, 'Four carbons, no chlorine']]
    },
    {
      id: 'e1-2', topic: 'e1', level: 2, title: 'Two-step elimination',
      prompt: 'Draw the curved-arrow E1 mechanism leading to the major alkene. Show the intermediate and use ethanol as the base.',
      scheme: [{ s: 'CCC(C)(C)Br', n: '2-bromo-2-methylbutane' }, { arrow: ['CH₃CH₂OH', 'heat'] }, { q: '?' }],
      hint: 'First the leaving group goes. Then a weak base removes a hydrogen from the carbon next to C⁺.',
      answer: { mols: [{ s: 'CC[C+](C)C', n: 'intermediate' }, { s: 'CC=C(C)C', n: '2-methylbut-2-ene' }], text: 'Step 1: the C–Br bond breaks to give a tertiary cation. Step 2: ethanol removes an H from the neighbouring CH₂; the C–H electrons form the π bond. The major alkene is the trisubstituted 2-methylbut-2-ene.' },
      rubric: [[2, 'Step 1: arrow from C–Br bond to Br, tertiary carbocation drawn'], [2, 'Step 2: ethanol lone pair takes H from the CH₂ next to C⁺'], [1, 'Arrow from that C–H bond to form the C=C bond'], [2, 'Major alkene is 2-methylbut-2-ene']]
    },
    {
      id: 'e1-3', topic: 'e1', level: 3, title: 'Two alkenes from one cation',
      prompt: 'Draw the carbocation and both alkenes that can form from it. Label the major and the minor alkene.',
      scheme: [{ s: 'CC1(Br)CCCCC1', n: '1-bromo-1-methylcyclohexane' }, { arrow: ['CH₃OH', 'heat'] }, { q: '?' }],
      hint: 'The cation has two different kinds of neighbouring hydrogens: ring CH₂ and the methyl group.',
      answer: { mols: [{ s: 'C[C+]1CCCCC1', n: 'cation' }, { s: 'CC1=CCCCC1', n: 'major' }, { s: 'C=C1CCCCC1', n: 'minor' }], text: 'The tertiary cation can lose a ring hydrogen to give 1-methylcyclohexene (trisubstituted, major) or a methyl hydrogen to give methylenecyclohexane (disubstituted, minor).' },
      rubric: [[1, 'Tertiary carbocation on the ring carbon bearing the methyl group'], [2, '1-Methylcyclohexene drawn (double bond inside the ring)'], [2, 'Methylenecyclohexane drawn (C=CH₂ outside the ring)'], [1, 'Ring alkene labelled major']]
    },
    {
      id: 'e1-4', topic: 'e1', level: 4, title: 'Elimination after a shift',
      prompt: 'Draw the curved-arrow mechanism for formation of the major alkene. It has four alkyl groups on the double bond.',
      scheme: [{ s: 'CC(Br)C(C)(C)C', n: '3-bromo-2,2-dimethylbutane' }, { arrow: ['CH₃CH₂OH', 'heat'] }, { q: '?' }],
      hint: 'The neighbouring carbon has no hydrogens, but it does have methyl groups that can move.',
      answer: { mols: [{ s: 'C[CH+]C(C)(C)C', n: 'secondary cation' }, { s: 'CC(C)[C+](C)C', n: 'tertiary cation' }, { s: 'CC(C)=C(C)C', n: '2,3-dimethylbut-2-ene' }], text: 'Ionization gives a secondary cation. A 1,2-methyl shift (CH₃ moves with its bonding pair) gives a tertiary cation. Ethanol removes the H from the neighbouring CH, giving tetrasubstituted 2,3-dimethylbut-2-ene.' },
      rubric: [[1, 'Ionization to the secondary cation'], [3, '1,2-methyl shift: arrow from a C–CH₃ bond to C⁺, tertiary cation drawn'], [2, 'Base removes the H on the carbon next to the new C⁺, arrow from C–H to C=C'], [2, 'Alkene is 2,3-dimethylbut-2-ene (two CH₃ on each alkene carbon)']]
    },
    {
      id: 'e1-5', topic: 'e1', level: 5, title: 'Energy diagram for a rearranging E1',
      prompt: 'For the reaction shown (ionization, 1,2-methyl shift, then loss of a proton), sketch a reaction coordinate diagram. Label the axes, the starting material, both intermediates, the product, each transition state, and the rate-determining step. Draw the structure of each intermediate beside its position.',
      scheme: [{ s: 'CC(Br)C(C)(C)C', n: '3-bromo-2,2-dimethylbutane' }, { arrow: ['CH₃CH₂OH', 'heat'] }, { s: 'CC(C)=C(C)C', n: '2,3-dimethylbut-2-ene' }],
      hint: 'Count steps to count humps. Which cation is lower in energy, and which step has the tallest barrier?',
      answer: { mols: [{ s: 'C[CH+]C(C)(C)C', n: 'intermediate 1 (higher)' }, { s: 'CC(C)[C+](C)C', n: 'intermediate 2 (lower)' }], text: 'Three humps and two valleys. The first hump (ionization) is the tallest and is rate-determining. The first valley is the secondary cation; the second valley, the tertiary cation, is lower. The methyl shift has a small barrier. Energy on the vertical axis, reaction progress on the horizontal axis.' },
      rubric: [[1, 'Axes labelled energy and reaction coordinate (progress)'], [2, 'Three transition states and two intermediates'], [2, 'First step has the highest barrier and is marked rate-determining'], [2, 'Second intermediate (tertiary cation) drawn lower than the first (secondary cation)'], [1, 'Both cation structures drawn correctly']]
    },

    /* ---------- SN vs E ---------- */
    {
      id: 'pick-1', topic: 'pick', level: 1, title: 'Primary halide, good nucleophile',
      prompt: 'Draw the major product and write which mechanism forms it (SN1, SN2, E1 or E2).',
      scheme: [{ s: 'CCCCBr', n: '1-bromobutane' }, { arrow: ['NaI', 'acetone'] }, { q: '?' }],
      hint: 'Iodide is a strong nucleophile and a very weak base.',
      answer: { mols: [{ s: 'CCCCI', n: '1-iodobutane' }], text: 'SN2. An unhindered primary carbon and a good, non-basic nucleophile give clean substitution: 1-iodobutane.' },
      rubric: [[2, 'Iodine on C1 of a four-carbon chain'], [1, 'No alkene drawn as major product'], [1, 'Mechanism named SN2']]
    },
    {
      id: 'pick-2', topic: 'pick', level: 2, title: 'Tertiary halide, strong base',
      prompt: 'Draw the major product and name the mechanism.',
      scheme: [{ s: 'CC(C)(C)Br', n: 'tert-butyl bromide' }, { arrow: ['NaOCH₃', 'CH₃OH'] }, { q: '?' }],
      hint: 'Backside attack on a tertiary carbon is blocked. What else can methoxide do?',
      answer: { mols: [{ s: 'CC(C)=C', n: '2-methylpropene' }], text: 'E2. A tertiary halide cannot undergo SN2, and a strong base removes a β-hydrogen faster than the halide ionizes: 2-methylpropene.' },
      rubric: [[2, '2-Methylpropene drawn'], [1, 'No ether drawn as the major product'], [1, 'Mechanism named E2']]
    },
    {
      id: 'pick-3', topic: 'pick', level: 3, title: 'Same halide, two reagents',
      prompt: 'Draw the major organic product of each reaction and name each mechanism.',
      scheme: [{ s: 'CC(C)Br', n: '2-bromopropane' }, { arrow: ['(a) NaSCH₃, acetone', '(b) KOC(CH₃)₃, (CH₃)₃COH'] }, { q: 'a' }, { q: 'b' }],
      hint: 'One reagent is a strong nucleophile but a weak base. The other is a strong base that is too bulky to be a nucleophile.',
      answer: { mols: [{ s: 'CC(C)SC', n: '(a) SN2' }, { s: 'CC=C', n: '(b) E2' }], text: '(a) Thiolate is an excellent nucleophile and a weak base: SN2 gives isopropyl methyl sulfide. (b) tert-Butoxide is a strong, hindered base: E2 gives propene.' },
      rubric: [[2, '(a) Sulfide with S bonded to the secondary carbon and to CH₃'], [2, '(b) Propene'], [1, '(a) named SN2'], [1, '(b) named E2']]
    },
    {
      id: 'pick-4', topic: 'pick', level: 3, title: 'Primary halide, bulky base',
      prompt: 'Draw the major product and name the mechanism.',
      scheme: [{ s: 'CCCCBr', n: '1-bromobutane' }, { arrow: ['KOC(CH₃)₃', '(CH₃)₃COH'] }, { q: '?' }],
      hint: 'Primary halides usually substitute, unless the base cannot get close enough to carbon.',
      answer: { mols: [{ s: 'CCC=C', n: 'but-1-ene' }], text: 'E2. tert-Butoxide is too hindered to attack carbon, so it removes a β-hydrogen instead and gives but-1-ene.' },
      rubric: [[2, 'But-1-ene (terminal alkene, four carbons)'], [1, 'Not the tert-butyl ether'], [1, 'Mechanism named E2']]
    },
    {
      id: 'pick-5', topic: 'pick', level: 4, title: 'Secondary halide at the crossroads',
      prompt: 'Draw the major product of each reaction with correct stereochemistry or alkene geometry, and name each mechanism.',
      scheme: [{ s: 'C[C@H](Br)CC', n: '(S)-2-bromobutane' }, { arrow: ['(a) NaCN, DMSO', '(b) NaOCH₂CH₃, CH₃CH₂OH, heat'] }, { q: 'a' }, { q: 'b' }],
      hint: 'Cyanide is a good nucleophile and only a modest base. Ethoxide is a strong base, and secondary halides are crowded.',
      answer: { mols: [{ s: 'C[C@@H](C#N)CC', n: '(a) (R)-2-methylbutanenitrile' }, { s: 'C/C=C/C', n: '(b) (E)-but-2-ene' }], text: '(a) SN2 with inversion: (R)-2-methylbutanenitrile. (b) E2 is the main path for a secondary halide with a strong base; the Zaitsev alkene with the methyl groups trans, (E)-but-2-ene, is major.' },
      rubric: [[2, '(a) Nitrile carbon bonded to C2, C≡N shown'], [2, '(a) Configuration inverted relative to the bromide (R)'], [2, '(b) But-2-ene with the two methyl groups trans (E)'], [1, '(a) named SN2'], [1, '(b) named E2']]
    },
    {
      id: 'pick-6', topic: 'pick', level: 5, title: 'A locked ring picks the pathway',
      prompt: 'The tert-butyl group locks the ring. (a) Draw the chair of the cis tosylate. (b) Draw the product with sodium thiophenoxide (NaSPh), showing stereochemistry. (c) Draw the product with sodium ethoxide. (d) The trans tosylate reacts with ethoxide far more slowly. Explain with a chair drawing.',
      scheme: [{ s: 'CC(C)(C)[C@H]1CC[C@@H](' + TS + ')CC1', n: 'cis-4-tert-butylcyclohexyl tosylate' }, { arrow: ['(b) NaSPh', '(c) NaOCH₂CH₃'] }, { q: 'b' }, { q: 'c' }],
      hint: 'tert-Butyl stays equatorial. So is the cis tosylate group axial or equatorial, and what does E2 need?',
      answer: { mols: [{ s: 'CC(C)(C)[C@H]1CC[C@H](Sc2ccccc2)CC1', n: '(b) trans sulfide' }, { s: 'CC(C)(C)C1CCC=CC1', n: '(c) 4-tert-butylcyclohexene' }], text: '(a) tert-Butyl equatorial forces the cis OTs group axial. (b) Thiophenoxide (good nucleophile, weak base) attacks from the back: SN2 with inversion gives the trans sulfide, SPh equatorial. (c) Ethoxide removes an axial H anti to the axial OTs: E2 gives 4-tert-butylcyclohexene. (d) In the trans isomer OTs is equatorial and the ring cannot flip, so no C–H bond is anti-periplanar to the C–O bond and E2 is very slow.' },
      rubric: [[2, 'Chair with tert-butyl equatorial and OTs axial'], [2, '(b) SPh on the carbon that carried OTs, trans to tert-butyl'], [2, '(c) 4-tert-Butylcyclohexene'], [2, '(d) Trans isomer: OTs equatorial, no anti-periplanar H, ring locked']]
    },

    /* ---------- Sequences and synthesis ---------- */
    {
      id: 'synth-1', topic: 'synth', level: 1, title: 'Make an ether',
      prompt: 'Draw the organic product.',
      scheme: [{ s: 'CC[O-]', n: 'sodium ethoxide' }, { plus: 1 }, { s: 'CI', n: 'iodomethane' }, { arrow: ['', ''] }, { q: '?' }],
      hint: 'Alkoxide oxygen replaces iodide.',
      answer: { mols: [{ s: 'CCOC', n: 'ethyl methyl ether' }], text: 'SN2 at the methyl carbon gives ethyl methyl ether (Williamson ether synthesis).' },
      rubric: [[2, 'Oxygen bonded to both an ethyl and a methyl group'], [1, 'No iodine, no charge on the product'], [1, 'Three carbons in total']]
    },
    {
      id: 'synth-2', topic: 'synth', level: 2, title: 'Turn an alcohol into a bromide',
      prompt: 'Draw compound A and compound B.',
      scheme: [{ s: 'CCCCO', n: 'butan-1-ol' }, { arrow: ['TsCl', 'pyridine'] }, { q: 'A' }, { arrow: ['NaBr', 'DMF'] }, { q: 'B' }],
      hint: 'Step 1 changes OH into a good leaving group without touching the carbon. Step 2 displaces it.',
      answer: { mols: [{ s: 'CCCC' + TS, n: 'A: butyl tosylate' }, { s: 'CCCCBr', n: 'B: 1-bromobutane' }], text: 'A is butyl tosylate (the O–H hydrogen is replaced by the SO₂–aryl group; "OTs" is fine). B is 1-bromobutane, formed by SN2 displacement of tosylate.' },
      rubric: [[3, 'A: tosylate on C1, written as OTs or drawn in full, oxygen still on carbon'], [2, 'B: 1-bromobutane'], [1, 'Carbon chain unchanged in both']]
    },
    {
      id: 'synth-3', topic: 'synth', level: 3, title: 'Track the stereocenter over two steps',
      prompt: 'Draw A and B with wedges and dashes, and label each R or S.',
      scheme: [{ s: 'C[C@@H](O)CC', n: '(R)-butan-2-ol' }, { arrow: ['TsCl', 'pyridine'] }, { q: 'A' }, { arrow: ['NaN₃', 'DMF'] }, { q: 'B' }],
      hint: 'In which step is a bond to the stereocenter actually broken?',
      answer: { mols: [{ s: 'C[C@@H](' + TS + ')CC', n: 'A: (R)-tosylate' }, { s: 'C[C@H](N=[N+]=[N-])CC', n: 'B: (S)-azide' }], text: 'Tosylation breaks only the O–H bond, so A keeps the R configuration. Azide then displaces tosylate by SN2 with inversion, so B is (S)-2-azidobutane.' },
      rubric: [[2, 'A: tosylate (OTs) on C2 with the same spatial arrangement as the alcohol'], [1, 'A labelled R'], [2, 'B: azide on C2 with inverted configuration'], [1, 'B labelled S']]
    },
    {
      id: 'synth-4', topic: 'synth', level: 3, title: 'Choose the right pair',
      prompt: 'You need tert-butyl methyl ether by a Williamson synthesis. Draw the alkoxide and the alkyl halide you would use. Then draw what the other possible pairing would give instead.',
      scheme: [{ q: 'alkoxide' }, { plus: 1 }, { q: 'halide' }, { arrow: ['', ''] }, { s: 'CC(C)(C)OC', n: 'tert-butyl methyl ether' }],
      hint: 'The halide partner has to tolerate backside attack.',
      answer: { mols: [{ s: 'CC(C)(C)[O-]', n: 'tert-butoxide' }, { s: 'CI', n: 'methyl halide' }, { s: 'CC(C)=C', n: 'from the wrong pairing' }], text: 'Use tert-butoxide with a methyl halide: SN2 at an unhindered methyl carbon. The other pairing, methoxide with a tert-butyl halide, cannot do SN2 and gives 2-methylpropene by E2.' },
      rubric: [[2, 'tert-Butoxide drawn as the alkoxide'], [2, 'Methyl halide (CH₃I, CH₃Br or CH₃Cl) as the electrophile'], [2, 'Wrong pairing shown to give 2-methylpropene (elimination)']]
    },
    {
      id: 'synth-5', topic: 'synth', level: 4, title: 'Keep the configuration',
      prompt: 'Propose a synthesis of the nitrile shown from (S)-butan-2-ol. Draw each reagent and each intermediate with stereochemistry. A single displacement will not work. Say why.',
      scheme: [{ s: 'C[C@H](O)CC', n: '(S)-butan-2-ol' }, { arrow: ['several', 'steps'] }, { s: 'C[C@H](C#N)CC', n: '(S)-2-methylbutanenitrile' }],
      hint: 'Each SN2 step flips the centre once. How many flips return it to the same arrangement?',
      answer: { mols: [{ s: 'C[C@H](' + TS + ')CC', n: '(S)-tosylate' }, { s: 'C[C@@H](Br)CC', n: '(R)-bromide' }, { s: 'C[C@H](C#N)CC', n: '(S)-nitrile' }], text: '1) TsCl, pyridine gives the (S)-tosylate (no change at carbon). 2) NaBr in DMF gives (R)-2-bromobutane (inversion). 3) NaCN in DMSO gives the (S)-nitrile (second inversion). Tosylation followed directly by cyanide would invert only once and give the R nitrile.' },
      rubric: [[2, 'OH converted to a good leaving group with retention (tosylate or mesylate)'], [2, 'First SN2 with a halide (or similar) nucleophile, intermediate drawn inverted'], [2, 'Second SN2 with cyanide, giving the target configuration'], [1, 'Sensible reagents and polar aprotic solvents'], [1, 'Explains that one SN2 step alone gives the wrong enantiomer']]
    },
    {
      id: 'synth-6', topic: 'synth', level: 5, title: 'Three boxes from one alcohol',
      prompt: 'Draw A, B and C. Show the relative stereochemistry of the ring substituents wherever it matters.',
      scheme: [{ s: 'C[C@H]1CC[C@H](O)CC1', n: 'trans-4-methylcyclohexanol' }, { arrow: ['TsCl', 'pyridine'] }, { q: 'A' }, { arrow: ['(i) NaCN, DMSO → B', '(ii) KOC(CH₃)₃ → C'] }, { q: 'B' }, { q: 'C' }],
      hint: 'A is used twice. One reagent is a nucleophile, the other a bulky base.',
      answer: { mols: [{ s: 'C[C@H]1CC[C@H](' + TS + ')CC1', n: 'A: trans tosylate' }, { s: 'C[C@H]1CC[C@@H](C#N)CC1', n: 'B: cis nitrile' }, { s: 'CC1CCC=CC1', n: 'C: 4-methylcyclohexene' }], text: 'A is the trans tosylate (retention). Cyanide displaces it by SN2 with inversion, so B is cis-4-methylcyclohexanecarbonitrile. tert-Butoxide gives E2 instead: C is 4-methylcyclohexene.' },
      rubric: [[2, 'A: tosylate trans to the methyl group'], [3, 'B: nitrile on the ring, cis to the methyl group'], [2, 'C: 4-methylcyclohexene'], [1, 'No stereochemistry scrambled at the methyl-bearing carbon']]
    },
    {
      id: 'synth-7', topic: 'synth', level: 5, title: 'Which epoxide forms',
      prompt: 'This bromo alcohol reacts with NaH to give an epoxide, C₄H₈O. (a) Draw the conformation that reacts, as a Newman or sawhorse projection. (b) Draw the curved arrows for the ring-closing step. (c) Draw the epoxide with stereochemistry and state whether it is cis or trans, chiral or meso.',
      scheme: [{ s: 'C[C@H](O)[C@H](C)Br', n: '(2S,3S)-3-bromobutan-2-ol' }, { arrow: ['NaH', 'THF'] }, { t: 'C₄H₈O' }],
      hint: 'Place O⁻ anti to Br, then look at where the two methyl groups sit relative to each other.',
      answer: { mols: [{ s: 'C[C@H]1O[C@H]1C', n: 'cis-2,3-dimethyloxirane (meso)' }], text: 'NaH makes the alkoxide. In the reactive conformation O⁻ is anti to Br, and in that conformation the two methyl groups are gauche (on the same side). Backside attack closes the ring with the methyls cis: cis-2,3-dimethyloxirane, which is meso (achiral).' },
      rubric: [[2, 'Projection with O⁻ anti to Br'], [1, 'Methyl groups gauche to each other in that projection'], [2, 'Arrow from O⁻ lone pair to the carbon bearing Br, and from C–Br to Br'], [2, 'Epoxide with the two methyl groups on the same face (cis)'], [1, 'Identified as meso or achiral']]
    }
  ]
};

if (typeof module !== 'undefined') module.exports = BANK;
