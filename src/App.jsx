import React, { useState } from 'react';
import './app.css';

const accordionData = [
  {
    id: '1',
    title: 'Section 1 Title',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum imperdiet sapien, eu facilisis enim tristique sed.',
  },
  {
    id: '2',
    title: 'Section 2 Title',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum imperdiet sapien, eu facilisis enim tristique sed.',
  },
  {
    id: '3',
    title: 'Section 3 Title',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum imperdiet sapien, eu facilisis enim tristique sed.',
  },
];

const App = () => {
  const [curOpen, setIsCurOpen] = useState(null);

  return (
    <div className="container">
      {accordionData.map((item) => (
        <div key={item.id}>
          <Accordion
            title={item.title}
            description={item.description}
            id={item.id}
            curOpen={curOpen}
            setIsCurOpen={setIsCurOpen}
          />
        </div>
      ))}
    </div>
  );
};

const Accordion = ({ title, description, id, curOpen, setIsCurOpen }) => {
  const isOpen = curOpen === id;
  const handleOpen = () => {
    setIsCurOpen(isOpen ? null : id);
  };

  return (
    <div className={`accordion-item ${isOpen && 'open'}`}>
      <div
        onClick={handleOpen}
        style={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr auto',
          gap: '2rem',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
        }}
      >
        <h1 style={{ opacity: '0.7' }}>{id}</h1>
        <h1 style={{ fontWeight: '500' }}>{title}</h1>
        <span style={{ fontSize: '2rem' }}>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && (
        <p style={{ marginTop: '2rem', lineHeight: '1.7' }}>{description}</p>
      )}
    </div>
  );
};

export default App;
