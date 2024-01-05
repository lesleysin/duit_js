import type { TextLeadingDistribution } from "./text_leading_distribution";

export interface TextHeightBehavior {
    applyHeightToFirstAscent?: boolean;
    applyHeightToLastDescent?: boolean;
    leadingDistribution?: TextLeadingDistribution;
}