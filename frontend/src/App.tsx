import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home, Post } from "./components/pages";

function App() {
  return (
    <div className="flex w-screen min-h-screen flex-col items-center justify-between ">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/post/:postId" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
