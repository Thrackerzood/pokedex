import styled from "styled-components";



export const SwitchS = styled.div
`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
.allButton{
    margin: 0 8px;
}
.switch-section__prev{
    padding: 4px;
    border: none;
    border-radius: 5px;
    background: #212121;
    :hover{
        background: gray;
    } 
}
.switch-section__next{
    padding: 4px;
    border: none;
    border-radius: 5px;
    background: #212121;
    :hover{
        background: gray;
    }
}
.switch-section__this{
    margin: 0 16px;
    padding: 4px;
    border: none;
    border-radius: 5px;
    background: #212121;
}
`