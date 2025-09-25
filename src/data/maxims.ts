export interface LegalMaxim {
  id: string;
  latin: string;
  english: string;
  description: string;
  category: string;
}

export const legalMaxims: LegalMaxim[] = [
  {
    id: "1",
    latin: "Actus reus non facit reum nisi mens sit rea",
    english: "No act is punishable that is not the result of a guilty mind",
    description: "The prosecution in a criminal case must prove beyond a reasonable doubt, not only a criminal act, but also a certain level of guilty mind (mens rea), specified in the criminal statute.",
    category: "Criminal Law"
  },
  {
    id: "2",
    latin: "Audi alteram partem",
    english: "Hear the other side",
    description: "A fundamental principle of natural justice requiring that before anyone is condemned, they must be given the opportunity to make their case and present their defense.",
    category: "Natural Justice"
  },
  {
    id: "3",
    latin: "Caveat emptor",
    english: "Let the buyer beware",
    description: "A legal doctrine wherein a buyer could not get relief from a seller for defects present on property which rendered it unfit for use. The buyer must examine and judge for themselves.",
    category: "Commercial Law"
  },
  {
    id: "4",
    latin: "Corpus delicti",
    english: "Body of the crime",
    description: "A person cannot be convicted of a crime unless it can be proven that the crime was actually committed. The prosecution must establish that a crime occurred.",
    category: "Criminal Law"
  },
  {
    id: "5",
    latin: "De minimis non curat lex",
    english: "The law is not concerned with minimal things",
    description: "The rule that the law will not remedy an injury that is minimal or trivial. Courts will not waste time on petty matters.",
    category: "General Principles"
  },
  {
    id: "6",
    latin: "Habeas corpus",
    english: "You shall have the body",
    description: "A writ requiring that a person be brought before a court to determine if their detention is lawful. A fundamental protection against arbitrary imprisonment.",
    category: "Constitutional Law"
  },
  {
    id: "7",
    latin: "Ignorantia juris non excusat",
    english: "Ignorance of the law does not excuse",
    description: "A legal principle stating that a person who is unaware of a law may not escape liability for violating that law merely by being unaware of its content.",
    category: "Legal Responsibility"
  },
  {
    id: "8",
    latin: "Nemo judex in causa sua",
    english: "No one should be a judge in their own case",
    description: "A fundamental principle of natural justice that no person can judge a case in which they have an interest. Ensures impartiality in legal proceedings.",
    category: "Natural Justice"
  },
  {
    id: "9",
    latin: "Pacta sunt servanda",
    english: "Agreements must be kept",
    description: "A fundamental principle of contract law stating that parties to a contract are bound by their agreements and must fulfill their contractual obligations.",
    category: "Contract Law"
  },
  {
    id: "10",
    latin: "Res ipsa loquitur",
    english: "The thing speaks for itself",
    description: "A legal doctrine in tort law that allows a plaintiff to establish a presumption of negligence without direct evidence, when the incident would not normally occur without negligence.",
    category: "Tort Law"
  },
  {
    id: "11",
    latin: "Stare decisis",
    english: "To stand by things decided",
    description: "The legal principle of determining cases based on precedent. Courts should follow the rulings of previous similar cases to ensure consistency and predictability in law.",
    category: "Case Law"
  },
  {
    id: "12",
    latin: "Ultra vires",
    english: "Beyond the powers",
    description: "Acts performed by corporations, officers, or agents that exceed the authority granted to them by law or corporate charter. Such acts are typically invalid.",
    category: "Administrative Law"
  },
  {
    id: "13",
    latin: "Volenti non fit injuria",
    english: "No injury is done to one who consents",
    description: "A defense in tort law stating that a person who voluntarily assumes a risk cannot later claim damages for any resulting injury. Consent negates the claim of injury.",
    category: "Tort Law"
  },
  {
    id: "14",
    latin: "Bona fide",
    english: "In good faith",
    description: "Implies sincere good intention regardless of outcome. Acting honestly and without fraud or deceit in legal dealings and contractual obligations.",
    category: "General Principles"
  },
  {
    id: "15",
    latin: "Amicus curiae",
    english: "Friend of the court",
    description: "A person who offers information to a court regarding a case before it, typically someone who is not a party to the case but has expertise or interest in the matter.",
    category: "Court Procedure"
  },
  {
    id: "16",
    latin: "Cui bono",
    english: "As a benefit to whom?",
    description: "Suggests that the perpetrator of a crime can often be found by investigating those who would have benefited financially from the crime, even if not immediately obvious.",
    category: "Criminal Investigation"
  },
  {
    id: "17",
    latin: "Ex post facto",
    english: "After the fact",
    description: "Refers to laws that retroactively criminalize acts that were legal when committed. Such laws are generally prohibited by constitutional principles.",
    category: "Constitutional Law"
  },
  {
    id: "18",
    latin: "Falsus in uno, falsus in omnibus",
    english: "False in one thing, false in everything",
    description: "A legal maxim stating that if a witness is shown to have lied about one material fact, their entire testimony may be considered unreliable.",
    category: "Evidence"
  },
  {
    id: "19",
    latin: "Nulla poena sine lege",
    english: "No punishment without law",
    description: "A fundamental principle that no one can be punished for an act that was not prohibited by law at the time it was committed. Essential to due process.",
    category: "Criminal Law"
  },
  {
    id: "20",
    latin: "Contra proferentem",
    english: "Against the one bringing forth",
    description: "Used in contract law to stipulate that an ambiguous term in a contract shall be interpreted against the interests of the party that insisted upon the term's inclusion.",
    category: "Contract Law"
  }
];

export const getRandomMaxim = (): LegalMaxim => {
  const randomIndex = Math.floor(Math.random() * legalMaxims.length);
  return legalMaxims[randomIndex];
};