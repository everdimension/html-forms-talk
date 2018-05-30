| Take the easy way with ValidityState Web API
| How I learned to stop worrying and love the DOM API
| Form Validation

* Why accessibility matters
  * it's not only about people with disabilities. It's about making your
    app usable by all users. Does the sign up form save the credentials?
    Does the back button work? Etc...
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



## Notes

Всем привет! Меня зовут Ярослав. Я работаю разработчиком интерфейсов в компании EXANTE

И я хочу рассказать про валидацию форм.

Но сначала пару слов об... Accessibility. Этот термин, полагаю, всем знаком. Переводится он как "доступность". И на мой взгляд
Можно дать ему краткое определение — это набор действий, которые мы предпринимаем, чтобы нашим приложением могло воспользоваться как можно большее количество пользователей. Как правило здесь начинают говорить про людей с ограниченными способностями, но определение термина ими не... ограничивается :) И если, скажем, вашу форму регистрации не может пройти пользователь без мышки или тачпада, то можно сказать, что тест на доступность приложение не прошло.

Но задачи "доступности" не только в том, чтобы приложением было *возможно* пользоваться, но и в том, чтобы им было *удобно* пользоваться. Если вернуться к пользователю, у которого есть только клавиатура, то если при каждом переходе на новую страницу ему приходится с клавиатуры пробираться через все пункты меню из шапки прежде чем он сможет добраться до основного контента, то конечно таким приложением *возможно* пользоваться, но можно утверждать, что это *неудобно*.

Когда мы говорим о доступности в контексте web-приложений, обязательно упоминается **Семантичная вёрстка**. Как эти понятия связаны?

Зачем вообще уделять внимание *семантичности*? Я слышал разные ответы на эти вопросы, больше всего мне понравился ответ "чтобы удовлетворить официальному html-валидатору". На мой взгляд, проблема терминов доступности и семантичности в том, что они покрывают очень большую область действий, которые можно предпринять, что сделать приложение "лучше". Из-за этого у разработчиков пропадает чёткое представление о том, *зачем* эти вещи нужны и остаётся только уверенность, что это что-то *нужное*.

Accessibility is a pit of despair. Я считаю, что задача по внедрению доступности отлично подходит под категорию "яма отчаяния". В отличие от ситуаций, когда поехала вёрстка, отобразились неверные данные или перестала работать кнопка, которые будут замечены скорее рано, чем поздно, проблемы доступности как правило остаются незамеченными намного дольше. А вернее, разработчик, даже тот, который уделяет время доступности, может вовсе не подозревать о каком-то недочёте, который вызывает трудности о определённой группы пользователей.
Когда мы используем семантически правильные элементы, мы даём подсказку браузеру о предназначении этих элементов. Браузер, в свою очередь, заботится о том, чтобы сделать такой элемент "доступным"

Давайте посмотрим на парочку распространённых ошибок, которые можно совершить, если не думать о семантике, и подумаем, почему от этого может страдать accessibility.

Самый яркий пример — когда для интерактивного элемента используется обычный <div />. Элемент в данном случае может быть визуально не отличим от кнопки, но для пользователь без мышки такой элемент всё равно, что отсутствует.

Здесь я хочу сделать маленькое отступление. Всё сказанное ранее подразумевает, что в вашем приложении важен вопрос доступности. Но случаи бывают разные.

> Если вам всё равно на доступность, задумайтесь о том, чтобы использвать canvas для вёрстки.

Абсолютно серьёзно.
