interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => (
  <div className="max-w-7xl mx-auto px-8">{children}</div>
);

export default Container;
