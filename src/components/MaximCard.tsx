import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LegalMaxim } from "@/data/maxims";
import { cn } from "@/lib/utils";

interface MaximCardProps {
  maxim: LegalMaxim;
  className?: string;
}

export const MaximCard = ({ maxim, className }: MaximCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Reset flip state when maxim changes
  useEffect(() => {
    setIsFlipped(false);
  }, [maxim.id]);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={cn("perspective-1000", className)}>
      <Card 
        className={cn(
          "relative w-full h-80 cursor-pointer transition-transform duration-700 transform-style-preserve-3d",
          "hover:shadow-lg active:scale-95",
          "bg-gradient-to-br from-card to-secondary/50",
          "border-2 border-border/20",
          isFlipped && "rotate-y-180"
        )}
        onClick={handleCardClick}
      >
        {/* Front Side - Latin */}
        <div className={cn(
          "absolute inset-0 w-full h-full backface-hidden",
          "flex flex-col justify-center items-center p-6 text-center"
        )}>
          <div className="mb-4">
            <Badge 
              variant="secondary" 
              className="text-xs font-medium tracking-wide uppercase bg-accent/20 text-accent-foreground border-accent/30"
            >
              {maxim.category}
            </Badge>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-primary mb-4 leading-tight">
            {maxim.latin}
          </h2>
          
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <p className="text-sm text-muted-foreground font-medium">
              Tap to reveal translation
            </p>
          </div>
        </div>

        {/* Back Side - English & Description */}
        <div className={cn(
          "absolute inset-0 w-full h-full backface-hidden rotate-y-180",
          "flex flex-col justify-center items-center p-6 text-center",
          "bg-gradient-to-br from-primary/5 to-accent/10"
        )}>
          <div className="mb-4">
            <Badge 
              variant="secondary" 
              className="text-xs font-medium tracking-wide uppercase bg-primary/10 text-primary border-primary/20"
            >
              Translation
            </Badge>
          </div>
          
          <h2 className="text-lg md:text-xl font-sans font-medium text-foreground mb-3 leading-relaxed">
            "{maxim.english}"
          </h2>
          
          <p className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-xs">
            {maxim.description}
          </p>
          
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <p className="text-xs text-muted-foreground font-medium">
              Tap to see Latin
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};