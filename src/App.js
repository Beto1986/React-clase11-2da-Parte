import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nosotros from "./Pages/nosotros";
import Header from "./components/Header";
import { Card, CardHeader, CardBody, ImageHeader } from "react-simple-card";

export default function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route path="/nosotros" component={Nosotros} />
        <Route path="/acerca-de">
          <h1>Acerca de</h1>{" "}
        </Route>
        <Route exact path="/">
          <Card>
            <ImageHeader imageSrc="http://via.placeholder.com/600x20" />
            <CardBody>Body</CardBody>
          </Card>
        </Route>
        <Route path="*">404</Route>
      </Switch>
    </Router>
  );
}
