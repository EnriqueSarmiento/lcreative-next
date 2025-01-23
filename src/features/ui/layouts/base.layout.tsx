import { type FC, type ReactElement } from 'react';
import { Header } from '../components';

type BaseLayoutProps = {
  children: ReactElement;
};

export const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <div className="w-full h-full min-h-[100vh] flex flex-col bg-slate-100">
      <Header />
      <main className="w-full h-full flex items-start ">{children}</main>
    </div>
  );
};
