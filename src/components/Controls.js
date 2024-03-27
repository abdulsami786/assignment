import React from "react";
import styled from "styled-components";
import { Select } from "antd";
import { useNavigate, useParams } from "react-router-dom";

function Controls() {
  const navigate = useNavigate();
  const { id } = useParams();
  const handleClick = () => {
    navigate("/week1/2");
  };
  const handleBack = () => {
    navigate("/week1/1");
  };

  const handleChange = (value) => {
    navigate(`/week1/${value}`);
  };
  
  return (
    <Week1Inner>
      <Layer7Icon1
        loading="lazy"
        alt=""
        src="../images/back-button.png"
        onClick={handleBack}
      />
      <FrameChild defaultValue={id || "1"} onChange={handleChange}>
        <Option value="1">1</Option>
        <Option value="2">2</Option>
      </FrameChild>
      <Layer7Icon
        loading="lazy"
        alt=""
        src="../images/next-button.png"
        onClick={handleClick}
      />
    </Week1Inner>
  );
}
const Option = Select.Option;
const Layer7Icon = styled.img`
  width: 41px;
  height: 45px;
  overflow: hidden;
  object-fit: contain;
  z-index: 1;
`;

const Layer7Icon1 = styled.img`
  width: 41px;
  height: 45px;
  overflow: hidden;
  object-fit: contain;
  z-index: 1;
`;

const FrameChild = styled(Select)`
  height: 39px;
  width: 77px;
  font-family: var(--font-short-stack);
  font-size: var(--font-size-xl);
  color: var(--color-white);
  z-index: 1;
`;

const Week1Inner = styled.div`
  height: 45px; /* Adjust height as needed */
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  background-color: #f8d1e0;
`;
export default Controls;
