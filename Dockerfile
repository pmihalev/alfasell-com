# syntax=docker/dockerfile:1
ARG NODE_VERSION=20.20.2

# ──────────────────────────────────────────────────────────────────────────
# Builder: install deps + build the static Astro site → /app/dist
# ──────────────────────────────────────────────────────────────────────────
FROM node:${NODE_VERSION}-bookworm-slim AS builder
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci || npm install
COPY . .
RUN npm run build

# ──────────────────────────────────────────────────────────────────────────
# Runtime: nginx serving the static bundle on :8080 (Fly internal_port)
# ──────────────────────────────────────────────────────────────────────────
FROM nginx:1.27-alpine AS runtime
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
