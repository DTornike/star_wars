import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RouteNames } from "utils/constants.ts";
import { PageContainer } from "components/layout";
import { Details, Home } from "pages";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<PageContainer />}>
        <Route path="/" element={<Home />} />
        <Route path={RouteNames.Character} element={<Details />}>
          <Route
            path={`${RouteNames.Character}/:slug`}
            element={<div>hm</div>}
          />
        </Route>
      </Route>
    </Routes>
  </Router>
);

export default App;
