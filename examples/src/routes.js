import React from "react";
import { RepeatPassword } from "./components/RepeatPassword";
import { AsyncEmailValidation } from "./components/AsyncEmailValidation";

export const routes = [
  {
    path: "/",
    action: context => {
      context.next().then(component => {
        context.render(component);
      });
    },
    children: [
      {
        path: "",
        action: () => <p>hello</p>,
      },
      {
        path: "/repeat-password",
        action: () => <RepeatPassword />,
      },
      {
        path: "/async-email-validation",
        action: () => <AsyncEmailValidation />,
      },
    ],
  },
];
