import PricingCard from '../shared/PricingCard';

const PricingSection = ({ pricingPlans }) => {
  return (
    <section className="py-20 bg-[#F5F6F7] font-['Open_Sans']">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-semibold text-[#1A3D6D] bg-[#EAF4FB] rounded-full mb-4 font-['Montserrat']">
            PRICING
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A3D6D] mb-4 font-['Montserrat']">
            Flexible Plans for <span className="text-[#76B041]">Every Need</span>
          </h2>
          <p className="text-[#4A4A4A] max-w-2xl mx-auto text-lg">
            Professional-grade rehabilitation at accessible prices
          </p>
        </div>
        
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
