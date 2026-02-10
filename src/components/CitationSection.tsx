import { useState } from "react";
import { Copy, Check } from "lucide-react";

const bibtex = ``;

const CitationSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(bibtex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="bibtex" className="py-6 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">Citation</h2>
        <p className="text-muted-foreground mb-4">
          If you find our work useful, please cite our paper:
        </p>
        <div className="relative">
          <pre className="bibtex-block">{bibtex}</pre>
          <button
            onClick={handleCopy}
            className="absolute top-3 right-3 p-2 rounded-md bg-background border border-border text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Copy BibTeX"
          >
            {copied ? <Check className="w-4 h-4 text-primary" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CitationSection;
