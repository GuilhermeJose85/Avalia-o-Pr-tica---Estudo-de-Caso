import { FlatList } from 'react-native';
import Jogo from '../components/Jogo';

export default function Home({ navigation }) {
  const jogos = [
    {
      id: '1',
      nome: 'Minecraft',
      categoria: 'Sandbox',
      plataforma: 'PC',
      descricao: 'Jogo de construção e exploração em mundo aberto.',
      imagem: 'https://i.imgur.com/wuNg5tZ.jpeg',
      data: '17/05/2009',
    },
    {
      id: '2',
      nome: 'God Of War 2018',
      categoria: 'Ação-aventura',
      plataforma: 'PS4, PS5 e PC',
      descricao: 'Kratos e Atreus embarcam em uma jornada pela mitologia nórdica.',
      imagem: 'https://i.imgur.com/X5n1a4Y.jpeg',
      data: '20/04/2018',
    },
    {
      id: '3',
      nome: 'EA FC 26',
      categoria: 'Esporte',
      plataforma: 'PS5, Xbox, PC e Switch',
      descricao: 'Simulador de futebol da EA Sports.',
      imagem: 'https://i.imgur.com/sz5yNQ9.jpeg',
      data: '2025',
    },
    {
      id: '4',
      nome: 'GTA V',
      categoria: 'Ação',
      plataforma: 'PlayStation, Xbox e PC',
      descricao: 'Mundo aberto ambientado em Los Santos.',
      imagem: 'https://i.imgur.com/sfPDbQi.jpeg',
      data: '17/09/2013',
    },
    {
      id: '5',
      nome: "Uncharted 4: A Thief's End",
      categoria: 'Aventura',
      plataforma: 'PlayStation e PC',
      descricao: 'A última aventura de Nathan Drake.',
      imagem: 'https://i.imgur.com/kjwyhGy.jpeg',
      data: '10/05/2016',
    },
    {
      id: '6',
      nome: 'The Last Of Us 2',
      categoria: 'Ação e Sobrevivência',
      plataforma: 'PS4 e PS5',
      descricao: 'Ellie busca vingança em um mundo pós-apocalíptico.',
      imagem: 'https://i.imgur.com/LzSENSo.jpeg',
      data: '19/06/2020',
    },
    {
      id: '7',
      nome: 'Spider Man',
      categoria: 'Ação',
      plataforma: 'PlayStation e PC',
      descricao: 'Aventura do Homem-Aranha em Nova York.',
      imagem: 'https://i.imgur.com/tWgVa6v.jpeg',
      data: '2018',
    },
    {
      id: '8',
      nome: 'Alan Wake',
      categoria: 'Terror',
      plataforma: 'Xbox, PlayStation e PC',
      descricao: 'Thriller psicológico cheio de mistérios.',
      imagem: 'https://i.imgur.com/gS76oxi.jpeg',
      data: '2010',
    },
    {
      id: '9',
      nome: 'Resident Evil 4 Remake',
      categoria: 'Terror',
      plataforma: 'PS4, PS5, Xbox e PC',
      descricao: 'Remake do clássico Resident Evil 4.',
      imagem: 'https://i.imgur.com/2Le0niY.jpeg',
      data: '24/03/2023',
    },
    {
      id: '10',
      nome: 'Call of Duty Modern Warfare 2',
      categoria: 'FPS',
      plataforma: 'PlayStation, Xbox e PC',
      descricao: 'Jogo de tiro em primeira pessoa.',
      imagem: 'https://i.imgur.com/hMRzCSP.jpeg',
      data: '2022',
    },
    {
      id: '11',
      nome: 'The Sims 4',
      categoria: 'Simulação',
      plataforma: 'PC e Consoles',
      descricao: 'Simulador de vida.',
      imagem: 'https://i.imgur.com/zwp2z6h.jpeg',
      data: '2014',
    },
    {
      id: '12',
      nome: 'NBA 2K26',
      categoria: 'Esporte',
      plataforma: 'PS5, Xbox e PC',
      descricao: 'Simulador de basquete.',
      imagem: 'https://i.imgur.com/Yfb7cv6.jpeg',
      data: '2025',
    },
    {
      id: '13',
      nome: 'Brawl Stars',
      categoria: 'MOBA',
      plataforma: 'Android e iOS',
      descricao: 'Jogo multiplayer da Supercell.',
      imagem: 'https://i.imgur.com/DNIZgjW.jpeg',
      data: '2018',
    },
    {
      id: '14',
      nome: 'Death Stranding',
      categoria: 'Aventura',
      plataforma: 'PlayStation e PC',
      descricao: 'Conecte uma América destruída.',
      imagem: 'https://i.imgur.com/CFhkwdE.jpeg',
      data: '08/11/2019',
    },
    {
      id: '15',
      nome: "Demon's Souls",
      categoria: 'RPG',
      plataforma: 'PS5',
      descricao: 'Remake do clássico soulslike.',
      imagem: 'https://i.imgur.com/NST4C1g.jpeg',
      data: '2020',
    },
    {
      id: '16',
      nome: 'Pokémon Trading Card Game Live',
      categoria: 'Cartas',
      plataforma: 'PC e Mobile',
      descricao: 'Versão digital do jogo de cartas Pokémon.',
      imagem: 'https://i.imgur.com/hOMUMGH.jpeg',
      data: '2023',
    },
    {
      id: '17',
      nome: 'Hollow Knight',
      categoria: 'Metroidvania',
      plataforma: 'PC, Switch, Xbox e PlayStation',
      descricao: 'Explore Hallownest em uma aventura desafiadora.',
      imagem: 'https://i.imgur.com/zWja3ke.jpeg',
      data: '2017',
    },
    {
      id: '18',
      nome: 'Red Dead Redemption 2',
      categoria: 'Ação e Mundo Aberto',
      plataforma: 'PlayStation, Xbox e PC',
      descricao: 'A vida de Arthur Morgan no Velho Oeste.',
      imagem: 'https://i.imgur.com/0kWopKo.jpeg',
      data: '26/10/2018',
    },
    {
      id: '19',
      nome: 'Little Nightmares',
      categoria: 'Terror e Plataforma',
      plataforma: 'PlayStation, Xbox, Switch e PC',
      descricao: 'Acompanhe Six em uma fuga assustadora.',
      imagem: 'https://i.imgur.com/fBVAGDx.jpeg',
      data: '28/04/2017',
    },
  ];

  return (
    <FlatList
      data={jogos}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Jogo
          jogo={item}
          navigation={navigation}
        />
      )}
    />
  );
}