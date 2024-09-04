import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, TodoDetails, TodoList } from "./components";

function App() {
  return (
    <BrowserRouter>
      <div className="min-100">
        <Header />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<TodoList />} />
            <Route path="/todo/:id" element={<TodoDetails />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
