# 1️⃣ Use official Node.js image as the base
FROM node:22-alpine AS builder

# 2️⃣ Set working directory
WORKDIR /app

# 3️⃣ Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# 4️⃣ Copy rest of the project files
COPY . .

# 5️⃣ Build the Next.js app for production
RUN npm run build

# 6️⃣ Use a smaller base image for serving the app
FROM node:22-alpine AS runner
WORKDIR /app

# ✅ INSTALL CURL For Health Check
RUN apk add --no-cache curl

# Copy only required files from builder stage
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.ts ./next.config.ts

# 7️⃣ Expose port and start the app
EXPOSE 80
CMD ["npm", "start"]
