# ----- Build Stage -----
FROM oven/bun:1-alpine AS builder
WORKDIR /app

COPY package.json bun.lock tsconfig.json ./
COPY src ./src
RUN bun install --frozen-lockfile && bun run build

# ----- Production Stage -----
FROM oven/bun:1-alpine
WORKDIR /app

COPY --from=builder /app/build ./build
COPY package.json bun.lock ./
RUN bun install --production --ignore-scripts --frozen-lockfile

# Expose port 3000 (internal container port)
EXPOSE 3000

# Add health check for HTTP mode
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD if [ "$MCP_TRANSPORT" = "http" ] || [ "$MCP_TRANSPORT" = "sse" ]; then \
        wget --no-verbose --tries=1 --spider http://localhost:3000/health || exit 1; \
      else \
        exit 0; \
      fi

# Default command supports both stdio and HTTP modes
CMD ["node", "build/index.js"]
