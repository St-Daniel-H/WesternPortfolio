import { Route, Routes,BrowserRouter } from "react-router-dom";
import Work from "./Work/Work"
import Main from "./Main/main"
function App() {

  return (
  <BrowserRouter>
    <Routes>
    <Route index element={<Main/>} />
    <Route path="/Work" element={<Work/>} />
   </Routes>
   </BrowserRouter>
  )
}

export default App
