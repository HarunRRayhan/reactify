export function limitWords(sentence, limit = 30) {
  return sentence
    .split(" ")
    .splice(0, limit)
    .join(" ");
}
