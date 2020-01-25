<div align="center">
    <img alt="GoStack" src="https://arturkilldragon.files.wordpress.com/2019/06/omnistack-wallpaper-1920x1080.png" />
</div>

<h1 align="center">
  Semana Omnistack10
</h1>

<p align="center">Repositório da Semana Omnistack</a> 🎓 para o projeto DevRadar, proposto pela Rocketseat 🚀</p>

<p align="center">
  <a aria-label="Versão do Node" href="https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V12.md#12.14.1">
    <img src="https://img.shields.io/badge/node.js@lts-12.14.1-informational?logo=Node.JS"></img>
  </a>
  <a aria-label="Versão do React" href="https://github.com/facebook/react/blob/master/CHANGELOG.md#16120-november-14-2019">
    <img src="https://img.shields.io/badge/react-16.12.0-informational?logo=react"></img>
  </a>
  <a aria-label="Versão do Expo" href="https://www.npmjs.com/package/expo-cli/v/3.11.5">
    <img src="https://img.shields.io/badge/expo--CLI-3.11.5-informational?logo=expo"></img>
  </a>
</p>

## Como instalar
Para o projeto funcionar será necessário ter instalado o [Nodejs](https://nodejs.org/en/) e o [npm](https://www.npmjs.com/get-npm) (ou [yarn](https://legacy.yarnpkg.com/en/docs/getting-started)).

Em sistemas `linux`:
```
sudo apt-get install nodejs
```
O pacote acima irá conter tanto o `npm` quanto o `nodejs`.

Para rodar o projeto Mobile (Android) será necessário instalar o `AndroidStudio`.

Em sistemas `linux`:

1. Baixe pelo site do [AndroidStudio](https://developer.android.com/studio/);
2. Descompacte em sua pasta principal;
3. Acesse a pasta android-studio;
4. Acesse a pasta bin e rode, para seguir com a instalação:
```
./studio.sh
```

Após concluir a instalação, em `avdmanager`, no AndroidStudio será necessário escolher alguma versão do sistema, para o emulador e baixar sua dependências.

## Como rodar
Clone este respositório, para rodar o Backend e se necessitar de alguma interface rode também Frontend ou Mobile.

1. Rodando o backend:
```
cd Backend
npm run dev
```
* Rodando o Frontend
```
cd Frontend
npm start
```
* Rodando o Mobile (Android)

Com o emulador já funcionando, será necessário abrir o AndroidStudio com:
```
cd android-studio
cd bin
./studio.sh
```
Selecionar a opção `avdmanager` e rodar o emulador.

Com ele funcionando é necessário acessar o diretório `Mobile` e rodar:
```
npm start
```
Quando o `expo` abrir, em `http://localhost:19002/`, é só clicar em `Run on Android device/emulator`.