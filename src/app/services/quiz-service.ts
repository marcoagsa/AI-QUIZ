import { Injectable } from '@angular/core';

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  answer: number;
}

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private questionPacks: { [key: string]: QuizQuestion[] } = {
    firstPack: [
      {
        id: 1,
        question: 'O que é Angular?',
        options: [
          'Uma linguagem',
          'Framework para aplicações web',
          'Banco de dados',
          'Editor de texto',
        ],
        answer: 1,
      },
      {
        id: 2,
        question: 'O que é TypeScript?',
        options: [
          'Superset do JS',
          'Banco de dados',
          'Servidor web',
          'Estilo CSS',
        ],
        answer: 0,
      },
      {
        id: 3,
        question: 'O que é Change Detection?',
        options: [
          'Atualizar o DOM quando dados mudam',
          'Compilar TypeScript',
          'Encriptar dados',
          'Gerir rotas',
        ],
        answer: 0,
      },
      {
        id: 4,
        question: 'O que é zone.js?',
        options: [
          'Biblioteca de animações',
          'Detector de eventos assíncronos',
          'Motor de templates',
          'Servidor HTTP',
        ],
        answer: 1,
      },
      {
        id: 5,
        question: 'Para que serve ngOnInit?',
        options: [
          'Destruir o componente',
          'Executar lógica após bindings',
          'Fazer styling',
          'Compilar código',
        ],
        answer: 1,
      },
      {
        id: 6,
        question: 'Diferença entre Observable e Promise?',
        options: [
          'Ambos são iguais',
          'Observable: múltiplos valores; Promise: um',
          'Promise cancela; Observable não',
          'Observable é sincrono',
        ],
        answer: 1,
      },
      {
        id: 7,
        question: 'Para que serve o async pipe?',
        options: [
          'Criar Observables',
          'Subscreve/cancela Observables no template',
          'Fazer chamadas HTTP',
          'Compilar templates',
        ],
        answer: 1,
      },
      {
        id: 8,
        question: 'O que é um Service?',
        options: [
          'Componente visual',
          'Classe com lógica partilhada',
          'Diretiva',
          'Pasta do projeto',
        ],
        answer: 1,
      },
      {
        id: 9,
        question: "O que faz providedIn:'root'?",
        options: [
          'Cria uma instância por componente',
          'Cria serviço singleton global',
          'Remove o serviço da app',
          'Faz lazy loading',
        ],
        answer: 1,
      },
      {
        id: 10,
        question: 'O que é um Module?',
        options: [
          'Arquivo CSS',
          'Conjunto que agrupa componentes e serviços',
          'Biblioteca externa',
          'Um pipe',
        ],
        answer: 1,
      },
      {
        id: 11,
        question: 'O que são Pipes?',
        options: [
          'Funções para transformar dados no template',
          'Tipos de serviços',
          'Hooks do ciclo de vida',
          'Módulos',
        ],
        answer: 0,
      },
      {
        id: 12,
        question: 'O que é Dependency Injection?',
        options: [
          'Injeção de CSS',
          'Sistema que fornece instâncias de serviços',
          'Router guard',
          'Componente',
        ],
        answer: 1,
      },
      {
        id: 13,
        question: 'O que é ngOnDestroy?',
        options: [
          'Hook para limpar subscrições',
          'Inicializa bindings',
          'Faz lazy loading',
          'Compila o componente',
        ],
        answer: 0,
      },
      {
        id: 14,
        question: 'O que é RxJS?',
        options: [
          'Biblioteca para programação reativa',
          'Servidor web',
          'Editor de código',
          'Uma linguagem',
        ],
        answer: 0,
      },
      {
        id: 15,
        question: 'Para que serve switchMap?',
        options: [
          'Paralelizar execuções',
          'Cancelar anterior e usar o mais recente',
          'Ignorar novos até terminar',
          'Executar em sequência',
        ],
        answer: 1,
      },
      {
        id: 16,
        question: 'Para que serve mergeMap?',
        options: [
          'Executar Observables em paralelo',
          'Executar em sequência',
          'Cancelar anterior',
          'Ignorar novos',
        ],
        answer: 0,
      },
      {
        id: 17,
        question: 'Para que serve concatMap?',
        options: [
          'Paralelo',
          'Sequencial (um de cada vez)',
          'Ignorar novos',
          'Cancelar anterior',
        ],
        answer: 1,
      },
      {
        id: 18,
        question: 'Para que serve exhaustMap?',
        options: [
          'Cancela anterior',
          'Ignora novas emissões enquanto uma corre',
          'Executa em paralelo',
          'Sequencia tasks',
        ],
        answer: 1,
      },
      {
        id: 19,
        question: 'O que é um Subject?',
        options: [
          'Componente',
          'Observable que permite emitir manualmente',
          'Ponteiro para DOM',
          'Um pipe',
        ],
        answer: 1,
      },
      {
        id: 20,
        question: 'Diferença BehaviorSubject vs Subject?',
        options: [
          'BehaviorSubject guarda último valor; Subject não',
          'Subject guarda; BehaviorSubject não',
          'Ambos iguais',
          'Nenhum guarda',
        ],
        answer: 0,
      },
      {
        id: 21,
        question: 'O que é Lazy Loading?',
        options: [
          'Carregar tudo no arranque',
          'Carregar módulos quando necessários',
          'Compilar no cliente',
          'Atualizar DOM',
        ],
        answer: 1,
      },
      {
        id: 22,
        question: 'O que é AOT?',
        options: [
          'Compilação antes do runtime',
          'Carregamento de módulos',
          'Tipo de serviço',
          'Hook do ciclo de vida',
        ],
        answer: 0,
      },
      {
        id: 23,
        question: 'O que é Angular CLI?',
        options: [
          'Editor de texto',
          'Ferramenta de linha de comandos para Angular',
          'Biblioteca de componentes',
          'Banco de dados',
        ],
        answer: 1,
      },
      {
        id: 24,
        question: 'O que é um Guard?',
        options: [
          'Componente',
          'Interceptador de rota que controla acesso',
          'Biblioteca',
          'Pasta de servidor',
        ],
        answer: 1,
      },
      {
        id: 25,
        question: 'O que é um Interceptor?',
        options: [
          'Intercepta requisições HTTP',
          'Subscrição RxJS',
          'Hook de componentes',
          'Diretiva',
        ],
        answer: 0,
      },
      {
        id: 26,
        question: 'Para que serve HttpClient?',
        options: [
          'Fazer chamadas HTTP',
          'Criar componentes',
          'Estilizar templates',
          'Gerir rotas',
        ],
        answer: 0,
      },
      {
        id: 27,
        question: 'O que é Two-Way Binding?',
        options: [
          'Sincronização entre modelo e template',
          'Pipe especial',
          'Serviço global',
          'Hook do ciclo',
        ],
        answer: 0,
      },
      {
        id: 28,
        question: 'O que é Template-Driven Form?',
        options: [
          'Form definido em TS',
          'Form definido no HTML',
          'Serviço de formulários',
          'Pipe',
        ],
        answer: 1,
      },
      {
        id: 29,
        question: 'O que é Reactive Form?',
        options: [
          'Form definido em TS',
          'Form definido no HTML',
          'Diretiva',
          'Pipe',
        ],
        answer: 0,
      },
      {
        id: 30,
        question: 'O que é ngFor?',
        options: [
          'Diretiva para iterar listas',
          'Hook',
          'Serviço',
          'Pasta do projeto',
        ],
        answer: 0,
      },
    ],
    secondPack: [
      {
        id: 1,
        question: 'O que é um Decorator em TypeScript?',
        options: [
          'Uma função que modifica classes em tempo de execução',
          'Um tipo de interface',
          'Um método de array',
          'Um operador lógico',
        ],
        answer: 0,
      },
      {
        id: 2,
        question: 'Qual a diferença entre interface e type em TypeScript?',
        options: [
          'Não há diferença',
          'Interface pode ser extendida, type não',
          'Type pode ser extendido, interface não',
          'Ambos podem ser extendidos mas de formas diferentes',
        ],
        answer: 3,
      },
      {
        id: 3,
        question: 'O que é Injeção de Dependência no Angular?',
        options: [
          'Injetar CSS nos componentes',
          'Padrão onde dependências são fornecidas externamente',
          'Método de validação de forms',
          'Sistema de rotas',
        ],
        answer: 1,
      },
      {
        id: 4,
        question: 'Para que serve o NgModule?',
        options: [
          'Declarar componentes, pipes e serviços',
          'Apenas para rotas',
          'Configurar HTTP',
          'Gerenciar estado',
        ],
        answer: 0,
      },
      {
        id: 5,
        question: 'O que é um Pipe puro vs impuro?',
        options: [
          'Puro: executa apenas quando input muda; Impuro: sempre executa',
          'Puro: sempre executa; Impuro: apenas quando input muda',
          'Ambos são iguais',
          'Puro: para números; Impuro: para strings',
        ],
        answer: 0,
      },
      {
        id: 6,
        question: 'Qual a diferença entre constructor e ngOnInit?',
        options: [
          'constructor: para DI; ngOnInit: após bindings',
          'São iguais',
          'constructor: após bindings; ngOnInit: para DI',
          'Nenhuma diferença prática',
        ],
        answer: 0,
      },
      {
        id: 7,
        question: 'O que é ViewChild?',
        options: [
          'Acessar elemento DOM ou componente filho',
          'Criar novo componente',
          'Serviço de HTTP',
          'Pipe para templates',
        ],
        answer: 0,
      },
      {
        id: 8,
        question: 'Para que serve o ChangeDetectionStrategy.OnPush?',
        options: [
          'Otimizar performance',
          'Forçar detecção de mudanças',
          'Desativar detecção de mudanças',
          'Mudar ordem de renderização',
        ],
        answer: 0,
      },
      {
        id: 9,
        question: 'O que é um Resolver?',
        options: [
          'Carrega dados antes da rota ativar',
          'Resolve conflitos de CSS',
          'Valida formulários',
          'Compila templates',
        ],
        answer: 0,
      },
      {
        id: 10,
        question: 'Qual a diferença entre Observable e Subject?',
        options: [
          'Subject pode emitir valores, Observable não',
          'Observable é multicast, Subject unicast',
          'São iguais',
          'Subject é lazy, Observable não',
        ],
        answer: 0,
      },
      {
        id: 11,
        question: 'O que é CanActivate?',
        options: [
          'Guard para proteger rotas',
          'Método para ativar componentes',
          'Serviço de autenticação',
          'Pipe de segurança',
        ],
        answer: 0,
      },
      {
        id: 12,
        question: 'Para que serve o trackBy no ngFor?',
        options: [
          'Otimizar performance do ngFor',
          'Rastrear cliques',
          'Validar dados',
          'Ordenar arrays',
        ],
        answer: 0,
      },
      {
        id: 13,
        question: 'O que é Angular Universal?',
        options: [
          'Renderização no servidor (SSR)',
          'Biblioteca de componentes',
          'Ferramenta de build',
          'Serviço global',
        ],
        answer: 0,
      },
      {
        id: 14,
        question: 'Qual a diferença entre FormGroup e FormControl?',
        options: [
          'FormGroup: grupo de controls; FormControl: controle individual',
          'São iguais',
          'FormControl: grupo; FormGroup: individual',
          'FormGroup para templates; FormControl para reactive',
        ],
        answer: 0,
      },
      {
        id: 15,
        question: 'O que é um Dynamic Component?',
        options: [
          'Componente criado em tempo de execução',
          'Componente com styles dinâmicos',
          'Componente que se move',
          'Componente com templates variáveis',
        ],
        answer: 0,
      },
      {
        id: 16,
        question: 'Para que serve o AsyncPipe?',
        options: [
          'Automaticamente subscreve e cancela Observables',
          'Transformar dados síncronos',
          'Filtrar arrays',
          'Ordenar listas',
        ],
        answer: 0,
      },
      {
        id: 17,
        question: 'O que é ContentProjection?',
        options: [
          'Inserir conteúdo externo no componente',
          'Projetar CSS',
          'Configurar rotas',
          'Gerenciar estados',
        ],
        answer: 0,
      },
      {
        id: 18,
        question: 'Qual a diferença entre @Input e @Output?',
        options: [
          '@Input: dados entram; @Output: eventos saem',
          '@Input: eventos saem; @Output: dados entram',
          'São iguais',
          '@Input para services; @Output para components',
        ],
        answer: 0,
      },
      {
        id: 19,
        question: 'O que é Lazy Loading?',
        options: [
          'Carregar módulos sob demanda',
          'Carregar tudo na inicialização',
          'Técnica de CSS',
          'Método de validação',
        ],
        answer: 0,
      },
      {
        id: 20,
        question: 'Para que serve o RouterOutlet?',
        options: [
          'Local onde componentes de rota são renderizados',
          'Saída de dados',
          'Input de formulários',
          'Pipe de rotas',
        ],
        answer: 0,
      },
      {
        id: 21,
        question: 'O que é um Service Worker no Angular?',
        options: [
          'Para funcionalidades PWA (cache, offline)',
          'Trabalhador de serviços',
          'Serviço de HTTP',
          'Worker para templates',
        ],
        answer: 0,
      },
      {
        id: 22,
        question: 'Qual a diferença entre Promise e Observable?',
        options: [
          'Promise: um valor; Observable: múltiplos valores',
          'Observable: um valor; Promise: múltiplos valores',
          'São iguais',
          'Promise é cancelável, Observable não',
        ],
        answer: 0,
      },
      {
        id: 23,
        question: 'O que é um Directive?',
        options: [
          'Adicionar comportamento a elementos DOM',
          'Criar novos componentes',
          'Serviço HTTP',
          'Pipe para dados',
        ],
        answer: 0,
      },
      {
        id: 24,
        question: 'Para que serve o ngOnChanges?',
        options: [
          'Executa quando @Input muda',
          'Inicializa componente',
          'Destroi componente',
          'Valida formulários',
        ],
        answer: 0,
      },
      {
        id: 25,
        question: 'O que é AOT Compilation?',
        options: [
          'Compilação antes do runtime',
          'Compilação no browser',
          'Compilação de CSS',
          'Compilação de serviços',
        ],
        answer: 0,
      },
      {
        id: 26,
        question: 'Qual a diferença entre ngIf e hidden?',
        options: [
          'ngIf remove do DOM; hidden usa CSS',
          'hidden remove do DOM; ngIf usa CSS',
          'São iguais',
          'ngIf para mobile; hidden para desktop',
        ],
        answer: 0,
      },
      {
        id: 27,
        question: 'O que é um Barrel export?',
        options: [
          'Agrupar exports em um arquivo index',
          'Exportar barrels',
          'Tipo de serviço',
          'Método de roteamento',
        ],
        answer: 0,
      },
      {
        id: 28,
        question: 'Para que serve o ng-template?',
        options: [
          'Template reutilizável',
          'Template principal',
          'Serviço de templates',
          'Pipe de templates',
        ],
        answer: 0,
      },
      {
        id: 29,
        question: 'O que é um Singleton Service?',
        options: [
          'Serviço com uma instância global',
          'Serviço com múltiplas instâncias',
          'Serviço temporário',
          'Serviço de singleton pattern',
        ],
        answer: 0,
      },
      {
        id: 30,
        question: 'Qual a vantagem do Strict Mode no TypeScript?',
        options: [
          'Mais type safety e detecção de erros',
          'Compila mais rápido',
          'Menos código',
          'Melhor performance runtime',
        ],
        answer: 0,
      },
    ],
    thirdPack: [
      {
        id: 61,
        question: 'What is the purpose of the async pipe in Angular?',
        options: [
          'To automatically subscribe and unsubscribe from Observables',
          'To create asynchronous functions',
          'To handle HTTP requests',
          'To compile templates asynchronously',
        ],
        answer: 0,
      },
      {
        id: 62,
        question: 'What is the difference between ngOnInit and constructor?',
        options: [
          'Constructor is for dependency injection, ngOnInit for initialization logic',
          'They are identical and can be used interchangeably',
          'ngOnInit is for dependency injection, constructor for initialization',
          'Constructor runs after component initialization',
        ],
        answer: 0,
      },
      {
        id: 63,
        question: 'What is a Subject in RxJS?',
        options: [
          'A special Observable that allows multicasting',
          'A type of Angular component',
          'A database model',
          'A CSS framework',
        ],
        answer: 0,
      },
      {
        id: 64,
        question: 'What is dependency injection in Angular?',
        options: [
          'A design pattern where classes receive their dependencies from external sources',
          'A method to inject CSS into components',
          'A way to inject HTML templates',
          'A pattern for injecting data into databases',
        ],
        answer: 0,
      },
      {
        id: 65,
        question: 'What is the purpose of ChangeDetectionStrategy.OnPush?',
        options: [
          'To improve performance by reducing change detection cycles',
          'To force change detection on every event',
          'To disable change detection completely',
          'To change the order of component rendering',
        ],
        answer: 0,
      },
      {
        id: 66,
        question: 'What is the difference between Promise and Observable?',
        options: [
          'Observable can emit multiple values, Promise only one',
          'Promise can be cancelled, Observable cannot',
          'They are exactly the same',
          'Observable is synchronous, Promise is asynchronous',
        ],
        answer: 0,
      },
      {
        id: 67,
        question: 'What is a Guard in Angular routing?',
        options: [
          'A service that controls access to routes',
          'A CSS protection mechanism',
          'A type of component',
          'A database security feature',
        ],
        answer: 0,
      },
      {
        id: 68,
        question: 'What is the purpose of the trackBy function in ngFor?',
        options: [
          'To improve performance by tracking items by unique identifier',
          'To track user clicks on items',
          'To validate data in the array',
          'To sort the array automatically',
        ],
        answer: 0,
      },
      {
        id: 69,
        question: 'What is Angular Universal used for?',
        options: [
          'Server-side rendering (SSR)',
          'Universal styling across platforms',
          'Internationalization',
          'Universal database access',
        ],
        answer: 0,
      },
      {
        id: 70,
        question: 'What is the difference between FormGroup and FormControl?',
        options: [
          'FormGroup represents a group of controls, FormControl a single control',
          'FormControl represents a group, FormGroup a single control',
          'They are identical and interchangeable',
          'FormGroup is for template-driven forms, FormControl for reactive forms',
        ],
        answer: 0,
      },
      {
        id: 71,
        question: 'What is a Directive in Angular?',
        options: [
          'A class that adds behavior to elements in the DOM',
          'A type of service',
          'A database query',
          'A CSS style sheet',
        ],
        answer: 0,
      },
      {
        id: 72,
        question: 'What is the purpose of ViewChild decorator?',
        options: [
          'To get a reference to a child component or DOM element',
          'To create a new child component',
          'To style child components',
          'To manage child routes',
        ],
        answer: 0,
      },
      {
        id: 73,
        question: 'What is lazy loading in Angular?',
        options: [
          'Loading feature modules on demand',
          'Loading all modules at application startup',
          'A performance issue to be avoided',
          'Loading CSS styles slowly',
        ],
        answer: 0,
      },
      {
        id: 74,
        question: 'What is the difference between @Input and @Output?',
        options: [
          '@Input passes data into component, @Output emits events out',
          '@Output passes data in, @Input emits events out',
          'They are exactly the same',
          '@Input is for services, @Output for components',
        ],
        answer: 0,
      },
      {
        id: 75,
        question: 'What is an Angular Interceptor used for?',
        options: [
          'To intercept and transform HTTP requests and responses',
          'To intercept user clicks',
          'To intercept CSS styles',
          'To intercept database queries',
        ],
        answer: 0,
      },
      {
        id: 76,
        question: 'What is the purpose of the router-outlet tag?',
        options: [
          'It acts as a placeholder where routed components are displayed',
          'It outputs router configuration',
          'It styles navigation elements',
          'It manages route permissions',
        ],
        answer: 0,
      },
      {
        id: 77,
        question: 'What is a Service in Angular?',
        options: [
          'A class that contains reusable business logic',
          'A type of component',
          'A database table',
          'A CSS utility class',
        ],
        answer: 0,
      },
      {
        id: 78,
        question: 'What is the difference between pure and impure pipes?',
        options: [
          'Pure pipes execute only when input changes, impure pipes on every change detection',
          'Impure pipes execute only when input changes, pure pipes always',
          'They are identical in behavior',
          'Pure pipes are for numbers, impure for strings',
        ],
        answer: 0,
      },
      {
        id: 79,
        question: 'What is the purpose of ngOnDestroy lifecycle hook?',
        options: [
          'To cleanup resources before component destruction',
          'To initialize component data',
          'To create component templates',
          'To validate component inputs',
        ],
        answer: 0,
      },
      {
        id: 80,
        question: 'What is AOT (Ahead-of-Time) compilation?',
        options: [
          'Compiling templates during build time rather than runtime',
          'Compiling TypeScript to JavaScript',
          'Compiling CSS to optimized styles',
          'Compiling assets for production',
        ],
        answer: 0,
      },
      {
        id: 81,
        question: 'What is the difference between BehaviorSubject and Subject?',
        options: [
          'BehaviorSubject stores current value, Subject does not',
          'Subject stores current value, BehaviorSubject does not',
          'They are identical in functionality',
          'BehaviorSubject is faster than Subject',
        ],
        answer: 0,
      },
      {
        id: 82,
        question: 'What is content projection in Angular?',
        options: [
          'Inserting external content into a component template',
          'Projecting CSS styles',
          'Creating component layouts',
          'Managing data projections',
        ],
        answer: 0,
      },
      {
        id: 83,
        question: 'What is the purpose of the async keyword in TypeScript?',
        options: [
          'To define asynchronous functions that return Promises',
          'To make functions synchronous',
          'To import modules asynchronously',
          'To optimize function performance',
        ],
        answer: 0,
      },
      {
        id: 84,
        question: 'What is a Dynamic Component in Angular?',
        options: [
          'A component created and rendered at runtime',
          'A component with changing styles',
          'A component that moves around the screen',
          'A component with variable templates',
        ],
        answer: 0,
      },
      {
        id: 85,
        question: 'What is the purpose of the HttpClient module?',
        options: [
          'To make HTTP requests to servers',
          'To create client-side components',
          'To style HTTP elements',
          'To manage client state',
        ],
        answer: 0,
      },
      {
        id: 86,
        question: 'What is two-way data binding in Angular?',
        options: [
          'Synchronization between component and template in both directions',
          'Binding two components together',
          'Binding two services together',
          'Binding two templates together',
        ],
        answer: 0,
      },
      {
        id: 87,
        question: 'What is the difference between switchMap and mergeMap?',
        options: [
          'switchMap cancels previous inner observables, mergeMap does not',
          'mergeMap cancels previous observables, switchMap does not',
          'They are identical in behavior',
          'switchMap is for arrays, mergeMap for objects',
        ],
        answer: 0,
      },
      {
        id: 88,
        question: 'What is an Angular Module?',
        options: [
          'A container for related components, directives, and services',
          'A JavaScript module',
          'A TypeScript interface',
          'A CSS module system',
        ],
        answer: 0,
      },
      {
        id: 89,
        question: 'What is the purpose of the ng-template tag?',
        options: [
          'To define template fragments that can be reused',
          'To create the main component template',
          'To import external templates',
          'To compile templates faster',
        ],
        answer: 0,
      },
      {
        id: 90,
        question: 'What is a Singleton Service in Angular?',
        options: [
          'A service with a single instance shared across the application',
          'A service with multiple instances',
          'A temporary service',
          'A service that cannot be injected',
        ],
        answer: 0,
      },
    ],
  };

  getQuestions(pack: string): QuizQuestion[] {
    const questions = this.questionPacks[pack];
    if (!questions) {
      console.warn(`Pack ${pack} não encontrado, usando firstPack`);
      return this.questionPacks['firstPack'];
    }

    return [...questions]
      .map((question) => {
        // Guarda a resposta correta ANTES de embaralhar
        const correctAnswerText = question.options[question.answer];

        // Embaralha as opções
        const shuffledOptions = [...question.options].sort(
          () => Math.random() - 0.5
        );

        // Encontra o novo índice da resposta correta no array embaralhado
        const newAnswerIndex = shuffledOptions.indexOf(correctAnswerText);

        return {
          ...question,
          options: shuffledOptions,
          answer: newAnswerIndex,
        };
      })
      .sort(() => Math.random() - 0.5);
  }
}
