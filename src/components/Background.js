import React from 'react';
import styled from "styled-components";

function Background() {
  return (
    <Div>
      <Div2 />
      <Img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/81da19b739db256f1106bb3a3d8f07f97986183cad6901ce141f868debe6cb82?"
        />
      <Div2 />
    </Div>
  );
}

const Div = styled.div``;

const Div2 = styled.div`
flex-direction: column;
overflow: hidden;
position: relative;
display: flex;
height: 100%;
width: 100%;
padding: 80px 0 12px;
@media (max-width: 991px) {
  max-width: 100%;
}
`;
const Img = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;
export default Background;
