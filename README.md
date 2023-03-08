# Chova Cinema 리뉴얼 (진행중)

> [Chova Cinema](https://github.com/viveloper/chova-cinema) 리뉴얼 프로젝트

## 작업 할 내용

- 정적 타입 언어 사용 (TypeScript)
- SSG, ISR, SSR, CSR 활용 (Next.js)
- BFF 사용하여 프론트엔드 비즈니스 로직 개선 (Next.js API Routes)
- 서버 데이터 관리 방식 변경 (TanStack Query)
- 재사용성 증대를 위한 컴포넌트 리팩토링
- 로딩 / 에러 핸들링 고도화
- 컴포넌트 스타일링 방식 개선
- Storybook / API 모킹(MSW) 기반 개발
- 배포 자동화 (Vercel)
- 스토리북 배포 (Chromatic)

## 기술 스택 변경

- Next.js, TypeScript, Recoil, TanStack Query(React Query), Emotion, Storybook, MSW

## 주요 기능

- [x] 영화 목록 보기
- [x] 영화 상세 보기
- [ ] 영화 평점 및 관람평 작성
- [ ] 영화 예매 및 결제 기능 (영화관, 영화, 시간, 인원, 좌석, 결제)
- [ ] 마이 페이지 (결제 내역 및 결제 취소)

## 배포

- 서비스 : https://chova-cinema-next.vercel.app
- 스토리북 : https://6405c80c29140ed0511a0535-cldbvyhqko.chromatic.com

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
