import { CircleCheck } from "lucide-react";

const PrecingCard = ({ plan }) => {
  return (
    <div
      className={`${plan.popular === true ? "bg-linear-to-b from-dark-700 to-brand-900/50" : "bg-white/5"} rounded-lg p-6 flex flex-col items-stretch h-full`}
    >
      <div className="flex flex-col gap-6 flex-1">
        <div className="flex flex-col gap-4">
          <h3
            className={`text-xl font-bold ${plan.name === "Pro" ? "text-brand-600 font-bold text-2xl" : "text-gray-300"}`}
          >
            {plan.name}
          </h3>
          <p className="text-gray-400">{plan.desc}</p>
          <div className="flex items-baseline gap-1 my-2">
            <span className="text-4xl font-bold text-white">{plan.price}</span>
            <span className="text-gray-400 text-sm">/mes</span>
          </div>
        </div>
        <ul>
          {plan.features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 py-2 text-gray-300"
            >
              <CircleCheck size={22} className=" text-green-400" />
              {feature}
            </li>
          ))}
        </ul>
        <button
          className={`${plan.bgClass} ${plan.bgClass === "bg-transparent" ? "border border-white/20" : ""} text-white font-medium px-4 py-2 rounded-lg`}
        >
          {plan.button}
        </button>
      </div>
    </div>
  );
};

export default PrecingCard;
