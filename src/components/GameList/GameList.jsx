import React, { useState } from "react";
import { Modal } from "../../components/Modal/Modal";

import "./GameList.css";

const GameList = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleOpenButton = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className="game-list">
      <button onClick={handleOpenButton}>Открыть</button>
      <Modal isOpen={isModalOpen}>Модалка</Modal>
    </div>
  );
};

export { GameList };
