import { MdBorderColor } from 'react-icons/md';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;

  & .btn-content {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    font-weight: 600;
    font-size: calc(var(--index) * 1.5);
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.bookRoomBtnBgc};
    transition: 1s;
    border-radius: 100px;
    border: 1px solid #ffffff80;
    box-shadow: 0 0 0.2em 0 ${({ theme }) => theme.colors.bookRoomBtnBgc};
  }
  & .btn-content:hover,
  & .btn-content:focus {
    transition: 0.5s;
    -webkit-animation: btn-content 1s;
    animation: btn-content 1s;
    outline: 0.1em solid transparent;
    outline-offset: 0.2em;
    box-shadow: 0 0 0.4em 0 ${({ theme }) => theme.colors.bookRoomBtnBgc};
    transform: scale(1.1);
  }
  & .btn-title {
    position: absolute;
    top: 110%;
    display: none;
    width: 110px;
    opacity: 0;
    text-shadow: 7px 7px 3px rgba(0, 0, 0, 0.6);
    transition: all 0.3s ease-in-out;
  }
  &:hover .btn-title,
  &:focus .btn-title {
    display: block;
    opacity: 1;
  }
  & .btn-content .icon-arrow {
    transition: 0.5s;
    margin-right: 0px;
    transform: scale(0.6);
  }

  & .btn-content:hover .icon-arrow {
    transition: 0.5s;
    margin-right: 25px;
  }

  & .icon-arrow {
    width: 20px;
    position: relative;
    top: 6%;
  }

  #arrow-icon-one {
    transition: 0.4s;
    transform: translateX(-60%);
  }

  #arrow-icon-two {
    transition: 0.5s;
    transform: translateX(-30%);
  }

  & .btn-content:hover #arrow-icon-three {
    animation: color_anim 1s infinite 0.2s;
  }

  & .btn-content:hover #arrow-icon-one {
    transform: translateX(0%);
    animation: color_anim 1s infinite 0.6s;
  }

  & .btn-content:hover #arrow-icon-two {
    transform: translateX(0%);
    animation: color_anim 1s infinite 0.4s;
  }

  @keyframes color_anim {
    0% {
      fill: ${({ theme }) => theme.colors.primary};
    }

    50% {
      fill: ${({ theme }) => theme.colors.bookRoomBtnBgc};
    }

    100% {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }

  @-webkit-keyframes btn-content {
    0% {
      outline: 0.2em solid ${({ theme }) => theme.colors.bookRoomBtnBgc};
      outline-offset: 0;
    }
  }

  @keyframes btn-content {
    0% {
      outline: 0.2em solid ${({ theme }) => theme.colors.bookRoomBtnBgc};
      outline-offset: 0;
    }
  }
`;
export const OrderIcon = styled(MdBorderColor)`
  width: 30px;
  height: 30px;
  color: #000000;
`;
