# .devcontainer/Dockerfile
FROM mcr.microsoft.com/devcontainers/typescript-node:1-22-bookworm

# 作業ディレクトリ
WORKDIR /workspace

# 実行ユーザー
USER node

# Azure Functions Core Tools と Azurite のインストール
RUN npm install -g \
    npm@11.5.2 \
    azure-functions-core-tools@4 \
    azurite

# バージョン確認用コマンド（デバッグ用）
RUN echo "=== Installed Versions ===" \
    && node --version \
    && npm --version \
    && func --version \
    && echo "========================="

# デフォルトコマンド（devContainer では sleep infinity で上書きされる）
CMD ["sleep", "infinity"]
