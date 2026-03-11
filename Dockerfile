# ---------- build stage ----------
FROM node:20-alpine AS builder

WORKDIR /app

# 启用 pnpm
RUN npm install -g pnpm@8.7.6

# 复制依赖定义
COPY package.json pnpm-lock.yaml* ./

# 安装全部依赖（包括 dev，用于构建）
RUN pnpm install --frozen-lockfile

# 复制源码
COPY . .

# 编译 NestJS
RUN pnpm build


# ---------- runtime stage ----------
FROM node:20-alpine

WORKDIR /app

RUN corepack enable

# 只复制 package.json
COPY package.json pnpm-lock.yaml* ./

# 只安装生产依赖
RUN pnpm install --prod --frozen-lockfile

# 复制编译后的代码
COPY --from=builder /app/dist ./dist

# NestJS 默认端口一般是 3000
EXPOSE 3000

# 启动服务
CMD ["node", "dist/main.js"]
