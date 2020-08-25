import styled, { keyframes } from "styled-components";

export const TimelineTreeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1rem;
`;

const animateVisible = keyframes`
  from {
    opacity: 0;
    visibility: hidden;
  }
  to {
    opacity: 1;
    visibility: visible;
  }
`;

export const Branch = styled.div`
  align-items: center;
  display: flex;
  position: relative;
  visibility: hidden;
  width: 100%;
  
  &.left {
    margin-right: auto;
  }
  &.right {
    margin-left: auto;
  }

  &.visible {
    visibility: visible;
  }
`;

export const TreeTrunkWrapper = styled.div<{bg?: string}>`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  position: relative;
  width: 10%;
  
  &.left {
    order: 2;
  }
  
  &.right {
    order: 1;
  }

  &::after {
    background: ${p => p.bg};
    content: '';
    display: block;
    height: 100%;
    left: 0;
    margin-left: auto;
    margin-right: auto;
    position: absolute;
    right: 0;
    width: 3px;
    z-index: -1;
  }
`;

export const TimelineItemContentWrapper = styled.div`
  width: 45%;
  visibility: hidden;
  &.left {
    order: 1;
  }
  
  &.right {
    order: 2;
  }

  &.visible {
    visibility: visible;
    animation: ${animateVisible} 0.25s ease-in;
  }
`;

export const TrunkPointWrapper = styled.div`
  position: relative;
`;

export const TimelineTreeTitleWrapper = styled.div`
  align-items: center;
  display: flex;
  width: 45%;

  &.left {
    justify-content: flex-start;
    order: 3;
  }
  
  &.right {
    justify-content: flex-end;
    order: 1;
  }
`;