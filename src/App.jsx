import Navbar from "./components/Navbar/Navbar"
import Login from "./features/Login/Login"
import Landpage from "./pages/Landpage/Landpage"
import Auth from "./features/Auth/Auth"
import { BrowserRouter as Router , Routes , Route } from "react-router-dom"
import Signup from "./pages/Landpage/Signup"

function App() {
 

  return (

        <Router>
            
            <Routes>
                <Route path="/" element={<> <Navbar/>  <Landpage/>   </>}/>
                <Route path="/signup" element={<><Signup/>   </>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/auth" element={<Auth/>}/>
            </Routes>
        </Router>
      )
}

export default App
