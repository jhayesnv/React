import { Button } from "./components/ui/button"
import { useAppSelector } from "./hooks"

function App() {
  const { name } = useAppSelector((state) => state.userState)

  return (
    <>
      <div>
        <h1 className="text-7xl front-bold">Hello {name}</h1>
        <Button variant='destructive' size='lg' onClick={() => console.log('it works')}>
          Click me
        </Button>
      </div>
    </>
  )
}

export default App
