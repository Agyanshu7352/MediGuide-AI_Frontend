import React from "react";

const SpinningDots = ({ size = 'md', color = 'blue' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6', 
    lg: 'w-8 h-8'
  };
  
  const colorClasses = {
    blue: 'bg-blue-500',
    purple: 'bg-purple-500',
    pink: 'bg-pink-500',
    green: 'bg-green-500'
  };

  return (
    <div className="flex space-x-2">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-bounce`}
          style={{ animationDelay: `${i * 0.1}s` }}
        />
      ))}
    </div>
  );
};

const ComponentLoading = ({ title }) => {
    return (
        <div className="lg:col-span-2 space-y-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
            <h3 className="text-white font-semibold mb-4">{title}</h3>
            <div className="mb-4 flex justify-center">
              <SpinningDots color="blue" />
            </div>
            <div className="flex justify-center space-x-4 mb-4">
              <SpinningDots size="sm" color="purple" />
              <SpinningDots size="lg" color="pink" />
            </div>
          </div>
    );
};

export default ComponentLoading;
