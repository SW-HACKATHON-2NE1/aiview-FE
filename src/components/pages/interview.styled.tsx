import styled from "@emotion/styled";

const StopButton = styled("button")(({ theme }) => ({
  backgroundColor: theme.color.G900,
  borderRadius: "50%",
  width: "80px",
  height: "80px",
  marginTop: "48px",
  marginBottom: "24px",
}));

const StartButton = styled("button")(({ theme }) => ({
  backgroundColor: theme.color.blue,
  borderRadius: "50%",
  fontSize: "24px",
  fontWeight: 700,
  color: "white",
  width: "80px",
  height: "80px",
  marginTop: "48px",
  marginBottom: "24px",
  whiteSpace: "nowrap",
}));

const PageContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const InterviewContainer = styled("div")(({ theme }) => ({
  width: "100%",
  height: "calc(440px * 1.4)",
  display: "inline-flex",
  backgroundColor: "black",
  justifyContent: "center",
  alignItems: "center",
  "& h3": {
    color: theme.color.G300,
    fontSize: "20px",
    fontWeight: 500,
  },
}));

const WebcamContainer = styled("div")({
  alignItems: "center",
  float: "right",
  margin: "16px 16px 0 0",
  "& > video": {
    width: "110px",
    height: "130px",
    background: "linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%)",
    borderRadius: "10px",
  },
  "& > p": {
    color: "white",
    fontSize: "16px",
    fontWeight: 500,
    textAlign: "center",
    marginTop: "8px",
  },
});

export default {
  StopButton,
  StartButton,
  PageContainer,
  InterviewContainer,
  WebcamContainer,
};
