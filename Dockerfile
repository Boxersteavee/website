FROM node:18 AS builder

WORKDIR /build

COPY . .

RUN npm i
RUN npm run build

FROM nginx:alpine

COPY --from=builder /build/dist /usr/share/nginx/html
RUN chmod -R 777 /usr/share/nginx/html