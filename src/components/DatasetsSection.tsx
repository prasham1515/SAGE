import { sign } from "crypto";

const datasets = [
  {
    name: "OTT-QA",
    description: "Wikipedia-derived benchmark containing text passages and tables for hybrid question answering over heterogeneous data.",
    queries: "2212 queries",
    size: "23K nodes, 750K edges",
    modalities: ["Tables", "Text"],
  },
  {
    name: "STaRK - AMAZON",
    description: "Product recommendation dataset with few node types but extensive textual content and perturbed queries for robustness evaluation.",
    queries: "81 + 1638 queries",
    size: "1.9M nodes, 27M edges",
    modalities: ["SKB", "Tables"],
  },
  {
    name: "STaRK - MAG",
    description: "Academic citation graph with papers and authors, supporting one-hop and two-hop queries over scholarly metadata.",
    queries: "84 + 2664 queries",
    size: "1.9M nodes, 37M edges",
    modalities: ["SKB"],
  },
  {
    name: "STaRK - PRIME",
    description: "Biomedical knowledge graph with rich relational structure across 10 entity types and 19 relation types.",
    queries: "98 + 2801 queries",
    size: "129K nodes, 9.8M edges",
    modalities: ["SKB"],
  },
];

const DatasetsSection = () => {
  return (
    <section id="datasets" className="py-6 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">Datasets</h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          We evaluate SAGE on two diverse benchmarks spanning heterogeneous data retrieval tasks: <a href="https://ott-qa.github.io/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">OTT-QA (Chen et al., 2021)</a> and <a href="https://stark.stanford.edu/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">STaRK (Wu et al., 2024)</a> with STaRK having 3 subsets, AMAZON, MAG, and PRIME.
        </p>
        <div className="grid gap-4">
          {datasets.map((ds, i) => (
            <div
              key={i}
              className="rounded-xl border border-border bg-card p-5 flex flex-col md:flex-row md:items-center gap-4"
            >
              <div className="flex-1">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-1">{ds.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{ds.description}</p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="text-sm font-medium text-foreground bg-muted px-3 py-1 rounded-full">
                  {ds.queries}
                </span>
                <span className="text-sm font-medium text-foreground bg-muted px-3 py-1 rounded-full">
                  {ds.size}
                </span>
                <div className="flex gap-1.5">
                  {ds.modalities.map((mod) => (
                    <span
                      key={mod}
                      className="text-xs font-medium px-2 py-0.5 rounded-full bg-accent text-accent-foreground"
                    >
                      {mod}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DatasetsSection;
