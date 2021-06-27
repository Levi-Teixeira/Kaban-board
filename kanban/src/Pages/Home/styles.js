import styled from 'styled-components';


export const Main = styled.div`
padding: 30px 60px;

#container{
    display: flex;
}

h1{
    font-weight: bolder;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 40px;
}

img{
    position: fixed;
    right: 60px;
    bottom: 30px;
    z-index: 1;
}

`

export const Button = styled.button`

min-width: 350px;
height: 54px;
border-radius: 5px;
background-color: #cbd1d5;
border: none;
/* margin-left: 20px; */
display: flex;
justify-content: flex-start;
align-items: center;
padding-left: 15px;
cursor: pointer;


p{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12pt;
    margin-left: 15px;
}

`