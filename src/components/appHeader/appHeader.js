import React from "react";
import "./appHeader.css";
import styled from "styled-components";
let Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  h1 {
  font-size: 26px;
  color: ${props=> props.colored ? '#eb3b5a' : '#26de81'}
  :hover {
        color:#fdcb6e;
     }
  }
  h2 {
    font-size: 1.2rem;
     color: grey;
  }
`

const AppHeader = () => {
    return (
        <Header as ='a'>
            <h1>Лукреций Пынь</h1>
            <h2>5 записей из них понравилось</h2>
        </Header>
    )
}
export default AppHeader;