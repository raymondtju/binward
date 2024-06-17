import React from "react";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default DefaultLayout;
