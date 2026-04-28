import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  StyledAccordion,
  StyledAccordionSummary,
  StyledAccordionDetails,
} from './Accordion.styles';
import { AccordionProps } from './Accordion.types';

export default function Accordion({ items, allowMultiple = false, ...props }: AccordionProps) {
  const [expanded, setExpanded] = useState<string[]>([]);

  const handleChange = (id: string) => {
    if (allowMultiple) {
      setExpanded((prev) =>
        prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
      );
    } else {
      setExpanded((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <>
      {items.map((item) => (
        <StyledAccordion
          key={item.id}
          expanded={expanded.includes(item.id)}
          onChange={() => handleChange(item.id)}
          disabled={item.disabled}
          {...props}
        >
          <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
            {item.summary}
          </StyledAccordionSummary>
          <StyledAccordionDetails>{item.detail}</StyledAccordionDetails>
        </StyledAccordion>
      ))}
    </>
  );
}
