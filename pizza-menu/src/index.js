import React from 'react';
import ReactDOM from 'react-dom/client';


function App() {
    return (
        <div>
            <Pizza />
        </div>
    )
}

function Pizza() {
    return (
        <div>
            <img src='pizzas/spinaci.jpg' alt='pizza spinaci'/>
            <h2>Pizza Spinaci</h2>
            <p>Tomato, mozzarella, spinach and ricotta cheese</p>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
<React.StrictMode>
    <App/>
</React.StrictMode>
)