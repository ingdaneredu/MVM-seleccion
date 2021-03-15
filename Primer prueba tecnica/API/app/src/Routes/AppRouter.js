import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Dashboard from "../componentes/TablaUsuarios";
import Registro from "../componentes/Registro";

export default function AppRouter() {
  return (
    <Router>
        <div>
            <Switch>
                <Route
                    path = "/Gest"
                    component = {Dashboard}
                />
                <Route
                    path = "/Reg"
                    component = {Registro}
                />
                <Route
                    path = "/Reg/:id"
                    component = {Registro}
                />
            </Switch>
        </div>
    </Router>
  );
}
