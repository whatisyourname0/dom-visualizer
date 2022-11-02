import styled from "styled-components";
import Sidebar from "./Components/Sidebar/SIdebar";
import { MAIN_COLOR } from "./styles/colors";

function App() {

  return (
    <MainCointainer>
      <Sidebar />
      <MainSection>
        Ho!
      </MainSection>
    </MainCointainer>
  );
}

const MainCointainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: 450px 1fr;

  overflow: hidden;
  background-color: ${MAIN_COLOR}
`;

const MainSection = styled.div`
  width: 100%;
  height: 100%;
`

export default App;
