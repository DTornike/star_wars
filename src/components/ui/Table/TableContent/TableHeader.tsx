import { ReactNode } from "react";

export const TableHeader = ({ children }: { children?: ReactNode }) => {
  return (
    <thead className="bg-gray-100 rounded-sm overflow-hidden">{children}</thead>
  );
};
