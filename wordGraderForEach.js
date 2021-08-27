function wordSearch() {
  let con = [
    "freedom",
    "socialism",
    "socialist",
    "socialists",
    "marxism",
    "marxist",
    "marxists",
    "China",
    "nation",
    "God",
    "Hunter Biden",
    "Hillary",
    "Benghazi",
    "antifa",
    "blm"
  ];
  let lib = [
    "fascism",
    "fascist",
    "fascists",
    "racism",
    "racist",
    "racists",
    "lgbtq",
    "ableism",
    "ableist",
    "ableists",
    "insurrection",
    "January 6th",
    "Jan 6th",
    "Jan. 6th"
  ];

  var cons = "";
  var libe = "";

  con.forEach((word) => {
    if (word.includes(word)) {
      cons++;
    }
  });

  lib.forEach((word) => {
    if (word.includes(word)) {
      libe++;
    }
  });

  if (cons >= libe + 6) {
    return "Heavily Conservative";
  } else if (cons >= libe + 3) {
    return "Conservative";
  } else if (cons >= libe + 1) {
    return "Slightly Conservative";
  } else if (cons == libe) {
    return "Moderate";
  } else if (libe >= cons + 6) {
    return "Heavily Liberal";
  } else if (libe >= cons + 3) {
    return "Liberal";
  } else if (libe >= cons + 1) {
    return "Slightly Liberal";
  }
}

console.log(wordSearch());
