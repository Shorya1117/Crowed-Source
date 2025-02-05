import React, { useState } from 'react';
import './Ps.css';

// Example data array with problem statements
const cardData = [
  { id: 1, icon: '💻', title: 'Project A', problemStatements: ["Problem 1", "Problem 2", "Problem 3", "Problem 4", "Problem 5"] },
  { id: 2, icon: '📱', title: 'Project B', problemStatements: ["Problem 1", "Problem 2", "Problem 3", "Problem 4", "Problem 5"] },
  { id: 3, icon: '🌐', title: 'Project C', problemStatements: ["Problem 1", "Problem 2", "Problem 3", "Problem 4", "Problem 5"] },
  { id: 4, icon: '⚙️', title: 'Project D', problemStatements: ["Problem 1", "Problem 2", "Problem 3", "Problem 4", "Problem 5"] },
  { id: 5, icon: '🔒', title: 'Project E', problemStatements: ["Problem 1", "Problem 2", "Problem 3", "Problem 4", "Problem 5"] },
  { id: 6, icon: '🧠', title: 'Project F', problemStatements: ["Problem 1", "Problem 2", "Problem 3", "Problem 4", "Problem 5"] },
  // Add more items if needed
];

const Ps = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCard, setSelectedCard] = useState(null);
  const itemsPerPage = 4;

  // Handle card click to open modal with problem statements
  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  // Close modal
  const closeModal = () => {
    setSelectedCard(null);
  };

  // Get current cards to display
  const indexOfLastCard = currentPage * itemsPerPage;
  const indexOfFirstCard = indexOfLastCard - itemsPerPage;
  const currentCards = cardData.slice(indexOfFirstCard, indexOfLastCard);

  // Calculate total pages
  const totalPages = Math.ceil(cardData.length / itemsPerPage);

  return (
    <div className="ps-container">
      <h2>Project Ideas</h2>

      {/* Card Display */}
      <div className="card-grid">
        {currentCards.map((card) => (
          <div key={card.id} className="card" onClick={() => handleCardClick(card)}>
            <span className="icon">{card.icon}</span>
            <h3 className="title">{card.title}</h3>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
          Prev
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>

      {/* Inline Modal */}
      {selectedCard && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>×</button>
            <h2>{selectedCard.title} - Problem Statements</h2>
            <ul>
              {selectedCard.problemStatements.map((statement, index) => (
                <li key={index}>{statement}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Ps;
