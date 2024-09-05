export const dummy_dates = [
  new Date().setMinutes(new Date().getMinutes() - 5),
  new Date().setDate(new Date().getDate() - 1),
  new Date(2024, 7, 29, 15, 30),
  new Date().setHours(11, 30),
  new Date().setHours(10, 30),
  new Date().setHours(9, 15),
].map((d) => new Date(d));

export const dummy_titles = [
  "Outing schedule for every department",
  "Meeting HR Department",
  "IT Department need two more talents for UX/UI Designer position",
  "Review candidate applications",
  "Interview with candidates",
  "Short meeting with product designer from IT Departement",
];
