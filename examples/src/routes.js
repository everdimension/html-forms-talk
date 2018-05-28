import React from "react";
import { RepeatPassword } from "./components/RepeatPassword";
import { RepeatPassword as RepeatPasswordSolution } from "./components/RepeatPassword/RepeatPassword-Solution";
import { AsyncEmailValidation } from "./components/AsyncEmailValidation";
import { AsyncEmailValidation as AsyncEmailValidationSolution } from "./components/AsyncEmailValidation/AsyncEmailValidation-Solution";

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
        path: "/example/repeat-password",
        action: () => <RepeatPassword />,
      },
      {
        path: "/example/repeat-password/solution",
        action: () => <RepeatPasswordSolution />,
      },
      {
        path: "/example/async-email-validation",
        action: () => <AsyncEmailValidation />,
      },
      {
        path: "/example/async-email-validation/solution",
        action: () => <AsyncEmailValidationSolution />,
      },
    ],
  },
];
