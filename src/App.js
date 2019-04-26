import React, {useState} from 'react';
import fetch from 'cross-fetch';

export default function App() {
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState({});

  // Logic for loading a random quote
  const onClick = () => {
    // Show loading indicator, and hide old quote
    setLoading({ inprogress: true });
    setQuote(q => ({...q, visible: false}));
    // Call remote API to get the quote
    fetch('https://quota.glitch.me/random')
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error(res.statusText)
      })
      // Map response JSON to the quote state
      .then((q) => setQuote({ visible: true, text: q.quoteText, author: q.quoteAuthor }))
      // Show error, if needed, and reset loading indicator
      .catch((e) => setLoading((s) => ({...s, error: e })))
      .finally(() => setLoading((s) => ({...s, inprogress: false })));
  };

  return (
    // We'll hook into <div> via id="main", and recursively map children components
    <div id="main">
      {/* Hooking onto existing button via id="tryme" (under the parent div id="main") */}
      <button id="tryme" disabled={loading.inprogress} onClick={onClick}>
        {loading.inprogress ? 'Fetching ...' : 'Try Me'}
      </button>
      {/* We can define and use React components! */}
      <Quote {...quote} />
      {/* We can append *NEW* elements to the parent div */}
      {loading.error ? <div className="content has-text-danger">Something went wrong ...</div> : null}
    </div>
  );
}

function Quote({visible, text, author}) {
  const className = 'content has-text-grey-dark' + (visible ? '' : ' is-invisible');
  return (
    // This will hook onto existing <blockquote> element via id="quote"
    <blockquote id="quote" className={className}>
      "{text}" -- {author}
    </blockquote>
  );
}