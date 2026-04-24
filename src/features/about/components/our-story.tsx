import { Text, Timeline } from "@mantine/core";
import { GitBranchIcon, GitCommitIcon, GitPullRequestIcon } from "lucide-react";

export const OurStory = () => {
  const stories = [
    {
      title: "Start",
      content:
        "Founded in 1995, Liquor Store began as a small liquor shop dedicated to providing quality beverages to the local community.From the very beginning, we focused on offering a carefully selectedrange of wines, spirits, and beers sourced from trusted producers.With a strong commitment to quality and customer satisfaction, westeadily built our reputation as a reliable and customer-focusedliquor retailer",
    },
    {
      title: "Second Generation",
      content:
        "In 2011, under second-generation leadership, the business expanded its vision and operations. We began importing a wider variety of international wines, premium spirits, and craft beverages from countries such as France, Italy, Japan, Korea, and Thailand. With the growth of our wholesale and retail network, we strengthened our presence in the market while continuing to prioritize authenticity and quality.",
    },
    {
      title: "Third Generation",
      content:
        "By 2013, Liquor Store entered its third generation, embracing modernization and innovation. We expanded our distribution channels across multiple cities and introduced a more diverse portfolio, including luxury spirits, rare collections, and curated beverage selections. Combining tradition with modern retail practices, we continue to deliver premium products, excellent service, and a trusted shopping experience for customers nationwide.",
    },
  ];
  return (
    <div>
      <h1 className="text-xl font-bold text-[#e95959] my-5">Our Story</h1>

      <Timeline active={3} bulletSize={24} lineWidth={2}>
        {stories.map((story, index) => (
          <Timeline.Item
            key={index}
            bullet={<GitCommitIcon size={12} />}
            title={story.title}
          >
            <Text size="sm">{story.content}</Text>
          </Timeline.Item>
        ))}
      </Timeline>
    </div>
  );
};
