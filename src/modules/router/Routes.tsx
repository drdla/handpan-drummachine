import {RouteObject, useRoutes} from 'react-router-dom';

import {LearningPath} from '~/modules/learning-path';
import {Practice} from '~/modules/practice';

import {BaseLayout} from '~/components';

import {Page404} from './Page404';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <Practice />,
      },
      {
        path: 'practice/:exerciseId',
        element: <Practice />,
      },
      {
        path: 'learning-path',
        element: <LearningPath />,
      },
      {
        path: '*',
        element: <Page404 />,
      },
    ],
  },
];

export const Routes = () => {
  const rttRoutes = useRoutes(routes);

  return <>{rttRoutes}</>;
};
