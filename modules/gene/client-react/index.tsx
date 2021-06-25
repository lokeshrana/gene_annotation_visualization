import React from 'react';

import ClientModule from '@gqlapp/module-client-react';
import { translate, TranslateFunction } from '@gqlapp/i18n-client-react';
import loadable from '@loadable/component';

import { Route, NavLink } from 'react-router-dom';
import { MenuItem } from '@gqlapp/look-client-react';
import resources from './locales';

const NavLinkWithI18n = translate('gene')(({ t }: { t: TranslateFunction }) => (
  <NavLink to="/gene" className="nav-link" activeClassName="active">
    {t('gene:navLink')}
  </NavLink>
));

export default new ClientModule({
  route: [<Route exact path="/gene" component={loadable(() => import('./containers/Gene').then(c => c.default))} />],
  navItem: [
    <MenuItem key="/gene">
      <NavLinkWithI18n />
    </MenuItem>
  ],
  localization: [{ ns: 'gene', resources }]
});
