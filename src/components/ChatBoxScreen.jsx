import React, { useState } from 'react';

const ChatbotScreen = () => {
  const [query, setQuery] = useState('');
  const [department, setDepartment] = useState('');
  const [placeholder, setPlaceholder] = useState('Enter your query here...');

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };
  const handleDepartmentChange = (e) => {
    const selectedDepartment = e.target.value;
    setDepartment(selectedDepartment);
    if (selectedDepartment === 'sales') {
      setPlaceholder('Enter your sales query here...');
    } else if (selectedDepartment === 'marketing') {
      setPlaceholder('Enter your marketing query here...');
    } else {
      setPlaceholder('Enter your query here...');
    }
  };
  