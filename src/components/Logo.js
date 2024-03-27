import React from 'react'
import styled from "styled-components";
function Logo() {
  return (
    <FunFoxLogo01Copy alt="" src="../images/fun-fox-logo01.svg" />
  )
}
const FunFoxLogo01Copy = styled.img`
position: absolute;
top: -12px;
left: -15px;
width: 179.7px;
height: 134px;
object-fit: contain;
z-index: 1;
`;
export default Logo