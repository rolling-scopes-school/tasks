# Hands-on Task: RAG Question-Answering System

## Task Description

Build a question-answering system for the museum documentation using RAG (Retrieval-Augmented Generation) architecture.

## Technical Requirements

### Part 1: Data Preparation and Vectorization

1. **Document Loading and Processing**
   - Create a script to load text documents from a folder
   - Implement document splitting into chunks of 500-1000 tokens
   - Ensure overlap between chunks of 50-100 tokens

2. **Embedding Creation**
   - Use an embedding model to create vector representations (e.g., sentence-transformers)
   - Store embeddings in a vector database (ChromaDB, FAISS, or Pinecone)
   - Implement a function to search for the most relevant documents

### Part 2: LLM Integration

1. **LLM Setup**
   - Connect any available LLM (OpenAI API, Hugging Face, local model)
   - Create a prompt template for generating answers based on retrieved documents
   - Handle errors and timeouts properly

2. **RAG Pipeline**
   - Combine search and generation into a unified pipeline
   - Implement a function that takes a question and returns an answer with sources
   - Add logging for all processing stages

### Part 3: API and Interface

1. **REST API**
   - Create a simple API with an endpoint for questions (FastAPI/Flask on Python or express/fastify on Node.js)
   - Implement input data validation
   - Add swagger/openapi documentation

2. **Simple Interface**
   - Create a basic web interface or CLI for testing
   - Display answers and information sources

### Bonus Part: Optimization and Monitoring (proceed with it if you have time)

1. **Caching**
   - Implement answer caching for identical questions
   - Use Redis or simple in-memory caching

2. **Metrics and Logging**
   - Add processing time metrics
   - Log questions, retrieved documents, and answer quality

## Technical Stack

### Required Technologies:
- Any vector database (ChromaDB, FAISS, or Pinecone)
- LLM API or local model
- Web framework for API

### Option 1: Python Implementation

**Core Libraries:**
```python
# Essential
langchain>=0.1.0
sentence-transformers>=2.2.0
chromadb>=0.4.0
fastapi>=0.100.0
uvicorn>=0.23.0

# LLM Integration
openai>=1.0.0  # if using OpenAI
transformers>=4.30.0  # for local models
anthropic>=0.25.0  # if using Claude

# Additional
redis>=4.5.0  # for caching
pytest>=7.0.0  # for testing
```

### Option 2: Node.js Implementation

**Core Libraries:**
```javascript
// Essential
"@langchain/core": "^0.1.0",
"@langchain/community": "^0.0.1",
"chromadb": "^1.5.0",
"express": "^4.18.0",

// LLM Integration
"openai": "^4.0.0",  // if using OpenAI
"@anthropic-ai/sdk": "^0.20.0",  // if using Claude
"@huggingface/inference": "^2.6.0",

// Additional
"redis": "^4.6.0",  // for caching
"jest": "^29.0.0",  // for testing
"dotenv": "^16.0.0",
"cors": "^2.8.0"
```

## Test Data

Use the Minneapolis Institute of Art collection dataset from https://github.com/artsmia/collection. The dataset contains JSON files with artwork metadata including descriptions, titles, artist information, and cultural context.

**Example test questions:**

"Show me American paintings from the 19th century"
"Find artworks with floral motifs or nature themes"
"What can you tell me about Japanese ceramics in the collection?"
"Find portraits by female artists"
"Show me artworks related to religious themes"

## Evaluation Criteria
0. We will not evaluate your code, but we will evaluate your demo.
1. Prepare short video (5-10 minutes) with the demo of your solution (Please use English).
2. Upload your video to YouTube.
3. Submit the link to RS App.

## Helpful Resources and Materials

