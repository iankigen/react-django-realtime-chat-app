import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import Home from "./pages/Home.tsx";
import Explore from "./pages/Explore.tsx";

const Router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path='/' element={<Home/>}/>
            <Route path='/explore/:categoryName' element={<Explore/>}/>
        </Route>
    )
)

export default Router