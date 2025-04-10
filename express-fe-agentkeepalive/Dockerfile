FROM node:22.14.0-alpine3.21 AS build

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package-lock.json /usr/src/app/
COPY package.json /usr/src/app/
RUN npm install

COPY . /usr/src/app

FROM build AS production
WORKDIR /usr/src/app
COPY --from=build /usr/src/app .

EXPOSE 3000

ENTRYPOINT [ "/usr/src/app/entrypoint.sh" ] 