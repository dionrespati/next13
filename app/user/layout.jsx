import Navbar from '../../components/layout/navbar';

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
  