import React from 'react';

import '../styles/header.scss';

interface PropsHeader {
  title: string;
}

const Content: React.FC<PropsHeader> = ({title}) => {

  return (
    <header>
        <span className="category">Categoria:<span> {title}</span></span>
    </header>
  );
}

export default Content;