import MiniblogPreview from '../assets/miniblog-preview.png';
import SecretwordPreview from '../assets/secretword-preview.png';
import DoggyPreview from '../assets/doggy-preview.png';
import PokemonPreview from '../assets/pokemon-app-preview.png';
import TodoPreview from '../assets/todo-ts-preview.png';

const PROJECTS = [
  {
    repositoryName: 'Todo-ts',
    repositoryUrl: 'https://github.com/pedro-bink/todo-ts',
    hostingUrl: 'https://todo-aerb6or5i-pedro-bink.vercel.app',
    imageUrl: TodoPreview,
    description:
      'Todo-app feito com react e typescript. Nessa aplicação é possível adicionar, remover e marcar como feito as tarefas.',
    usedTechs: [
      'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original.svg',
      'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/typescript/typescript-original.svg',
      'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/tailwindcss/tailwindcss-plain.svg',
      'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/nodejs/nodejs-plain.svg',
      'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/express/express-original.svg',
    ],
  },
  {
    repositoryName: 'Pokemon-app',
    repositoryUrl: 'https://github.com/pedro-bink/pokemon-app',
    hostingUrl: 'https://pokemon-app.vercel.app/',
    imageUrl: PokemonPreview,
    description:
      'Pokemon-app feito com Vuejs e javascript. A aplicação consome a api do pokemon e permite ao usuário pesquisar o Pokémon desejado pelo nome ou Id e ver as informações dele.',
    usedTechs: [
      'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/vuejs/vuejs-original.svg',
      'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-plain.svg',
      'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-plain.svg',
    ],
  },
  {
    repositoryName: 'Plano meu pet',
    repositoryUrl: '',
    hostingUrl: 'https://doggy-silk.vercel.app/',
    imageUrl: DoggyPreview,
    description:
      'Plano meu pet, aplicação feita em React e Javascript. A aplicação se trata de um quiz onde o usuário responde diversas perguntas sobre seu cão e tem um plano de treinamento feito exclusivamente para ele.',
    usedTechs: [
      'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original.svg',
      'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-plain.svg',
      'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-plain.svg',
    ],
  },
  {
    repositoryName: 'Secret-word',
    repositoryUrl: 'https://github.com/pedro-bink/react-secretWord',
    hostingUrl: '',
    imageUrl: SecretwordPreview,
    description:
      'Secret-word, aplicação feita em React e Javascript. A aplicação se trata de um jogo onde o usuário tem que adivinhar a palavra secreta. Este projeto foi feito para praticar o uso de hooks e context api.',
    usedTechs: [
      'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original.svg',
      'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-original.svg',
      'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-plain.svg',
    ],
  },
  {
    repositoryName: 'Mini-blog',
    repositoryUrl: 'https://github.com/pedro-bink/mini-blog',
    hostingUrl: '',
    imageUrl: MiniblogPreview,
    description:
      'Aplicação feita em React e Javascript. A aplicação se trata de um blog onde o usuário pode criar, editar e deletar posts. O backend foi desenvolvido em C# com o framework .NET Core, utilizando JWT, Entity Framework, MySql e Identity.',
    usedTechs: [
      'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original.svg',
      'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/csharp/csharp-original.svg',
      'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/dotnetcore/dotnetcore-plain.svg',
    ],
  },
];

export default PROJECTS;
