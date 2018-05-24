| Take the easy way with ValidityState Web API
| How I learned to stop worrying and love the DOM API
| Form Validation

* Why accessibility matters
  * a11y is a pit of despair
    * nobody checks for it
    * better dev experience can lead to better a11y
  * don't do <span onClick={} />
    * we can't actually force everyone to stop doing this,
      but we can teach ways to write less code which should also lead to better code
    * less code doesn't mean better code, but...
    * if writing less code can also mean a better app,
      we can call this a "pit of success"
  * if you're not using canvas for layout and not leveraging power of html,
    you're walking on the very bottom of the pit of despair
  * Point is: we *can* implement almost anything without worrying
    about semantics (and even add it later)

* why we use libraries
  Developers used to come from "full featured" languages like java and c++,
  where they had standard libraries
  "Taming the meta language" by cheng lou
* Почему в es6 появились классы, когда в целом коммьюнити двигается в сторону FP?
  Это даёт общепринятый синтаксис для записи классов и позволяет уйти от споров из-за библиотек,
  которые добавляли этот функционал
* Нельзя заставить всех писать код "более понятно". Люди будут стараться, но нет никаких гарантий
  Использование же типов приводит к тому, что разработчик хочет типизировать код ради себя самого,
  а выгоду получают также и остальные
  *Developers must want to write semantic code*.

* What is a form?
  * It's question-answer type of information. In other words, a key-value data structure
    With complex, interactive and beautiful forms we tend to forget that

    Login form? Questions-answers
    Online payment? Questions-answers
    Interactive-builder? Questions-answers

    Radio? { [name]: value }
    Checkbox?
      rememberMe: true | false
      pizzaToppings: { fish: true, banana: false }

  * Html form is a framework

* DOM API / ValidityState
  * browser support: { "browserslist": ["some old browser +"] }
  * form works without any onChange handlers on inputs
  * validity state examples
    * "repeat password" validation
    * email validation
    * url validation
  * input:invalid, form:invalid

  * having too many ways to read form data and interact with the form
    should not be the reason for not using any of them. It's like saying
    that react has too many from libs and that's why I will not use react
