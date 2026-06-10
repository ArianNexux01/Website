export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: 'sistemas-web',
    title: 'Desenvolvimento de Sistemas Web',
    description:
      'Plataformas institucionais, portais, bases de dados e sistemas de gestão construídos para escala, segurança e desempenho.',
    icon: 'monitor',
  },
  {
    id: 'candidaturas',
    title: 'Soluções para Concursos e Candidaturas',
    description:
      'Sistemas robustos para inscrição, validação, gestão documental, triagem e acompanhamento de candidaturas em larga escala.',
    icon: 'file-check',
  },
  {
    id: 'integracoes',
    title: 'Integração de Sistemas e APIs',
    description:
      'Integração entre plataformas, serviços externos, bases de dados e sistemas legados, com arquitectura segura e documentada.',
    icon: 'network',
  },
  {
    id: 'consultoria',
    title: 'Consultoria Tecnológica',
    description:
      'Apoio na definição, arquitectura e implementação de soluções digitais ajustadas ao contexto operacional e estratégico do cliente.',
    icon: 'layers',
  },
  {
    id: 'automacao',
    title: 'Automação de Processos',
    description:
      'Digitalização de fluxos operacionais, redução de tarefas manuais e optimização de processos internos com tecnologia aplicada.',
    icon: 'cpu',
  },
  {
    id: 'dashboards',
    title: 'Dashboards e Gestão de Dados',
    description:
      'Visualização de indicadores, relatórios, painéis de controlo e suporte à tomada de decisão baseada em dados estruturados.',
    icon: 'bar-chart',
  },
];
