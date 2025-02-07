# FROM node:22-alpine AS base

# # 빌드 시 환경 변수 설정
# ARG VITE_SUPABASE_SERVICE_KEY
# ARG VITE_KAKAOMAP_KEY
# ARG VITE_VISITJEJU_KEY
# ARG VITE_VISIT_JEJU_BASE_URL
# ARG VITE_API_BASE_URL
# ARG VITE_SUPABASE_BASE_URL

# # 런타임에서 사용 가능하도록 ENV 설정
# ENV VITE_SUPABASE_SERVICE_KEY=$VITE_SUPABASE_SERVICE_KEY
# ENV VITE_KAKAOMAP_KEY=$VITE_KAKAOMAP_KEY
# ENV VITE_VISITJEJU_KEY=$VITE_VISITJEJU_KEY
# ENV VITE_VISIT_JEJU_BASE_URL=$VITE_VISIT_JEJU_BASE_URL
# ENV VITE_API_BASE_URL=$VITE_API_BASE_URL
# ENV VITE_SUPABASE_BASE_URL=$VITE_SUPABASE_BASE_URL

# # 종속성 설치를 위한 이미지 (의존성 캐싱 가능)
# FROM base AS deps
# RUN apk add --no-cache libc6-compat
# WORKDIR /app

# # package.json & yarn.lock 복사 후 종속성 설치
# COPY package.json yarn.lock ./
# RUN yarn install --frozen-lockfile

# # 빌드 전용 이미지
# FROM base AS builder
# WORKDIR /app

# # deps 단계에서 설치된 node_modules 사용
# COPY --from=deps /app/node_modules ./node_modules
# COPY . .

# # Vite 빌드 실행
# RUN yarn build

# # 최종 프로덕션 이미지 (가벼운 실행 환경)
# FROM base AS runner
# WORKDIR /app

# # 프로덕션 모드 설정
# ENV NODE_ENV=production

# # 실행할 빌드된 파일만 복사
# COPY --from=builder /app/dist ./dist
# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/package.json ./

# # 사용자 생성 및 권한 설정 (보안 강화)
# RUN addgroup --system --gid 1001 nodejs
# RUN adduser --system --uid 1001 react
# USER react

# # 포트 설정
# EXPOSE 3000
# ENV PORT=3000
# ENV HOSTNAME="0.0.0.0"

# # Vite 프론트엔드 서버 실행
# CMD ["yarn", "preview", "--host"]

FROM node:22-alpine AS base

# Define arguments for environment variables
ARG VITE_SUPABASE_SERVICE_KEY
ARG VITE_KAKAOMAP_KEY
ARG VITE_VISITJEJU_KEY
ARG VITE_VISIT_JEJU_BASE_URL
ARG VITE_API_BASE_URL
ARG VITE_SUPABASE_BASE_URL

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy source code and set environment variables
COPY . .
ENV VITE_SUPABASE_SERVICE_KEY=$VITE_SUPABASE_SERVICE_KEY
ENV VITE_KAKAOMAP_KEY=$VITE_KAKAOMAP_KEY
ENV VITE_VISITJEJU_KEY=$VITE_VISITJEJU_KEY
ENV VITE_VISIT_JEJU_BASE_URL=$VITE_VISIT_JEJU_BASE_URL
ENV VITE_API_BASE_URL=$VITE_API_BASE_URL
ENV VITE_SUPABASE_BASE_URL=$VITE_SUPABASE_BASE_URL
ENV NODE_ENV=production

# Build the Vite application
RUN yarn build

# Nginx server to serve static files
FROM nginx:stable-alpine AS runner

COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=base /app/dist /usr/share/nginx/html/

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
