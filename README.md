# Ryan's Express Fast Starter

![Author](https://img.shields.io/badge/Author-ryan-orange.svg)
![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Last Commit](https://img.shields.io/github/last-commit/ryan-ahn/boilerplate-express-server)

## Setting Stack
- Environment : node
- Framework : express
- Database : mongoDB
- ODM : mongoose
- Type : ts-node & typescript

## Project Start
1. nodemon 설치
```
$ npm install -g nodemon
```
2. clone & dependencies 설치
```
$ git clone ryan-ahn/boilerplate-express-server
$ cd boilerplate-express-server
$ npm install
```

2. environment 설정
```
.env 파일 추가하기
PORT, MONGODB_DEV_URL, MONGODB_PROD_URL, DEV_ROOT_ORIGIN, PROD_ROOT_ORIGIN 입력하기
```
4. server 시작하기
```
$ npm run dev
```

## Code Pattern
- Routes + Controllers + Services 패턴을 따름
- Express에서 지원하지 않는 Typescript를 사용하기 위해 TS-Node가 필요
- ESLint + StyleLint + Prettier 포메터 조합

## Code Structure
&nbsp;⎣&nbsp;**config** - 환경 설정 <br/>
&nbsp;⎣&nbsp;**constant** - 정적 리소스 <br/>
&nbsp;⎣&nbsp;**controllers** - 리퀘스트 핸들링 <br/>
&nbsp;⎣&nbsp;**interfaces** - 타입 지정 <br/>
&nbsp;⎣&nbsp;**loaders** - 외부 서비스 연결 <br/>
&nbsp;⎣&nbsp;**modules** - utils, handler, hooks 등 <br/>
&nbsp;⎣&nbsp;**services** - 서비스 로직 <br/>
