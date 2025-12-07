import SectionHeader from "@/Components/common/SectionHeader";
import { publishStepsData } from "@/constants/data";
import AnimatedCardsWrapper from "./AnimatedCardsWrapper";

const PublishingSteps: React.FC = () => {
  return (
    <AnimatedCardsWrapper
      steps={publishStepsData}
      header={
        <SectionHeader
          title="Efficient Publication Procedure"
          description="Our streamlined review and processing system ensures your research paper is published within 2–3 days."
        />
      }
    />
  );
};

export default PublishingSteps;
