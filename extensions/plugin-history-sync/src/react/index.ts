import type { ConfigHistorySync } from "../common/makeHistorySyncPlugin";

declare module "@stackflow/config" {
  interface ActivityDefinition<ActivityName extends string> {
    path: string;
    routePriority?: number;
    decodePath?: (params: Record<string, string>) => Record<string, unknown> | null;
    encodePath?: (params: Record<string, unknown>) => Record<string, string>;
  }

  interface Config<T extends ActivityDefinition<string>> {
    historySync?: ConfigHistorySync;
  }
}

export { makeTemplate, UrlPatternOptions } from "../common/makeTemplate";
export { useHistoryTick } from "./HistoryQueueContext";
export * from "./historySyncPlugin";
export { useRoutes } from "./RoutesContext";