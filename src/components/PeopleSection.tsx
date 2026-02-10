const people = [
  {
    name: "Prasham Titiya",
    role: "Co-first Author",
    affiliation: "Arizona State University",
    link: "https://www.linkedin.com/in/prasham-titiya-99b686205",
  },
  {
    name: "Rohit Khoja",
    role: "Co-first Author",
    affiliation: "Arizona State University",
    link: "https://www.linkedin.com/in/rohit-khoja344/",
  },
  {
    name: "Tomer Wolfson",
    role: "Co-second Author",
    affiliation: "University of Pennsylvania",
    link: "https://tomerwolgithub.github.io/",
  },
  {
    name: "Vivek Gupta",
    role: "Co-second Author",
    affiliation: "Arizona State University",
    link: "https://vgupta123.github.io/",
  },
  {
    name: "Dan Roth",
    role: "Author",
    affiliation: "University of Pennsylvania",
    link: "https://www.cis.upenn.edu/~danroth/",
  },
];

const PeopleSection = () => {
  return (
    <section id="people" className="py-6 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">People</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {people.map((person, i) => (
            <a
              key={i}
              href={person.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-primary font-serif font-bold text-xl">
                {person.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <p className="font-medium text-foreground text-sm group-hover:text-primary transition-colors">
                  {person.name}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">{person.affiliation}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PeopleSection;
