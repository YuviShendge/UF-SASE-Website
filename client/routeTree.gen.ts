/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as WebdevImport } from './routes/webdev'
import { Route as UserpageImport } from './routes/userpage'
import { Route as TodopageImport } from './routes/todopage'
import { Route as SportsImport } from './routes/sports'
import { Route as SponsorsImport } from './routes/sponsors'
import { Route as SetImport } from './routes/set'
import { Route as ProfileImport } from './routes/profile'
import { Route as LoginImport } from './routes/login'
import { Route as InternsImport } from './routes/interns'
import { Route as GalleryImport } from './routes/gallery'
import { Route as EventsImport } from './routes/events'
import { Route as BoardImport } from './routes/board'
import { Route as BlogsImport } from './routes/blogs'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const WebdevRoute = WebdevImport.update({
  path: '/webdev',
  getParentRoute: () => rootRoute,
} as any)

const UserpageRoute = UserpageImport.update({
  path: '/userpage',
  getParentRoute: () => rootRoute,
} as any)

const TodopageRoute = TodopageImport.update({
  path: '/todopage',
  getParentRoute: () => rootRoute,
} as any)

const SportsRoute = SportsImport.update({
  path: '/sports',
  getParentRoute: () => rootRoute,
} as any)

const SponsorsRoute = SponsorsImport.update({
  path: '/sponsors',
  getParentRoute: () => rootRoute,
} as any)

const SetRoute = SetImport.update({
  path: '/set',
  getParentRoute: () => rootRoute,
} as any)

const ProfileRoute = ProfileImport.update({
  path: '/profile',
  getParentRoute: () => rootRoute,
} as any)

