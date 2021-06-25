import React from 'react';

import ClientModule from '@gqlapp/module-client-react';
import { translate, TranslateFunction } from '@gqlapp/i18n-client-react';
import loadable from '@loadable/component';

import { Route, NavLink } from 'react-router-dom';
import { MenuItem } from '@gqlapp/look-client-react';
import resources from './locales';

const NavLinkWithI18n = translate('cell')(({ t }: { t: TranslateFunction }) => (
  <NavLink to="/cell" className="nav-link" activeClassName="active">
    {t('cell:navLink')}
  </NavLink>
));

export default new ClientModule({
  route: [<Route exact path="/cell" component={loadable(() => import('./containers/Cell').then(c => c.default))} />],
  navItem: [
    <MenuItem key="/cell">
      <NavLinkWithI18n />
    </MenuItem>
  ],
  localization: [{ ns: 'cell', resources }]
});
