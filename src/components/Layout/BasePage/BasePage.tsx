import { ReactElement } from 'react';
import Layout from '../';

const BasePage = ({ children }: { children: ReactElement }) => {
  return <Layout>{children}</Layout>;
};

export default BasePage;
