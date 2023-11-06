FROM node:18-alpine AS build

WORKDIR /build

# Copy package and package-lock
COPY package.json yarn.lock ./

# Clean install dependencies based package-lock
RUN yarn install

COPY . .

# Build application
RUN yarn build

FROM node:18-alpine AS dependencies

# Environment Production
ENV NODE_ENV production

WORKDIR /dependencies

# Copy package and package-lock
COPY --from=build /build/package.json .
COPY --from=build /build/yarn.lock ./

# Clean install dependencies based package-lock
RUN yarn install --production

FROM node:18-alpine

WORKDIR /app

# Copy from build
COPY --from=build /build/next.config.js .
COPY --from=build /build/public/ ./public
COPY --from=build /build/.next ./.next
COPY --from=dependencies /dependencies/node_modules ./node_modules

EXPOSE 3000

# Run app command
CMD ["node_modules/.bin/next", "start"]