import { h, app } from "hyperapp";
import state from "./state";
import actions from "./actions";

const view = (state, actions) => (
  <div>
    <h1>Hello</h1>
  </div>
);

app(state, actions, view, document.getElementById('container'));