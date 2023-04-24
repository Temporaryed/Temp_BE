# Temp_BE

(임시) 백엔드 레포
<hr>

> ## 작업 내용 및 기록
> ## WorkFlow
> ### 2023-04-22
> #### 프로젝트 생성
> #### 노드 모듈 생성
> #### [Express](https://expressjs.com/)
> - is a minimal and flexible Node.js web application framework that provides a robust set of features <br>for web and
    mobile applications.
> #### [프론트 템플릿](server/views/front.pug) 작성
> #### [프론트 템플릿](server/views/front.pug) 연결
> - [pug - 즉시 업뎃 / js 재시작 필요](#nodemon)
> ### 정리
> - 모듈
    >

- Node 모듈 생성해서 활용

> - 리액트 앱 만들듯이 기본적인 세팅해줌
    >
- 앱/라우터/뷰 세팅에 뷰는 [pug 템플릿 엔진](https://pugjs.org/api/getting-started.html)
> - PUG 템플릿 엔진
    >

- [pug 문법 참고](https://jeong-pro.tistory.com/65)

> - [생성 사이트](https://codepen.io/dpetrini/pen/yPMeBg) - 입력페이지 참고
    >
- 간결하고 효율적이라고 하는데 문법이 익숙하진 않다보니 연습하는 느낌으로
> * * *
> ### 2023-04-23
> #### [Nodemon](https://www.npmjs.com/package/nodemon)
> - is a tool that helps develop Node.js based applications <br>by automatically restarting the node application when
    file changes in the directory are detected.
> #### [Mysql](https://www.npmjs.com/package/mysql)
> - is a node.js driver for mysql. It is written in JavaScript, <br>does not require compiling, and is 100% MIT
    licensed.
> #### Page Navigation - by pug
> - html 태그의 다른 표현 방식일 뿐 동일 구조 속성명 일치. 익숙할 경우 효율성 향상 기대
> #### Mysql Connection by [Previous](https://github.com/nn98/Solved.SKHU)
>   - 너무 [스파게티 코드](https://github.com/nn98/Solved.SKHU/blob/main/server/server.js)여서 그렇지 개별 코드 상태는 괜찮았던듯
> * * *
> ### 2023-04-24
> #### [ESLint](https://www.npmjs.com/package/eslint)
> - [Docs](https://eslint.org/) statically analyzes your code to quickly find problems. <br>It is built into most text
    editors <br>and you can run ESLint as part of your continuous integration pipeline.
> #### [Morgan](https://www.npmjs.com/package/morgan)
> - HTTP request logger middleware for node.js
> #### [Nunjucks](https://www.npmjs.com/package/Nunjucks)
> - [Nunjucks](https://mozilla.github.io/nunjucks/) is a full featured templating engine for javascript. It is heavily
    inspired by jinja2. View the docs [here](https://mozilla.github.io/nunjucks/).
> #### [Sequelize](https://www.npmjs.com/package/sequelize) / [-cli](https://www.npmjs.com/package/sequelize-cli)
> - Sequelize is an easy-to-use and promise-based Node.js ORM tool for Postgres, MySQL, MariaDB, SQLite, DB2, Microsoft
    SQL Server, <br>and Snowflake. It features solid transaction support, relations, eager and lazy loading, read
    replication and more.
> #### [Mysql2](https://www.npmjs.com/package/mysql2)
> - MySQL client for Node.js with focus on performance. Supports prepared statements, <br>non-utf8 encodings, binary log
    protocol, compression, ssl
> #### [Npm i Options](https://docs.npmjs.com/cli/v9/commands/npm-install)
> #### 기본 DB 연결
> - [Sequelize 예제](https://thebook.io/080334/0363/) 참고