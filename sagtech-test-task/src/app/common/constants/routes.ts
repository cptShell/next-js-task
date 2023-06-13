import { RouteLink, RouteName } from '../enums/route';
import { AppRoute } from '../types/route';

export const Routes: Readonly<Array<AppRoute>> = [
  { name: RouteName.CALCULATOR, link: RouteLink.CALCULATOR },
  { name: RouteName.EXCHANGE, link: RouteLink.EXCHANGE },
];
