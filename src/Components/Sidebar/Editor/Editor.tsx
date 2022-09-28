import styled from "styled-components";

function Editor() {
  return (
    <Textarea
      autoFocus={false}
      defaultValue={defaultText}
    >Hey!</Textarea>
  );
}

const Textarea = styled.textarea`
  width: 80%;
  height: 30%;
  position: relative;
  top: 20vh;

  resize: none;
  font-family: source-code-pro, sans-serif;
  font-size: 14px;
`

const defaultText = `
<html>
  <body>
    <span>Hello!</span>
  </body>
</html>
`

export default Editor;