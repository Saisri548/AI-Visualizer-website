/**
 * LLM Concept Steps
 * 
 * Defines the animation sequence and explanations for each step of the LLM visualization.
 */

export const LLM_STEPS = [
  {
    id: 'step-1',
    label: 'Input',
    description: 'Raw text input',
    explanation:
      'The process begins with raw text input. This could be a question, prompt, or any text that the model needs to process and understand.',
    details: [
      { label: 'Input Type', value: 'Text String' },
      { label: 'Example', value: '"What is AI?"' },
    ],
    activeNodes: ['input'],
    highlightEdges: [],
  },
  {
    id: 'step-2',
    label: 'Tokenization',
    description: 'Convert text to tokens',
    explanation:
      'The text is broken down into smaller units called tokens. Each token represents a word, subword, or character. This allows the model to process text in a standardized way.',
    details: [
      { label: 'Token Count', value: '~4-5 tokens per word' },
      { label: 'Vocabulary Size', value: '~50,000 tokens' },
    ],
    activeNodes: ['input', 'tokenize'],
    highlightEdges: ['e1'],
  },
  {
    id: 'step-3',
    label: 'Embedding',
    description: 'Convert tokens to vectors',
    explanation:
      'Each token is converted into a high-dimensional vector (embedding). These vectors capture semantic meaning, allowing the model to understand relationships between words.',
    details: [
      { label: 'Embedding Dimension', value: '768-1536' },
      { label: 'Representation', value: 'Semantic vectors' },
    ],
    activeNodes: ['input', 'tokenize', 'embedding'],
    highlightEdges: ['e1', 'e2'],
  },
  {
    id: 'step-4',
    label: 'Attention',
    description: 'Compute word relationships',
    explanation:
      'The attention mechanism calculates how much each token should "pay attention" to every other token. This allows the model to understand context and long-range dependencies.',
    details: [
      { label: 'Attention Heads', value: '8-16' },
      { label: 'Mechanism', value: 'Query-Key-Value' },
    ],
    activeNodes: ['input', 'tokenize', 'embedding', 'attention'],
    highlightEdges: ['e1', 'e2', 'e3'],
  },
  {
    id: 'step-5',
    label: 'Feed Forward',
    description: 'Apply neural transformations',
    explanation:
      'The feed-forward network applies non-linear transformations to the attention output. This adds complexity and helps the model learn sophisticated patterns.',
    details: [
      { label: 'Hidden Dimension', value: '2048-4096' },
      { label: 'Activation', value: 'ReLU / GELU' },
    ],
    activeNodes: ['input', 'tokenize', 'embedding', 'attention', 'feedforward'],
    highlightEdges: ['e1', 'e2', 'e3', 'e4'],
  },
  {
    id: 'step-6',
    label: 'Output Layer',
    description: 'Map to vocabulary',
    explanation:
      'The output layer projects the processed representation back to the vocabulary space, creating a probability distribution over all possible next tokens.',
    details: [
      { label: 'Output Dimension', value: 'Vocabulary size' },
      { label: 'Activation', value: 'Softmax' },
    ],
    activeNodes: ['input', 'tokenize', 'embedding', 'attention', 'feedforward', 'output_layer'],
    highlightEdges: ['e1', 'e2', 'e3', 'e4', 'e5'],
  },
  {
    id: 'step-7',
    label: 'Prediction',
    description: 'Generate next token',
    explanation:
      'The model outputs a probability distribution over all tokens. The next token is selected (either greedily or by sampling), and the process repeats to generate the complete response.',
    details: [
      { label: 'Selection Method', value: 'Top-k sampling' },
      { label: 'Temperature', value: '0.7 - 1.0' },
    ],
    activeNodes: ['input', 'tokenize', 'embedding', 'attention', 'feedforward', 'output_layer', 'prediction'],
    highlightEdges: ['e1', 'e2', 'e3', 'e4', 'e5', 'e6'],
  },
];
