/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from "./routes/__root";
import { Route as AboutImport } from "./routes/About";
import { Route as BlogImport } from "./routes/blog";
import { Route as IndexImport } from "./routes/index";
import { Route as LoginImport } from "./routes/login";
import { Route as ProfileImport } from "./routes/Profile";
import { Route as TodoPageImport } from "./routes/TodoPage";
import { Route as UserPageImport } from "./routes/UserPage";

// Create/Update Routes

const LoginRoute = LoginImport.update({
  path: "/login",
  getParentRoute: () => rootRoute,
} as any);

const BlogRoute = BlogImport.update({
  path: "/blog",
  getParentRoute: () => rootRoute,
} as any);

const UserPageRoute = UserPageImport.update({
  path: "/UserPage",
  getParentRoute: () => rootRoute,
} as any);

const TodoPageRoute = TodoPageImport.update({
  path: "/TodoPage",
  getParentRoute: () => rootRoute,
} as any);

const ProfileRoute = ProfileImport.update({
  path: "/Profile",
  getParentRoute: () => rootRoute,
} as any);

const AboutRoute = AboutImport.update({
  path: "/About",
  getParentRoute: () => rootRoute,
} as any);

const IndexRoute = IndexImport.update({
  path: "/",
  getParentRoute: () => rootRoute,
} as any);

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/": {
      id: "/";
      path: "/";
      fullPath: "/";
      preLoaderRoute: typeof IndexImport;
      parentRoute: typeof rootRoute;
    };
    "/About": {
      id: "/About";
      path: "/About";
      fullPath: "/About";
      preLoaderRoute: typeof AboutImport;
      parentRoute: typeof rootRoute;
    };
    "/Profile": {
      id: "/Profile";
      path: "/Profile";
      fullPath: "/Profile";
      preLoaderRoute: typeof ProfileImport;
      parentRoute: typeof rootRoute;
    };
    "/TodoPage": {
      id: "/TodoPage";
      path: "/TodoPage";
      fullPath: "/TodoPage";
      preLoaderRoute: typeof TodoPageImport;
      parentRoute: typeof rootRoute;
    };
    "/UserPage": {
      id: "/UserPage";
      path: "/UserPage";
      fullPath: "/UserPage";
      preLoaderRoute: typeof UserPageImport;
      parentRoute: typeof rootRoute;
    };
    "/blog": {
      id: "/blog";
      path: "/blog";
      fullPath: "/blog";
      preLoaderRoute: typeof BlogImport;
      parentRoute: typeof rootRoute;
    };
    "/login": {
      id: "/login";
      path: "/login";
      fullPath: "/login";
      preLoaderRoute: typeof LoginImport;
      parentRoute: typeof rootRoute;
    };
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  "/": typeof IndexRoute;
  "/About": typeof AboutRoute;
  "/Profile": typeof ProfileRoute;
  "/TodoPage": typeof TodoPageRoute;
  "/UserPage": typeof UserPageRoute;
  "/blog": typeof BlogRoute;
  "/login": typeof LoginRoute;
}

export interface FileRoutesByTo {
  "/": typeof IndexRoute;
  "/About": typeof AboutRoute;
  "/Profile": typeof ProfileRoute;
  "/TodoPage": typeof TodoPageRoute;
  "/UserPage": typeof UserPageRoute;
  "/blog": typeof BlogRoute;
  "/login": typeof LoginRoute;
}

export interface FileRoutesById {
  __root__: typeof rootRoute;
  "/": typeof IndexRoute;
  "/About": typeof AboutRoute;
  "/Profile": typeof ProfileRoute;
  "/TodoPage": typeof TodoPageRoute;
  "/UserPage": typeof UserPageRoute;
  "/blog": typeof BlogRoute;
  "/login": typeof LoginRoute;
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath;
  fullPaths:
    | "/"
    | "/About"
    | "/Profile"
    | "/TodoPage"
    | "/UserPage"
    | "/blog"
    | "/login";
  fileRoutesByTo: FileRoutesByTo;
  to:
    | "/"
    | "/About"
    | "/Profile"
    | "/TodoPage"
    | "/UserPage"
    | "/blog"
    | "/login";
  id:
    | "__root__"
    | "/"
    | "/About"
    | "/Profile"
    | "/TodoPage"
    | "/UserPage"
    | "/blog"
    | "/login";
  fileRoutesById: FileRoutesById;
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute;
  AboutRoute: typeof AboutRoute;
  ProfileRoute: typeof ProfileRoute;
  TodoPageRoute: typeof TodoPageRoute;
  UserPageRoute: typeof UserPageRoute;
  BlogRoute: typeof BlogRoute;
  LoginRoute: typeof LoginRoute;
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  ProfileRoute: ProfileRoute,
  TodoPageRoute: TodoPageRoute,
  UserPageRoute: UserPageRoute,
  BlogRoute: BlogRoute,
  LoginRoute: LoginRoute,
};

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>();

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/About",
        "/Profile",
        "/TodoPage",
        "/UserPage",
        "/blog",
        "/login"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/About": {
      "filePath": "About.tsx"
    },
    "/Profile": {
      "filePath": "Profile.tsx"
    },
    "/TodoPage": {
      "filePath": "TodoPage.tsx"
    },
    "/UserPage": {
      "filePath": "UserPage.tsx"
    },
    "/blog": {
      "filePath": "blog.tsx"
    },
    "/login": {
      "filePath": "login.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
