import { Main, Button } from "./styles";
import {React, useState} from "react";
import background from '../../Assets/background.svg';
import Column from "../../Components/Column";

const Home = () =>{

    const [columns, setColumns] = useState([]);
    const [toDo, setToDo] = useState([4]);
    const [inProgress, setInProgress] = useState([1]);
    const [done, setDone] = useState([3]);

    return(
        <Main>
            <h1>Kanban do projeto</h1>
            <div id='container'>
                <Column></Column>
                <Button/>    
            </div>
            
            <img src={background}/>
        </Main>
    )
}

export default Home;