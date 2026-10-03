import type { CitizenshipQuestion } from "../types/citizenship";

export const sampleQuestions: CitizenshipQuestion[] = [
  {
    id: 1,
    topic: "government",
    questionEn: "What is the supreme law of the land?",
    questionVi: "Luật tối cao của đất nước là gì?",
    acceptedAnswersEn: ["The Constitution", "U.S. Constitution"],
    answerVi: "Hiến pháp Hoa Kỳ.",
    explanationEn:
      "The Constitution is the foundational law that establishes the U.S. government and protects important rights.",
    explanationVi:
      "Hiến pháp là luật nền tảng thành lập chính phủ Hoa Kỳ và bảo vệ các quyền quan trọng.",
    studyTipEn: 'Say it clearly: "The Constitution."',
    studyTipVi: 'Hãy trả lời ngắn gọn: "The Constitution."',
    isSixtyFiveTwenty: true,
  },
  {
    id: 2,
    topic: "government",
    questionEn: "What do we call the first ten amendments to the Constitution?",
    questionVi: "Mười tu chính án đầu tiên của Hiến pháp được gọi là gì?",
    acceptedAnswersEn: ["The Bill of Rights"],
    answerVi: "Bản Tuyên ngôn Nhân quyền.",
    explanationEn:
      "The Bill of Rights protects important freedoms and rights in the United States.",
    explanationVi:
      "Bản Tuyên ngôn Nhân quyền bảo vệ các quyền tự do và quyền quan trọng tại Hoa Kỳ.",
    studyTipEn: "Remember: Bill = list; Rights = freedoms.",
    studyTipVi: "Hãy nhớ: Bill là danh sách, Rights là các quyền tự do.",
  },
  {
    id: 3,
    topic: "government",
    questionEn: "Name one branch or part of the government.",
    questionVi: "Hãy kể tên một ngành hoặc một phần của chính phủ.",
    acceptedAnswersEn: [
      "Congress",
      "Legislative",
      "President",
      "Executive",
      "The courts",
      "Judicial",
    ],
    answerVi:
      "Quốc hội; ngành lập pháp; Tổng thống; ngành hành pháp; tòa án; ngành tư pháp.",
    explanationEn:
      "The federal government has legislative, executive, and judicial branches.",
    explanationVi:
      "Chính phủ liên bang có ba ngành: lập pháp, hành pháp và tư pháp.",
    studyTipEn: "Use the answer you can pronounce most confidently.",
    studyTipVi: "Hãy dùng câu trả lời bạn tự tin phát âm nhất.",
  },
  {
    id: 4,
    topic: "rights",
    questionEn: "What is one right or freedom from the First Amendment?",
    questionVi: "Một quyền hoặc tự do trong Tu chính án Thứ nhất là gì?",
    acceptedAnswersEn: [
      "Speech",
      "Religion",
      "Assembly",
      "Press",
      "Petition the government",
    ],
    answerVi:
      "Tự do ngôn luận, tự do tôn giáo, tự do hội họp, tự do báo chí, hoặc quyền kiến nghị chính phủ.",
    explanationEn:
      "The First Amendment protects several major freedoms, including speech and religion.",
    explanationVi:
      "Tu chính án Thứ nhất bảo vệ nhiều quyền tự do quan trọng, bao gồm tự do ngôn luận và tôn giáo.",
    studyTipEn: "Choose one answer and master it, such as: Speech.",
    studyTipVi: "Chọn một câu trả lời và học thật chắc, ví dụ: Speech.",
  },
  {
    id: 5,
    topic: "history",
    questionEn: "What is the capital of the United States?",
    questionVi: "Thủ đô của Hoa Kỳ là gì?",
    acceptedAnswersEn: ["Washington, D.C.", "Washington DC"],
    answerVi: "Washington, D.C.",
    explanationEn:
      "Washington, D.C. is the national capital and is not part of any state.",
    explanationVi:
      "Washington, D.C. là thủ đô quốc gia và không thuộc bất kỳ tiểu bang nào.",
    studyTipEn: 'Practice the punctuation and pronunciation: "Washington, D.C."',
    studyTipVi: 'Luyện phát âm rõ: "Washington, D.C."',
    isSixtyFiveTwenty: true,
  },
];

