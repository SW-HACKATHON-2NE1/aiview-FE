import Button from "@/components/Button";
import List from "@/components/List";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const PageContainer = styled("div")({
  padding: "60px 260px",
  whiteSpace: "nowrap",
});

const PageTitle = styled("h1")({
  marginBottom: "54px",
});

const PageBody = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
});

const StyledList = styled(List)({
  height: "422px",
  overflowX: "hidden",
});

const JobSelectSection = styled("section")({
  marginTop: "88px",
  display: "flex",
  gap: "133px",
  "& > div": {
    display: "flex",
    gap: "70px",
  },
});

const JobSelectContainer = styled("div")<{ isHidden: boolean }>(
  ({ isHidden }) => ({
    visibility: isHidden ? "hidden" : "visible",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    margin: "16px",
    "& *": {
      transition: "all 300ms",
      opacity: isHidden ? 0 : 1,
    },
  })
);

const SubjectSelectSection = styled("section")<{ isHidden: boolean }>(
  ({ isHidden }) => ({
    marginTop: "80px",
    display: "flex",
    visibility: isHidden ? "hidden" : "visible",
    gap: "133px",
    transition: "all 300ms",
    height: "fit-content",
    "& > div": {
      gap: "10px",
      width: "fit-content",
      height: "fit-content",
      gridTemplateColumns: "1fr 1fr 1fr",
    },
    "& *": {
      transition: "all 300ms",
      opacity: isHidden ? 0 : 1,
    },
  })
);

const wingwing = keyframes({
  "0%": { transform: "translateY(-30px)" },
  "50%": { transform: "translateY(30px)" },
  "100%": { transform: "translateY(-30px)" },
});
const SubmitButton = styled(Button)<{ isHidden: boolean }>(({ isHidden }) => ({
  marginTop: "140px",
  alignSelf: "center",
  visibility: isHidden ? "hidden" : "visible",
  transition: "all 300ms",
  opacity: isHidden ? 0 : 1,
  animation: `${wingwing} 4s ease infinite`,
}));

export default {
  PageContainer,
  PageTitle,
  PageBody,
  StyledList,
  JobSelectSection,
  JobSelectContainer,
  SubjectSelectSection,
  SubmitButton,
};
