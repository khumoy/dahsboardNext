import { getTodos } from "../api";
import Dashboard from "../containers/Dashboard";
import Todos from "../containers/TodosData/Todos";

const Todo = (props) => {
    console.log(props);
    return (
        <div>
            <Dashboard menu={"todos"}>
                <Todos data={props.data} />
            </Dashboard>
        </div>
    )
}

export const getServerSideProps = async () => {

    const res = await getTodos();

    return {
        props: { data: res }
    }
}
export default Todo