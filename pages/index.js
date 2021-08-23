import Dashboard from "../containers/Dashboard";
import Cards from "../containers/Home";


export default function Home() {
  return (
    <>
      <Dashboard menu={"home"} >
        <Cards />
      </Dashboard>
    </>
  )
}
