// lol-api/src/models/champion.model.ts

export interface ChampionImage {
  full: string; // Ex: "Aatrox.png"
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface Champion {
  id: string; // Ex: "Aatrox"
  key: string; // Ex: "266"
  name: string; // Ex: "Aatrox"
  title: string; // Ex: "a Espada Darkin"
  image: ChampionImage;
  tags: string[]; // Ex: ["Fighter", "Tank"]
  blurb: string; // Descrição curta
  // Adicione outros campos se precisar, como 'info', 'stats', etc.
}

// Interface para a resposta completa da DDragon API
export interface DDragonResponse {
  type: string;
  format: string;
  version: string;
  data: {
    // A API retorna um objeto onde a chave é o nome do campeão
    [championId: string]: Champion;
  };
}
