export interface LegalMaxim {
  id: string;
  latin: string;
  english: string;
  category: string;
}

export const legalMaxims: LegalMaxim[] = [
  {
    id: "1",
    latin: "Dura lex, sed lex",
    english: "The law is hard, but it is the law",
    category: "General Principles"
  },
  {
    id: "2",
    latin: "Ignorantia juris non excusat",
    english: "Ignorance of the law does not excuse",
    category: "Legal Responsibility"
  },
  {
    id: "3",
    latin: "Audi alteram partem",
    english: "Hear the other side",
    category: "Natural Justice"
  },
  {
    id: "4",
    latin: "Nemo judex in causa sua",
    english: "No one should be a judge in their own case",
    category: "Natural Justice"
  },
  {
    id: "5",
    latin: "Actus reus non facit reum nisi mens sit rea",
    english: "The act is not culpable unless the mind is guilty",
    category: "Criminal Law"
  },
  {
    id: "6",
    latin: "Ei incumbit probatio qui dicit, non qui negat",
    english: "The burden of proof lies on the one who asserts, not on the one who denies",
    category: "Evidence"
  },
  {
    id: "7",
    latin: "Pacta sunt servanda",
    english: "Agreements must be kept",
    category: "Contract Law"
  },
  {
    id: "8",
    latin: "Res ipsa loquitur",
    english: "The thing speaks for itself",
    category: "Tort Law"
  },
  {
    id: "9",
    latin: "Habeas corpus",
    english: "You shall have the body",
    category: "Constitutional Law"
  },
  {
    id: "10",
    latin: "De minimis non curat lex",
    english: "The law does not concern itself with trifles",
    category: "General Principles"
  },
  {
    id: "11",
    latin: "Falsus in uno, falsus in omnibus",
    english: "False in one thing, false in everything",
    category: "Evidence"
  },
  {
    id: "12",
    latin: "Volenti non fit injuria",
    english: "No injury is done to one who consents",
    category: "Tort Law"
  },
  {
    id: "13",
    latin: "Caveat emptor",
    english: "Let the buyer beware",
    category: "Commercial Law"
  },
  {
    id: "14",
    latin: "Qui facit per alium facit per se",
    english: "He who acts through another acts himself",
    category: "Agency Law"
  },
  {
    id: "15",
    latin: "Lex posterior derogat priori",
    english: "A later law repeals an earlier one",
    category: "Statutory Interpretation"
  },
  {
    id: "16",
    latin: "Ultra vires",
    english: "Beyond the powers",
    category: "Administrative Law"
  },
  {
    id: "17",
    latin: "Stare decisis",
    english: "To stand by things decided",
    category: "Case Law"
  },
  {
    id: "18",
    latin: "Cessante ratione legis cessat ipsa lex",
    english: "When the reason for the law ceases, the law itself ceases",
    category: "Legal Philosophy"
  },
  {
    id: "19",
    latin: "Expressio unius est exclusio alterius",
    english: "The expression of one thing is the exclusion of another",
    category: "Statutory Interpretation"
  },
  {
    id: "20",
    latin: "Nulla poena sine lege",
    english: "No punishment without law",
    category: "Criminal Law"
  }
];

export const getRandomMaxim = (): LegalMaxim => {
  const randomIndex = Math.floor(Math.random() * legalMaxims.length);
  return legalMaxims[randomIndex];
};