import React, { useState } from 'react';

const ChatbotScreen = () => {
  const [query, setQuery] = useState('');
  const [department, setDepartment] = useState('');
  const [placeholder, setPlaceholder] = useState('Enter your query here...');

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };