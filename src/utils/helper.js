const names = [
    "Sophia", "Jackson", "Olivia", "Liam", "Emma", "Noah", "Ava", "Oliver", "Isabella", "Lucas",
    "Amelia", "Ethan", "Mia", "Mason", "Harper", "Elijah", "Evelyn", "Logan", "Abigail", "Aiden",
    "Emily", "James", "Charlotte", "Alexander", "Madison", "Michael", "Avery", "Daniel", "Scarlett",
    "Matthew", "Victoria", "Henry", "Luna", "Sebastian", "Grace", "David", "Chloe", "Carter", "Penelope",
    "Wyatt", "Riley", "Jayden", "Zoey", "Gabriel", "Sofia", "Ryan", "Ella", "Nathan", "Lily"
  ];
  
  export function getRandomName() {
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
  }