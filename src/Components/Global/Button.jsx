const Button = ({ icon, label, color, hoverColor }) => {
  return (
    <>
      <button
        className={`font-main text-background-100 ${color} text-sm md:text-base w-48 md:w-52 py-3 px-4 rounded-full shadow-small active:translate-x-2px active:translate-y-2px ${hoverColor} active:shadow-none`}
      > {/* w-56 h-14 py-4 px-6 mx-4  */}
        <div className="flex items-center justify-center">
          <div className="px-1">{icon}</div>
          <h1 className="px-1 pt-1">{label}</h1>
        </div>
      </button>
    </>
  );
};

export { Button };
