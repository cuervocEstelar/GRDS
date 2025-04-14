import './App.css'
import ContentContainer from './ContentContainer/ContentContainer'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RolePage from "./RolePage";
import NotFound from "./NotFound";
function App() {
  return (
    <>
<Router>
      <Routes>
        <Route path="/role/:type" element={<RolePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
</Router>
    </>
  )
}
export default App