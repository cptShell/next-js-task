import { RouteLink, RouteName } from '../enums/route/route';
import { AppRoute } from '../types/route';

export const AppRoutes: Readonly<Array<AppRoute>> = [
  { name: RouteName.CALCULATOR, link: RouteLink.CALCULATOR },
  { name: RouteName.EXCHANGE, link: RouteLink.EXCHANGE },
];
