/**
 * This file exports types from all other files in types/, so users can simply
 * `import { DesiredType } from "@prismatic-io/spectral"`
 */

export * from "./ActionDefinition";
export * from "./ComponentDefinition";
export * from "./ConnectionDefinition";
export * from "./Inputs";
export * from "./ActionPerformReturn";
export * from "./DisplayDefinition";
export * from "./ActionInputParameters";
export * from "./ActionLogger";
export * from "./ActionPerformFunction";
export * from "./InputFieldType";
export * from "./conditional-logic";
export * from "./TriggerResult";
export * from "./TriggerPerformFunction";
export * from "./TriggerDefinition";
export * from "./HttpResponse";
export * from "./TriggerPayload";
export * as serverTypes from "./server-types";