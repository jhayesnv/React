import { Button } from "./components/ui/button"

function App() {

  return (
    <>
      <div>
        <h1 className="text-7xl front-bold">Hello World</h1>
        <Button variant='destructive' size='lg' onClick={() => console.log('it works')}>
          Click me
        </Button>
      </div>
    </>
  )
}

export default App
