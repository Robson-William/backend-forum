FROM node:lts-alpine

WORKDIR /home/node/forum

COPY package.json .

RUN npm install -g pnpm
RUN pnpm install

COPY . .

EXPOSE 8080

CMD ["pnpm", "start"]