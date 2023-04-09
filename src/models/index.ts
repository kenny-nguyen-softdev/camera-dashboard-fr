import { LazyExoticComponent } from "react";

export type Loading = "idle" | "pending" | "succeeded" | "failed";

export interface DynamicObject<T> {
  [key: string]: T;
}

export interface AppRouteType {
  name: string;
  path: string;
  auth?: boolean;
  component: LazyExoticComponent<() => JSX.Element | null>;
  roles?: number;
  isPublic?: boolean;
}

export type {};
