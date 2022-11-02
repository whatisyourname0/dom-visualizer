import CodeEditor from "@uiw/react-textarea-code-editor";
import { useRef, useState } from "react";
import styled from "styled-components";
import { parser } from "../../data/parser";
import { SIDEBAR_COLOR } from "../../styles/colors";

function Sidebar() {
  const [code, setCode] = useState(``);
  const codeRef = useRef();

  const handleParseButton = () => {
    console.log(parser(code));
  };

  return (
    <SidebarContainer>
      <Title>DOM Visualizer</Title>
      <div>
        <MyCodeEditor
          value={code}
          placeholder="Enter html!"
          language="html"
          padding={25}
          onChange={(event) => setCode(event.target.value)}
          ref={codeRef}
        />
      </div>
      <ParseButton onClick={handleParseButton}>Parse It!</ParseButton>
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

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

const MyCodeEditor = styled(CodeEditor)`
  font-size: 20px;
  background-color: #f5f5f5;
  font-family: source-code-pro, ui-monospace, SFMono-Regular, SF Mono, Consolas, Liberation Mono,
    Menlo, monospace;
`;

const ParseButton = styled.button`
  font-size: 20px;
  padding: 10px 20px;
`;
