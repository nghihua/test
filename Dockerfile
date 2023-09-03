FROM node:latest
WORKDIR /app
COPY . /app
RUN yarn
EXPOSE 3001
CMD ["yarn","serve"]