import type {
  InferActivityParams,
  RegisteredActivityParamTypes,
} from "@stackflow/config";
import { type Accessor, useContext } from "solid-js";
import { ActivityContext } from "../__internal__/activity/ActivityProvider";

export function useActivityParams<
  ActivityName extends Extract<keyof RegisteredActivityParamTypes, string>,
>(): Accessor<InferActivityParams<ActivityName>> {
  const activity = useContext(ActivityContext);
  return () => activity()?.params as InferActivityParams<ActivityName>;
}