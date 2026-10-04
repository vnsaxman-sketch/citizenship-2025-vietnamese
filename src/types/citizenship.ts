export type Topic =
  | "government"
  | "rights"
  | "history"
  | "geography"
  | "symbols"
  | "holidays";

export interface CitizenshipQuestion {
  id: number;
  topic: Topic;
  questionEn: string;
  questionVi: string;
  acceptedAnswersEn: string[];
  answerVi: string;
  explanationEn: string;
  explanationVi: string;
  studyTipEn: string;
  studyTipVi: string;
  isSixtyFiveTwenty?: boolean;
  needsCurrentOfficial?: boolean;
  lastVerified: string;
}

