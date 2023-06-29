import { Radar } from "react-chartjs-2";

interface RadarChartProps
  extends Omit<React.ComponentProps<typeof Radar>, "data"> {
  numbers: {
    scoreDS: number;
    scoreAL: number;
    scoreOS: number;
    scoreDB: number;
    scoreIS: number;
    scoreNT: number;
  };
}

function RadarChart({ numbers, ...props }: RadarChartProps) {
  return (
    <Radar
      data={{
        labels: [
          "자료구조",
          "알고리즘",
          "운영체제",
          "데이터베이스",
          "정보보호",
          "네트워크",
        ],
        datasets: [
          {
            data: Object.values(numbers),
          },
        ],
      }}
      options={{
        scales: {
          r: {
            ticks: {
              display: false,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
        elements: {
          point: {
            borderColor: "#00000000",
            backgroundColor: "#497AF8",
          },
          line: {
            borderColor: "#497AF8",
            borderWidth: 2,
            backgroundColor: "#EFF4FFa2",
          },
        },
        showLine: true,
      }}
      {...props}
    />
  );
}

export default RadarChart;
