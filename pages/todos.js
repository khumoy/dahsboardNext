import Dashboard from "../containers/Dashboard";
import Todos from "../containers/TodosData/Todos";

const Users = () => {

    return (
        <div>
            <Dashboard menu={"todos"}>
                <Todos />
            </Dashboard>
        </div>
    )
}
export default Users