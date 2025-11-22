import React, { useState, useMemo } from 'react';
import { patientMessages } from '../../data/patients';

const Messages = () => {
  const [selectedThreadId, setSelectedThreadId] = useState(null);
  const [input, setInput] = useState('');

  const threads = useMemo(() => {
    // Group by receiver/sender pair (simple mock grouping)
    const map = new Map();
    patientMessages.forEach(m => {
      const key = `${m.senderName}-${m.receiverName}`;
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(m);
    });
    const arr = Array.from(map.entries()).map(([key, items], idx) => ({
      id: idx + 1,
      title: key.replace('-', ' ↔ '),
      latest: items[items.length - 1]?.message || '',
      messages: items
    }));
    return arr;
  }, []);

  const active = selectedThreadId ? threads.find(t => t.id === selectedThreadId) : threads[0];

  const handleSend = () => {
    if (!input.trim()) return;
    // Mock send; in real app push to state/API
    setInput('');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-900">Conversations</h3>
        </div>
        <div className="divide-y divide-gray-100 max-h-[28rem] overflow-y-auto">
          {threads.map(t => (
            <button
              key={t.id}
              onClick={() => setSelectedThreadId(t.id)}
              className={`w-full text-left px-4 py-3 hover:bg-gray-50 ${active?.id === t.id ? 'bg-blue-50' : ''}`}
            >
              <p className="text-sm font-medium text-gray-900 truncate">{t.title}</p>
              <p className="text-xs text-gray-600 truncate">{t.latest}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="lg:col-span-2 bg-white rounded-lg shadow flex flex-col">
        <div className="px-4 py-3 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-900">{active?.title || 'Select a thread'}</h3>
        </div>
        <div className="flex-1 p-4 space-y-3 overflow-y-auto">
          {active?.messages.map(m => (
            <div key={m.id} className={`max-w-[80%] p-3 rounded-lg ${m.senderType === 'doctor' ? 'bg-blue-50 ml-0' : 'bg-gray-100 ml-auto'}`}>
              <p className="text-xs text-gray-500 mb-1">{m.senderName} • {new Date(m.timestamp).toLocaleString()}</p>
              <p className="text-sm text-gray-900">{m.message}</p>
            </div>
          ))}
        </div>
        <div className="p-3 border-t border-gray-200">
          <div className="flex items-center space-x-2">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Type your message..."
            />
            <button onClick={handleSend} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
