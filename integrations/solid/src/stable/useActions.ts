import type { Accessor } from "solid-js";
import { useCoreActions, useCoreState } from "../__internal__/core";

import type { ActivityComponentType } from "../__internal__/ActivityComponentType";
import { makeActivityId } from "../__internal__/activity";
import type { BaseActivities } from "./BaseActivities";

export function parseActionOptions(options?: { animate?: boolean }) {
  if (!options) {
    return { skipActiveState: false };
  }

  const isNullableAnimateOption = options.animate == null;

  if (isNullableAnimateOption) {
    return { skipActiveState: false };
  }

  return { skipActiveState: !options.animate };
}

export type UseActionsOutputType<T extends BaseActivities> = {
  /**
   * Is transition pending
   */
  pending: Accessor<boolean>;

  /**
   * Push new activity
   */
  push<K extends Extract<keyof T, string>>(
    activityName: K,
    params: T[K] extends
      | ActivityComponentType<infer U>
      | { component: ActivityComponentType<infer U> }
      ? U
      : {},
    options?: {
      animate?: boolean;
    },
  ): {
    activityId: string;
  };

  /**
   * Push new activity in the top and remove current top activity when new activity is activated
   */
  replace<K extends Extract<keyof T, string>>(
    activityName: K,
    params: T[K] extends
      | ActivityComponentType<infer U>
      | { component: ActivityComponentType<infer U> }
      ? U
      : {},
    options?: {
      animate?: boolean;
      activityId?: string;
    },
  ): {
    activityId: string;
  };

  /**
   * Remove top activity
   */
  pop(): void;
  pop(options: { animate?: boolean }): void;
  pop(count: number, options?: { animate?: boolean }): void;
};

export function useActions<
  T extends BaseActivities,
>(): UseActionsOutputType<T> {
  const { pending } = useCoreState();
  const coreActions = useCoreActions();

  return {
    pending,
    push(activityName, activityParams, options) {
      const activityId = makeActivityId();

      coreActions().push({
        activityId,
        activityName,
        activityParams,
        skipEnterActiveState: parseActionOptions(options).skipActiveState,
      });

      return { activityId };
    },
    replace(activityName, activityParams, options) {
      const activityId = makeActivityId();

      coreActions().replace({
        activityId: options?.activityId ?? makeActivityId(),
        activityName,
        activityParams,
        skipEnterActiveState: parseActionOptions(options).skipActiveState,
      });

      return { activityId };
    },
    pop(
      count?: number | { animate?: boolean } | undefined,
      options?: { animate?: boolean } | undefined,
    ) {
      let _count = 1;
      let _options: { animate?: boolean } = {};

      if (typeof count === "object") {
        _options = {
          ...count,
        };
      }
      if (typeof count === "number") {
        _count = count;
      }
      if (options) {
        _options = {
          ...options,
        };
      }

      for (let i = 0; i < _count; i += 1) {
        coreActions().pop({
          skipExitActiveState:
            i === 0 ? parseActionOptions(_options).skipActiveState : true,
        });
      }
    },
  };
}