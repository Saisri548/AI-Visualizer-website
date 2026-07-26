/**
 * RAG Concept Steps
 * 
 * Defines the animation sequence and explanations for each step of the RAG visualization.
 */

export const RAG_STEPS = [
  {
    id: 'step-1',
    label: 'Query',
    description: 'User asks a question',
    explanation:
      'The user provides a query or question. This query will be used to search for relevant information from the knowledge base.',
    details: [
      { label: 'Input Type', value: 'Natural language query' },
      { label: 'Example', value: '"What is quantum computing?"' },
    ],
    activeNodes: ['query'],
    highlightEdges: [],
  },
  {
    id: 'step-2',
    label: 'Embed Query',
    description: 'Convert query to vector',
    explanation:
      'The query is converted into a dense vector representation (embedding) using the same embedding model as the knowledge base documents.',
    details: [
      { label: 'Embedding Model', value: 'Sentence Transformer' },
      { label: 'Dimension', value: '384-768' },
    ],
    activeNodes: ['query', 'embed_query'],
    highlightEdges: ['e1'],
  },
  {
    id: 'step-3',
    label: 'Retrieve',
    description: 'Search knowledge base',
    explanation:
      'The system searches the knowledge base using similarity search (e.g., cosine similarity) to find the most relevant documents for the query.',
    details: [
      { label: 'Search Method', value: 'Vector similarity' },
      { label: 'Top-K Results', value: '5-10 documents' },
    ],
    activeNodes: ['query', 'embed_query', 'retrieve'],
    highlightEdges: ['e1', 'e2'],
  },
  {
    id: 'step-4',
    label: 'Rank',
    description: 'Rank retrieved documents',
    explanation:
      'The retrieved documents are ranked by relevance score. This ensures the most relevant information is prioritized in the final prompt.',
    details: [
      { label: 'Ranking Metric', value: 'Relevance score' },
      { label: 'Threshold', value: '0.5 - 0.8' },
    ],
    activeNodes: ['query', 'embed_query', 'retrieve', 'rank'],
    highlightEdges: ['e1', 'e2', 'e3'],
  },
  {
    id: 'step-5',
    label: 'Augment',
    description: 'Add context to prompt',
    explanation:
      'The top-ranked documents are inserted into the prompt as context. This augmented prompt provides the LLM with factual information to ground its response.',
    details: [
      { label: 'Context Length', value: '1000-4000 tokens' },
      { label: 'Format', value: 'Document chunks' },
    ],
    activeNodes: ['query', 'embed_query', 'retrieve', 'rank', 'augment'],
    highlightEdges: ['e1', 'e2', 'e3', 'e4'],
  },
  {
    id: 'step-6',
    label: 'Generate',
    description: 'LLM generates response',
    explanation:
      'The LLM processes the augmented prompt and generates a response. Because it has access to relevant context, the response is more accurate and grounded.',
    details: [
      { label: 'Model', value: 'LLM (GPT, Claude, etc.)' },
      { label: 'Temperature', value: '0.3 - 0.7' },
    ],
    activeNodes: ['query', 'embed_query', 'retrieve', 'rank', 'augment', 'generate'],
    highlightEdges: ['e1', 'e2', 'e3', 'e4', 'e5'],
  },
  {
    id: 'step-7',
    label: 'Output',
    description: 'Return grounded answer',
    explanation:
      'The final response is returned to the user. This answer is grounded in the retrieved documents, reducing hallucinations and improving reliability.',
    details: [
      { label: 'Output Type', value: 'Grounded answer' },
      { label: 'Citation', value: 'Source documents included' },
    ],
    activeNodes: ['query', 'embed_query', 'retrieve', 'rank', 'augment', 'generate', 'output'],
    highlightEdges: ['e1', 'e2', 'e3', 'e4', 'e5', 'e6'],
  },
];
