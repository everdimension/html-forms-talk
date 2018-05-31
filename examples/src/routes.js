import React from "react";
import { Main } from "./components/Main";
import { RepeatPassword } from "./components/RepeatPassword";
import { RepeatPassword as RepeatPasswordSolution } from "./components/RepeatPassword/RepeatPassword-Solution";
import { AsyncEmailValidation } from "./components/AsyncEmailValidation";
import { AsyncEmailValidation as AsyncEmailValidationSolution } from "./components/AsyncEmailValidation/AsyncEmailValidation-Solution";
import { Resources } from './components/Resources';

export const routes = [
  {
    path: "/",
    action: context =>
      context.next().then(component => {
        if (!component) {
          throw new Error("Page not found");
        }
        return <Main>{component}</Main>;
      }),
    children: [
      {
        path: "",
        action: () => <Resources />,
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
