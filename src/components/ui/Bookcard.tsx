import React from "react";
import { Button } from "./button";
import { NotebookPen, Trash2, Eye } from "lucide-react"; // Import Eye icon for view

interface BookCardProps {
  title: string;
  description: string;
  onUpdate?: () => void;
  onDelete?: () => void;
  onView?: () => void;
}

const BookCard: React.FC<BookCardProps> = ({
  title,
  description,
  onUpdate,
  onDelete,
  onView,
}) => {
  return (
    <div className="border w-[350px] px-8 py-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2 capitalize">{title}</h2>
      <p className="text-sm mb-4 capitalize">{description}</p>
      <div className="flex gap-2">
        {onView && (
          <Button onClick={onView} size={"sm"} variant={"default"}>
            <Eye size={16} />
          </Button>
        )}
        {onUpdate && (
          <Button onClick={onUpdate} size={"sm"}>
            <NotebookPen size={16} />
          </Button>
        )}
        {onDelete && (
          <Button onClick={onDelete} size={"sm"} variant={"destructive"}>
            <Trash2 size={16} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default BookCard;
