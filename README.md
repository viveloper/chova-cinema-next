# Chova Cinema 리뉴얼 (진행중)

> [Chova Cinema](https://github.com/viveloper/chova-cinema) 리뉴얼 프로젝트

## 작업 내용

- 정적 타입 언어 사용 (TypeScript)
- CSR, SSR, SSG 활용 (Next.js)
- BFF 사용하여 프론트엔드 비즈니스 로직 개선 (Next.js API Routes)
- 서버 데이터 관리 방식 변경 (TanStack Query)
- 컴포넌트 스타일링 방식 개선 (Emotion)
- Storybook / API 모킹(MSW) 기반 개발
- 재사용성 증대를 위한 컴포넌트 리팩토링
- 로딩 / 에러 핸들링 고도화
- 정적 파일 데이터를 클라우드 DB로 변경
- 배포 자동화 (Vercel)

## 기술 스택 변경

- Next.js, TypeScript, Recoil, TanStack Query(React Query), Emotion, Storybook, MSW

## 배포

도메인 : https://chova-cinema-next.vercel.app

## 실행

```
yarn install
yarn dev
```

## [Using Docker](https://github.com/vercel/next.js/tree/canary/examples/with-docker#using-docker)

Add the following to the `next.config.js` file:

```javascript
// next.config.js
module.exports = {
  // ... rest of the configuration.
  output: 'standalone',
};
```

1. Install Docker on your machine.
2. Build your container: `docker build -t chova-cinema-next .`
3. Run your container: `docker run -p 3000:3000 chova-cinema-next`

You can view your images created with `docker images`.
