import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RouteNames } from "utils/constants.ts";
import { PageContainer } from "components/layout";
import { Details, Home } from "pages";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<PageContainer />}>
        <Route path="/" element={<Home />} />
        <Route path={`${RouteNames.People}/:slug`} element={<Details />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
