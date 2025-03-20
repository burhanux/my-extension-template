import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'

const ContentScript: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 p-4 bg-white shadow-lg">
      <h1 className="text-lg font-semibold">Content Script</h1>
      <p>This is injected into the webpage.</p>
    </div>
  );
};

// const root = document.createElement('div');
// document.body.appendChild(root);
// ReactDOM.render(<ContentScript />, root);

// Create a container div and append it to the document body
const rootElement = document.createElement('div');
document.body.appendChild(rootElement);

// Use createRoot instead of ReactDOM.render
const root = createRoot(rootElement);
root.render(<ContentScript />);