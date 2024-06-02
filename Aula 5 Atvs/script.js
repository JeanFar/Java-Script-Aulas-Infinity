let windows = 0;
let unix = 0;
let linux = 0;
let netware = 0;
let macos = 0;
let outro = 0;

let voto = parseInt(prompt('Vote 1 - Windows Server; 2 - Unix; 3 - Linux; 4 - Netware; 5 - MacOS; 6 - Outros. Digite 0 para sair'));

while (voto !== 0) {
  if (voto === 1) { windows += 1; }
  else if (voto === 2) { unix += 1; }
  else if (voto === 3) { linux += 1; }
  else if (voto === 4) { netware += 1; }
  else if (voto === 5) { macos += 1; }
  else if (voto === 6) { outro += 1; }

  // Solicita outro voto
  voto = parseInt(prompt('Vote 1 - Windows Server; 2 - Unix; 3 - Linux; 4 - Netware; 5 - MacOS; 6 - Outros. Digite 0 para sair'));
}

let candidatos = [windows, unix, linux, netware, macos, outro];
let total = 0;

for (let i = 0; i < candidatos.length; i++) {
  total += candidatos[i];
}

console.log(Total de votos: ${total});

// Multiplica por 100 e divide pelo total
console.log('Sistema Operacional     Votos    %');
console.log('----------------------------------------');
console.log(Windows Server          ${windows}       ${(windows * 100 / total).toFixed(2)});
console.log(Unix                    ${unix}       ${(unix * 100 / total).toFixed(2)});
console.log(Linux                   ${linux}       ${(linux * 100 / total).toFixed(2)});
console.log(Netware                 ${netware}       ${(netware * 100 / total).toFixed(2)});
console.log(MacOS                   ${macos}       ${(macos * 100 / total).toFixed(2)});
console.log(Outros                  ${outro}       ${(outro * 100 / total).toFixed(2)});
console.log('----------------------------------------');
console.log(Total: ${total});