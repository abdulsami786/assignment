import React from 'react'
import styled from "styled-components";
function BackgroundImage() {
  return (
    <BackgroundImage1 src="https://cdn.builder.io/api/v1/image/assets/TEMP/81da19b739db256f1106bb3a3d8f07f97986183cad6901ce141f868debe6cb82?apiKey=f2d56b65960e45ca9657768c8e78a835&" alt="" />
  )
}
const BackgroundImage1 = styled.img`
position: absolute;
inset: 0;
width: 100%;
height: 100%;
object-fit: cover;
object-position: center;
`;
export default BackgroundImage