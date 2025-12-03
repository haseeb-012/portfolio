import React from 'react'

function SectionHeading({ children }: {
  children:React.ReactNode
}) {
  return (
    <h2 className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
     {children}
    </h2>
  );
}

export default SectionHeading