import React, { useState, useEffect } from "react";

const codeLines = [
  'import React from "react";',
  '',
  'const App =() => {',
  '  return <h1 className="bg-gradient-to-r from-blue-500 via-purple-600">',
  '           Hello, <span className="text-gray-900">Felix here!</span>',
  '         </h1>;',
  '}',
  '',
  'export default App;',
];

export default function CodeTyping(): JSX.Element {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < codeLines.length) {
        setDisplayedLines((lines) => [...lines, codeLines[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-900 text-green-400 space-y-4 font-mono p-2 rounded-lg shadow-lg max-w-xl mx-auto mt-2 h-48 overflow-y-auto">
  {/* VS Code style window controls */}
  <div className="flex space-x-2 mb-4">
    <span className="w-3 h-3 rounded-full bg-white"></span>
    <span className="w-3 h-3 rounded-full bg-blue-400"></span>
    <span className="w-3 h-3 rounded-full bg-green-400"></span>
    <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
     <span className="w-3 h-3 rounded-full bg-red-500"></span>
  </div>
  <pre>
    {displayedLines.map((line, idx) => (
      <div key={idx}>{line}</div>
    ))}
    {displayedLines.length < codeLines.length && (
      <span className="animate-pulse">|</span>
    )}
  </pre>
</div>
  );
}
