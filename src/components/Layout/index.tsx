import { ReactNode, useState } from "react";
import { Layout as AntdLayout } from "antd";
import Sidebar from "./Sidebar";
import MainHeader from "./MainHeader";
const { Content } = AntdLayout;

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <AntdLayout>
      <Sidebar />
      <AntdLayout className="site-layout">
        <MainHeader />
        <Content>{children}</Content>
      </AntdLayout>
    </AntdLayout>
  );
};

export default Layout;
