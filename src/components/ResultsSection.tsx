import ottqaRecallImage from "@/assets/ottqa_recall_curve.png";

// Table data from paper (label: tab:r20_combined)
const results = [
  // Dense
  { category: "Dense", method: "ada-002", amazonH: 35.46, amazonS: 53.29, magH: 35.95, magS: 48.36, primeH: 41.09, primeS: 36.00 },
  { category: "Dense", method: "multi-ada-002", amazonH: 40.22, amazonS: 55.12, magH: 39.85, magS: 50.80, primeH: 47.21, primeS: 38.05 },
  { category: "Dense", method: "DPR", amazonH: 15.23, amazonS: 44.49, magH: 25.00, magS: 42.11, primeH: 10.69, primeS: 30.13 },
  // Sparse
  { category: "Sparse", method: "BM25", amazonH: 15.23, amazonS: 53.77, magH: 32.46, magS: 45.69, primeH: 42.32, primeS: 31.25 },
  // Structural
  { category: "Structural", method: "QAGNN", amazonH: 21.54, amazonS: 52.05, magH: 28.76, magS: 46.97, primeH: 17.62, primeS: 29.63 },
  // Hybrid
  { category: "Hybrid", method: "4StepFocus", amazonH: null, amazonS: 56.20, magH: null, magS: 65.80, primeH: null, primeS: 55.90 },
  { category: "Hybrid", method: "FocusedR", amazonH: null, amazonS: 56.00, magH: null, magS: 78.80, primeH: null, primeS: 65.50 },
  { category: "Hybrid", method: "Dense+BM25", amazonH: 24.30, amazonS: 51.49, magH: 46.64, magS: 51.49, primeH: 52.65, primeS: 39.11, highlight: "magH" },
  // Query Expansion
  { category: "Query Expansion", method: "HyDe", amazonH: 39.25, amazonS: 53.71, magH: 37.23, magS: 50.02, primeH: 47.70, primeS: 43.55 },
  { category: "Query Expansion", method: "RAR", amazonH: 36.15, amazonS: 54.63, magH: 35.19, magS: 50.87, primeH: 49.01, primeS: 44.50 },
  { category: "Query Expansion", method: "AGR", amazonH: 37.27, amazonS: 53.38, magH: 37.23, magS: 51.89, primeH: 49.65, primeS: 46.63 },
  { category: "Query Expansion", method: "KAR", amazonH: 40.62, amazonS: 57.29, magH: 46.60, magS: 60.28, primeH: 59.90, primeS: 50.81, highlight: "amazonH,amazonS,primeH" },
  // Agentic
  { category: "Agentic", method: "ReACT", amazonH: 35.95, amazonS: 50.81, magH: 35.95, magS: 47.03, primeH: 41.09, primeS: 33.63 },
  { category: "Agentic", method: "Reflexion", amazonH: 35.95, amazonS: 54.70, magH: 35.95, magS: 49.55, primeH: 41.09, primeS: 38.52 },
  // Finetuned/Learning
  { category: "Finetuned/Learning", method: "AvaTaR", amazonH: 42.43, amazonS: 60.57, magH: 35.94, magS: 49.70, primeH: 53.34, primeS: 42.23 },
  { category: "Finetuned/Learning", method: "mFAR", amazonH: null, amazonS: 58.50, magH: null, magS: 71.70, primeH: null, primeS: 68.30 },
  { category: "Finetuned/Learning", method: "MoR", amazonH: null, amazonS: 59.90, magH: null, magS: 75.00, primeH: null, primeS: 63.50 },
  // SAGE (Ours)
  { category: "SAGE (Ours)", method: "SPARK", amazonH: 33.56, amazonS: 53.95, magH: 53.51, magS: 66.40, primeH: 63.56, primeS: 57.64 },
  { category: "SAGE (Ours)", method: "SPARK+SAGE+Edge", amazonH: 36.93, amazonS: 54.12, magH: 55.90, magS: 68.60, primeH: 65.85, primeS: 58.42 },
  { category: "SAGE (Ours)", method: "SPARK+SAGE-Edge", amazonH: 42.05, amazonS: 58.28, magH: 56.40, magS: 70.10, primeH: 66.37, primeS: 60.98, best: true, highlight: "amazonH,amazonS,magH,magS-2nd,primeH,primeS-2nd" },
];

