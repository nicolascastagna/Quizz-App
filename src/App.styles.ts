import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0 auto;
        max-width: 1200px;
        width: 100%;
        display: flex;
        justify-content: center;
    }
    * {
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        list-style-type: none;
        outline: none;
        border: none;
        text-decoration: none;
    }
    `;

    export const Wrapper = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        .css-bg {
        position: absolute;
        top: 0;
        z-index: -99;
        width: 100%;
        height: 100vh;
        opacity: 0.1;
        background: linear-gradient(135deg, #3d725555 25%, transparent 25%) -4px 0/ 8px 8px, linear-gradient(225deg, #3d7255 25%, transparent 25%) -4px 0/ 8px 8px, linear-gradient(315deg, #3d725555 25%, transparent 25%) 0px 0/ 8px 8px, linear-gradient(45deg, #3d7255 25%, #fff 25%) 0px 0/ 8px 8px;
        }
        .loader {
            width: 48px;
            height: 48px;
            border: 5px solid #5d7b6f;
            border-bottom-color: transparent;
            border-radius: 50%;
            display: inline-block;
            box-sizing: border-box;
            animation: rotation 1s linear infinite;
            }

        @keyframes rotation {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        } 

        .score {
            font-size: 18px;
            margin-bottom: 20px;
            font-weight: 500;
        }

        h1 {
            cursor: pointer;
            background-image: linear-gradient(180deg, #fff, #5d7b6f);
            font-weight: 600;
            background-size: 100%;
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            -moz-background-clip: text;
            -moz-text-fill-color: transparent;
            filter: drop-shadow(2px 2px #5d7b6f);
            font-size: 50px;
            text-align: center;
            margin: 20px;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            position: relative;
        }

        .start, .next-question {
            cursor: pointer;
            background: linear-gradient(180deg, #ffffff, #5d7b6f);
            box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            height: 40px;
            margin: 20px 0;
            padding: 0 20px;
            font-size: 16px;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: black;
            text-decoration: none;
        }

        .container-button {
            display: flex;
            margin-left: auto;
            margin-right: auto;
            .next-question, .restart {
                margin: 25px;
            }
        }
`
