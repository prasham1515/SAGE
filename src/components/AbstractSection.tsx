const AbstractSection = () => {
  return (
    <section id="abstract" className="py-6 px-4 bg-card">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">Abstract</h2>
        <p className="text-foreground leading-relaxed text-base md:text-lg">
          Retrieval-augmented question answering over
heterogeneous corpora requires connected ev-
idence across text, tables, and graph nodes.
While entity-level knowledge graphs support
structured access, they are costly to construct
and maintain, and inefficient to traverse at
query time. In contrast, standard retriever-
reader pipelines use flat similarity search over
independently chunked text, missing multi-hop
evidence chains across modalities. We propose
SAGE (Structure Aware Graph Expansion)
framework that (i) constructs a chunk-level
graph offline using metadata-driven similari-
ties with percentile-based pruning, and (ii) per-
forms online retrieval by running an initial base-
line retriever to obtain k seed chunks, expand-
ing first-hop neighbors, and then filtering the
neighbors using dense+sparse retrieval, select-
ing k′ additional chunks. We instantiate the
initial retriever using hybrid dense+sparse re-
trieval for implicit cross-modal corpora and
SPARK (Structure Aware Planning Agent for
Retrieval over Knowledge Graphs) an agentic
retriever for explicit schema graphs. On OTT-
QA and STaRK, SAGE improves retrieval re-
call by 5.7 and 8.5 points over baselines
        </p>
      </div>
    </section>
  );
};

export default AbstractSection;
