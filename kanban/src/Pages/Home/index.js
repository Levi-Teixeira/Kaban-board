import { Main, Button } from "./styles";
import {React,useContext} from "react";
import background from '../../Assets/background.svg';
import Columns from "../../Components/Column";
import {FiPlus} from 'react-icons/fi';
import { ListContext } from "../../Provider/provider";


const Home = () =>{

    const {columns, setColumns} = useContext(ListContext);
    
    const addColumn = () =>{
        const obj = ({...columns, columns:
        {
        title: 'New Column',
        color: '#154c79', 
        chores:[],
        },
        })
        setColumns(Object.values(obj))
    }

    return(
        
        <Main>
            <h1>Kanban do projeto</h1>
            <div id='container'>
                <Columns/>
                <Button onClick={addColumn}>
                    <FiPlus/>
                    <p>Adicionar outra lista</p>
                </Button>     
            </div>    
                    
            <img src={background} alt=''/>
        </Main>
    )
}

export default Home;