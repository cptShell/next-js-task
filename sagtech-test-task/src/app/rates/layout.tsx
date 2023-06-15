import style from './layout.module.scss';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className={style.main}>{children}</main>;
}
