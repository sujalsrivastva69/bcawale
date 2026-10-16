// Onboarding questions. Voice: backbencher, blunt, desi.
// `gif` is a search phrase for the /api/gif route (Giphy). Options without
// a `gif` show a text-only reaction card.
export const onboardingSteps = [
  {
    id: "semester",
    question: "Bhai, kaunsa semester kheench raha hai?",
    idle: { text: "Sach bol, yahan koi topper nahi hai." },
    options: [
      {
        value: "1",
        label: "1st sem",
        sub: "Abhi to naya naya hai",
        roast: "Abhi sab achha lag raha hai, bhai. Ruk, DSA aane de.",
        gif: "innocent kid smiling reaction",
      },
      {
        value: "2",
        label: "2nd sem",
        sub: "Bunk marna seekh gaya",
        roast: "Pehla bunk, pehli assignment ki tension. Shuruaat ho gayi.",
        gif: "sneaking out funny",
      },
      {
        value: "3",
        label: "3rd sem",
        sub: "DSA ne pehchaan liya",
        roast: "DSA ne tujhe pehchaan liya, ab peecha nahi chhodega.",
        gif: "confused lady math calculating",
      },
      {
        value: "4",
        label: "4th sem",
        sub: "Last bench ka permanent member",
        roast: "Last bench ki seat tere naam registered hai.",
        gif: "slow motion walk aura",
      },
      {
        value: "5",
        label: "5th sem",
        sub: "Degree dikh rahi hai, dar bhi",
        roast: "Degree dikhne lagi hai, ab dil ghabrana jayaz hai.",
        gif: "nervous sweating reaction",
      },
      {
        value: "6",
        label: "6th sem",
        sub: "Final boss: project",
        roast: "Project ki tension sabko hai. Tu akela nahi hai.",
        gif: "gangster slow motion sunglasses walk",
      },
    ],
  },
  {
    id: "state",
    question: "Kis state se ho?",
    idle: { text: "Apna state, apni gang." },
    options: [
      { value: "UP", label: "Uttar Pradesh", roast: "UP wale, bhaukaal tight hai." },
      { value: "BR", label: "Bihar", roast: "Bihar se ho? Padhai ka level alag hi hai." },
      { value: "DL", label: "Delhi", roast: "Dilli wale, metro mein padhai?" },
      { value: "HR", label: "Haryana", roast: "Haryana, full power." },
      { value: "RJ", label: "Rajasthan", roast: "Padharo, backlog ke bhi mhare dost." },
      { value: "MP", label: "Madhya Pradesh", roast: "MP ajab hai, gazab hai." },
      { value: "MH", label: "Maharashtra", roast: "Mumbai ho ya Pune, struggle same hai." },
      { value: "OT", label: "Other", roast: "Pura India ek gang hai." },
    ],
  },
  {
    id: "backlog",
    question: "Kitne backlog ke saath chal raha hai, ladle?",
    idle: { text: "Judge nahi karenge. Bas gin ke bata." },
    options: [
      {
        value: "0",
        label: "Zero",
        sub: "Abhi to bacha hua hoon",
        roast: "Zero? Thoda sa shak ho raha hai tujh pe.",
        gif: "suspicious look side eye",
      },
      {
        value: "1",
        label: "1 backlog",
        sub: "Chhoti si kahani",
        roast: "Ek hi to hai. Ho jayega, tension mat le.",
        gif: "relaxed shrug no worries",
      },
      {
        value: "2-3",
        label: "2 se 3",
        sub: "Plot twist",
        roast: "Syllabus se personal dushmani hai kya?",
        gif: "stressed panic reaction",
      },
      {
        value: "4+",
        label: "4 ya zyada",
        sub: "Comeback arc",
        roast: "Comeback arc loading. Isi ko gang kehte hain.",
        gif: "boss walk slow motion",
      },
    ],
  },
  {
    id: "humour",
    question: "Website ka humour kaisa chahiye?",
    idle: { text: "Last sawaal, bas." },
    options: [
      { value: "savage", label: "Savage desi comedy", roast: "Roast level: high." },
      { value: "brainrot", label: "Gen-Z brainrot", roast: "Samajh gaya, tu internet pe zyada rehta hai." },
      { value: "wholesome", label: "Funny aur wholesome", roast: "Sweet bacha." },
    ],
  },
];
