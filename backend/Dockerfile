# Base stage
FROM node:22-alpine3.19 AS base

WORKDIR /usr/src/app

# Dependencies stage: install production dependencies only
FROM base AS deps
COPY package.json package-lock.json ./
RUN  npm i --omit=dev

# Build stage: install all dependencies to build the API
FROM base AS build
COPY package.json package-lock.json ./
RUN npm i

COPY . .
RUN npm run build

# Final stage: prepare the production environment
FROM base AS final
WORKDIR /usr/src/app
ENV NODE_ENV production

# Create a non-root user and group
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# Copy necessary files and build output from previous stages
COPY package.json ./
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/dist ./dist

EXPOSE 3000

# Start the application
CMD ["node", "dist/src/main"]
