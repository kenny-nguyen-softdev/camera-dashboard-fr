import { LazyExoticComponent } from "react";
import QboAccount from './qbo_account';

export type Loading = "idle" | "pending" | "succeeded" | "failed";

export interface DynamicObject<T> {
  [key: string]: T;
}

export interface AuthenticationResult {
  AccessToken: string;
  IdToken: string;
  RefreshToken: string;
  LoginDate?: string;
}

export interface AppRouteType {
  name: string;
  path: string;
  auth?: boolean;
  component: LazyExoticComponent<() => JSX.Element | null>;
  roles?: number;
  isPublic?: boolean;
}

export type {QboAccount};
