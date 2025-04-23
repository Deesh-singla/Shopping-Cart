import App from './App.jsx'
import Shop from './Components/Shop.jsx'
import Home from './Components/Home.jsx'
import Sneaker from './Components/Sneaker.jsx'
import Cart from './Components/cart/Cart'
const route = [
    {
        path: '/',
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: "/shop", element: <Shop /> },
            { path: "/home", element: <Home /> },
            { path: "/shop/:title", element: <Sneaker /> },
            { path: "/cart", element: < Cart /> }
        ]
    }
]
export default route;