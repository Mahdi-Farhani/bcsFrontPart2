import { DetailedHTMLProps, HTMLAttributes, LinkHTMLAttributes } from "react";
// All types for typescript :
export type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export type ULProps = DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>;
export type LIProps = DetailedHTMLProps<LinkHTMLAttributes<HTMLLIElement>, HTMLLIElement>;
export type SpanProps = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;