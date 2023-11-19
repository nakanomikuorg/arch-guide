FROM node:alpine

WORKDIR /app

# ENV HTTP_PROXY "http://172.17.0.1:7890"
# ENV HTTPS_PROXY "http://172.17.0.1:7890"

RUN apk add --no-cache git \
    && npm install -g pnpm \
    && npm cache clean --force

COPY . /app

RUN pnpm i \
    && rm -rf /root/.npm \
    && pnpm store prune

EXPOSE 5173

CMD ["pnpm", "docs:dev", "--host"]
