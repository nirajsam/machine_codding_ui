import React, { useState } from 'react';

const Autocomplete = () => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  
  // Simulated list of suggestions (You can fetch from an API)
  const allSuggestions = ['Apple', 'Banana', 'Orange', 'Pineapple', 'Grapes', 'Mango'];

  // Custom debounce function
  const debounce = (func, delay) => {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(this, args), delay);
    };
  };

  // Function to fetch suggestions based on the input value
  const fetchSuggestions = (value) => {
    const filteredSuggestions = allSuggestions.filter(suggestion =>
      suggestion.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  // Debounced function for fetching suggestions to avoid frequent API calls
  const debouncedFetchSuggestions = debounce(fetchSuggestions, 300);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    debouncedFetchSuggestions(value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type to search..."
      />
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index}>{suggestion}</li>
        ))}
      </ul>
    </div>
  );
};

export default Autocomplete;
