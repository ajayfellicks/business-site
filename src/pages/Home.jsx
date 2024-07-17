import React from "react";
import Hero from "../components/Home Comp/Hero";
import PropertiesComp from "../components/Home Comp/PropertiesComp";
import FeaturedImage1 from "../assets/Featured-Image1.png";
import FeaturedImage2 from "../assets/Featured-Image2.png";
import FeaturedImage3 from "../assets/Featured-Image3.png";
import Testimonials from "../components/Home Comp/Testimonials";
import profile1 from "../assets/Profile1.png";
import profile2 from "../assets/Profile2.png";
import profile3 from "../assets/Profile3.png";
import FAQ from "../components/Home Comp/FAQ";
const Home = () => {
  const data = [
    {
      image: FeaturedImage1,
      title: "Rustic Retreat Cottage",
      about:
        "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community",
    },
    {
      image: FeaturedImage2,
      title: "Metropolitan Haven",
      about:
        "A chic and fully-furnished 2-bedroom apartment with panoramic city views",
    },
    {
      image: FeaturedImage3,
      title: "Seaside Serenity Villa",
      about:
        "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood",
    },
    {
      image: FeaturedImage1,
      title: "Rustic Retreat Cottage",
      about:
        "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community 2",
    },
    {
      image: FeaturedImage2,
      title: "Metropolitan Haven",
      about:
        "A chic and fully-furnished 2-bedroom apartment with panoramic city views 2",
    },
    {
      image: FeaturedImage3,
      title: "Seaside Serenity Villa",
      about:
        "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood 2",
    },
    {
      image: FeaturedImage1,
      title: "Rustic Retreat Cottage",
      about:
        "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community 3",
    },
    {
      image: FeaturedImage2,
      title: "Metropolitan Haven",
      about:
        "A chic and fully-furnished 2-bedroom apartment with panoramic city views 3",
    },
    {
      image: FeaturedImage3,
      title: "Seaside Serenity Villa",
      about:
        "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood 3",
    },
    {
      image: FeaturedImage1,
      title: "Rustic Retreat Cottage",
      about:
        "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community 4",
    },
    {
      image: FeaturedImage2,
      title: "Metropolitan Haven",
      about:
        "A chic and fully-furnished 2-bedroom apartment with panoramic city views 4",
    },
    {
      image: FeaturedImage3,
      title: "Seaside Serenity Villa",
      about:
        "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood 4",
    },
    {
      image: FeaturedImage1,
      title: "Rustic Retreat Cottage",
      about:
        "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community 5",
    },
    {
      image: FeaturedImage2,
      title: "Metropolitan Haven",
      about:
        "A chic and fully-furnished 2-bedroom apartment with panoramic city views 5",
    },
    {
      image: FeaturedImage3,
      title: "Seaside Serenity Villa",
      about:
        "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood 5",
    },
    {
      image: FeaturedImage1,
      title: "Rustic Retreat Cottage",
      about:
        "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community 6",
    },
    {
      image: FeaturedImage2,
      title: "Metropolitan Haven",
      about:
        "A chic and fully-furnished 2-bedroom apartment with panoramic city views 6",
    },
    {
      image: FeaturedImage3,
      title: "Seaside Serenity Villa",
      about:
        "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood 6",
    },
    {
      image: FeaturedImage1,
      title: "Rustic Retreat Cottage",
      about:
        "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community 7",
    },
    {
      image: FeaturedImage2,
      title: "Metropolitan Haven",
      about:
        "A chic and fully-furnished 2-bedroom apartment with panoramic city views 7",
    },
  ];

  const testData = [
    {
      title: "Exceptional Service!",
      description:
        "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
      profilePic: profile1,
      profileName: "Wade Warren",
      profileAdd: "USA, California",
    },
    {
      title: "Efficient and Reliable",
      description:
        "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
      profilePic: profile2,
      profileName: "Emelie Thomson",
      profileAdd: "USA, Florida",
    },
    {
      title: "Trusted Advisors",
      description:
        "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
      profilePic: profile3,
      profileName: "John Mans",
      profileAdd: "USA, Nevada",
    },
    {
      title: "Exceptional Service2!",
      description:
        "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
      profilePic: profile1,
      profileName: "Wade Warren",
      profileAdd: "USA, California",
    },
    {
      title: "Efficient and Reliable2",
      description:
        "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
      profilePic: profile2,
      profileName: "Emelie Thomson",
      profileAdd: "USA, Florida",
    },
    {
      title: "Trusted Advisors2",
      description:
        "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
      profilePic: profile3,
      profileName: "John Mans",
      profileAdd: "USA, Nevada",
    },
    {
      title: "Exceptional Service!3",
      description:
        "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
      profilePic: profile1,
      profileName: "Wade Warren",
      profileAdd: "USA, California",
    },
    {
      title: "Efficient and Reliable3",
      description:
        "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
      profilePic: profile2,
      profileName: "Emelie Thomson",
      profileAdd: "USA, Florida",
    },
    {
      title: "Trusted Advisors3",
      description:
        "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
      profilePic: profile3,
      profileName: "John Mans",
      profileAdd: "USA, Nevada",
    },
    {
      title: "Exceptional Service!4",
      description:
        "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
      profilePic: profile1,
      profileName: "Wade Warren",
      profileAdd: "USA, California",
    },
    {
      title: "Efficient and Reliable4",
      description:
        "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
      profilePic: profile2,
      profileName: "Emelie Thomson",
      profileAdd: "USA, Florida",
    },
    {
      title: "Trusted Advisors4",
      description:
        "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
      profilePic: profile3,
      profileName: "John Mans",
      profileAdd: "USA, Nevada",
    },
    {
      title: "Exceptional Service!5",
      description:
        "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
      profilePic: profile1,
      profileName: "Wade Warren",
      profileAdd: "USA, California",
    },
    {
      title: "Efficient and Reliable5",
      description:
        "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
      profilePic: profile2,
      profileName: "Emelie Thomson",
      profileAdd: "USA, Florida",
    },
    {
      title: "Trusted Advisors5",
      description:
        "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
      profilePic: profile3,
      profileName: "John Mans",
      profileAdd: "USA, Nevada",
    },
  ];
  const faqData = [
    {
      title: "How do I search for properties on Estatein?",
      description:
        "Learn how to use our user-friendly search tools to find properties that match your criteria.",
    },
    {
      title: "What documents do I need to sell my property through Estatein?",
      description:
        "Find out about the necessary documentation for listing your property with us.",
    },
    {
      title: "How can I contact an Estatein agent?",
      description:
        "Discover the different ways you can get in touch with our experienced agents.",
    },
    {
      title: "How do I search for properties on Estatein?2",
      description:
        "Learn how to use our user-friendly search tools to find properties that match your criteria.",
    },
    {
      title: "What documents do I need to sell my property through Estatein?2",
      description:
        "Find out about the necessary documentation for listing your property with us.",
    },
    {
      title: "How can I contact an Estatein agent?2",
      description:
        "Discover the different ways you can get in touch with our experienced agents.",
    },
    {
      title: "How do I search for properties on Estatein?3",
      description:
        "Learn how to use our user-friendly search tools to find properties that match your criteria.",
    },
    {
      title: "What documents do I need to sell my property through Estatein?3",
      description:
        "Find out about the necessary documentation for listing your property with us.",
    },
    {
      title: "How can I contact an Estatein agent?3",
      description:
        "Discover the different ways you can get in touch with our experienced agents.",
    },
  ];
  return (
    <div>
      <Hero />
      <PropertiesComp data={data} />
      <Testimonials testData={testData} />
      <FAQ faqData={faqData} />
    </div>
  );
};

export default Home;
