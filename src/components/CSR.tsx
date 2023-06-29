import dynamic from "next/dynamic";
import React from "react";

const NOSSR: React.FC<React.PropsWithChildren> = (props) => (
  <React.Fragment>{props.children}</React.Fragment>
);
export default dynamic(() => Promise.resolve(NOSSR), {
  ssr: false,
});
