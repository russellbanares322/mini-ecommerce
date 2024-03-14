import { Route, Routes } from "react-router-dom";
import { routes } from "./routes/routes";
import { Navbar } from "./components";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        {routes.map((route) => (
          <Route key={route.key} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
