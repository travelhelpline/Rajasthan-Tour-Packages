// useShowAll.js
import { useState } from "react";

const useShowAll = (items, initialCount = 3) => {
  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll ? items : items.slice(0, initialCount);

  const toggleShowAll = () => setShowAll((prev) => !prev);

  return { visibleItems, showAll, toggleShowAll };
};

export default useShowAll;
