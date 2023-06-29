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

ChartJS.register(
  RadialLinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);
