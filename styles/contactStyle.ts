import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

interface FormProps {
  loading: number;
}

export const Container = styled.main`
  /* width: 80vw; */
  display: flex;
  flex-direction: column;
  text-align: center;
  animation: loadAnimation;
  animation-duration: 500ms;

  h1 {
    margin-top: 60px;
    margin-bottom: 15px;
  }
`;

export const SocialMedia = styled.aside`
  display: flex;
  flex-direction: column;
  place-content: center;

  @media (max-width: 700px) {
    p {
      font-size: 20px;
    }
  }
`;

export const CopyToClipBoard = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
`;

export const Form = styled.form<FormProps>`
  margin-top: 5%;
  margin-bottom: 5%;

  input,
  textarea {
    width: 500px;
    padding: 10px 15px;
    border-radius: 6px;
    font-size: 16px;
  }

  input::placeholder,
  textarea::placeholder {
    /* color: #ababab; */
  }

  br + input {
    margin-top: 6px;
  }

  textarea {
    resize: none;
    margin-top: 6px;
    height: 200px;
  }

  button {
    margin: 15px 0;
    font-size: 20px;
    border: 0;
    height: 40px;
    border-radius: 6px;
    padding: 6px 14px;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-family: 'Source Sans Pro, Ubuntu', sans-serif;
    font-weight: 700;
    color: #fff;
	  background-color: #256ce1;
    transition: background-color 200ms;
	  transition: all .1s ease-in-out;
    ${(props): FlattenSimpleInterpolation =>
    props.loading === 1
      ? css`
            opacity: 0.7;
            pointer-events: none;
          `
      : css`
            pointer-events: all;
            opacity: 1;
          `}
  }

  button:hover {
	  transition: all .1s ease-in-out;
    background-color: #15cdfc;
    box-shadow: 0 0 10px 5px #15cdfc;
  }

  @media (max-width: 950px) {
    input,
    textarea {
      width: 500px;
    }
  }

  @media (max-width: 700px) {
    input,
    textarea {
      width: 288px;
    }
  }
`;
