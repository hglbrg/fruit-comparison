import { ReactNode } from "react";

interface ComparisonContainerProps {
  children: ReactNode,
}

const ComparisonContainer = ({ children }: ComparisonContainerProps) => (
  <div>
    {children}
  </div>
)

export { ComparisonContainer }
export type { ComparisonContainerProps }
