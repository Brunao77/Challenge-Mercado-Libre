npm run build
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:Brunao77/Challenge-Mercado-Libre.git master:gh-pages