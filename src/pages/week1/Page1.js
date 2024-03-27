import React from 'react'
import styled from "styled-components";
import Controls from "../../components/Controls";
import Logo from "../../components/Logo";
import BackgroundImage from "../../components/BackgroundImage";


const storyElements = [
  { icon: "../images/frame.svg" },
  { icon: "../images/group-1.svg" },
  { icon: "../images/group-2.svg" },
  { icon: "../images/group-3.svg" },
  { icon: "../images/group-4.svg" },
];

function Page1() {
  return (
    <PageWrapper>
      <Div2>
        <BackgroundImage />
        <Logo />
        <WeekHeader>
          <VectorIcon alt="" src="../images/group-1180.svg" />
        </WeekHeader>
        <IntroSection>
          <IntroIcon
            src="../images/group-1462.svg"
            alt=""
          />
          <IntroContent>
            <IntroHeading>Elements of Story Writing</IntroHeading>
            <IntroText>
              Welcome to term 2 of Writers Club. Are you excited for this
              amazing journey?
              <br />
              Over the next week, we will be practicing the different elements
              of story writing.
              <br />
              Our aim is to make stories more interesting and exciting.
            </IntroText>
          </IntroContent>
          <IntroImage
            src="../images/group-61.svg"
            alt=""
          />
        </IntroSection>
        <ElementsSection>
          <ElementsText>
            There are <b>five</b> elements which make the foundation for story writing. An
            element is an essential part of something and every fiction story
            has the same key elements:
          </ElementsText>
          <ElementsImage
            src="../images/group-925.svg"
            alt=""
          />
        </ElementsSection>
        <ElementsList>
          {storyElements.map((element, index) => (
            <ElementItem key={index}>
              <ElementIcon src={element.icon} alt="" />
            </ElementItem>
          ))}
          <ElementsEndImage
            src="../images/group-1458.svg"
            alt=""
          />
        </ElementsList>
        <FamiliarText>
          You must be familiar with some of these. If not, do not worry! we will{" "}
          <br />
          cover all these elements as we go along.
        </FamiliarText>
        <TodayLesson>
          <LessonStartImage
            src="../images/group-1461.svg"
            alt=""
          />
          <LessonText>
            For today's lesson, we will try to understand and practice writing
            the setting for our stories.
            <br />
            The setting is an important element of every fiction story.
            <br />
            <LessonIcon
              src="../images/group-926.svg"
              alt=""
            />
          </LessonText>
          <LessonEndImage
            src="../images/group-1459.svg"
            alt=""
          />
        </TodayLesson>
        <Divider
        />
        <Controls />
      </Div2>
    </PageWrapper>
  );
}

const WeekHeader = styled.div`
  position: absolute;
  top: 12px;
  left: 149px;
  width: 153px;
  height: 41px;
`;
const VectorIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 153px;
  height: 41px;
  z-index: 2;
`;
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
const PageWrapper = styled.div``;

const IntroSection = styled.section`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 20px;
  margin-top: 33px;

  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const IntroIcon = styled.img`
  width: 61px;
  aspect-ratio: 1.64;
  object-fit: contain;
  margin-top: 31px;
`;

const IntroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const IntroHeading = styled.h2`
  padding: 9px 35px;
  margin: 0;
  align-self: center;
  color: #fff;
  font: 32px/109% Short Stack, sans-serif;
  text-align: center;
  justify-content: center;
  background-color: rgba(254, 103, 132, 1);
  border: 3px dashed rgba(255, 174, 190, 1);
  border-radius: 22px;
  box-shadow: 0px 0px 11px rgba(0, 0, 0, 0.25);

  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

const IntroText = styled.p`
  margin: 14px 0 0;
  color: #1e242f;
  font: 24px/29px Short Stack, sans-serif;
  letter-spacing: -1.44px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const IntroImage = styled.img`
  width: 87px;
  aspect-ratio: 0.71;
  object-fit: contain;
  margin-top: 7px;
`;

const ElementsSection = styled.section`
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
  max-width: 1026px;
  margin-top: 13px;
  padding: 0 16px;
  align-self: center;
  color: #fff;
  font-size: 24px;
  line-height: 29px;
  background-color: #25a3a1;
  border: 3px dashed rgba(164, 253, 251, 1);
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);

  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const ElementsText = styled.p`
  flex: 1;
  margin: auto 0;
  font-family: Short Stack, sans-serif;
  z-index: 10;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const ElementsImage = styled.img`
  width: 111px;
  max-width: 100%;
  aspect-ratio: 0.85;
  object-fit: contain;
  align-self: start;
`;

const ElementsList = styled.ul`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 18px;
  color: #000;
  font-size: 20px;
  text-align: center;
  white-space: nowrap;

  @media (max-width: 991px) {
    flex-wrap: wrap;
    white-space: initial;
  }
`;

const ElementItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  font-family: Short Stack, sans-serif;
  text-transform: uppercase;

  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

const ElementIcon = styled.img`
  position: relative;
`;

const ElementsEndImage = styled.img`
  width: 73px;
  aspect-ratio: 1;
  object-fit: contain;
  margin-top: 7px;
`;

const FamiliarText = styled.p`
  position: relative;
  margin-top: 13px;
  display: flex;
  justify-content: center;
  color: #1e242f;
  font: 24px/29px Short Stack, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const TodayLesson = styled.section`
  position: relative;
  display: flex;
  align-items: end;
  gap: 11px;
  margin-top: 29px;
  color: #1e242f;
  font-size: 24px;
  line-height: 29px;

  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const LessonStartImage = styled.img`
  width: 66px;
  aspect-ratio: 1.09;
  object-fit: contain;
  margin-top: 96px;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const LessonText = styled.div`
  position: absolute;
  top: 0;
  left: 50%; /* Center horizontally */
  transform: translateX(-50%); /* Center horizontally */
  display: flex;
  flex-direction: column;
  align-items: center; /* Center horizontally */
  text-align: center; /* Center text */
  min-height: 133px;
  padding: 19px 47px 30px;
  overflow: hidden;

  font-family: "Short Stack", sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 30px 0 20px;
  }
`;

const LessonIcon = styled.img`
  position: relative;
  top: 10%; /* Position below LessonText */

  transform: translateX(-80%); /* Center horizontally */
  transform: translateY(-75%); /* Center horizontally */
  z-index: -2;
`;

const LessonEndImage = styled.img`
  width: 73px;
  aspect-ratio: 0.95;
  object-fit: contain;
  margin-top: 56px;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Divider = styled.img`
  width: 1064px;
  max-width: 1064px;
  aspect-ratio: 20;
  object-fit: contain;
  align-self: center;
  margin-top: 25px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export default Page1;
