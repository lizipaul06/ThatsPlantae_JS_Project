module.exports = {
  onSlideStart(slide) {
    this.sliding = true
  },
  onSlideEnd(slide) {
    this.sliding = false
  },
  capitalLetter(str) {
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
      str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
  }
}