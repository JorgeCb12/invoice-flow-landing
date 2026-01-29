const Card = ({ title, description, color, icon }) => {
  return (
    <div className="bg-white/5 px-4 py-6 rounded-lg">
      <div className="flex flex-col gap-2">
        <div className={`p-3 rounded-lg bg-white/10 w-fit  flex s ${color}`}>
          {icon}
        </div>
        <span className={`py-1 text-lg font-medium ${color}`}>{title}</span>
        <p className="text-sm ">{description}</p>
      </div>
    </div>
  );
};

export default Card;
