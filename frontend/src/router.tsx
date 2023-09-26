import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import Home from "./pages/Home.tsx";

const Router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Home/>}>

        </Route>
    )
)

export default Router