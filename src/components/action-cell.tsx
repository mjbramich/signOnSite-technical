import { ArrowDownToLine, ArrowUpToLine, X } from "lucide-react";

import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface Props {
  available: boolean;
}

const ActionCell = ({ available }: Props) => {
  return (
    <div className="flex items-center gap-2 justify-between">
      <Badge
        className="text-xs"
        variant={available ? "available" : "unavailable"}
      >
        {available ? "Available" : "Unavailable"}
      </Badge>
      <div className="*:space-x-2">
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <ArrowUpToLine className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <ArrowDownToLine className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <X className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

export default ActionCell;
