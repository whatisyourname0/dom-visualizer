import styled from "styled-components";
import { SIDEBAR_COLOR } from "../../styles/colors";
import Editor from "./Editor/Editor";

function Sidebar() {
  return (
    <SidebarContainer>
      <Title>DOM Visualizer</Title>
      <Editor />
    </SidebarContainer>
  );
}

const SidebarContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
  background-color: ${SIDEBAR_COLOR};
`

const Title = styled.h1`
  display: inline-block;
  position: absolute;
  top: 2vh;
  margin: 0 auto;
  margin-top: 20px;

  color: whitesmoke;
  font-size: 48px;
`

export default Sidebar;