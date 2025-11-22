import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';

const Messages = () => {
  const { user } = useAuth();
  const [messages, setMessages] = useState([
    {
      id: 1,
      from: 'Dr. Sarah Johnson',
      to: 'John Doe',
      subject: 'Appointment Reminder',
      content: 'Hi John, this is a reminder for your appointment tomorrow at 10:00 AM. Please arrive 15 minutes early.',
      timestamp: '2024-01-20T10:30:00',
      isRead: false,
      type: 'appointment',
      fromId: 1,
      toId: 1
    },
    {
      id: 2,
      from: 'Admin Team',
      to: 'Dr. Sarah Johnson',
      subject: 'System Update Notification',
      content: 'Dear Dr. Johnson, we will be performing system maintenance this weekend. The system will be unavailable from 2 AM to 6 AM on Sunday.',
      timestamp: '2024-01-19T15:45:00',
      isRead: true,
      type: 'system',
      fromId: 'admin',
      toId: 1
    },
    {
      id: 3,
      from: 'Sarah Wilson',
      to: 'Dr. Michael Chen',
      subject: 'Question about Treatment Plan',
      content: 'Dr. Chen, I have some questions about the exercises you recommended. When should I increase the intensity?',
      timestamp: '2024-01-18T14:20:00',
      isRead: false,
      type: 'patient',
      fromId: 2,
      toId: 2
    }
  ]);

  const [selectedMessage, setSelectedMessage] = useState(null);
  const [showComposeModal, setShowComposeModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterRead, setFilterRead] = useState('all');

  const [newMessage, setNewMessage] = useState({
    to: '',
    subject: '',
    content: ''
  });

  const getFilteredMessages = () => {
    let filtered = messages;

    // Role-based filtering
    if (user?.role === 'doctor') {
      filtered = filtered.filter(msg => msg.toId === user.id || msg.fromId === user.id);
    } else if (user?.role === 'patient') {
      filtered = filtered.filter(msg => msg.toId === user.id || msg.fromId === user.id);
    }

    // Search filtering
    if (searchTerm) {
      filtered = filtered.filter(msg => 
        msg.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        msg.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        msg.from.toLowerCase().includes(searchTerm.toLowerCase()) ||
        msg.to.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Type filtering
    if (filterType !== 'all') {
      filtered = filtered.filter(msg => msg.type === filterType);
    }

    // Read status filtering
    if (filterRead !== 'all') {
      filtered = filtered.filter(msg => 
        filterRead === 'read' ? msg.isRead : !msg.isRead
      );
    }

    return filtered.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
  };

  const handleSendMessage = () => {
    if (newMessage.to && newMessage.subject && newMessage.content) {
      const message = {
        id: Date.now(),
        from: user?.username || 'User',
        to: newMessage.to,
        subject: newMessage.subject,
        content: newMessage.content,
        timestamp: new Date().toISOString(),
        isRead: false,
        type: 'user',
        fromId: user?.id || 'user',
        toId: 'recipient'
      };
      setMessages([message, ...messages]);
      setNewMessage({ to: '', subject: '', content: '' });
      setShowComposeModal(false);
    }
  };

  const handleMarkAsRead = (id) => {
    setMessages(messages.map(msg => 
      msg.id === id ? { ...msg, isRead: true } : msg
    ));
  };

  const handleDeleteMessage = (id) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      setMessages(messages.filter(msg => msg.id !== id));
      if (selectedMessage?.id === id) {
        setSelectedMessage(null);
      }
    }
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = (now - date) / (1000 * 60 * 60);

    if (diffInHours < 24) {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else if (diffInHours < 48) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString();
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'appointment': return '📅';
      case 'system': return '⚙️';
      case 'patient': return '👤';
      case 'user': return '💬';
      default: return '📧';
    }
  };

  const filteredMessages = getFilteredMessages();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Messages</h1>
          <p className="text-gray-600 mt-1">Manage your inbox and communications</p>
        </div>
        <button
          onClick={() => setShowComposeModal(true)}
          className="mt-4 sm:mt-0 inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          <span className="mr-2">✉️</span>
          Compose
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📧</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Messages</p>
              <p className="text-2xl font-bold text-gray-900">{filteredMessages.length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📬</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Unread</p>
              <p className="text-2xl font-bold text-gray-900">{filteredMessages.filter(msg => !msg.isRead).length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📤</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Sent</p>
              <p className="text-2xl font-bold text-gray-900">{filteredMessages.filter(msg => msg.fromId === user?.id).length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📥</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Received</p>
              <p className="text-2xl font-bold text-gray-900">{filteredMessages.filter(msg => msg.toId === user?.id).length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
            <input
              type="text"
              placeholder="Search messages..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Types</option>
              <option value="appointment">Appointment</option>
              <option value="system">System</option>
              <option value="patient">Patient</option>
              <option value="user">User</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
            <select
              value={filterRead}
              onChange={(e) => setFilterRead(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Messages</option>
              <option value="unread">Unread</option>
              <option value="read">Read</option>
            </select>
          </div>
          <div className="flex items-end">
            <button
              onClick={() => {
                setSearchTerm('');
                setFilterType('all');
                setFilterRead('all');
              }}
              className="w-full px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>

      {/* Messages Layout */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-3 h-96">
          {/* Message List */}
          <div className="lg:col-span-1 border-r border-gray-200 overflow-y-auto">
            {filteredMessages.map((message) => (
              <div
                key={message.id}
                onClick={() => {
                  setSelectedMessage(message);
                  if (!message.isRead) {
                    handleMarkAsRead(message.id);
                  }
                }}
                className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                  selectedMessage?.id === message.id ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
                } ${!message.isRead ? 'bg-yellow-50' : ''}`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">{getTypeIcon(message.type)}</span>
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-medium truncate ${
                        !message.isRead ? 'text-gray-900' : 'text-gray-600'
                      }`}>
                        {message.subject}
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        {user?.role === 'patient' ? message.from : message.to}
                      </p>
                    </div>
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTimestamp(message.timestamp)}
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2 line-clamp-2">
                  {message.content}
                </p>
              </div>
            ))}
          </div>

          {/* Message Content */}
          <div className="lg:col-span-2 p-6">
            {selectedMessage ? (
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">{selectedMessage.subject}</h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">{getTypeIcon(selectedMessage.type)}</span>
                      <button
                        onClick={() => handleDeleteMessage(selectedMessage.id)}
                        className="text-red-600 hover:text-red-900 transition-colors"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                    <span>
                      <strong>From:</strong> {selectedMessage.from}
                    </span>
                    <span>
                      <strong>To:</strong> {selectedMessage.to}
                    </span>
                    <span>
                      <strong>Date:</strong> {formatTimestamp(selectedMessage.timestamp)}
                    </span>
                  </div>
                </div>
                <div className="prose max-w-none">
                  <p className="text-gray-700 whitespace-pre-wrap">{selectedMessage.content}</p>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <button
                    onClick={() => {
                      setNewMessage({
                        to: selectedMessage.from,
                        subject: `Re: ${selectedMessage.subject}`,
                        content: ''
                      });
                      setShowComposeModal(true);
                    }}
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <span className="mr-2">↩️</span>
                    Reply
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-gray-500">
                <div className="text-center">
                  <div className="text-4xl mb-2">📧</div>
                  <p>Select a message to read</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Compose Message Modal */}
      {showComposeModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Compose Message</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
                  <input
                    type="text"
                    value={newMessage.to}
                    onChange={(e) => setNewMessage({ ...newMessage, to: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Recipient name or email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input
                    type="text"
                    value={newMessage.subject}
                    onChange={(e) => setNewMessage({ ...newMessage, subject: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Message subject"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    value={newMessage.content}
                    onChange={(e) => setNewMessage({ ...newMessage, content: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    rows="6"
                    placeholder="Type your message here..."
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  onClick={() => setShowComposeModal(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSendMessage}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Messages;
