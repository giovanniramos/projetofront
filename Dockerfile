## STAGE 1
FROM node:12-slim AS builder
WORKDIR /app

# Copiar arquivos de pacote para instalar dependências
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o restante dos arquivos do aplicativo
COPY . .

RUN npm run deploy

## STAGE 2
FROM nginx:1.17.1-alpine AS runtime
COPY --from=builder /app/nginx.conf       /etc/nginx/nginx.conf
COPY --from=builder /app/dist/seplag-spa  /usr/share/nginx/html

# Expor a porta na qual será executado
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["nginx", "-g", "daemon off;"]
