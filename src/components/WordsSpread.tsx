import styled from "@emotion/styled";
import ReactWordcloud from "react-wordcloud";
import CSR from "./CSR";
import { useTheme } from "@emotion/react";

function sortWordData(words: [string, number][]) {
  return words.sort((a, b) => (a[1] < b[1] ? 1 : a[1] > b[1] ? -1 : 0));
}

const WordSpreadContainer = styled("div")(({ theme }) => ({
  borderRadius: "10px",
  backgroundColor: theme.color.blue95,
}));

interface WordSpreadProps {
  angry: number;
  calm: number;
  confused: number;
  disgusted: number;
  fear: number;
  happy: number;
  sad: number;
  surprised: number;
}
function WordSpread(words: WordSpreadProps) {
  const theme = useTheme();
  const sortedWords = sortWordData(Object.entries(words));
  const colorMap = [
    theme.color.blue,
    theme.color.blue,
    theme.color.blue,
    theme.color.G600,
    theme.color.G500,
    theme.color.G500,
    theme.color.G300,
    theme.color.G300,
  ];

  return (
    <WordSpreadContainer>
      <CSR>
        <ReactWordcloud
          callbacks={{
            getWordColor: (word) =>
              colorMap[sortedWords.findIndex((v) => v[0] == word.text)],
          }}
          words={sortedWords.map(([text, value]) => ({ text, value }))}
          options={{
            rotations: 0,
            rotationAngles: [0, 0],
            fontFamily: "Pretendard",
            scale: "sqrt",
            fontSizes: [18, 40],
            padding: 10,
          }}
        />
      </CSR>
    </WordSpreadContainer>
  );
}

export default WordSpread;
