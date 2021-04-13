import React from "react";
import { render } from "react-dom";
import { types } from "mobx-state-tree";
import { observer } from "mobx-react";

const Todo = types.model({
  name: "",
  done: false
});

const User = types.model({
  name: ""
});

render(<div />, document.getElementById("root"));
