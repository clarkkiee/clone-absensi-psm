import Details from "./components/Details"
import Input from "./components/Input"
import Table from "./components/Table"

function App() {

  return (
    <>
      <div className="flex h-[100vh]">
        <div>
          <div>
            <Details/>
          </div>
          <Input/>
        </div>
        <Table/>
      </div>
    </>
  )
}

export default App
