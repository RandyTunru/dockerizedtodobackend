FROM node
WORKDIR /app
COPY . .
RUN npm install
ENV NODE_ENV=production
ENV PGPASSWORD=password
ENV PGUSER=postgres
ENV PGDATABASE=todo
ENV PGHOST=db
EXPOSE 5000
CMD ["node", "src/index.js"]