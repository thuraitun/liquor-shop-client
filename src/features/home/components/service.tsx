import { CircleDollarSign, CreditCard, Van, WalletCards } from "lucide-react";

export const Service = () => {
  const services = [
    {
      name: "Free Delivery",
      icon: Van,
    },
    {
      name: "24 hours returns",
      icon: CircleDollarSign,
    },
    {
      name: "Easy Payment",
      icon: WalletCards,
    },
    {
      name: "Warranty",
      icon: CreditCard,
    },
  ];
  return (
    <div className="py-4">
      <h1 className="text-xl font-bold text-center text-[#e95959] mb-5">
        Oure Services
      </h1>

      <div className="grid grid-cols-4 gap-4">
        {services.map((service) => (
          <div
            key={service.name}
            className="flex flex-col justify-center items-center gap-2 p-4 bg-[#f5f5f5] border border-transparent shadow-sm hover:border-[#e95959]"
          >
            <service.icon size={40} className="text-[#e95959]" />
            <p className="cursor-pointer text-center hover:text-[#e95959] font-medium">{service.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
