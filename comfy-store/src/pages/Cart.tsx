import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

function Cart() {
  return (
    <div>
      <h1>Cart</h1>
      <Button asChild size='lg'>
        <Link to='/'>Home button</Link>
      </Button>
    </div>
  )
}

export default Cart