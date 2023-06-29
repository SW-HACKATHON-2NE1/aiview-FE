import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  CategoryScale,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.defaults.font = {
  family: "Pretendard",
  size: 200,
};
ChartJS.register(
  RadialLinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);
