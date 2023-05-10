import { Image, Stack, VStack } from "@chakra-ui/react";
import { NextPage } from "next";
import SubHeading from "../components/SubHeading";
import TeamMember from "../components/TeamMember";
import Wrapper from "../components/Wrapper";

export const Index: NextPage = () => {
  return (
    <Wrapper title="About">
      <div className="flex flex-wrap justify-center mx-auto">
        <div className="pr-0 pt-0 lg:pt-1.5 lg:pr-4 lg:w-1/2 ">
          <Image
            src="img/eddie.jpeg"
            alt="eddie van der meer"
            className="h-max mb-5 object-scale-down rounded-lg md:w-full "
          />
        </div>

        <div className="lg:w-1/2 md:w-full lg:max-w-xl md:max-w-full text-lg inline-block">
          <VStack>
            <p>
              Eddie is a fingerstyle guitarist from the Netherlands. His continuous dedication to
              his passion has led to him creating high-quality covers of popular music, which has
              garnered him over 375 million views and over 2.5 million subscribers on YouTube.
            </p>
            <p>
              He first picked up the guitar when he was 10, and took lessons for basics from his
              neighbor. At age of 13, Eddie was inspired by Tommy Emmanuel to start learning
              fingerstyle. When he was 14, he was given the honor of being able to perform with
              Tommy Tommy on stage, which was uploaded as his first video on YouTube. A year later,
              he decided to create his own voice on the guitar, shifting his focus to arranging and
              covering songs. In 2013, he began taking YouTube more seriously and started building
              an audience.
            </p>
            <p>
              He is now 25 years old and has successfully made his passion into a career. He is
              delighted to be able to share his guitar music with the world. As of October 2020,
              Eddie has been working full-time as a music producer.
            </p>
          </VStack>
        </div>
      </div>
      <SubHeading label="Team" />
      <Stack direction={{ base: "column", lg: "row" }} spacing={{ base: 8, lg: 8 }}>
        <TeamMember
          name="Juliano"
          role="Cameraman"
          imageUrl="/img/jc300px.jpg"
          socials={[
            { type: "youtube", link: "https://www.youtube.com/julianocroese" },
            { type: "instagram", link: "https://www.instagram.com/julianocroese" },
          ]}
        />
        <TeamMember
          name="Robert"
          role="Transcriber & Web Developer"
          imageUrl="/img/unnamed300px.jpg"
          socials={[
            { type: "youtube", link: "https://www.youtube.com/robertchen" },
            { type: "github", link: "https://github.com/robchendev" },
          ]}
        />
        <TeamMember
          name="Constantine"
          role="Web Developer"
          imageUrl="/img/constantine300px.jpg"
          socials={[{ type: "github", link: "https://github.com/kulakdev" }]}
        />
      </Stack>
      {/* <div className="flex flex-wrap sm:flex-col lg:flex-row lg:max-w-6xl md:max-w-full justify-center mb-14 mx-auto"> */}

      {/* </div> */}
    </Wrapper>
  );
};

export default Index;
