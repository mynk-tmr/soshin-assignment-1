export function formatDate(d, prettify = true) {
  let time = d.toLocaleTimeString("en-US", {
    timeStyle: "short",
  });
  let date = d.toLocaleDateString("en-GB", { dateStyle: "medium" });
  let day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].at(d.getDay());

  if (prettify) {
    const diff = d.getDate() - new Date().getDate();
    if (diff === 0) date = "today";
    else if (diff === -1) date = "yesterday";
    else if (diff === 1) date = "tomorrow";
  }
  return { time, date, day };
}
