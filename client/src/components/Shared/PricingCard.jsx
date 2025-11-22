import { FiCheck, FiStar, FiZap, FiAward, FiShield, FiInfo } from 'react-icons/fi';

const PricingCard = ({ plan }) => {
  const planIcons = {
    Basic: {
      icon: <FiShield className="w-6 h-6" />
    },
    Premium: {
      icon: <FiZap className="w-6 h-6" />
    },
    Annual: {
      icon: <FiAward className="w-6 h-6" />
    }
  };

  const colorVariants = {
    blue: {
      bg: 'from-blue-500 to-blue-600',
      lightBg: 'from-blue-100 to-blue-50',
      text: 'text-blue-600',
      border: 'border-blue-500',
      button: 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
      featureIcon: 'text-blue-500'
    },
    teal: {
      bg: 'from-teal-500 to-teal-600',
      lightBg: 'from-teal-100 to-teal-50',
      text: 'text-teal-600',
      border: 'border-teal-500',
      button: 'bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700',
      featureIcon: 'text-teal-500'
    },
    indigo: {
      bg: 'from-indigo-500 to-indigo-600',
      lightBg: 'from-indigo-100 to-indigo-50',
      text: 'text-indigo-600',
      border: 'border-indigo-500',
      button: 'bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700',
      featureIcon: 'text-indigo-500'
    }
  };

  const colors = colorVariants[plan.color] || colorVariants.blue;

  return (
    <div
      className={`relative bg-white rounded-3xl overflow-hidden border transition-all duration-300 group transform hover:-translate-y-2 ${plan.featured ? `border-2 ${colors.border} shadow-xl` : 'border-gray-200 shadow-lg'}`}
    >
      {/* Featured ribbon */}
      {plan.featured && (
        <div className={`absolute -top-3 -right-3 ${colors.bg} text-white text-xs font-bold px-8 py-1.5 shadow-md transform rotate-45 origin-bottom-left`}>
          <div className="flex items-center justify-end">
            <FiStar className="mr-1" />
            <span>POPULAR</span>
          </div>
        </div>
      )}

      <div className="p-8">
        {/* Plan header */}
        <div className="flex items-center mb-4">
          <div className={`p-3 rounded-xl ${colors.lightBg} ${colors.text} mr-3 shadow-sm`}>
            {planIcons[plan.name].icon}
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
            {plan.subtitle && (
              <p className="text-sm text-gray-500">{plan.subtitle}</p>
            )}
          </div>
        </div>

        {/* Price box */}
        <div className="mb-6 p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 hover:scale-[1.02] transition-transform">
          <div className="flex items-end justify-center">
            <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
            <span className="text-gray-500 ml-1 mb-1">/{plan.period}</span>
          </div>
          {plan.savings && (
            <p className="text-center text-sm text-green-600 mt-1 font-medium">
              Save {plan.savings} vs monthly
            </p>
          )}
        </div>

        {/* Features list */}
        <ul className="space-y-3 mb-8">
          {plan.features.map((feature, i) => (
            <li
              key={i}
              className="flex items-start p-2 rounded-lg hover:bg-gray-50 transition"
            >
              <div className={`p-1 rounded-full ${colors.featureIcon}/10 mr-3`}>
                <FiCheck className={`${colors.featureIcon}`} />
              </div>
              <span className="text-gray-700">{feature}</span>
              {i === 0 && plan.featured && (
                <span className="ml-2 flex items-center text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                  <FiInfo className="mr-1" /> New
                </span>
              )}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="relative overflow-hidden rounded-xl">
          <a href="/appointment" className="inline-block">

          <button
            className={`w-full py-3.5 px-6 text-white font-semibold rounded-xl transition-all shadow-lg ${colors.button} transform hover:scale-105 active:scale-95 relative z-10`}
          >
            {plan.buttonText || 'Get Started'}
          </button>
          </a>
          {plan.featured && (
            <div 
              className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-300 opacity-0 group-hover:opacity-20 rounded-xl -z-10 blur-md transition-opacity duration-300"
            />
          )}
        </div>

        {/* Footer note */}
        {plan.note && (
          <p className="text-xs text-gray-500 text-center mt-4 flex items-center justify-center">
            <FiInfo className="mr-1" /> {plan.note}
          </p>
        )}
      </div>

      {/* Hover indicator bar */}
      <div 
        className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${colors.bg} origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
      />
    </div>
  );
};

export default PricingCard;
