import React from 'react';
import AdviceDisplay from './components/AdviceDisplay';


const App = () => {
  
  return (
    <div className="flex flex-col max-w-[1640px] md:w-[1640px] h-[810px] md:h-[810px] bg-[#202733] items-center justify-center">
      <AdviceDisplay />
    </div>
  );
};

export default App;
