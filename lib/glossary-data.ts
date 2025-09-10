import React from "react"
import { Brain, Database, Code, BookOpen, Lightbulb } from "lucide-react"

export interface GlossaryTerm {
  id: string
  term: string
  slug: string
  category: string
  definition: string
  example: string
  detailedExplanation: string
  applications: string[]
  relatedTerms: string[]
  icon: React.ComponentType<{ className?: string }>
}

// Mock data - em produção isso viria do banco de dados ou CMS
export const glossarioTerms: GlossaryTerm[] = [
  {
    id: "1",
    term: "AGI - Artificial General Intelligence",
    slug: "agi-artificial-general-intelligence",
    category: "IA Avançada",
    definition: "Inteligência Artificial capaz de realizar qualquer tarefa intelectual que um humano pode fazer, como aprender, raciocinar e resolver problemas complexos.",
    example: "Uma IA que consegue escrever poesias, jogar xadrez e dirigir carros simultaneamente.",
    detailedExplanation: "AGI é o sonho final da IA - uma máquina tão inteligente quanto um ser humano, capaz de aprender qualquer coisa e se adaptar a qualquer situação. Diferente das IAs atuais que são especialistas em tarefas específicas, a AGI seria versátil como o cérebro humano.",
    applications: [
      "Resolução de problemas complexos",
      "Aprendizado contínuo",
      "Adaptação a novas situações",
      "Tomada de decisões éticas",
      "Criatividade ilimitada"
    ],
    relatedTerms: ["IA Forte", "Superinteligência", "Consciência Artificial"],
    icon: Brain
  },
  {
    id: "2",
    term: "API - Application Programming Interface",
    slug: "api-application-programming-interface",
    category: "Desenvolvimento",
    definition: "Conjunto de regras e protocolos que permite que diferentes softwares se comuniquem entre si, como uma ponte entre programas.",
    example: "Quando você usa o login do Google no Spotify, está usando uma API.",
    detailedExplanation: "API é como um cardápio de restaurante - você não precisa saber como a comida é preparada, só precisa escolher o que quer. No mundo da IA, APIs permitem que desenvolvedores usem modelos avançados sem precisar construí-los do zero.",
    applications: [
      "Integração de sistemas",
      "Desenvolvimento de apps",
      "Acesso a modelos de IA",
      "Compartilhamento de dados",
      "Automatização de processos"
    ],
    relatedTerms: ["REST API", "SDK", "Webhook"],
    icon: Code
  },
  {
    id: "3",
    term: "Attention Mechanism",
    slug: "attention-mechanism",
    category: "Arquiteturas",
    definition: "Técnica que permite aos modelos de IA focar nas partes mais importantes de uma entrada, como quando você presta atenção em palavras-chave em uma conversa.",
    example: "Quando o Google Tradutor destaca as palavras importantes de uma frase para traduzi-la melhor.",
    detailedExplanation: "Imagine que você está em uma festa barulhenta e consegue focar apenas na conversa da pessoa que está falando com você. O Attention Mechanism faz a mesma coisa com texto - ajuda a IA a ignorar informações irrelevantes e focar no que realmente importa.",
    applications: [
      "Tradução automática",
      "Resumo de textos",
      "Análise de sentimentos",
      "Geração de legendas",
      "Processamento de linguagem"
    ],
    relatedTerms: ["Transformer", "Self-Attention", "Multi-Head Attention"],
    icon: Lightbulb
  },
  {
    id: "4",
    term: "Autoencoder",
    slug: "autoencoder",
    category: "Redes Neurais",
    definition: "Tipo de rede neural que aprende a comprimir e reconstruir dados, como um compactador inteligente que consegue recriar imagens com menos informações.",
    example: "Quando o Netflix consegue comprimir vídeos sem perder qualidade visível.",
    detailedExplanation: "Autoencoders são como aqueles jogos de 'telefone sem fio' onde você sussurra uma mensagem e ela vai se deformando. Mas aqui, a rede neural aprende a comprimir a informação de forma inteligente e depois reconstruí-la perfeitamente.",
    applications: [
      "Compressão de imagens",
      "Redução de ruído",
      "Geração de imagens",
      "Detecção de anomalias",
      "Processamento de sinais"
    ],
    relatedTerms: ["Redes Neurais", "Compressão", "Dimensionalidade"],
    icon: Database
  },
  {
    id: "5",
    term: "Backpropagation",
    slug: "backpropagation",
    category: "Treinamento",
    definition: "Algoritmo que permite às redes neurais aprenderem com seus erros, ajustando conexões para melhorar o desempenho futuro.",
    example: "Como quando você erra uma resposta numa prova e depois estuda mais para acertar da próxima vez.",
    detailedExplanation: "Backpropagation é o professor da rede neural. Quando a IA erra uma resposta, esse algoritmo calcula exatamente onde foi o erro e ajusta as 'ligações cerebrais' da rede para que ela aprenda e não erre da mesma forma novamente.",
    applications: [
      "Treinamento de redes neurais",
      "Otimização de algoritmos",
      "Aprendizado de máquina",
      "Correção de erros",
      "Melhoria de desempenho"
    ],
    relatedTerms: ["Gradiente Descendente", "Erro Quadrático", "Otimização"],
    icon: Code
  },
  {
    id: "6",
    term: "Batch Processing",
    slug: "batch-processing",
    category: "Processamento",
    definition: "Processamento de grandes quantidades de dados em grupos (batches), em vez de um por vez, como processar todas as fotos de uma vez em vez de uma por uma.",
    example: "Quando você processa 1000 imagens de uma só vez em um editor de fotos.",
    detailedExplanation: "Imagine que você tem que lavar 100 pratos. Em vez de lavar um de cada vez, você coloca vários juntos e lava em grupos. Batch processing faz a mesma coisa com dados - processa vários exemplos simultaneamente para ser mais eficiente.",
    applications: [
      "Treinamento de modelos",
      "Processamento de imagens",
      "Análise de big data",
      "Otimização de performance",
      "Processamento paralelo"
    ],
    relatedTerms: ["Mini-batch", "Stochastic Gradient", "GPU Processing"],
    icon: Database
  },
  {
    id: "7",
    term: "Bias-Variance Tradeoff",
    slug: "bias-variance-tradeoff",
    category: "Machine Learning",
    definition: "Equilíbrio entre dois tipos de erro em modelos de IA: viés (simplificação excessiva) e variância (adaptação excessiva aos dados de treinamento).",
    example: "Como escolher entre um professor muito rígido (viés alto) e um muito flexível (variância alta).",
    detailedExplanation: "É como equilibrar entre ser muito conservador (viés alto - você sempre toma as mesmas decisões) e ser muito adaptável (variância alta - você muda de ideia com muita facilidade). O ideal é encontrar o meio termo.",
    applications: [
      "Otimização de modelos",
      "Validação de algoritmos",
      "Redução de overfitting",
      "Melhoria de generalização",
      "Avaliação de performance"
    ],
    relatedTerms: ["Overfitting", "Underfitting", "Regularização"],
    icon: BookOpen
  },
  {
    id: "8",
    term: "Chain of Thought",
    slug: "chain-of-thought",
    category: "Prompting",
    definition: "Técnica de prompting onde a IA é incentivada a pensar passo a passo, como se estivesse resolvendo um problema matematicamente.",
    example: "Pedir para uma IA explicar como resolver 2+2 mostrando os passos intermediários.",
    detailedExplanation: "Chain of Thought é como ensinar uma criança a mostrar o trabalho - em vez de dar só a resposta final, a IA explica cada passo do raciocínio. Isso ajuda a IA a ser mais precisa e confiável em tarefas complexas.",
    applications: [
      "Resolução de problemas matemáticos",
      "Análise lógica",
      "Tomada de decisões",
      "Explicação de conceitos",
      "Debugging de código"
    ],
    relatedTerms: ["Few-shot Learning", "Prompt Engineering", "Reasoning"],
    icon: Lightbulb
  },
  {
    id: "9",
    term: "Chatbot",
    slug: "chatbot",
    category: "Aplicações",
    definition: "Programa de computador que simula conversas humanas, respondendo perguntas e ajudando usuários de forma automática.",
    example: "O chatbot do WhatsApp Business que responde dúvidas sobre produtos automaticamente.",
    detailedExplanation: "Chatbots são como atendentes virtuais 24/7. Eles usam IA para entender o que você pergunta e dar respostas úteis. Alguns são simples (respondem perguntas básicas) e outros são avançados (conversam naturalmente e resolvem problemas complexos).",
    applications: [
      "Atendimento ao cliente",
      "Suporte técnico",
      "Vendas online",
      "Ensino interativo",
      "Assistência médica"
    ],
    relatedTerms: ["NLP", "Conversational AI", "Virtual Assistant"],
    icon: Lightbulb
  },
  {
    id: "10",
    term: "Classification",
    slug: "classification",
    category: "Machine Learning",
    definition: "Tipo de problema onde a IA aprende a categorizar itens em grupos pré-definidos, como separar emails em 'spam' ou 'não spam'.",
    example: "Quando o Gmail automaticamente classifica emails como importantes ou não importantes.",
    detailedExplanation: "Classificação é como organizar suas roupas em gavetas: camisetas em uma, calças em outra. A IA aprende os padrões de cada categoria e depois consegue classificar novos itens automaticamente.",
    applications: [
      "Filtragem de spam",
      "Análise de sentimentos",
      "Diagnóstico médico",
      "Reconhecimento de imagens",
      "Categorização de produtos"
    ],
    relatedTerms: ["Regressão", "Clustering", "Supervised Learning"],
    icon: BookOpen
  },
  {
    id: "11",
    term: "Computer Vision",
    slug: "computer-vision",
    category: "Visão Computacional",
    definition: "Campo da IA que permite aos computadores 'verem' e entenderem imagens e vídeos, reconhecendo objetos, pessoas e padrões visuais.",
    example: "Quando seu celular reconhece seu rosto para desbloquear a tela.",
    detailedExplanation: "Computer Vision é como dar olhos para o computador. Usando redes neurais complexas, a IA consegue identificar objetos em fotos, reconhecer rostos, ler placas de carro e até interpretar emoções através de expressões faciais.",
    applications: [
      "Reconhecimento facial",
      "Carros autônomos",
      "Inspeção industrial",
      "Análise médica",
      "Realidade aumentada"
    ],
    relatedTerms: ["CNN", "Image Recognition", "Object Detection"],
    icon: Lightbulb
  },
  {
    id: "12",
    term: "Convolutional Neural Network (CNN)",
    slug: "convolutional-neural-network-cnn",
    category: "Redes Neurais",
    definition: "Tipo especial de rede neural projetada especificamente para processar dados visuais, como imagens e vídeos.",
    example: "Como o Instagram identifica automaticamente pessoas e objetos em suas fotos.",
    detailedExplanation: "CNNs são especialistas em imagens. Elas funcionam como nossos olhos - identificam bordas, texturas, formas e padrões visuais camada por camada, até conseguir reconhecer objetos complexos como carros ou animais.",
    applications: [
      "Reconhecimento de imagens",
      "Classificação de objetos",
      "Detecção de doenças",
      "Carros autônomos",
      "Análise de satélite"
    ],
    relatedTerms: ["Neural Networks", "Computer Vision", "Deep Learning"],
    icon: Brain
  },
  {
    id: "13",
    term: "Cross-Validation",
    slug: "cross-validation",
    category: "Avaliação",
    definition: "Técnica para testar o desempenho de um modelo de IA usando diferentes partes dos dados de treinamento, garantindo que o modelo generalize bem para novos dados.",
    example: "Como testar se um estudante aprendeu realmente dividindo a matéria em partes e testando cada uma separadamente.",
    detailedExplanation: "Imagine que você tem 100 perguntas de matemática. Em vez de usar todas para treinar e nenhuma para testar, você divide em grupos e testa o modelo com dados que ele nunca viu antes. Isso garante que a IA não 'decore' as respostas, mas realmente aprenda.",
    applications: [
      "Avaliação de modelos",
      "Prevenção de overfitting",
      "Comparação de algoritmos",
      "Otimização de hiperparâmetros",
      "Validação de performance"
    ],
    relatedTerms: ["K-fold", "Train/Test Split", "Overfitting"],
    icon: BookOpen
  },
  {
    id: "14",
    term: "Data Augmentation",
    slug: "data-augmentation",
    category: "Pré-processamento",
    definition: "Técnica de aumentar artificialmente o conjunto de dados de treinamento criando variações dos dados originais, como rotacionar ou alterar cores de imagens.",
    example: "Quando você vira uma foto de cabeça para baixo ou muda sua cor para criar mais exemplos de treinamento.",
    detailedExplanation: "Data Augmentation é como multiplicar seus dados de treinamento. Se você tem 100 fotos de gatos, pode criar milhares de variações rotacionando, cortando ou mudando as cores. Isso ajuda a IA a aprender melhor e ser mais robusta.",
    applications: [
      "Treinamento de visão computacional",
      "Aumento de datasets",
      "Melhoria de generalização",
      "Redução de overfitting",
      "Processamento de imagens"
    ],
    relatedTerms: ["Preprocessing", "Image Processing", "Dataset"],
    icon: Database
  },
  {
    id: "15",
    term: "Deep Learning",
    slug: "deep-learning",
    category: "Aprendizado Profundo",
    definition: "Subcampo do machine learning que usa redes neurais com múltiplas camadas para processar dados complexos e aprender padrões sofisticados.",
    example: "Como o Spotify aprende seus gostos musicais criando uma rede complexa de conexões entre músicas, artistas e gêneros.",
    detailedExplanation: "Deep Learning é como ter várias camadas de pensamento. Cada camada processa a informação de forma diferente - a primeira vê pixels, a segunda vê formas, a terceira vê objetos completos. Quanto mais camadas, mais complexo o aprendizado.",
    applications: [
      "Reconhecimento de voz",
      "Tradução automática",
      "Jogos complexos",
      "Análise médica",
      "Carros autônomos"
    ],
    relatedTerms: ["Neural Networks", "Machine Learning", "Layers"],
    icon: Database
  },
  {
    id: "16",
    term: "Diffusion Models",
    slug: "diffusion-models",
    category: "Geração de Imagens",
    definition: "Tipo de modelo de IA que gera imagens adicionando e removendo ruído progressivamente, criando arte e imagens realistas a partir de descrições de texto.",
    example: "Quando você descreve 'um gato astronauta no espaço' e a IA cria exatamente essa imagem.",
    detailedExplanation: "Diffusion Models funcionam como um artista que começa com uma tela em branco cheia de ruído (como neve na TV) e vai refinando aos poucos, removendo o ruído e adicionando detalhes até criar uma imagem perfeita baseada na sua descrição.",
    applications: [
      "Geração de imagens",
      "Arte digital",
      "Design gráfico",
      "Edição de fotos",
      "Criação de conteúdo"
    ],
    relatedTerms: ["Stable Diffusion", "DALL-E", "Image Generation"],
    icon: Lightbulb
  },
  {
    id: "17",
    term: "Embedding",
    slug: "embedding",
    category: "Representação",
    definition: "Técnica de converter dados complexos (como palavras ou imagens) em vetores numéricos que capturam seu significado e relações.",
    example: "Como transformar a palavra 'rei' em números que mostram que ela está relacionada a 'rainha' e 'príncipe'.",
    detailedExplanation: "Embedding é como traduzir palavras para um idioma que o computador entende. Cada palavra vira um conjunto de números que representa seu significado. Palavras similares ficam próximas nesse 'espaço matemático', permitindo que a IA entenda relações semânticas.",
    applications: [
      "Processamento de linguagem",
      "Sistemas de recomendação",
      "Busca semântica",
      "Análise de similaridade",
      "Tradução automática"
    ],
    relatedTerms: ["Word2Vec", "Vector Space", "Semantic Similarity"],
    icon: Code
  },
  {
    id: "18",
    term: "Epoch",
    slug: "epoch",
    category: "Treinamento",
    definition: "Uma passagem completa através de todo o conjunto de dados de treinamento durante o processo de aprendizado da IA.",
    example: "Como ler um livro inteiro uma vez e depois reler do começo para entender melhor.",
    detailedExplanation: "Uma epoch é como uma rodada completa de estudo. A IA vê todos os exemplos de treinamento uma vez, aprende com eles, e depois começa novamente com uma compreensão um pouco melhor. Vários epochs são necessários para que a IA aprenda bem.",
    applications: [
      "Treinamento de modelos",
      "Otimização de aprendizado",
      "Avaliação de convergência",
      "Prevenção de underfitting",
      "Monitoramento de progresso"
    ],
    relatedTerms: ["Batch", "Iteration", "Training Loop"],
    icon: Code
  },
  {
    id: "19",
    term: "Fine-tuning",
    slug: "fine-tuning",
    category: "Personalização",
    definition: "Processo de ajustar um modelo de IA pré-treinado para uma tarefa específica, como ensinar um estudante que já sabe matemática básica a resolver equações avançadas.",
    example: "Pegar um modelo geral de IA e treiná-lo especificamente para responder perguntas sobre medicina veterinária.",
    detailedExplanation: "Fine-tuning é como pegar um atleta profissional e treiná-lo para uma modalidade específica. O modelo já sabe o básico da linguagem, mas você o especializa em um assunto particular com dados específicos.",
    applications: [
      "Adaptação de modelos",
      "Especialização em domínios",
      "Melhoria de performance",
      "Personalização de IA",
      "Otimização para tarefas"
    ],
    relatedTerms: ["Transfer Learning", "Pre-training", "Domain Adaptation"],
    icon: Lightbulb
  },
  {
    id: "20",
    term: "Foundation Models",
    slug: "foundation-models",
    category: "Modelos Base",
    definition: "Modelos de IA grandes e versáteis treinados em vastas quantidades de dados, que servem como base para muitas aplicações específicas.",
    example: "Como o GPT-4 que pode ser usado para escrever textos, programar, traduzir e muito mais.",
    detailedExplanation: "Foundation Models são como uma caixa de ferramentas universal. São modelos enormes treinados com praticamente toda a internet, e depois podem ser adaptados para tarefas específicas como tradução, programação ou criação de arte.",
    applications: [
      "Múltiplas tarefas",
      "Adaptação rápida",
      "Escalabilidade",
      "Versatilidade",
      "Base para aplicações"
    ],
    relatedTerms: ["Large Language Models", "Base Models", "General Purpose AI"],
    icon: Brain
  },
  {
    id: "21",
    term: "GAN - Generative Adversarial Network",
    slug: "gan-generative-adversarial-network",
    category: "Geração",
    definition: "Sistema onde duas redes neurais competem entre si: uma gera conteúdo falso e outra tenta detectar se é falso, resultando em gerações muito realistas.",
    example: "Como dois artistas - um pinta falsificações e outro tenta identificar as falsas, até que as falsificações se tornem indistinguíveis.",
    detailedExplanation: "GANs são como um jogo entre um falsário e um detetive. O gerador tenta criar imagens/fáudios que pareçam reais, enquanto o discriminador tenta identificar as fakes. Com o tempo, o gerador fica tão bom que engana até o detetive.",
    applications: [
      "Geração de imagens",
      "Deepfakes",
      "Síntese de voz",
      "Arte generativa",
      "Aumento de dados"
    ],
    relatedTerms: ["Generator", "Discriminator", "Adversarial Training"],
    icon: Lightbulb
  },
  {
    id: "22",
    term: "Gradient Descent",
    slug: "gradient-descent",
    category: "Otimização",
    definition: "Algoritmo de otimização que encontra o mínimo de uma função ajustando parâmetros gradualmente na direção que reduz o erro.",
    example: "Como descer uma montanha no escuro seguindo a inclinação mais íngreme para chegar ao vale mais rapidamente.",
    detailedExplanation: "Imagine que você está perdido numa montanha à noite e quer chegar ao fundo do vale. Você sente qual direção desce mais rápido e caminha nessa direção, passo a passo, até chegar ao fundo. É assim que a IA 'aprende' - ajustando seus parâmetros para minimizar erros.",
    applications: [
      "Treinamento de redes neurais",
      "Otimização de algoritmos",
      "Minimização de funções",
      "Aprendizado de máquina",
      "Resolução de problemas"
    ],
    relatedTerms: ["Backpropagation", "Learning Rate", "Optimization"],
    icon: Code
  },
  {
    id: "23",
    term: "Hallucination",
    slug: "hallucination",
    category: "Limitações",
    definition: "Quando um modelo de IA gera informações incorretas ou inventadas que parecem verdadeiras, como uma pessoa sonhando acordada.",
    example: "Quando uma IA diz que 'Albert Einstein ganhou o Nobel de Física em 1921' (na verdade foi em 1922).",
    detailedExplanation: "Hallucination acontece quando a IA 'inventa' informações que parecem plausíveis mas são falsas. É como quando você sonha acordado e cria memórias falsas. Acontece porque a IA prioriza fazer sentido gramatical em vez de verificar fatos.",
    applications: [
      "Detecção de desinformação",
      "Validação de respostas",
      "Fato-checking",
      "Limitações de confiabilidade",
      "Melhoria de modelos"
    ],
    relatedTerms: ["Factual Accuracy", "Truthfulness", "Reliability"],
    icon: Lightbulb
  },
  {
    id: "24",
    term: "Hyperparameters",
    slug: "hyperparameters",
    category: "Configuração",
    definition: "Configurações externas que controlam como um modelo de IA aprende, como a velocidade de aprendizado ou o tamanho da rede neural.",
    example: "Como ajustar o volume e o equalizador em um aparelho de som para obter o melhor som possível.",
    detailedExplanation: "Hyperparameters são como os botões de configuração de um aparelho. Você não os muda durante o uso normal, mas os ajusta antes de começar para obter o melhor resultado. Exemplos: learning rate, batch size, número de camadas.",
    applications: [
      "Otimização de modelos",
      "Ajuste de performance",
      "Experimentação",
      "Comparação de algoritmos",
      "Fine-tuning"
    ],
    relatedTerms: ["Learning Rate", "Batch Size", "Model Architecture"],
    icon: Code
  },
  {
    id: "25",
    term: "In-context Learning",
    slug: "in-context-learning",
    category: "Aprendizado",
    definition: "Capacidade de um modelo de IA aprender e executar tarefas apenas com base em exemplos fornecidos no prompt, sem treinamento adicional.",
    example: "Dar alguns exemplos de como traduzir frases e a IA imediatamente entende o padrão e traduz novas frases.",
    detailedExplanation: "In-context Learning é como ensinar alguém mostrando exemplos. Você dá alguns casos de 'como fazer' e a IA entende imediatamente o padrão, podendo aplicar para casos novos sem precisar de treinamento extenso.",
    applications: [
      "Adaptação rápida",
      "Aprendizado one-shot",
      "Personalização instantânea",
      "Resolução de problemas",
      "Adaptação a tarefas"
    ],
    relatedTerms: ["Few-shot Learning", "Zero-shot Learning", "Prompting"],
    icon: Lightbulb
  },
  {
    id: "26",
    term: "Large Language Models (LLM)",
    slug: "large-language-models-llm",
    category: "Modelos de Linguagem",
    definition: "Modelos de IA treinados em enormes quantidades de texto que podem gerar, entender e manipular linguagem humana de forma sofisticada.",
    example: "Como o ChatGPT que pode escrever histórias, explicar conceitos, programar e responder perguntas complexas.",
    detailedExplanation: "LLMs são como enciclopédias vivas e inteligentes. São treinados com praticamente toda a internet escrita, permitindo que entendam contexto, gerem texto coerente e respondam perguntas de forma natural e informativa.",
    applications: [
      "Geração de texto",
      "Tradução automática",
      "Resumo de documentos",
      "Assistência em programação",
      "Ensino personalizado"
    ],
    relatedTerms: ["GPT", "BERT", "Transformer", "NLP"],
    icon: Brain
  },
  {
    id: "27",
    term: "Loss Function",
    slug: "loss-function",
    category: "Avaliação",
    definition: "Função matemática que mede quão bem um modelo de IA está performando, calculando a diferença entre a resposta esperada e a resposta dada.",
    example: "Como uma prova que mostra quantos erros você cometeu - quanto menor o 'loss', melhor você está.",
    detailedExplanation: "A Loss Function é como uma régua que mede o quão errado está o modelo. Se você está tentando adivinhar um número entre 1 e 100, e chuta 50 mas o número correto é 30, a loss function calcula essa diferença e ajuda a IA a melhorar o próximo chute.",
    applications: [
      "Avaliação de performance",
      "Otimização de modelos",
      "Treinamento supervisionado",
      "Comparação de algoritmos",
      "Debugging"
    ],
    relatedTerms: ["Cost Function", "Error Function", "Objective Function"],
    icon: Code
  },
  {
    id: "28",
    term: "Machine Learning",
    slug: "machine-learning",
    category: "Aprendizado de Máquina",
    definition: "Campo da IA onde computadores aprendem padrões a partir de dados, melhorando seu desempenho sem serem explicitamente programados para cada tarefa.",
    example: "Como o Netflix aprende seus gostos e recomenda filmes que você provavelmente vai gostar.",
    detailedExplanation: "Machine Learning é como ensinar uma criança através de exemplos em vez de regras fixas. Você mostra muitos exemplos e o computador descobre os padrões sozinho, conseguindo então fazer previsões ou decisões inteligentes.",
    applications: [
      "Sistemas de recomendação",
      "Reconhecimento de imagens",
      "Previsão de vendas",
      "Detecção de fraudes",
      "Carros autônomos"
    ],
    relatedTerms: ["Deep Learning", "Supervised Learning", "Unsupervised Learning"],
    icon: Brain
  },
  {
    id: "29",
    term: "Multimodal Models",
    slug: "multimodal-models",
    category: "Modelos Avançados",
    definition: "Modelos de IA que podem processar e entender múltiplos tipos de dados simultaneamente, como texto, imagens, áudio e vídeo.",
    example: "Uma IA que vê uma foto sua, ouve você falar e entende tanto a imagem quanto suas palavras juntas.",
    detailedExplanation: "Multimodal Models são como humanos - conseguimos entender uma piada tanto pela imagem quanto pelas palavras. Esses modelos combinam diferentes tipos de informação para ter uma compreensão mais rica e completa do mundo.",
    applications: [
      "Análise de vídeos",
      "Interface homem-máquina",
      "Tradução multimodal",
      "Assistência visual",
      "Conteúdo interativo"
    ],
    relatedTerms: ["GPT-4V", "CLIP", "Vision-Language Models"],
    icon: Lightbulb
  },
  {
    id: "30",
    term: "Natural Language Processing (NLP)",
    slug: "natural-language-processing-nlp",
    category: "Processamento de Linguagem",
    definition: "Campo da IA dedicado a fazer computadores entenderem, interpretarem e gerarem linguagem humana natural.",
    example: "Quando você pergunta 'qual o tempo hoje?' ao Google e ele entende sua pergunta perfeitamente.",
    detailedExplanation: "NLP é como ensinar um alienígena a falar português. A IA aprende as regras da linguagem, o significado das palavras, o contexto das frases e até sarcasmo e humor, permitindo conversas naturais com humanos.",
    applications: [
      "Assistentes virtuais",
      "Tradução automática",
      "Análise de sentimentos",
      "Correção gramatical",
      "Geração de texto"
    ],
    relatedTerms: ["LLM", "Tokenization", "Named Entity Recognition"],
    icon: Lightbulb
  },
  {
    id: "31",
    term: "Neural Networks",
    slug: "neural-networks",
    category: "Redes Neurais",
    definition: "Sistemas computacionais inspirados no cérebro humano, compostos por unidades conectadas que processam informações através de sinais elétricos simulados.",
    example: "Como milhões de neurônios no seu cérebro trabalham juntos para reconhecer um rosto amigo.",
    detailedExplanation: "Neural Networks são a tentativa de copiar o cérebro humano em computador. Cada 'neurônio artificial' recebe sinais, os processa e passa adiante, criando uma rede de conexões que aprende padrões complexos através do treinamento.",
    applications: [
      "Reconhecimento de padrões",
      "Classificação de imagens",
      "Previsão de séries",
      "Controle de processos",
      "Tomada de decisões"
    ],
    relatedTerms: ["Deep Learning", "Neurons", "Synapses"],
    icon: Brain
  },
  {
    id: "32",
    term: "Overfitting",
    slug: "overfitting",
    category: "Problemas de Treinamento",
    definition: "Quando um modelo de IA aprende tão bem os dados de treinamento que perde a capacidade de generalizar para novos dados, como decorar respostas em vez de aprender conceitos.",
    example: "Um estudante que decora todas as respostas de uma prova específica mas não consegue resolver problemas similares.",
    detailedExplanation: "Overfitting é como estudar apenas as questões da prova anterior. Você fica expert nas questões específicas, mas falha em questões novas. A IA 'decora' os dados de treinamento em vez de aprender os padrões gerais.",
    applications: [
      "Diagnóstico de problemas",
      "Regularização de modelos",
      "Validação cruzada",
      "Técnicas de generalização",
      "Otimização de treinamento"
    ],
    relatedTerms: ["Underfitting", "Regularization", "Cross-validation"],
    icon: BookOpen
  },
  {
    id: "33",
    term: "Parameter Efficient Fine-tuning (PEFT)",
    slug: "parameter-efficient-fine-tuning-peft",
    category: "Otimização",
    definition: "Técnicas para ajustar modelos grandes de IA treinando apenas alguns parâmetros em vez de todos, economizando tempo e recursos computacionais.",
    example: "Como retocar apenas o nariz de uma pintura em vez de repintar o quadro inteiro.",
    detailedExplanation: "PEFT é como dar um upgrade inteligente. Em vez de retrainar um modelo enorme do zero, você ajusta apenas as partes mais importantes, economizando tempo, dinheiro e energia enquanto mantém quase a mesma qualidade.",
    applications: [
      "Adaptação rápida de modelos",
      "Economia de recursos",
      "Personalização eficiente",
      "Treinamento em dispositivos",
      "Atualização de modelos"
    ],
    relatedTerms: ["LoRA", "Adapters", "Fine-tuning"],
    icon: Code
  },
  {
    id: "34",
    term: "Prompt Engineering",
    slug: "prompt-engineering",
    category: "Interação",
    definition: "Arte de criar instruções eficazes para modelos de IA generativa, influenciando suas respostas de forma precisa e útil.",
    example: "Em vez de perguntar 'me ajude', dizer 'explique passo a passo como funciona um motor de carro para uma criança de 10 anos'.",
    detailedExplanation: "Prompt Engineering é como ser um bom professor. Você não dá apenas uma tarefa vaga, mas explica exatamente o que quer, como quer e para quem é. Uma boa instrução pode transformar uma resposta mediana em uma excelente.",
    applications: [
      "Otimização de respostas",
      "Controle de criatividade",
      "Precisão de informações",
      "Personalização de conteúdo",
      "Soluções específicas"
    ],
    relatedTerms: ["Prompting", "Instruction Tuning", "Few-shot Learning"],
    icon: Lightbulb
  },
  {
    id: "35",
    term: "Quantization",
    slug: "quantization",
    category: "Otimização de Modelo",
    definition: "Técnica para reduzir o tamanho e velocidade de modelos de IA convertendo números precisos em números aproximados, mantendo a performance.",
    example: "Como comprimir uma música de alta qualidade para caber no seu celular sem perder muito da qualidade.",
    detailedExplanation: "Quantization é como converter uma foto de alta resolução para um tamanho menor. Você perde um pouco de precisão, mas ganha muito em velocidade e economia de espaço. É especialmente útil para rodar IAs em dispositivos móveis.",
    applications: [
      "Modelos para mobile",
      "Redução de latência",
      "Economia de memória",
      "Inferência mais rápida",
      "Deploy em dispositivos"
    ],
    relatedTerms: ["Model Compression", "8-bit", "4-bit", "Mixed Precision"],
    icon: Database
  },
  {
    id: "36",
    term: "Recurrent Neural Networks (RNN)",
    slug: "recurrent-neural-networks-rnn",
    category: "Arquiteturas Sequenciais",
    definition: "Tipo de rede neural projetada para processar sequências de dados, mantendo memória do que veio antes para entender contextos.",
    example: "Como lembrar que 'João foi ao mercado e...' implica que João provavelmente vai comprar comida.",
    detailedExplanation: "RNNs têm 'memória' - elas lembram o que processaram anteriormente. Isso é perfeito para sequências como texto (onde uma palavra depende da anterior) ou séries temporais (como prever o próximo preço de uma ação baseado nos anteriores).",
    applications: [
      "Processamento de texto",
      "Previsão de séries temporais",
      "Reconhecimento de voz",
      "Tradução de idiomas",
      "Análise de DNA"
    ],
    relatedTerms: ["LSTM", "GRU", "Sequence Modeling"],
    icon: Brain
  },
  {
    id: "37",
    term: "Reinforcement Learning",
    slug: "reinforcement-learning",
    category: "Aprendizado por Reforço",
    definition: "Tipo de machine learning onde um agente aprende através de tentativa e erro, recebendo recompensas ou punições por suas ações.",
    example: "Como ensinar um cachorro a sentar dando petiscos quando ele faz certo e ignorando quando faz errado.",
    detailedExplanation: "Reinforcement Learning é como treinar um animal. Você dá recompensas por comportamentos desejados e punições por indesejados. Com o tempo, o agente aprende a maximizar recompensas e evitar punições, descobrindo as melhores estratégias sozinho.",
    applications: [
      "Jogos de computador",
      "Robôs autônomos",
      "Otimização de processos",
      "Tomada de decisões",
      "Controle de sistemas"
    ],
    relatedTerms: ["Q-Learning", "Policy Gradient", "Reward Function"],
    icon: Lightbulb
  },
  {
    id: "38",
    term: "Retrieval Augmented Generation (RAG)",
    slug: "retrieval-augmented-generation-rag",
    category: "Técnicas Avançadas",
    definition: "Método que combina busca em bases de conhecimento com geração de texto, permitindo respostas mais precisas e atualizadas.",
    example: "Em vez de inventar uma resposta, a IA primeiro busca informações confiáveis e depois as usa para criar uma resposta precisa.",
    detailedExplanation: "RAG é como um estudante que consulta livros antes de responder uma pergunta. A IA não confia apenas no que 'lembra' do treinamento, mas busca informações atualizadas em bancos de dados externos para dar respostas mais precisas e atuais.",
    applications: [
      "Respostas factual",
      "Informações atualizadas",
      "Redução de alucinações",
      "Especialização em domínios",
      "Integração com bases de dados"
    ],
    relatedTerms: ["Vector Databases", "Semantic Search", "Knowledge Bases"],
    icon: Database
  },
  {
    id: "39",
    term: "Self-supervised Learning",
    slug: "self-supervised-learning",
    category: "Aprendizado Não Supervisionado",
    definition: "Tipo de aprendizado onde a IA cria suas próprias tarefas de aprendizado a partir dos dados disponíveis, sem necessidade de rótulos humanos.",
    example: "Como uma criança aprendendo a língua sozinho ouvindo conversas, criando regras gramaticais por conta própria.",
    detailedExplanation: "Self-supervised Learning é como ser autodidata. A IA encontra padrões nos dados por conta própria, criando 'tarefas' como 'complete a frase' ou 'preveja a próxima palavra', aprendendo representações ricas sem supervisão externa.",
    applications: [
      "Pré-treinamento de modelos",
      "Representação de linguagem",
      "Compressão de dados",
      "Análise não supervisionada",
      "Aprendizado eficiente"
    ],
    relatedTerms: ["Unsupervised Learning", "Pre-training", "Masked Language Modeling"],
    icon: Brain
  },
  {
    id: "40",
    term: "Supervised Learning",
    slug: "supervised-learning",
    category: "Aprendizado Supervisionado",
    definition: "Tipo de machine learning onde a IA aprende com exemplos rotulados, recebendo tanto as entradas quanto as respostas corretas.",
    example: "Como estudar com um professor que mostra as respostas corretas para cada exercício.",
    detailedExplanation: "Supervised Learning é como ter um professor particular. Para cada exemplo, você recebe tanto o problema quanto a solução. A IA aprende a mapear entradas para saídas corretas, podendo depois resolver problemas similares por conta própria.",
    applications: [
      "Classificação de imagens",
      "Previsão de preços",
      "Diagnóstico médico",
      "Detecção de spam",
      "Reconhecimento de voz"
    ],
    relatedTerms: ["Classification", "Regression", "Training Data"],
    icon: BookOpen
  },
  {
    id: "41",
    term: "Tokenization",
    slug: "tokenization",
    category: "Processamento de Texto",
    definition: "Processo de dividir texto em unidades menores (tokens) que a IA pode processar, como quebrar uma frase em palavras individuais.",
    example: "Transformar 'Olá, como vai?' em ['Olá', ',', 'como', 'vai', '?'].",
    detailedExplanation: "Tokenization é como cortar um bolo em pedaços menores para comer. A IA não consegue processar frases inteiras de uma vez, então quebra o texto em pedaços menores (palavras, subpalavras ou até caracteres) que pode entender e processar.",
    applications: [
      "Processamento de linguagem",
      "Análise de texto",
      "Tradução automática",
      "Geração de texto",
      "Busca semântica"
    ],
    relatedTerms: ["NLP", "Text Processing", "Word Segmentation"],
    icon: Code
  },
  {
    id: "42",
    term: "Transfer Learning",
    slug: "transfer-learning",
    category: "Reutilização de Conhecimento",
    definition: "Técnica onde conhecimento aprendido em uma tarefa é aplicado a outra tarefa relacionada, economizando tempo e recursos.",
    example: "Como usar o que você aprendeu em matemática para resolver problemas de física.",
    detailedExplanation: "Transfer Learning é como aproveitar conhecimentos prévios. Em vez de aprender tudo do zero, você pega um modelo já treinado em uma tarefa geral e o adapta para sua tarefa específica, como usar um cérebro que já sabe português para aprender espanhol.",
    applications: [
      "Adaptação de modelos",
      "Aprendizado eficiente",
      "Especialização rápida",
      "Reutilização de recursos",
      "Personalização"
    ],
    relatedTerms: ["Fine-tuning", "Domain Adaptation", "Pre-trained Models"],
    icon: Lightbulb
  },
  {
    id: "43",
    term: "Transformer Architecture",
    slug: "transformer-architecture",
    category: "Arquiteturas Modernas",
    definition: "Arquitetura de rede neural revolucionária que usa mecanismos de atenção para processar sequências de dados de forma paralela e eficiente.",
    example: "Como o Google Tradutor consegue traduzir frases inteiras considerando o contexto de todas as palavras simultaneamente.",
    detailedExplanation: "Transformers são como um time de especialistas onde cada um se concentra em partes diferentes do problema, mas todos compartilham informações. Isso permite processar texto, imagens e outros dados de forma muito mais eficiente que os métodos antigos.",
    applications: [
      "Tradução automática",
      "Geração de texto",
      "Análise de imagens",
      "Processamento de vídeo",
      "Tarefas multimodais"
    ],
    relatedTerms: ["Attention", "Self-attention", "BERT", "GPT"],
    icon: Brain
  },
  {
    id: "44",
    term: "Unsupervised Learning",
    slug: "unsupervised-learning",
    category: "Aprendizado Não Supervisionado",
    definition: "Tipo de machine learning onde a IA encontra padrões em dados sem rótulos ou supervisão, descobrindo estruturas ocultas por conta própria.",
    example: "Como organizar uma biblioteca sem saber os títulos dos livros, apenas agrupando livros similares juntos.",
    detailedExplanation: "Unsupervised Learning é como ser detetive sem pistas. A IA recebe dados crus e precisa descobrir padrões, agrupamentos e estruturas por conta própria. É perfeito para explorar dados desconhecidos e encontrar insights escondidos.",
    applications: [
      "Agrupamento de clientes",
      "Detecção de anomalias",
      "Redução de dimensionalidade",
      "Análise de padrões",
      "Compressão de dados"
    ],
    relatedTerms: ["Clustering", "Dimensionality Reduction", "Anomaly Detection"],
    icon: BookOpen
  },
  {
    id: "45",
    term: "Vector Embeddings",
    slug: "vector-embeddings",
    category: "Representação Vetorial",
    definition: "Representação matemática de dados complexos como pontos em um espaço multidimensional, capturando relações semânticas e similaridades.",
    example: "Transformar palavras em coordenadas onde 'rei' fica próximo de 'rainha' e distante de 'cachorro'.",
    detailedExplanation: "Vector Embeddings são como um mapa mental matemático. Cada conceito vira um ponto em um espaço multidimensional onde a distância entre pontos representa similaridade. É como o cérebro organiza conceitos - ideias relacionadas ficam 'próximas' matematicamente.",
    applications: [
      "Busca semântica",
      "Sistemas de recomendação",
      "Análise de similaridade",
      "Clustering de conceitos",
      "Processamento de linguagem"
    ],
    relatedTerms: ["Embeddings", "Vector Space", "Semantic Similarity"],
    icon: Code
  },
  {
    id: "46",
    term: "Zero-shot Learning",
    slug: "zero-shot-learning",
    category: "Aprendizado Zero-shot",
    definition: "Capacidade de um modelo de IA executar tarefas que nunca viu durante o treinamento, apenas com base em descrições ou exemplos conceituais.",
    example: "Mostrar a uma IA uma foto de um 'zorse' (zebra + cavalo) e ela entender que é um animal híbrido mesmo nunca tendo visto um.",
    detailedExplanation: "Zero-shot Learning é como intuição humana. Mesmo nunca tendo visto algo específico, conseguimos entender conceitos novos através de analogias e conhecimento geral. A IA aprende padrões tão gerais que consegue aplicar para casos completamente novos.",
    applications: [
      "Classificação de objetos raros",
      "Tradução de idiomas não vistos",
      "Adaptação a domínios novos",
      "Resolução de problemas criativos",
      "Generalização extrema"
    ],
    relatedTerms: ["Few-shot Learning", "One-shot Learning", "Generalization"],
    icon: Lightbulb
  },
  {
    id: "47",
    term: "AI Ethics - Ética em IA",
    slug: "ai-ethics-etica-em-ia",
    category: "Ética e Sociedade",
    definition: "Estudo dos princípios morais e implicações sociais do desenvolvimento e uso de inteligência artificial, garantindo que a tecnologia beneficie a humanidade.",
    example: "Debater se é ético usar IA para decidir quem recebe empréstimos bancários.",
    detailedExplanation: "AI Ethics é como as regras do trânsito para carros autônomos. A IA pode ser poderosa, mas precisamos garantir que seja usada de forma justa, transparente e segura. Questões como viés algorítmico, privacidade e impacto no emprego são cruciais.",
    applications: [
      "Auditoria de algoritmos",
      "Políticas de transparência",
      "Proteção de dados",
      "Justiça algorítmica",
      "Governança de IA"
    ],
    relatedTerms: ["Bias", "Fairness", "Transparency", "Accountability"],
    icon: BookOpen
  },
  {
    id: "48",
    term: "AI Safety - Segurança em IA",
    slug: "ai-safety-seguranca-em-ia",
    category: "Segurança",
    definition: "Campo dedicado a garantir que sistemas de IA sejam desenvolvidos e utilizados de forma segura, evitando riscos catastróficos à humanidade.",
    example: "Como instalar freios em carros autônomos para evitar acidentes.",
    detailedExplanation: "AI Safety é como engenharia de segurança em usinas nucleares. A IA pode ser incrivelmente útil, mas também pode causar danos se não for projetada com cuidado. Focamos em 'alignment' (alinhamento com valores humanos) e controle de sistemas superinteligentes.",
    applications: [
      "Sistemas de controle",
      "Avaliação de riscos",
      "Testes de segurança",
      "Protocolos de emergência",
      "Governança técnica"
    ],
    relatedTerms: ["Alignment", "Containment", "Robustness", "Value Learning"],
    icon: Lightbulb
  },
  {
    id: "49",
    term: "Explainable AI (XAI)",
    slug: "explainable-ai-xai",
    category: "Transparência",
    definition: "Abordagem para tornar os modelos de IA compreensíveis aos humanos, explicando como e por que eles tomam determinadas decisões.",
    example: "Quando um banco explica por que negou seu empréstimo baseado em análise de IA.",
    detailedExplanation: "XAI é como ter um vidro transparente em vez de uma caixa preta. As pessoas precisam entender como a IA funciona para confiar nela. Imagine um médico explicando não só o diagnóstico, mas também o raciocínio por trás dele.",
    applications: [
      "Decisões médicas",
      "Análise de crédito",
      "Sistemas judiciais",
      "Diagnóstico industrial",
      "Auditoria de compliance"
    ],
    relatedTerms: ["Transparency", "Interpretability", "Trust", "Accountability"],
    icon: Lightbulb
  },
  {
    id: "50",
    term: "AI Alignment - Alinhamento de IA",
    slug: "ai-alignment-alinhamento-de-ia",
    category: "Filosofia de IA",
    definition: "Campo que busca garantir que sistemas de IA poderosos ajam de acordo com os valores e intenções dos humanos, evitando consequências não intencionais.",
    example: "Como treinar um gênio da lâmpada para conceder desejos que realmente nos façam felizes a longo prazo.",
    detailedExplanation: "AI Alignment é o desafio de fazer com que uma IA superinteligente entenda e siga os valores humanos. É como educar uma criança prodigiosa - você quer que ela seja útil e benevolente, não apenas inteligente. Pequenos erros de alinhamento podem ter consequências enormes.",
    applications: [
      "Design de sistemas seguros",
      "Objetivos de longo prazo",
      "Coordenação internacional",
      "Pesquisa fundamental",
      "Governança global"
    ],
    relatedTerms: ["Value Alignment", "Coherent Extrapolated Volition", "Inverse Reinforcement Learning"],
    icon: Brain
  }
]

// Função auxiliar para encontrar termo por slug
export function findTermBySlug(slug: string): GlossaryTerm | undefined {
  return glossarioTerms.find(term => term.slug === slug)
}

// Função auxiliar para obter todas as categorias únicas
export function getCategories(): string[] {
  return Array.from(new Set(glossarioTerms.map(term => term.category)))
}
