import { Database, FileText, Network, TrendingUp, Zap, GitBranch } from "lucide-react";

const highlights = [
  {
    icon: Network,
    title: "Chunk-Level Graph Construction",
    description:
      "SAGE builds chunk-level graphs offline using metadata-driven similarities (topic, content, entities) with 95th percentile pruning, balancing granularity and connectivity without expensive entity extraction.",
  },
  {
    icon: GitBranch,
    title: "Seed → Expand Retrieval",
    description:
      "Online retrieval uses k seed chunks from baseline retrievers, expands to first-hop neighbors, then re-ranks to select k′ additional chunks, surfacing structurally connected evidence missed by flat retrieval.",
  },
  {
    icon: Database,
    title: "Retriever-Agnostic Framework",
    description:
      "Compatible with any baseline retriever (BM25, dense, hybrid, or agentic). Graph expansion is applied uniformly across document corpora and explicit KGs, adapting operators to data topology.",
  },
  {
    icon: TrendingUp,
    title: "Strong Empirical Gains",
    description:
      "SAGE improves Recall@k by +5.7 points on OTT-QA and +8.5 on STaRK over strong hybrid baselines, with largest gains on implicit multi-hop and cross-modal queries requiring connected evidence chains.",
  }
];

const InfoSection = () => {
  return (
    <section id="info" className="py-8 px-3 bg-gradient-to-b from-background to-card/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">Key Features</h2>
        <p className="text-muted-foreground leading-relaxed mb-10">
          SAGE combines chunk-level graph construction with structure-aware expansion to enable efficient multi-hop retrieval across heterogeneous corpora.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-border bg-card p-4 flex items-start gap-3 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-serif text-base font-semibold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
