export const MissionVision = () => {
  const missionVisions = [
    {
      icon: "/images/mission.svg",
      title: "Mission",
      content:
        "To provide the highest quality liquor to our customers, while maintaining a strong and reliable brand in the industry. We are committed to delivering excellent service and a trusted shopping experience for customers nationwide. We are always looking to expand our portfolio and offer new products to our customers.",
    },
    {
      icon: "/images/vision.svg",
      title: "Vision",
      content:
        "To be a leading liquor retailer in the industry, while maintaining a strong and reliable brand in the industry. We are always looking to expand our portfolio and offer new products to our customers. We are committed to delivering excellent service and a trusted shopping experience for customers nationwide.",
    },
  ];
  return (
    <div className="grid grid-cols-2 gap-32 my-12 bg-[#f5f5f5] p-12 border border-[#e95959]">
      {missionVisions.map((missionVision, index) => (
        <div key={index} className="flex flex-col w-full">
          <img
            src={missionVision.icon}
            alt={missionVision.title}
            className="w-full h-[55px]"
          />
          <h2 className="text-lg text-center font-bold text-[#e95959] my-2">
            {missionVision.title}
          </h2>
          <p className="text-sm text-[#666]">{missionVision.content}</p>
        </div>
      ))}
    </div>
  );
};
