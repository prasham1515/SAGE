import methodOverview from "@/assets/main-fig.png";
import { Bold } from "lucide-react";

const MainFigureSection = () => {
  return (
    <section id="main-figure" className="py-6 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">Overview</h2>
        <div className="rounded-xl border border-border overflow-hidden shadow-sm bg-background">
          <img
            src={methodOverview}
            alt="SAGE framework overview showing the pipeline from heterogeneous data sources through structure-aware graph construction, graph expansion, and enhanced retrieval results"
            className="w-full h-auto"
          />
        </div>
        <p className="text-sm text-muted-foreground text-center mt-4">
          Figure: Overview of SAGE. <b>Offline:</b> we semantically chunk documents and tables into nodes and create edges using
metadata-driven similarity (e.g., title, topic, content, entities) with percentile-based pruning. <b>Online:</b> a baseline retriever returns
k seed nodes, we expand to n first-hop neighbors in the offline graph, and re-rank to select k′ additional nodes, yielding a final
context of k+k′
        </p>
      </div>
    </section>
  );
};

export default MainFigureSection;
