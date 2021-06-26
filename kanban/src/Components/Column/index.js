import {Main, Assignment, Tag, Button} from './styles';
import {FiPlus} from 'react-icons/fi';

const Column = () =>{
    return(
        <Main>
            <h1>To Do</h1>
            <Assignment>
                <p>Nome da tarefa</p>
                <Tag>
                    <p>Tag 1</p>
                </Tag>
            </Assignment>
            <Button>
                <FiPlus/>
                <p>Adicionar outro cartão</p>
            </Button>
        </Main>
    )
}

export default Column;