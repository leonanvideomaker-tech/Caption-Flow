// Depois do `next build`: a home (/) passa a ser a LP de lançamento em home/index.html.
// O rastreamento (Clarity, GTM, verificação do Facebook, sck + UTMs no checkout) está copiado
// do app/layout.tsx + components/CheckoutIndex.tsx. Para voltar à home antiga em React,
// basta tirar este script do "build" no package.json.
import fs from 'node:fs';

const html = fs.readFileSync('home/index.html', 'utf8');
for (const marca of ['xfe27qna3u', 'api.captionflow.com.br/d7ysednnoxju.js', 'facebook-domain-verification', "searchParams.set('sck'"]) {
  if (!html.includes(marca)) throw new Error(`home/index.html sem o rastreamento: ${marca}`);
}
fs.writeFileSync('out/index.html', html);
// payload React da home antiga: sem ele, nenhuma navegação interna remonta a página velha
for (const f of ['out/index.txt', 'out/__next.__PAGE__.txt']) fs.rmSync(f, { force: true });
console.log('home: LP de lançamento publicada em out/index.html');
