/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function App() {
  return (
    <div css={css`text-align: center;`}>
      <p css={css`
      position: absolute;
      left:50%;
      top: 50%;
      `}>
        Hello World
      </p>
    </div>
  );
}

export default App;
