import sparkAgentImage from "@/assets/stark_dataset-reterival.png";

const offlineSteps = [
  {
    step: "1",
    title: "Data Processing & Node Creation",
    description:
      "Documents are semantically chunked using sentence embeddings and percentile-based boundary detection. Tables are segmented with LLM-generated descriptions and column metadata. Semi-structured nodes preserve descriptive fields as metadata.",
  },
  {
    step: "2",
    title: "Edge Creation",
    description:
      "Edges connect nodes via metadata-driven similarities: topic/content/entity overlap for documents, column/title similarity for tables, and cross-modal entity matching. Only connections exceeding the 95th percentile are retained to maintain sparsity and reduce noise.",
  },
];

const onlineSteps = [
  {
    step: "1",
    title: "Initial Baseline Retrieval",
    description:
      "For document graphs: hybrid sparse (BM25) + dense (cosine similarity) retrieval selects k seed nodes. For semi-structured knowledge bases (SKBs): SPARK agent generates multi-step plans combining HNSW semantic search with Cypher symbolic queries.",
  },
  {
    step: "2",
    title: "Graph-based Neighbor Expansion",
    description:
      "Collect all first-hop neighbors (n candidates) from the k seed nodes in the pre-built graph.",
  },
  {
    step: "3",
    title: "Neighbor Pruning & Final Context",
    description:
      "Re-rank the n candidates using BM25 + dense similarity and select top-k′ neighbors. Return the union of k seeds + k′ neighbors for final context of k+k′ nodes.",
  },
];

const agentInfo = {
  name: "SPARK Agent",
  fullName: "Structure Aware Planning Agent for Retrieval over Knowledge Graphs",
  description:
    "SPARK is an LLM-based agent designed for SKB retrieval. Given a question and schema metadata, it generates a multi-step plan that alternates between semantic candidate generation (HNSW search) and structural expansion (Cypher queries). This ensures retrieved nodes satisfy explicit relational and type constraints that simple similarity methods cannot enforce.",
};

const MethodologySection = () => {
  return (
    <section id="methodology" className="py-8 px-4 bg-gradient-to-b from-background to-card/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">Methodology</h2>
        <p className="text-muted-foreground leading-relaxed mb-10">
          SAGE employs a two-phase approach: <strong>offline graph construction</strong> and <strong>online retrieval</strong>. The framework adapts to data topology by building chunk-level graphs for implicit corpora and preserving native schema for explicit KGs.
        </p>

        {/* Offline Phase */}
        <div className="mb-12">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <span className="text-primary"></span> Offline Graph Construction
          </h3>
          <div className="space-y-5">
            {offlineSteps.map((s) => (
              <div key={s.step} className="flex gap-4 bg-card p-5 rounded-lg border border-border shadow-sm">
                <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-serif font-bold text-lg border-2 border-primary">
                  {s.step}
                </div>
                <div className="pt-1">
                  <h4 className="font-serif text-lg font-semibold text-foreground mb-2">{s.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Online Phase */}
        <div className="mb-12">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <span className="text-primary"></span> Online Retrieval
          </h3>
          <div className="space-y-5">
            {onlineSteps.map((s) => (
              <div key={s.step} className="flex gap-4 bg-card p-5 rounded-lg border border-border shadow-sm">
                <div className="shrink-0 w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-serif font-bold text-lg border-2 border-emerald-500">
                  {s.step}
                </div>
                <div className="pt-1">
                  <h4 className="font-serif text-lg font-semibold text-foreground mb-2">{s.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SPARK Agent Section */}
        <div className="mx-auto max-w-[70%] bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-xl border-2 border-primary/20 shadow-md">
          <div className="flex items-start gap-2 mb-2">
            <div className="shrink-0 w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
              🤖
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-1">{agentInfo.name}</h3>
              <p className="text-xs text-muted-foreground italic">{agentInfo.fullName}</p>
            </div>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {agentInfo.description}
          </p>
          <div className="flex justify-center mt-4">
            <img 
              src={sparkAgentImage} 
              alt="SPARK agent retrieval process" 
              className="rounded-lg border border-border shadow-sm max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