const ResultsSection = () => {
  const getBestStyle = (value: number | null, dataset: string, queryType: string) => {
    if (value === null) return "";
    
    const allValues = results
      .filter(r => !r.category.includes("Finetuned"))
      .map(r => r[`${dataset}${queryType}` as keyof typeof r])
      .filter((v): v is number => typeof v === "number");
    
    const max = Math.max(...allValues);
    const sortedDesc = [...allValues].sort((a, b) => b - a);
    const secondMax = sortedDesc[1];
    
    if (value === max) return "font-bold text-green-600";
    if (value === secondMax) return "font-semibold underline decoration-dotted";
    return "";
  };

  // Group results by category to calculate rowSpan
  const categoryGroups = results.reduce((acc, row) => {
    if (!acc[row.category]) acc[row.category] = [];
    acc[row.category].push(row);
    return acc;
  }, {} as Record<string, typeof results>);

  const categoryRowSpans = Object.fromEntries(
    Object.entries(categoryGroups).map(([cat, rows]) => [cat, rows.length])
  );

  let categoryRowIndex: Record<string, number> = {};

  return (
    <section id="results" className="py-6 px-2 bg-gradient-to-b from-card/30 to-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">Results</h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          SAGE achieves consistent improvements across STaRK datasets, demonstrating the effectiveness 
          of structure-aware graph expansion for semi-structured knowledge retrieval.
        </p>

        <div className="flex justify-center">
          <div className="overflow-x-auto rounded-xl border border-border shadow-lg">
            <table className="text-xs border-collapse">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="text-center px-9 py-2 font-semibold border-r border-primary-foreground/20 w-24" rowSpan={2}>Category</th>
                <th className="text-center px-0 py-2 font-semibold border-r border-primary-foreground/20 w-32" rowSpan={2}>Method</th>
                <th className="text-center px-0 py-2 font-semibold border-r border-primary-foreground/20" colSpan={2}>AMAZON</th>
                <th className="text-center px-0 py-2 font-semibold border-r border-primary-foreground/20" colSpan={2}>MAG</th>
                <th className="text-center px-0 py-2 font-semibold" colSpan={2}>PRIME</th>
              </tr>
              <tr className="bg-primary/90 text-primary-foreground text-[11px]">
                <th className="px-1 py-2 font-medium border-r border-primary-foreground/10 w-16">Human</th>
                <th className="px-1 py-2 font-medium border-r border-primary-foreground/20 w-16">Synthetic</th>
                <th className="px-1 py-2 font-medium border-r border-primary-foreground/10 w-16">Human</th>
                <th className="px-1 py-2 font-medium border-r border-primary-foreground/20 w-16">Synthetic</th>
                <th className="px-1 py-2 font-medium border-r border-primary-foreground/10 w-16">Human</th>
                <th className="px-1 py-2 font-medium w-16">Synthetic</th>
              </tr>
            </thead>
            <tbody>
              {results.map((row, i) => {
                // Track which row within this category we're on
                if (!categoryRowIndex[row.category]) {
                  categoryRowIndex[row.category] = 0;
                }
                const isFirstInCategory = categoryRowIndex[row.category] === 0;
                const isLastInCategory = categoryRowIndex[row.category] === categoryRowSpans[row.category] - 1;
                categoryRowIndex[row.category]++;
                
                return (
                  <tr 
                    key={i} 
                    className={`
                      ${row.best ? "bg-green-50 dark:bg-green-950/20" : i % 2 === 0 ? "bg-background" : "bg-muted/30"}
                      ${isLastInCategory ? "border-b-2 border-border" : ""}
                      hover:bg-muted/60 transition-colors
                    `}
                  >
                    {isFirstInCategory && (
                      <td 
                        className="px-0 py-1 text-xs font-medium border-r border-border text-center align-middle w-24" 
                        rowSpan={categoryRowSpans[row.category]}
                      >
                        {row.category}
                      </td>
                    )}
                    <td className="px-0 py-1 text-xs border-r border-border text-center w-32">{row.method}</td>
                    <td className={`px-1 py-0 text-center text-xs border-r border-border/50 w-16 ${getBestStyle(row.amazonH, "amazon", "H")}`}>
                      {row.amazonH?.toFixed(2) ?? "—"}
                    </td>
                    <td className={`px-1 py-0 text-center text-xs border-r border-border w-16 ${getBestStyle(row.amazonS, "amazon", "S")}`}>
                      {row.amazonS?.toFixed(2) ?? "—"}
                    </td>
                    <td className={`px-1 py-0 text-center text-xs border-r border-border/50 w-16 ${getBestStyle(row.magH, "mag", "H")}`}>
                      {row.magH?.toFixed(2) ?? "—"}
                    </td>
                    <td className={`px-1 py-0 text-center text-xs border-r border-border w-16 ${getBestStyle(row.magS, "mag", "S")}`}>
                      {row.magS?.toFixed(2) ?? "—"}
                    </td>
                    <td className={`px-1 py-0 text-center text-xs border-r border-border/50 w-16 ${getBestStyle(row.primeH, "prime", "H")}`}>
                      {row.primeH?.toFixed(2) ?? "—"}
                    </td>
                    <td className={`px-1 py-0 text-center text-xs w-16 ${getBestStyle(row.primeS, "prime", "S")}`}>
                      {row.primeS?.toFixed(2) ?? "—"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        </div>
        
        <div className="mt-4 space-y-2 text-xs text-muted-foreground max-w-4xl mx-auto">
          <p className="text-center font-medium">
            Table: Recall@20 performance on Human and Synthetic queries across all STaRK datasets (AMAZON, MAG, PRIME)
          </p>
          <div className="flex justify-center gap-6 text-[10px]">
            <div className="flex items-center gap-1">
              <span className="font-bold text-green-600">Bold</span> = Best non-finetuned
            </div>
            <div className="flex items-center gap-1">
              <span className="font-semibold underline decoration-dotted">Underline</span> = Second best non-finetuned
            </div>
          </div>
        </div>

        {/* OTT-QA Results Figure */}
        <div className="mt-10">
          <h3 className="font-serif text-xl font-semibold text-foreground mb-3">OTT-QA Results</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            Graph-based retrieval consistently improves Recall@k across all retrieval sizes. By adding one-hop neighbors from the chunk-level graph, SAGE surfaces additional relevant nodes that flat similarity-based retrieval cannot capture, with the largest gains observed for smaller retrieval sets.
          </p>
          <div className="flex justify-center">
            <div className="inline-block" style={{ maxWidth: '650px', width: '100%' }}>
              <img 
                src={ottqaRecallImage} 
                alt="OTT-QA Recall@k curve" 
                className="rounded-lg border border-border shadow-md w-full"
              />
              <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                <span className="font-medium text-foreground">Figure: OTT-QA retrieval Recall@k (%, higher is better).</span> BL (Baseline) is a flat hybrid retriever combining BM25 and dense embeddings. BL+Graph retrieves k<sub>1</sub> seeds with BL and adds k<sub>2</sub> one-hop neighbors from the induced graph (k = k<sub>1</sub> + k<sub>2</sub>), while Extended BL retrieves k items directly with BL. Arrows annotate the absolute gain at each k.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
