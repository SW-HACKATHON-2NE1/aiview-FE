interface ReportAPIResponse {
  reports: Array<{
    question: string;
    transcription: string;
    score: number;
    feedback: string;
    bestAnswer: string;
    questionId: number;
    pronunciationScore: number;
    url: string;
  }>;
  angry: number;
  calm: number;
  confused: number;
  disgusted: number;
  fear: number;
  happy: number;
  sad: number;
  surprised: number;
  scoreDS: number;
  scoreAL: number;
  scoreNT: number;
  scoreOS: number;
  scoreDB: number;
  scoreIS: number;
}
