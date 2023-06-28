import Button from "@/components/Button";
import List from "@/components/List";
import styled from "@emotion/styled";

const PageContainer = styled("div")({
  padding: "60px 260px",
  whiteSpace: "nowrap",
  [`& ${Button}`]: {
    marginTop: "140px",
    alignSelf: "center",
  },
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
    "& > div": {
      display: "flex",
      flexDirection: "column",
      gap: "24px",
      margin: "16px",
    },
  },
});

const SubjectSelectSection = styled("section")({
  marginTop: "80px",
  display: "flex",
  gap: "133px",
  "& > div": {
    gap: "10px",
    width: "fit-content",
    height: "fit-content",
    gridTemplateColumns: "1fr 1fr 1fr",
  },
});

export default {
  PageContainer,
  PageTitle,
  PageBody,
  StyledList,
  JobSelectSection,
  SubjectSelectSection,
};
