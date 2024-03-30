import React, { useState } from "react";
import styled from "styled-components";
import Controls from "../../components/Controls";
import Logo from "../../components/Logo";
import BackgroundImage from "../../components/BackgroundImage";

export default function Page2() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <Div>
      <Div2>
        <BackgroundImage />
        <Logo />
        <Div3>
          <Div4>
            <Div5>
            <Img2
                loading="lazy"
                src="../images/group-1462.svg"
              />
              <Div6>
                Can you figure out the definition of setting from the following
                examples?
                <br />
                <br />
               
             </Div6>
            </Div5>
            <Div7>(take a minute to think about this)</Div7>
          </Div4>
          <Img3
            loading="lazy"
            src="../images/group-61.svg"
          />
        </Div3>
        <Div8>
          <Img4
            loading="lazy"
            src="../images/group-1460.svg"
          />
          <Div9>
            <Div10>
              <Img5
                loading="lazy"
                src="../images/group.svg"
              />
            </Div10>
            <Div11>Sunny day at a beach</Div11>
          </Div9>
          <Div12>
            <Div13>
              <Img6
                loading="lazy"
                src="../images/mask-group.svg"
              />
            </Div13>
            <Div14>
              A cold rainy night in a <br />
              haunted house in October
            </Div14>
          </Div12>
          <Img7
            loading="lazy"
            src="../images/group-53.svg"
          />
        </Div8>
        <Div15>
          <Div16>
            So, what do you think the definition of setting is?
            <br />
            <br />
            Any guesses?
          </Div16>
          <Div17>
          <Input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder=" ________________________________________"
            />
            <Div18>Hint: </Div18>
            <Img8
              loading="lazy"
              src="../images/group-930.svg"
            />
          </Div17>
        </Div15>
        <Div19>
          <Div20>
            <Div21>
              Setting is the time and place of a story. It often answers the
              questions: when? and where?
            </Div21>
            <Div22>
              <Img9
                loading="lazy"
                src="../images/group-1461.svg"
              />
              <Div23>
                The time of the story could be in the past, future, day, night,
                summer or winter. A story <br />
                may take place in a school, a mall, a desert, an airplane or in
                a variety of other places.
              </Div23>
            </Div22>
          </Div20>
          <Img10
            loading="lazy"
            src="../images/group-1459.svg"
          />
        </Div19>
        <Img11 
        />
        <Controls />
      </Div2>
    </Div>
  );
}

const Input = styled.input`
  position: absolute;
  top: 52px;
  left: 24%;
  font-size: var(--font-size-5xl);
  line-height: 29px;
  color: #b6b6b6;
  border: none;
  background-color: transparent;
  outline: none;
  ::placeholder {
    color: #b6b6b6;
  }
`;
const Div = styled.div``;

const Div2 = styled.div`
  flex-direction: column;
  overflow: hidden;
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
  padding: 150px 0 12px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;


const Div3 = styled.div`
  position: relative;
  display: flex;
  margin-top: 10px;
  width: 100%;
  align-items: start;
  gap: 20px;
  color: #1e242f;
  font-weight: 400;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const Div4 = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-basis: 0;
  width: fit-content;
  padding: 0 20px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div5 = styled.div`
  display: flex;
  gap: 20px;
  font-size: 32px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const Img2 = styled.img`
  aspect-ratio: 1.64;
  object-fit: auto;
  object-position: center;
  width: 61px;
  align-self: end;
  margin-top: 31px;
`;

const Div6 = styled.div`
  position: relative;
  font-family: Short Stack, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
  margin-bottom: 1.2em;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div7 = styled.div`
  position: absolute;
  align-self: start;
  margin: 90px 0 0 80px;
  font: 24px Short Stack, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Img3 = styled.img`
  aspect-ratio: 0.71;
  object-fit: auto;
  object-position: center;
  width: 87px;
  margin-top: 7px;
