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
/* 
const TechToolButton = ({
  icon,
  label,
  color,
  hoverColor,
  setTech,
  setTools,
  tech,
  tools
}) => {
  const handleToolTech = () => {
    if (label === "Technologies") {
      setTech(true);
      setTools(false);
    } else if (label === "Tools" || "Outils") {
      setTech(false);
      setTools(true);
    }
  };

  const isSelected = (tech && label === "Technologies") || (tools && (label === "Tools" || label === "Outils"));

  return (
    <>
      <button
        className={`font-main text-background-100 ${color} text-sm py-3 px-4 rounded-full ${isSelected ? 'shadow-none translate-y-1px translate-x-1px' : 'shadow-small'} active:translate-y-1px active:translate-x-1px hover:${hoverColor} active:shadow-none`}
        onClick={handleToolTech}
      > {/* h-14 py-4 px-6 mx-4  
        <div className="flex items-center">
          <div className="px-1">{icon}</div>
          <h1 className="px-1">{label}</h1>
        </div>
      </button>
    </>
  );
};
 */
export { Button };
