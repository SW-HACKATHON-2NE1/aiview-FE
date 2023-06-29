import styled from "@emotion/styled";
import ReactWordcloud from "react-wordcloud";
import CSR from "./CSR";
import { useTheme } from "@emotion/react";

function sortWordData(words: { text: string; value: number }[]) {
  return words.sort((a, b) =>
    a.value < b.value ? 1 : a.value > b.value ? -1 : 0
  );
}

const WordSpreadContainer = styled("div")(({ theme }) => ({
  borderRadius: "10px",
  backgroundColor: theme.color.blue95,
}));
function WordSpread({ words }: { words: { text: string; value: number }[] }) {
  const theme = useTheme();
  const sortedWords = sortWordData(words);
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
              colorMap[sortedWords.findIndex((v) => v.text == word.text)],
          }}
          words={sortedWords}
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
