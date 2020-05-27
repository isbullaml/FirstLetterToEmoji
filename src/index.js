import "./styles.scss";

document.querySelector("#btnName").addEventListener("click", ChangeToEmoji);

function ChangeToEmoji() {
  var app = document.querySelector("#emojiElement");

  let emoji = require("emojilib");
  var Word = document.querySelector("#Name").value.toLowerCase();
  var myEmoji = [];
  var emojiWord = [];
  Word.replace("  ", "");
  for (var n = 0; n < Word.length; n++) {
    var names = [];
    if (Word[n] === " ") {
      myEmoji.push("▪️");
    } else {
      for (var i = 0; i < emoji.ordered.length; i++) {
        if (emoji.ordered[i][0] === Word[n]) {
          names.push(emoji.ordered[i]);
          continue;
        }
      }
      var item = names[Math.floor(Math.random() * names.length)];
      myEmoji.push(emoji.lib[item].char);
      emojiWord.push(item);
    }
  }
  app.innerHTML = myEmoji.join("");
}
