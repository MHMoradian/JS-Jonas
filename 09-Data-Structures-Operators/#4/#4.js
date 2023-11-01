/* Coding Challenge #4
Write a program that receives a list of variable names written in underscore_case and
convert them to camelCase.

Test data:
underscore_case
 first_name
Some_Variable
 calculate_AGE
delayed_departure

Should produce this output (5 separate console.log outputs):
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅ */

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const words = text.split("\n");
  for (let [i, word] of words.entries()) {
    word = word.trim().toLowerCase();
    // console.log(word);
    const index = word.indexOf("_");
    word = word.replace("_", "");

    const characters = word.split("");
    // console.log(characters);
    // console.log(characters[index]);
    characters[index] = characters[index].toUpperCase();
    // console.log(characters);
    const newWord = characters.join("");

    console.log(`${newWord.padEnd(20)} ${"✅".repeat(i + 1)}`);
  }
});

document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const words = text.split("\n");
  for (let [i, word] of words.entries()) {
    const [first, second] = word.trim().toLowerCase().split("_");

    const newWord = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;

    console.log(`${newWord.padEnd(20)} ${"✅".repeat(i + 1)}`);
  }
});

function cammelCase(list) {
  for (const [i, item] of list.entries()) {
    //the index of the letter that shoul be capitalized
    const [before, after] = item.toLowerCase().split("_");
    //remove underscore
    console.log(
      (before + after.replace(after[0], after[0].toUpperCase())).padEnd(20) +
        "✅".repeat(i + 1)
    );
  }
}

cammelCase([
  "underscore_case",
  "first_name",
  "Some_Variable",
  "calculate_AGE",
  "delayed_departure",
]);
