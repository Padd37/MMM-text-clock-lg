module.exports = function (time) {
  const wordIndexes = [];
  const display = this.displayTime(time);

  wordIndexes.push(this.wordMap.dat);
  wordIndexes.push(this.wordMap.is);

  if (display.minutes_to_display === 5) {
    wordIndexes.push(this.wordMap.fief);
    wordIndexes.push(this.wordMap.na);
  } else if (display.minutes_to_display === 10) {
    wordIndexes.push(this.wordMap.tein);
    wordIndexes.push(this.wordMap.na);
  } else if (display.minutes_to_display === 15) {
    wordIndexes.push(this.wordMap.fofftein);
    wordIndexes.push(this.wordMap.na);
  } else if (display.minutes_to_display === 20) {
    wordIndexes.push(this.wordMap.twintig);
    wordIndexes.push(this.wordMap.na);
  } else if (display.minutes_to_display === 25) {
    wordIndexes.push(this.wordMap.fief);
    wordIndexes.push(this.wordMap.vör);
    wordIndexes.push(this.wordMap.halbig);
  } else if (display.minutes_to_display === 30) {
    wordIndexes.push(this.wordMap.halbig);
  } else if (display.minutes_to_display === -25) {
    wordIndexes.push(this.wordMap.fief);
    wordIndexes.push(this.wordMap.na);
    wordIndexes.push(this.wordMap.halbig);
  } else if (display.minutes_to_display === -20) {
    wordIndexes.push(this.wordMap.twintig);
    wordIndexes.push(this.wordMap.vör);
  } else if (display.minutes_to_display === -15) {
    wordIndexes.push(this.wordMap.fofftein);
    wordIndexes.push(this.wordMap.vör);
  } else if (display.minutes_to_display === -10) {
    wordIndexes.push(this.wordMap.tein);
    wordIndexes.push(this.wordMap.vör);
  } else if (display.minutes_to_display === -5) {
    wordIndexes.push(this.wordMap.fief);
    wordIndexes.push(this.wordMap.vör);
  }

  wordIndexes.push(
    this.wordMap[
      display.minutes_to_display <= 20
        ? display.hours_to_display
        : display.hours_to_display + 1
    ]
  );

  return wordIndexes;
};
