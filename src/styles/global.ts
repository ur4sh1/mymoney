import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root{
  --background: #f0f2f5;
  --red: #e52e4d;
  --blue: #5429cc;
  --green: #33cc95;
  --blue-light: #6933ff;
  --text-title: #363f5f;
  --text-body: #969cb3;
  --shape: #ffff;
  --input-background: #e7e9ee;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

//acessibilidade
//font-size: 16px (Desktop)
//REM = 1rem = 16px
html {
  @media (max-width: 1080px){
    font-size: 93.75%; //15px
  }

  @media (max-width: 720px){
    font-size: 87.5%; //14px
  }
}

body {
  background: var(--background);
  -webkit-font-smoothing: antialiased;
  font-family: 'Poppins',sans-serif;
  font-weight: 400; // torna mais nitida
}
input {
  font-family: 'Poppins',sans-serif;
  font-weight: 400;
}
textarea {
  font-family: 'Poppins',sans-serif;
  font-weight: 400;
}
button {
  font-family: 'Poppins',sans-serif;
  font-weight: 400;
  cursor: pointer;
}

h1 {
  font-weight: 600;
}
h2 {
  font-weight: 600;
}
h3 {
  font-weight: 600;
}
h4 {
  font-weight: 600;
}
h5 {
  font-weight: 600;
}
h6 {
  font-weight: 600;
}
strong {
  font-weight: 600;
}

[disable] {
  opacity: 0.6;
  cursor: not-allowed;
}

.react-modal-overlay {
  background: rgba(0,0,0,0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.react-modal-content {
  width: 100%;
  max-width: 576px;
  background: var(--background);
  padding: 3rem;
  position: relative;
  border-radius: 0.25rem;
}

.react-modal-close {
  border: 0;
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  background: transparent;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
}

`