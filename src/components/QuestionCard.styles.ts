import styled from "styled-components";

export const Wrapper = styled.div`
    background: #fff;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 1px 1px 2px 0 rgb(0 0 0 / 30%);
    text-align: center;
    p {
        margin-bottom: 10px;
    }
`;

type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
  };
  
export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    transition: all 0.3s ease;
    opacity: 0,8;
    :hover {
        opacity: 1;
    }
    
    button {
        cursor: pointer;
        user-select: none;
        font-size: 14px;
        width: 100%;
        height: 50px;
        margin: 8px 0;
        background: ${({ correct, userClicked }) => 
        correct 
        ? "linear-gradient(90deg, #56ffa4, #59bc86)"
        : !correct && userClicked
        ? "linear-gradient(90deg, #ff5656, #c16868)"
        : "linear-gradient(90deg, #56ccff, #6eafb4)"};

        border: 3px solid #fff;
        box-shadow: 1px 2px 0 rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        color: #fff;
        text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);

        & span {
            font-size: 14px;
            color: black;
            text-decoration: none;
        }
    }

`

