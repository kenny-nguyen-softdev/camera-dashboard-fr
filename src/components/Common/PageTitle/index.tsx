import { Helmet } from "react-helmet-async";

const PageTitle = ({ children }: { children: string }) => {
  return (
    <Helmet>
      <title>{children} | Camera Dashboard</title>
    </Helmet>
  );
};
export default PageTitle;