import { RouteLink, RouteName } from '../enums/enums';
import { AppRoute } from '../types/types';

export const AppRoutes: Readonly<Array<AppRoute>> = [
  { name: RouteName.CALCULATOR, link: RouteLink.CALCULATOR },
  { name: RouteName.RATES, link: RouteLink.RATES },
];
