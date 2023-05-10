import { LazyExoticComponent } from "react";
import Account from './qbo_account';
import Camera from './camera';
import Region from './region';
import Warning from './warning';

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

export type {Account, Camera, Region, Warning};
