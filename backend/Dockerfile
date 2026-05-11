FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 5000
HEALTHCHECK --interval=30s CMD wget -qO- http://localhost:5000/health
CMD ["node", "server.js"]
