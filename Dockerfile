FROM node as builder

WORKDIR /app

COPY package.json package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN npm prune

FROM node

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

ENV PORT=3000

EXPOSE $PORT

ENTRYPOINT [ "node", "dist/app.js" ]