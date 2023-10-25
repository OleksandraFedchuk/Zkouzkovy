function getLength(array) {
    const line = array.join("");
    return line.length;
  }

  console.log(getLength(["Mango", "hurries", "to", "the", "train"]));
  console.log(getLength(["M", "a", "n", "g", "o"]));
  console.log(getLength(["top", "picks", "for", "you"]));