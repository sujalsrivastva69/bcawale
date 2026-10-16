export const onboardingSteps = [
  {
    id: "semester",
    question: "Bhai, kaunsa semester?",
    idle: { emoji: "🎓", text: "Chal, shuru karte hain." },
    options: [
      { value: "1", label: "1st sem", sub: "Naya khiladi", emoji: "🐣", roast: "Newbie arc shuru 😭" },
      { value: "2", label: "2nd sem", sub: "Ab samajh aa raha hai", emoji: "🙂", roast: "Thoda thoda hero ban rahe ho" },
      { value: "3", label: "3rd sem", sub: "Experience bolta hai", emoji: "😮‍💨", roast: "DSA ne rula diya na? 💀" },
      { value: "4", label: "4th sem", sub: "Senior wali feeling", emoji: "😎", roast: "Ab juniors ko gyaan do" },
      { value: "5", label: "5th sem", sub: "Degree loading...", emoji: "⏳", roast: "Bas thoda aur, bhai" },
      { value: "6", label: "6th sem", sub: "Final boss", emoji: "👑", roast: "Project ka pressure alag hi level hai 🔥" },
    ],
  },
  {
    id: "state",
    question: "Kis state se ho?",
    idle: { emoji: "🗺️", text: "Apna state, apni gang." },
    options: [
      { value: "UP", label: "Uttar Pradesh", emoji: "🌾", roast: "UP wale, bhaukaal tight hai!" },
      { value: "BR", label: "Bihar", emoji: "🔥", roast: "Bihar se ho? Padhai ka level alag hi hai." },
      { value: "DL", label: "Delhi", emoji: "🏙️", roast: "Dilli wale, metro mein padhai?" },
      { value: "HR", label: "Haryana", emoji: "💪", roast: "Haryana, full power!" },
      { value: "RJ", label: "Rajasthan", emoji: "🏜️", roast: "Padharo, backlog ke bhi mhare dost" },
      { value: "MP", label: "Madhya Pradesh", emoji: "🐯", roast: "MP ajab hai, gazab hai!" },
      { value: "MH", label: "Maharashtra", emoji: "🌊", roast: "Mumbai ho ya Pune, struggle same hai" },
      { value: "OT", label: "Other", emoji: "🌍", roast: "Pura India ek gang hai!" },
    ],
  },
  {
    id: "backlog",
    question: "Backlog status?",
    idle: { emoji: "📚", text: "Sach bolna, judge nahi karenge." },
    options: [
      { value: "0", label: "Zero", sub: "Abhi toh hero hoon", emoji: "😎", roast: "Hero hai bhai, lage raho!" },
      { value: "1", label: "1 backlog", sub: "Chhoti si kahani", emoji: "🙂", roast: "Ek hi toh hai, ho jayega." },
      { value: "2-3", label: "2 to 3", sub: "Plot twist", emoji: "💀", roast: "Syllabus se personal dushmani hai?" },
      { value: "4+", label: "4 ya zyada", sub: "Comeback arc", emoji: "🔥", roast: "Comeback arc loading..." },
    ],
  },
  {
    id: "humour",
    question: "Website ka humour kaisa chahiye?",
    idle: { emoji: "🎭", text: "Last question, bas!" },
    options: [
      { value: "savage", label: "Savage desi comedy", emoji: "🔥", roast: "ROAST LEVEL: HIGH 🔥" },
      { value: "brainrot", label: "Gen-Z brainrot", emoji: "🧠", roast: "Skibidi assignment submit 💀" },
      { value: "wholesome", label: "Funny + wholesome", emoji: "🥹", roast: "Aww, sweet bacha." },
    ],
  },
];
