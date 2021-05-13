//import { fromJSON } from 'postcss';
import React from 'react';
import HeaderBoutique from '../HeaderBoutique'
import { Footer } from '../footer/';
import "@fontsource/roboto"
import "@fontsource/dancing-script"
const LayoutBoutique = ({ children }) => {
  return (
    <>
          <div className="site min-h-screen flex flex-col ">

      <HeaderBoutique/>
        <main className="mt-10 md:mt-0">{children} </main>
        <Footer />
        </div>
    </>
  );
};

export { LayoutBoutique };
