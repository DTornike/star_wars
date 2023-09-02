import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RouteNames } from "utils/constants.ts";
import { PageContainer } from "components/layout";
import { PeopleDetails, People, Species } from "pages";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<PageContainer />}>
        <Route path="/" element={<People />} />
        <Route path="/species" element={<Species />} />
        <Route
          path={`${RouteNames.People}/:slug`}
          element={<PeopleDetails />}
        />
      </Route>
    </Routes>
  </Router>
);

export default App;
