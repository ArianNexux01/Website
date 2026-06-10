export interface ProjectMetric {
  value: string;
  label: string;
}

export interface Project {
  id: string;
  name: string;
  category: string;
  type: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  tags: string[];
  metrics?: ProjectMetric[];
  isFeatured: boolean;
  accentColor?: string;
}

export const featuredProject: Project = {
  id: 'csmj-candidaturas',
  name: 'Sistema de Gestão de Concursos e Candidaturas Online',
  category: 'Sistemas Institucionais',
  type: 'Candidaturas Online',
  shortDescription: 'Um sistema preparado para processos críticos e de grande escala.',
  fullDescription:
    'A Polisakidila desenvolveu uma plataforma de gestão de concursos e candidaturas online utilizada no concurso do Conselho Superior da Magistratura Judicial. A solução permitiu a recepção, organização e gestão de mais de 200.000 candidaturas, demonstrando capacidade técnica para suportar processos institucionais de elevada complexidade, volume e responsabilidade.',
  features: [
    'Submissão de candidaturas online',
    'Gestão de dados dos candidatos',
    'Upload e validação documental',
    'Organização de processos por fases',
    'Painel administrativo centralizado',
    'Filtros e pesquisa avançada',
    'Relatórios e exportação de dados',
    'Segurança e controlo de acesso',
    'Escalabilidade para alto volume de tráfego',
    'Gestão centralizada da informação',
  ],
  metrics: [
    { value: '200k+', label: 'Candidaturas recebidas' },
    { value: '100%', label: 'Processo digital' },
    { value: 'CSMJ', label: 'Cliente institucional' },
    { value: 'Alta', label: 'Disponibilidade' },
  ],
  isFeatured: true,
};

export const portfolioProjects: Project[] = [
  {
    id: 'kbhvn',
    name: 'KBHVN',
    category: 'Serviços Online',
    type: 'Gestão de Pedidos',
    shortDescription:
      'Plataforma digital para submissão, gestão e acompanhamento de pedidos de serviços online.',
    fullDescription:
      'Uma plataforma que permite maior organização operacional, rastreabilidade e eficiência no tratamento de solicitações de serviços.',
    features: [
      'Submissão online de pedidos',
      'Acompanhamento do estado dos pedidos',
      'Gestão administrativa das solicitações',
      'Organização de fluxos de atendimento',
      'Centralização da informação',
    ],
    tags: ['Web App', 'Serviços', 'Gestão'],
    isFeatured: false,
    accentColor: '#006BFF',
  },
  {
    id: 'itel-escolar',
    name: 'Software de Gestão Escolar',
    category: 'Educação',
    type: 'Gestão Escolar',
    shortDescription:
      'Sistema de gestão escolar desenvolvido para apoiar processos académicos e administrativos do ITEL.',
    fullDescription:
      'Uma plataforma para apoiar a gestão académica e administrativa de uma instituição de ensino, contribuindo para uma gestão mais organizada, digital e eficiente.',
    features: [
      'Gestão de alunos e matrículas',
      'Controlo académico e de notas',
      'Organização administrativa',
      'Registo e acompanhamento de informação escolar',
      'Centralização dos dados escolares',
    ],
    tags: ['Educação', 'Gestão', 'Institucional'],
    isFeatured: false,
    accentColor: '#08255C',
  },
  {
    id: 'growth-software',
    name: 'Growth Software',
    category: 'Produtividade',
    type: 'Gestão de Tarefas',
    shortDescription:
      'Plataforma de gestão de tarefas para organização de equipas e acompanhamento de actividades.',
    fullDescription:
      'Uma solução para organizar equipas, acompanhar tarefas e melhorar a produtividade operacional, desenvolvida para cliente no mercado brasileiro.',
    features: [
      'Criação e atribuição de tarefas',
      'Organização e gestão de equipas',
      'Acompanhamento de progresso',
      'Gestão de prioridades',
      'Colaboração interna',
    ],
    tags: ['Produtividade', 'SaaS', 'Internacional'],
    isFeatured: false,
    accentColor: '#006BFF',
  },
  {
    id: 'dezpila-iptv',
    name: 'Dezpila',
    category: 'Media Digital',
    type: 'Distribuição por IPTV',
    shortDescription:
      'Plataforma para distribuição de conteúdo por IPTV com gestão de catálogo e controlo de acesso.',
    fullDescription:
      'Uma plataforma concebida para gerir, organizar e disponibilizar conteúdos digitais em ambiente online, com foco em acesso, controlo e experiência de consumo via IPTV.',
    features: [
      'Gestão de conteúdos digitais',
      'Distribuição por IPTV',
      'Organização de catálogo',
      'Controlo de acesso',
      'Plataforma preparada para consumo digital',
    ],
    tags: ['IPTV', 'Media', 'Streaming'],
    isFeatured: false,
    accentColor: '#08255C',
  },
];
