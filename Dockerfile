#  --- Build ---
FROM node:20.15.1-alpine3.19 AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
ENV PATH=/app/node_modules/.bin:$PATH
# install import-meta-env for inject runtime env var
RUN npx pkg ./node_modules/@import-meta-env/cli/bin/import-meta-env.js \
    -t latest-alpine-x64 \
    -o import-meta-env-alpine
COPY . .
RUN npm run build

#  --- Production ---
FROM nginx:1.27.0-alpine3.19 AS production
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /var/www/html/
COPY --from=build /app/import-meta-env-alpine /var/www/html/
COPY .env.example start.sh /var/www/html/

EXPOSE 3000

ENTRYPOINT ["sh","/var/www/html/start.sh"]