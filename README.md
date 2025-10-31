# Azure Functions Node.js Project

このプロジェクトは、Azure Functions（Node.js）の開発環境です。

## 開発の始め方

### 1. Azurite の起動

Azurite（Azure Storage Emulator）を起動します：

```bash
# プロジェクトルートディレクトリで実行
azurite --location .azurite --debug .azurite/debug.log
```

または、VS Code タスクから起動することもできます。

### 2. Azure Functions の起動

```bash
cd MyFunctionApp
npm install
npm run start
```

## ファイル構成

- `MyFunctionApp/` - Azure Functions プロジェクト
- `.azurite/` - Azurite の一時ファイル（Git では無視されます）
- `.gitignore` - Azurite ファイルを除外

## 注意事項

- `.azurite/`フォルダ内のファイルは自動生成されるため、リポジトリには含まれません
- Azurite のデータは開発用の一時的なものです
- 本番環境では実際の Azure Storage を使用してください
