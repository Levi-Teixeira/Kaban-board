import styled from "styled-components";

export const Main = styled.div`

    min-width: 20vw;
    height: fit-content;
    /* max-height: 500px; */
    border-radius: 5px;
    display: flex;
    flex-direction:column;
    border-top: 5px solid rgba(0, 0, 0, 0.1);
    overflow-x: auto;
    background-color:${props => props.color};
    margin-right: 15px;
    z-index: 2;

    #flex{
        display: flex;
    }

    #row{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 90%;
        align-self: center;

        input{
            margin-bottom: 15px;
            margin-top: 15px; 
        }

        #edit, #flex > button{
            display: none;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: white;
            border:none;
            width: 25px;
            height: 25px;
            border-radius: 5px;
            cursor: pointer;
            display: none;
            margin-left: 10px;
        }

        .active{
            display: block !important;
            background-color: green !important;
        }

        &:hover{
            #edit{
                display: block;    
            } 
        }
    }
    

    h1{
        color: white;
        align-self: center;
        font-size: 16pt;
        margin-bottom: 15px;
        margin-top: 15px;
        max-width: 85%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

`
export const Assignment = styled.div`
    height: 90px;
    width: 90%;
    padding: 15px ;
    margin-bottom: 10px;
    background-color: white;
    align-self: center;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: rgba(50, 50, 93, 0.2) 0px 10px 20px 0px;

    p{  
        max-width: 200px;
        font-family: Arial, Helvetica, sans-serif;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .active{
        background-color: green;
        display: block;

        &:hover{
            background-color: green;
        }
    }


    button{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        border:none;
        width: 25px;
        height: 25px;
        border-radius: 5px;
        cursor: pointer;
        display: none;

        &:hover{
            background-color: lightgrey;
        }

    }

    #row-1, #row-2{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }


    &:hover{
        button{
            display:block;
        }
    }

    
`

export const Tag = styled.div`

    background-color: ${props => props.color};
    max-width: 150px;
    min-width: 50px;
    border-radius: 5px;
    height: 24px;
    padding: 0px 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    p{
        color: white;
        font-size: 11pt;
    }
    
`

export const Button = styled.div`

    border-radius: 5px;
    width: 90%;
    height: 30px;
    align-self: center;
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-top: 5px;
    margin-bottom: 15px;

    svg{
        fill: white;
        stroke: white;
        margin-right:18px;
    }

    p{
        color: white;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
    }

    &:hover{
        background-color: rgba(0, 0, 0, 0.1);;
    }
    
`
