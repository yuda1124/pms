## 사용기술

- React, TypeScript, Redux, Redux Thunk, Sass

## 구현 완료 기능

1. 환자 정보 테이블

- 환자 정보 조회
- 페이징 기능
- 로우 갯수 선택 기능
- 정렬 기능

2. 필터 기능

- 성별, 나이, 인종, 민족, 사망여부로 필터 가능

## 미구현 기능

1. 상세정보 조회

- 클릭 시 팝업을 통해 조회되도록 구현

2. 그래프

- 파이차트는 라이브러리 사용 예정
- API 내용을 현재 필터 값을 통해 계산하여 노출

3. 스타일 추가

## Getting Started

### 1. 환경변수 설정

- .env.sample 파일 참조

```
REACT_APP_END_POINT=${END_POINT}/${PREFIX}
ex) REACT_APP_END_POINT=http://a.tv/api
```

### 2. start

```
yarn start
```
