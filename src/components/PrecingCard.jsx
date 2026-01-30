import { CircleCheck } from "lucide-react";

const PrecingCard = ({ plan }) => {
  return (
    <div
      className={`
        ${plan.gridSpan || ""} 
        ${plan.popular === true ? "bg-linear-to-b from-dark-700 to-brand-900/50 border border-brand-500/30" : "bg-white/5"} 
        rounded-xl p-6 flex flex-col h-full transition-transform hover:scale-[1.01]
      `}
    >
      <div className="flex flex-col gap-6 flex-1 justify-between h-full">
        <div className="flex flex-col gap-4 flex-1">
          <div className="flex justify-between items-center">
            <h3
              className={`text-xl font-bold ${plan.name === "Pro" ? "text-brand-400 text-2xl" : "text-gray-200"}`}
            >
              {plan.name}
            </h3>
            {plan.popular && (
              <span className="bg-brand-500/20 text-brand-300 text-xs font-bold px-2 py-1 rounded-full border border-brand-500/20">
                Popular
              </span>
            )}
          </div>

          <p className="text-gray-400 text-sm h-10">{plan.desc}</p>

          <div className="flex items-baseline gap-1 my-2">
            <span className="text-4xl font-bold text-white">{plan.price}</span>
            <span className="text-gray-500 text-sm">/mes</span>
          </div>
        </div>

        <ul className="flex-1 space-y-3">
          {plan.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-3 text-sm text-gray-300"
            >
              <CircleCheck
                size={18}
                className="text-brand-500 shrink-0 mt-0.5"
              />
              {feature}
            </li>
          ))}
        </ul>

        <button
          className={`
            ${plan.bgClass} 
            ${plan.bgClass === "bg-transparent" ? "border border-white/10 hover:bg-white/5" : "hover:bg-brand-500 shadow-lg shadow-brand-900/20"} 
            text-white font-medium w-full py-3 rounded-lg mt-6 transition-all
          `}
        >
          {plan.button}
        </button>
      </div>
    </div>
  );
};

export default PrecingCard;
