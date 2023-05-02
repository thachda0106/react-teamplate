import { LoadableComponent } from "@loadable/component";
import { DefaultLayout, Home, NotFound, ProductDetail, ItemList } from "./loadable";

export interface RouteItemType {
  path: string;
  component?: LoadableComponent<Record<string, unknown>>;
  layout?: LoadableComponent<Record<string, unknown>>;
  children?: Array<RouteItemType>;
}

type RoutesType = Array<RouteItemType>;

const PUBLIC_ROUTES: RoutesType = [
  { path: "/", component: Home, layout: DefaultLayout },
  {
    path: "/products",
    layout: DefaultLayout,
    children: [
      {
        path: "",
        component: ItemList
      },
      {
        path: ":id",
        component: ProductDetail
      }
    ]
  },
  { path: "*", component: NotFound, layout: DefaultLayout }
];

export { PUBLIC_ROUTES };
