# Temp_BE
(임시) 백엔드 레포
<hr>

> ## 작업 내용 및 기록
> ## WorkFlow
> ### 2023-04-22
> - #### 프로젝트 생성
> - #### 노드 모듈 생성
> - #### [프론트 템플릿](server/views/front.pug) 작성
> - #### [프론트 템플릿](server/views/front.pug) 연결
>   - [pug - 즉시 업뎃 / js 재시작 필요](#nodemon)
> ### 정리
> - 모듈
>   - Node 모듈 생성해서 활용
>   - 리액트 앱 만들듯이 기본적인 세팅해줌
>   - 앱/라우터/뷰 세팅에 뷰는 [pug 템플릿 엔진](https://pugjs.org/api/getting-started.html)
> - PUG 템플릿 엔진 
>   - [pug 문법 참고](https://jeong-pro.tistory.com/65)
>   - [생성 사이트](https://codepen.io/dpetrini/pen/yPMeBg) - 입력페이지 참고
>   - 간결하고 효율적이라고 하는데 문법이 익숙하진 않다보니 연습하는 느낌으로
> * * *
> ### 2023-04-23
> #### Nodemon
> - [Nodemon](https://www.npmjs.com/package/nodemon) is a tool that helps develop Node.js based applications <br>by automatically restarting the node application when file changes in the directory are detected.
> - [Mysql](https://www.npmjs.com/package/mysql) is a node.js driver for mysql. It is written in JavaScript, <br>does not require compiling, and is 100% MIT licensed.
> - #### Page Navigation - by pug
>   - html 태그의 다른 표현 방식일 뿐 동일 구조 속성명 일치. 익숙할 경우 효율성 향상 기대