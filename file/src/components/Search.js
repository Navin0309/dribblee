import React, { useState } from 'react';

const Search = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  function search(e) {
    e.preventDefault();
    setQuery(e.target.value);

    // Dummy data for suggestions (replace with your own data)
    const allSuggestions = ['User Experience (UX)', 'User Interface (UI)', 'Responsive Design', 'Minimalism', 'Typography', 'Color Theory', 'Graphic Design',
    'Illustration', 'Web Accessibility', 'Wireframing', 'Prototyping', 'Mobile Design', 'Visual Hierarchy', 'Grid Systems', 'Whitespace',
    'Logo Design', 'Branding', 'Iconography', 'Motion Graphics', '3D Design', 'Art Direction', 'Creative Process', 'Storytelling in Design',
    'Emotional Design', 'Aesthetics', 'Design Thinking', 'Human-Centered Design', 'Digital Art', 'Vector Graphics', 'Pixel Art', 'Multimedia Integration',
    'Navigation Design', 'Scroll Animations', 'Parallax Scrolling', 'Photography in Web Design', 'Icon Fonts',
    'Infographics', 'Interaction Design', 'Virtual Reality (VR)', 'Augmented Reality (AR)', 'Game Design', 'Packaging Design', 'Print Design',
    'Calligraphy', 'Brush Lettering', 'Kinetic Typography', 'Ambient Design', 'Responsive Typography', 'Mobile First Design', 'Flat Design', 'Skeuomorphism',
    'Material Design', 'Adaptive Design', 'Emotional Intelligence in Design', 'Usability Testing', 'Design Systems', 'Scalability', 'Fluid Design',
    'Retro-Futurism', 'Cinemagraphs', 'Responsive Images', 'Content First Design', 'Data Visualization', 'Isometric Design', 'Doodle Art', 'Comic Art',
    'Street Art', 'Public Art', 'Environmental Design', 'Experimental Design', 'Sustainable Design', 'Inclusive Design', 'Collaborative Design',
    'Critical Design', 'Generative Art', 'Open Source Design', 'Design Ethics', 'Retro Design', 'Neo-Futurism', 'Art Nouveau', 'Surrealism', 'Cubism',
    'Abstract Expressionism', 'Impressionism', 'Pointillism', 'Op Art', 'Art Deco', 'Renaissance Art', 'Baroque Art', 'Gothic Art', 'Expressionism', 'Dadaism',
    'Bauhaus', 'Pop Art', 'Street Photography', 'Rule of Thirds', 'Golden Ratio', 'Fibonacci Sequence in Design', 'Design Trends', 'Futuristic Design',
    'Vintage Design', 'Digital Painting', 'Color Grading', 'Storyboarding', 'Visual Storytelling', 'Cultural Influences in Design',
    'Global Design Perspectives', 'Cross-Cultural Design', 'Design for Social Impact', 'Emotional Intelligence in Art', 'Art Therapy', 'Mixed Media Art',
    'Outsider Art', 'Contemporary Art', 'Art Installations', 'Visual Identity Design', 'Dark Mode Design', 'Adaptive Icons', 'Fluid Grids', 'Progressive Enhancement'];

    // Filter suggestions based on the input value
    const filteredSuggestions = allSuggestions.filter(suggestion =>
      suggestion.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setSuggestions(filteredSuggestions);
  }

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setSuggestions([]);
  };

  return (
    <div className="w-full max-w-xl flex items-center m-auto text-xl">
      <form>
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-pink-900 sr-only dark:text-white">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="mr-1 w-5 h-5 text-gray-500 dark:text-gray-900"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            value={query}
            onChange={search}
            className="h-full block w-[8cm] p-4 my-1 ps-10 text-3px focus:empty:bg-black-300 rounded-[40px] dark:placeholder-gray-400 text-black"
            placeholder="Search"
            required
          />
          {query && suggestions.length > 0 && (
            <ul className="absolute z-10 w-full mt-2 bg-white border rounded">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="p-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-[0.3cm] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline focus:ring-blue-300 font-medium rounded-[40px] text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