`;

const Div8 = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  gap: 20px;
  justify-content: space-between;

  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const Img4 = styled.img`
  aspect-ratio: 1.12;
  object-fit: auto;
  object-position: center;
  width: 62px;
  align-self: end;
  margin-top: 169px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Div9 = styled.div`
  align-self: start;
  display: flex;
  flex-direction: column;
`;

const Div10 = styled.div`
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1) inset;
  border-color: rgba(204, 204, 204, 1);
  border-style: dashed;
  border-width: 3px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 32px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Img5 = styled.img`
  aspect-ratio: 1.22;
  object-fit: auto;
  object-position: center;
  width: 171px;
`;

const Div11 = styled.div`
  color: #000;
  margin-top: 11px;
  font: 400 20px/145% Short Stack, sans-serif;
`;

const Div12 = styled.div`
  display: flex;
  flex-direction: column;
`;

const Div13 = styled.div`
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1) inset;
  border-color: rgba(204, 204, 204, 1);
  border-style: dashed;
  border-width: 3px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 28px;
  padding: 18px 36px;
  @media (max-width: 991px) {
    margin: 0 10px;
    padding: 0 20px;
  }
`;

const Img6 = styled.img`
  aspect-ratio: 1.22;
  object-fit: auto;
  object-position: center;
  width: 163px;
`;

const Div14 = styled.div`
  color: #000;
  text-align: center;
  margin-top: 11px;
  font: 400 20px Short Stack, sans-serif;
`;

const Img7 = styled.img`
  aspect-ratio: 0.92;
  object-fit: auto;
  object-position: center;
  width: 66px;
  align-self: end;
  margin-top: 120px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Div15 = styled.div`
  position: relative;
  align-self: center;
  display: flex;
  margin-top: 33px;
  width: 100%;
  max-width: 998px;
  align-items: flex-start;
  gap: 20px;
  font-size: 20px;
  color: #1e242f;
  font-weight: 400;
  padding: 0 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const Div16 = styled.div`
  font-family: Short Stack, sans-serif;
  line-height: 29px;
  align-self: start;
  flex-grow: 1;
  flex-basis: auto;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div17 = styled.div`
  align-self: end;
  display: flex;
  margin-top: 44px;
  gap: 18px;
  line-height: 145%;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Div18 = styled.div`
  font-family: Short Stack, sans-serif;
  margin: auto 0;
`;

const Img8 = styled.img`
  aspect-ratio: 2.27;
  object-fit: auto;
  object-position: center;
  width: 110px;
  max-width: 100%;
`;

const Div19 = styled.div`
  position: relative;
  display: flex;
  margin-top: 18px;
  width: 100%;
  gap: 11px;
  font-weight: 400;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const Div20 = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-basis: 0;
  width: fit-content;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div21 = styled.div`
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  border-color: rgba(164, 253, 251, 1);
  border-style: dashed;
  border-width: 3px;
  background-color: #25a3a1;
  align-self: center;
  width: 1036px;
  margin-left: 7%;
  max-width: 100%;
  color: #fff;
  justify-content: center;
  padding: 14px;
  font: 24px/33px Short Stack, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    padding-right: 30px;
  }
`;

const Div22 = styled.div`
  display: flex;
  margin-top: 14px;
  align-items: start;
  gap: 16px;
  font-size: 20px;
  color: #1e242f;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const Img9 = styled.img`
  aspect-ratio: 1.09;
  object-fit: auto;
  object-position: center;
  width: 66px;
`;

const Div23 = styled.div`
  font-family: Short Stack, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
  display: flex;
  justify-content: center;
  align-self: center;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Img10 = styled.img`
  aspect-ratio: 0.95;
  object-fit: auto;
  object-position: center;
  width: 73px;
  align-self: end;
  margin-top: 61px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Img11 = styled.img`
  aspect-ratio: 20;
  object-fit: auto;
  object-position: center;
  width: 1064px;
  align-self: center;
  margin-top: 25px;
  max-width: 1064px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;
