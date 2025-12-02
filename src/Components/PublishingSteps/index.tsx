import SectionHeader from "../common/SectionHeader";
import { publishStepsData } from "@/constants/data";
import AnimatedCradsWrapper from "./AnimatedCradsWrapper";

const PublishingSteps: React.FC = () => {
  return (
    <AnimatedCradsWrapper
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
