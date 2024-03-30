import React, { useState } from "react";
import styled from "styled-components";
import { Select } from "antd";
import { useNavigate, useParams } from "react-router-dom";

function Controls() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [currentValue, setCurrentValue] = useState(id || "1"); // Initialize state to keep track of the current value

  const handleClick = () => {
    navigate("/week1/2");
  };

  const handleBack = () => {
    navigate("/week1/1");
  };

  const handleChange = (value) => {
    setCurrentValue(value); // Update the current value state
    navigate(`/week1/${value}`);
  };

  return (
    <Week1Inner>
      <Layer7Icon1
        loading="lazy"
        alt=""
        src="../images/back-button.png"
        onClick={handleBack}
        style={{ opacity: currentValue === "1" ? 0.6 : 1 }}
      />
      <StyledSelect defaultValue={id || "1"} onChange={handleChange}>
        <Option value="1">1</Option>
        <Option value="2">2</Option>
      </StyledSelect>
      <Layer7Icon
        loading="lazy"
        alt=""
        src="../images/next-button.png"
        onClick={handleClick}
        style={{ opacity: currentValue === "2" ? 0.6 : 1 }}
      />
    </Week1Inner>
  );
}

const { Option } = Select;

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

const StyledSelect = styled(Select)`
  height: 39px;
  width: 52px;
  font-family: var(--font-short-stack);
  font-size: var(--font-size-xl);
  z-index: 1;
  &&& .ant-select-selector {
    background-color: #cd3f97;
  }
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