### Core RAG Concepts
- [What is RAG? - IBM](https://www.ibm.com/topics/retrieval-augmented-generation)
- [RAG explained - Pinecone](https://www.pinecone.io/learn/retrieval-augmented-generation/)
- [Building RAG systems - OpenAI Cookbook](https://cookbook.openai.com/examples/question_answering_using_embeddings)

### Key Library Documentation

**LangChain:**
- [LangChain Documentation](https://python.langchain.com/docs/get_started/introduction)
- [RAG Tutorial with LangChain](https://python.langchain.com/docs/use_cases/question_answering/)
- [Vector Stores in LangChain](https://python.langchain.com/docs/integrations/vectorstores/)

**ChromaDB:**
- [ChromaDB Getting Started](https://docs.trychroma.com/getting-started)
- [ChromaDB Python Client](https://docs.trychroma.com/reference/Client)

**Sentence Transformers:**
- [Sentence Transformers Documentation](https://www.sbert.net/)
- [Pretrained Models](https://www.sbert.net/docs/pretrained_models.html)

**FastAPI:**
- [FastAPI Tutorial](https://fastapi.tiangolo.com/tutorial/)
- [FastAPI Advanced Features](https://fastapi.tiangolo.com/advanced/)

### Practical Tutorials

**RAG Implementation:**
- [Building a RAG system from scratch - Towards Data Science](https://towardsdatascience.com/build-a-retrieval-augmented-generation-rag-system-from-scratch-using-langchain-and-chroma-db-c7e1c5b8f0c4)
- [RAG Pipeline with ChromaDB and OpenAI](https://cookbook.chromadb.dev/core/rag)
- [Advanced RAG Techniques](https://blog.langchain.dev/improving-rag-with-advanced-techniques/)

**Evaluation Metrics:**
- [Evaluating RAG Systems - Weights & Biases](https://wandb.ai/wandb_gen/llm_evaluation/reports/How-to-Evaluate-RAG-Systems-A-Comprehensive-Guide--Vmlldzo1OTY4NjU5)
- [RAG Evaluation Framework](https://docs.ragas.io/en/stable/getstarted/evaluation.html)

### Vector Databases
- [Vector Database Comparison](https://www.pinecone.io/learn/vector-database/)
- [FAISS Documentation](https://github.com/facebookresearch/faiss/wiki/Getting-started)
- [Weaviate Documentation](https://weaviate.io/developers/weaviate)

### Chunking Strategies
- [Text Chunking Strategies](https://blog.langchain.dev/chunking-strategies-for-rag/)
- [Document Splitting Best Practices](https://python.langchain.com/docs/modules/data_connection/document_transformers/)

### Prompt Engineering
- [Prompt Engineering Guide](https://www.promptingguide.ai/)
- [OpenAI Prompt Engineering](https://platform.openai.com/docs/guides/prompt-engineering)
- [RAG Prompting Techniques](https://blog.langchain.dev/rag-prompting/)

### Testing and Metrics
- [Testing LLM Applications](https://python.langchain.com/docs/guides/evaluation/)
- [Pytest Documentation](https://docs.pytest.org/en/stable/)
- [Unit Testing RAG Systems](https://blog.langchain.dev/testing-llm-applications/)

### Deployment and Production
- [Docker for Python Applications](https://docs.docker.com/language/python/)
- [FastAPI Deployment](https://fastapi.tiangolo.com/deployment/)
- [Monitoring ML Systems](https://neptune.ai/blog/ml-model-monitoring-best-tools)

### Additional Tools

**Document Processing:**
- [PyPDF2 Documentation](https://pypdf2.readthedocs.io/en/latest/)
- [python-docx](https://python-docx.readthedocs.io/en/latest/)
- [Unstructured.io](https://unstructured-io.github.io/unstructured/)

**Caching:**
- [Redis Python Client](https://redis-py.readthedocs.io/en/stable/)
- [Caching with FastAPI](https://fastapi.tiangolo.com/advanced/response-caching/)

**Logging:**
- [Python Logging](https://docs.python.org/3/library/logging.html)
- [Structlog](https://www.structlog.org/en/stable/)

### Code Examples on GitHub
- [RAG Examples Repository](https://github.com/langchain-ai/rag-from-scratch)
- [ChromaDB Examples](https://github.com/chroma-core/chroma/tree/main/examples)
- [Sentence Transformers Examples](https://github.com/UKPLab/sentence-transformers/tree/master/examples)

### Courses and Learning Materials
- [DeepLearning.AI LangChain Course](https://www.deeplearning.ai/short-courses/langchain-for-llm-application-development/)
- [Pinecone Learning Center](https://www.pinecone.io/learn/)
- [Hugging Face NLP Course](https://huggingface.co/learn/nlp-course/chapter1/1)

### Research Papers
- [Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks](https://arxiv.org/abs/2005.11401) - original RAG paper
- [Dense Passage Retrieval](https://arxiv.org/abs/2004.04906) - modern retrieval methods
- [REALM: Retrieval-Augmented Language Model Pre-Training](https://arxiv.org/abs/2002.08909)

### Development Tools
- [Jupyter Lab](https://jupyter.org/) - for experiments
- [Poetry](https://python-poetry.org/) - for dependency management
- [Pre-commit](https://pre-commit.com/) - for code quality

---

*Good luck!*