import Button from "@/components/Button";
import CollapseBar from "@/components/Collapse";
import styled from "@emotion/styled";

const QnAContainer = styled("div")(({ theme }) => ({
  marginTop: "32px",
  "& h3": {
    color: theme.color.G500,
    fontSize: "18px",
    fontWeight: 500,
  },
  "& p": {
    color: theme.color.G800,
    fontSize: "20px",
    lineHeight: "44px",
  },
}));

const SpeakSubSection = styled("section")(({ theme }) => ({
  padding: "40px 24px",
  display: "flex",
  flexDirection: "column",
  width: "690px",
  gap: "56px",
  borderRadius: "4px",
  border: `1px solid ${theme.color.G200}`,
}));

const PointContainer = styled("div")(({ theme }) => ({
  fontSize: "24px",
  fontWeight: 700,
  display: "flex",
  gap: "24px",

  "& span:nth-of-type(1)": {
    color: theme.color.G900,
  },
  "& span:nth-of-type(2)": {
    color: theme.color.blue,
  },
}));

const StyledCollapseBar = styled(CollapseBar)(({ theme }) => ({
  borderRadius: "4px",
  padding: "32px 24px",
  marginTop: "16px",
  border: "1px solid #ccc",
  width: "690px",
  "& > div:nth-of-type(1)": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  "& > div:nth-of-type(2)": {
    padding: "32px 24px",
    display: "flex",
    flexDirection: "column",
    gap: "40px",
    "& > div:nth-of-type(2) > h3": {
      color: theme.color.blue,
    },
  },
}));

const ReplyButton = styled(Button)({
  marginTop: "56px",
  marginBottom: "200px",
  width: "738px",
});

export default {
  QnAContainer,
  SpeakSubSection,
  PointContainer,
  StyledCollapseBar,
  ReplyButton,
};
