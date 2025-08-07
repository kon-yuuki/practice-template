# Vite Vanilla JS Template

Three.js対応のVite + Vanilla JSテンプレートです。GitHub Actionsで自動デプロイされます。

## 🚀 セットアップ

1. **テンプレートをクローン**
   ```bash
   git clone https://github.com/kon-yuuki/practice-template.git <project-name>
   cd <project-name>
   npm install
   ```

2. **新しいリポジトリを作成してpush**
   ```bash
   # GitHubリポジトリ作成＋push（一発）
   gh repo create <project-name> --public --source=. --push
   
   # または手動で
   rm -rf .git
   git init
   git add .
   git commit -m "Initial commit"
   gh repo create <project-name> --public
   git remote add origin https://github.com/<username>/<project-name>.git
   git push -u origin main
   ```

3. **開発開始**
   ```bash
   npm run dev
   ```

## 🚀 デプロイ

1. [Vercel](https://vercel.com)でGitリポジトリをインポート
2. 完了！

pushするたびに自動デプロイされます。

## ✨ 機能

- ⚡ Vite（高速開発サーバー）
- 🎨 Three.js対応
- 🎯 GLSL/シェーダーファイル対応（`.glsl`, `.vert`, `.frag`）
- 🚀 Vercel対応
- 📱 レスポンシブ対応

## 🛠 スクリプト

- `npm run dev` - 開発サーバー起動
- `npm run build` - ビルド
- `npm run preview` - ビルド結果のプレビュー
