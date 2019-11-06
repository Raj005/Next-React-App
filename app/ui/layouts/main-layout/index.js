import { element, node } from 'prop-types';
import Meta from './meta';
import { Page, PageWrapper } from './style';

const MainLayout = ({ sidebarElement, children, ...props }) => (
  <>
    <Meta />
    <PageWrapper>
      {sidebarElement}
      <Page {...props}>{children}</Page>
    </PageWrapper>
  </>
);

MainLayout.propTypes = {
  sidebarElement: element,
  children: node
};

export default MainLayout;
