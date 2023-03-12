import { ReactNode } from "react";

interface ComparisonItemProps {
  children: ReactNode,
}

const ComparisonItem = ({ children }: ComparisonItemProps) => (
  <div>
    {children}
  </div>
)

export { ComparisonItem }
export type { ComparisonItemProps }
