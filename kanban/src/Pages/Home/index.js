import { Main, Button } from "./styles";
import {React,useEffect, useState, useContext} from "react";
import background from '../../Assets/background.svg';
import Columns from "../../Components/Column";
import {FiPlus} from 'react-icons/fi';
import { ListContext } from "../../Provider/provider";
import { Assignment, Tag } from "../../Components/Column/styles";

const Home = () =>{

    const {columns} = useContext(ListContext);
    

    return(
        
        <Main>
            <h1>Kanban do projeto</h1>
            <div id='container'>
                <Columns/>
                <Button>
                    <FiPlus/>
                    <p>Adicionar outra lista</p>
                </Button>     
            </div>    
                    
            <img src={background}/>
        </Main>
    )
}

export default Home;