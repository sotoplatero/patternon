const svgTextWrap = ({text, fontsize, width}) => {
  const words = text.split(/\s+/);
  let lines = [];
  let currentLine = [];

  words.forEach(word => {
    const newLine = [...currentLine, word]
    const textWidth = newLine.length * fontsize //svgTextSize(newLine.join(' '), attrs, doc);
    if ( textWidth > width) {
      lines.push(currentLine.join(' '));
      currentLine = [word];
    } else {
      currentLine.push(word);
    }
  });
  lines.push(currentLine.join(' '));
  if (lines[0] === '') { lines.shift(); }
  return lines;
};

export default svgTextWrap;