const LoginRoute = LoginImport.update({
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const InternsRoute = InternsImport.update({
  path: '/interns',
  getParentRoute: () => rootRoute,
} as any)

const GalleryRoute = GalleryImport.update({
  path: '/gallery',
  getParentRoute: () => rootRoute,
} as any)

const EventsRoute = EventsImport.update({
  path: '/events',
  getParentRoute: () => rootRoute,
} as any)

const BoardRoute = BoardImport.update({
  path: '/board',
  getParentRoute: () => rootRoute,
} as any)

const BlogsRoute = BlogsImport.update({
  path: '/blogs',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/blogs': {
      id: '/blogs'
      path: '/blogs'
      fullPath: '/blogs'
      preLoaderRoute: typeof BlogsImport
      parentRoute: typeof rootRoute
    }
    '/board': {
      id: '/board'
      path: '/board'
      fullPath: '/board'
      preLoaderRoute: typeof BoardImport
      parentRoute: typeof rootRoute
    }
    '/events': {
      id: '/events'
      path: '/events'
      fullPath: '/events'
      preLoaderRoute: typeof EventsImport
      parentRoute: typeof rootRoute
    }
    '/gallery': {
      id: '/gallery'
      path: '/gallery'
      fullPath: '/gallery'
      preLoaderRoute: typeof GalleryImport
      parentRoute: typeof rootRoute
    }
    '/interns': {
      id: '/interns'
      path: '/interns'
      fullPath: '/interns'
      preLoaderRoute: typeof InternsImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/profile': {
      id: '/profile'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof ProfileImport
      parentRoute: typeof rootRoute
    }
    '/set': {
      id: '/set'
      path: '/set'
      fullPath: '/set'
      preLoaderRoute: typeof SetImport
      parentRoute: typeof rootRoute
    }
    '/sponsors': {
      id: '/sponsors'
      path: '/sponsors'
      fullPath: '/sponsors'
      preLoaderRoute: typeof SponsorsImport
      parentRoute: typeof rootRoute
    }
    '/sports': {
      id: '/sports'
      path: '/sports'
      fullPath: '/sports'
      preLoaderRoute: typeof SportsImport
      parentRoute: typeof rootRoute
    }
    '/todopage': {
      id: '/todopage'
      path: '/todopage'
      fullPath: '/todopage'
      preLoaderRoute: typeof TodopageImport
      parentRoute: typeof rootRoute
    }
    '/userpage': {
      id: '/userpage'
      path: '/userpage'
      fullPath: '/userpage'
      preLoaderRoute: typeof UserpageImport
      parentRoute: typeof rootRoute
    }
    '/webdev': {
      id: '/webdev'
      path: '/webdev'
      fullPath: '/webdev'
      preLoaderRoute: typeof WebdevImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/blogs': typeof BlogsRoute
  '/board': typeof BoardRoute
  '/events': typeof EventsRoute
  '/gallery': typeof GalleryRoute
  '/interns': typeof InternsRoute
  '/login': typeof LoginRoute
  '/profile': typeof ProfileRoute
  '/set': typeof SetRoute
  '/sponsors': typeof SponsorsRoute
  '/sports': typeof SportsRoute
  '/todopage': typeof TodopageRoute
  '/userpage': typeof UserpageRoute
  '/webdev': typeof WebdevRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/blogs': typeof BlogsRoute
  '/board': typeof BoardRoute
  '/events': typeof EventsRoute
  '/gallery': typeof GalleryRoute
  '/interns': typeof InternsRoute
  '/login': typeof LoginRoute
  '/profile': typeof ProfileRoute
  '/set': typeof SetRoute
  '/sponsors': typeof SponsorsRoute
  '/sports': typeof SportsRoute
  '/todopage': typeof TodopageRoute
  '/userpage': typeof UserpageRoute
  '/webdev': typeof WebdevRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/blogs': typeof BlogsRoute
  '/board': typeof BoardRoute
  '/events': typeof EventsRoute
  '/gallery': typeof GalleryRoute
  '/interns': typeof InternsRoute
  '/login': typeof LoginRoute
  '/profile': typeof ProfileRoute
  '/set': typeof SetRoute
  '/sponsors': typeof SponsorsRoute
  '/sports': typeof SportsRoute
  '/todopage': typeof TodopageRoute
  '/userpage': typeof UserpageRoute
  '/webdev': typeof WebdevRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/about'
    | '/blogs'
    | '/board'
    | '/events'
    | '/gallery'
    | '/interns'
    | '/login'
    | '/profile'
    | '/set'
    | '/sponsors'
    | '/sports'
    | '/todopage'
    | '/userpage'
    | '/webdev'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/about'
    | '/blogs'
    | '/board'
    | '/events'
    | '/gallery'
    | '/interns'
    | '/login'
    | '/profile'
    | '/set'
    | '/sponsors'
    | '/sports'
    | '/todopage'
    | '/userpage'
    | '/webdev'
  id:
    | '__root__'
    | '/'
    | '/about'
    | '/blogs'
    | '/board'
    | '/events'
    | '/gallery'
    | '/interns'
    | '/login'
    | '/profile'
    | '/set'
    | '/sponsors'
    | '/sports'
    | '/todopage'
    | '/userpage'
    | '/webdev'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  BlogsRoute: typeof BlogsRoute
  BoardRoute: typeof BoardRoute
  EventsRoute: typeof EventsRoute
  GalleryRoute: typeof GalleryRoute
  InternsRoute: typeof InternsRoute
  LoginRoute: typeof LoginRoute
  ProfileRoute: typeof ProfileRoute
  SetRoute: typeof SetRoute
  SponsorsRoute: typeof SponsorsRoute
  SportsRoute: typeof SportsRoute
  TodopageRoute: typeof TodopageRoute
  UserpageRoute: typeof UserpageRoute
  WebdevRoute: typeof WebdevRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  BlogsRoute: BlogsRoute,
  BoardRoute: BoardRoute,
  EventsRoute: EventsRoute,
  GalleryRoute: GalleryRoute,
  InternsRoute: InternsRoute,
  LoginRoute: LoginRoute,
  ProfileRoute: ProfileRoute,
  SetRoute: SetRoute,
  SponsorsRoute: SponsorsRoute,
  SportsRoute: SportsRoute,
  TodopageRoute: TodopageRoute,
  UserpageRoute: UserpageRoute,
  WebdevRoute: WebdevRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/blogs",
        "/board",
        "/events",
        "/gallery",
        "/interns",
        "/login",
        "/profile",
        "/set",
        "/sponsors",
        "/sports",
        "/todopage",
        "/userpage",
        "/webdev"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/blogs": {
      "filePath": "blogs.tsx"
    },
    "/board": {
      "filePath": "board.tsx"
    },
    "/events": {
      "filePath": "events.tsx"
    },
    "/gallery": {
      "filePath": "gallery.tsx"
    },
    "/interns": {
      "filePath": "interns.tsx"
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/profile": {
      "filePath": "profile.tsx"
    },
    "/set": {
      "filePath": "set.tsx"
    },
    "/sponsors": {
      "filePath": "sponsors.tsx"
    },
    "/sports": {
      "filePath": "sports.tsx"
    },
    "/todopage": {
      "filePath": "todopage.tsx"
    },
    "/userpage": {
      "filePath": "userpage.tsx"
    },
    "/webdev": {
      "filePath": "webdev.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
