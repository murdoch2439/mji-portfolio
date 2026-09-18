import React, { FunctionComponent, ReactNode } from "react";

type Props = {
  children: ReactNode;
  id: string;
};

/**
 * Marks a page region for hash links and adaptive scroll-spy.
 * Active section detection lives in useScrollSpy (not per-section observers),
 * so behaviour stays correct regardless of section height.
 */
const SectionComponent: FunctionComponent<Props> = ({ children, id }) => {
  const scrollAttrs = { id, "data-scroll-section": id };

  if (id === "") {
    return <div {...scrollAttrs}>{children}</div>;
  }

  return <section {...scrollAttrs}>{children}</section>;
};

export default SectionComponent;
