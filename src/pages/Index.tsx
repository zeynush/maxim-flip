import { useState } from "react";
import { MaximCard } from "@/components/MaximCard";
import { ClassicalButton } from "@/components/ui/button-variants";
import { getRandomMaxim, LegalMaxim } from "@/data/maxims";
import { Shuffle, BookOpen } from "lucide-react";

const Index = () => {
  const [currentMaxim, setCurrentMaxim] = useState<LegalMaxim>(() => getRandomMaxim());

  const handleNewMaxim = () => {
    let newMaxim = getRandomMaxim();
    // Ensure we don't get the same maxim twice in a row
    while (newMaxim.id === currentMaxim.id) {
      newMaxim = getRandomMaxim();
    }
    setCurrentMaxim(newMaxim);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/30">
      <div className="container mx-auto px-4 py-8 max-w-md">
        {/* Header */}
        <header className="text-center mb-8 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="w-8 h-8 text-primary mr-3" />
            <h1 className="text-3xl font-serif font-semibold text-primary">
              Lex Maxims
            </h1>
          </div>
          <p className="text-muted-foreground font-medium">
            Classical Latin Legal Principles
          </p>
        </header>

        {/* Main Card */}
        <div className="mb-8 animate-fade-in">
          <MaximCard 
            maxim={currentMaxim} 
            className="mx-auto"
          />
        </div>

        {/* Action Button */}
        <div className="text-center animate-fade-in">
          <ClassicalButton
            onClick={handleNewMaxim}
            variant="classical"
            className="px-8 py-3 text-lg font-medium"
          >
            <Shuffle className="w-5 h-5 mr-2" />
            New Maxim
          </ClassicalButton>
        </div>

        {/* Footer */}
        <footer className="text-center mt-12 animate-fade-in">
          <p className="text-sm text-muted-foreground">
            Tap cards to reveal translations
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
