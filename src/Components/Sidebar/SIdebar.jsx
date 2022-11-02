import { useEffect, useState } from "react";
import styled from "styled-components";
import { SIDEBAR_COLOR } from "../../styles/colors";
import CodeEditor from "@uiw/react-textarea-code-editor";
import { parser } from "../../data/parser";

function Sidebar() {
  const [code, setCode] = useState(`<html>
  Hi!
  <div>
    Code
  </div>
</html>`);

  useEffect(() => {
    console.log(parser(code));
  }, [code]);

  return (
    <SidebarContainer>
      <Title>DOM Visualizer</Title>
      <div>
        <CodeEditor
          value={code}
          placeholder="Enter html!"
          language="html"
          onValueChange={(event) => {
            setCode(event.target.value);
          }}
          padding={20}
          style={{
            fontSize: 18,
            backgroundColor: "#f5f5f5",
            fontFamily:
              "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
          }}
        />
      </div>
    </SidebarContainer>
  );
}

const SidebarContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${SIDEBAR_COLOR};
`;

const Title = styled.h1`
  display: inline-block;
  position: absolute;
  top: 2vh;
  margin: 0 auto;
  margin-top: 20px;

  color: whitesmoke;
  font-size: 48px;
`;

export default Sidebar;
