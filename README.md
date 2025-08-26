## iWeather — Estudos de Testes Automatizados (React Native + Expo Go)

Aplicativo de clima desenvolvido com React Native (Expo) usado como base de estudo para testes automatizados. Permite buscar a cidade, visualizar clima atual e próximos dias usando a API do OpenWeatherMap.

### Principais objetivos
- **Estudar testes automatizados** em aplicações React Native com Jest.
- **Praticar boas práticas** de organização, componentes e hooks.

### Stack
- **Expo SDK 53** (React Native 0.79, React 19)
- **React Navigation**
- **Axios** (requisições HTTP)
- **Day.js** (datas)
- **Async Storage** (persistência de cidade)
- **SVG** (ícones e ilustrações)

## Requisitos
- Node.js 18+ (LTS recomendado)
- npm 9+ ou pnpm/yarn
- Expo Go no dispositivo físico ou emulador (Android Studio ou Xcode)

## Configuração de ambiente
O app consome a API do OpenWeatherMap e requer uma chave de API.

1) Crie uma conta e obtenha a chave: [OpenWeatherMap](https://openweathermap.org/api)

2) Na raiz do projeto, crie um arquivo `.env` com:

```bash
EXPO_PUBLIC_WEATHER_APP_ID=SEU_TOKEN_AQUI
```

3) Reinicie o bundler do Expo após criar/alterar o `.env`.

Observação: em projetos Expo SDK 49+, variáveis com prefixo `EXPO_PUBLIC_` ficam disponíveis em `process.env`. Neste projeto a chave é lida em `src/services/api.ts` via `process.env.EXPO_PUBLIC_WEATHER_APP_ID`.

## Instalação

```bash
npm install
```

## Execução

- Iniciar o bundler:

```bash
npm run start
```

- Abrir no Android (emulador ou dispositivo):

```bash
npm run android
```

- Abrir no iOS (somente macOS):

```bash
npm run ios
```

- Executar no navegador (Web):

```bash
npm run web
```

## Testes automatizados
O projeto usa **Jest**. Scripts disponíveis:

```bash
npm test            # execução única
npm run test:watch  # modo observação
npm run test:coverage  # relatório de cobertura
```

### Convenções sugeridas
- Nome de arquivo de teste: `NomeDoComponente.test.tsx` ou `algo.test.ts`.
- Colocar testes próximos do código fonte ou em `__tests__/`.

### Exemplo mínimo (ilustrativo)
```ts
// Example.test.ts
describe('exemplo', () => {
  it('soma 1 + 1', () => {
    expect(1 + 1).toBe(2);
  });
});
```

Para testes que fazem requisições, recomenda-se **mockar** o `axios` (por exemplo, com `jest.mock('axios')`) para manter os testes rápidos e determinísticos.

## Estrutura do projeto (resumo)

```text
src/
  assets/           # imagens e ícones
  components/       # UI (WeatherToday, NextDays, etc.)
  contexts/         # Context API (CityContext)
  hooks/            # hooks (useCity)
  libs/             # integrações (dayjs, storage)
  routes/           # navegação
  screens/          # telas (Dashboard, Search)
  services/         # API (axios + OpenWeather)
  styles/           # tema/estilos
  utils/            # utilitários (icons, datas)
```

## Dicas e solução de problemas
- **Chave de API inválida/ausente**: verifique o `.env` e reinicie o bundler.
- **Cache do Metro**: às vezes ajuda limpar e reiniciar (`npx expo start -c`).
- **Permissões de rede**: use HTTPS e teste em dispositivo/emulador com internet.

## Scripts (package.json)
- `start`: inicia o Expo
- `android`: abre no Android
- `ios`: abre no iOS
- `web`: abre no navegador
- `test`, `test:watch`, `test:coverage`: executam os testes com Jest

## Licença
Uso educacional. Você pode adaptar livremente para seus estudos.


