import author1Image from "../assets/img/testimonies/author_1.jpg";
import author2Image from "../assets/img/testimonies/author_2.png";
import author3Image from "../assets/img/testimonies/author_3.jpg";
import author4Image from "../assets/img/testimonies/author_4.png";
import author5Image from "../assets/img/testimonies/author_5.png";
import author6Image from "../assets/img/testimonies/author_6.png";
import author7Image from "../assets/img/testimonies/author_7.png";
import author8Image from "../assets/img/testimonies/author_8.png";



export type Testimony = {
  title: string;
  description: string;
  sourceLink: string;
  sourceName: string;
  authorName: string;
  authorImage: ImageMetadata;
};
export const testimonies: Testimony[] = [
  {
    title: "Highly recommend",
    description:
      "Thrilled with our master bathroom renovation by E&L—professional, punctual team, exceptional craftsmanship. Planning additional projects with them soon!",
    sourceLink:
      "https://www.yelp.com/biz/e-and-l-home-improvements-silver-spring-4?hrid=a2NUTUk6E34kpcR8rXaTVA&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)",
    sourceName: "Yelp",
    authorName: "Ron B.",
    authorImage: author1Image,
  },
  {
    title: "Excellent team",
    description:
      "E&L surpassed my expectations with excellent communication, proactive guidance, and a customer-centric approach. Highly recommended for home improvements!",
    sourceLink:
      "https://www.yelp.com/biz/e-and-l-home-improvements-silver-spring-4?hrid=fLEUrnWxS9Z4ZqMVD04flA&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)",
    sourceName: "Yelp",
    authorName: "Bryan K.",
    authorImage: author2Image,
  },
  {
    title: "Very professionals",
    description:
      "Thrilled with our stunning kitchen renovation by E&L Home Improvement—unmatched craftsmanship, attention to detail, and world-class service excellence!",
    sourceLink:
      "https://www.yelp.com/biz/e-and-l-home-improvements-silver-spring-4?hrid=hcAgKs7tsXo2OtN4fsasWg&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)",
    sourceName: "Yelp",
    authorName: "Ron M.",
    authorImage: author3Image,
  },
  {
    title: "Outstanding professionals",
    description:
      "Exceptional craftsmanship and utmost professionalism. I highly recommend them to anyone undertaking a renovation project.",
    sourceLink:
      "https://www.yelp.com/biz/e-and-l-home-improvements-silver-spring-4?hrid=0JCo38gjOsrnSo_ugjLo_A&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)",
    sourceName: "Yelp",
    authorName: "Rohit M.",
    authorImage: author2Image,
  },
  {
    title: "High-quality expertise",
    description:
      "E&L had done the renovations to our new house just before we moved in, but to be thorough we still sent out for bids when we wanted to put in a downstairs bathroom. ",
    sourceLink:
      "https://www.thumbtack.com/profile/services/313348981601394858/reviews",
    sourceName: "Thumbtack",
    authorName: "Michael M.",
    authorImage: author4Image,
  },
  {
    title: "Trustworthy Recommendation",
    description:
      "I highly recommend E&L Home Improvements for your next home remodeling job. The owner, Luis Lopez, is trustworthy and easy to work with. His crew is also very capable and polite.",
    sourceLink:
      "https://yelp.com/biz/e-and-l-home-improvements-silver-spring-4?hrid=5vW4G9nR7oDO9Ni5twDvMA&utm_medium=copy_link&utm_source=biz_post_share&l=en_US",
    sourceName: "Yelp",
    authorName: "Ursula P",
    authorImage: author5Image,
  },
  {
    title: "High-quality and professionals",
    description:
      "If you are looking for a high quality, professional, dependable home improvement company, with very reasonable prices, look no further than E & L Home Improvement.",
    sourceLink:
      "https://www.yelp.com/biz/e-and-l-home-improvements-silver-spring-4?hrid=MuUAx3FhK9nDYEz6CRHtjA&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)",
    sourceName: "Yelp",
    authorName: " Isabel M.",
    authorImage: author2Image,
  },
  {
    title: "Grateful appreciation",
    description:
      "I would like to thank Loius and crew from E & L Home Improvement on a job well done on remodeling my kitchen. I am elated on the finished project. ",
    sourceLink: "https://g.co/kgs/6uSZbh",
    sourceName: "Google MyBusiness",
    authorName: "Susan Lucas",
    authorImage: author6Image,
  },
  {
    title: "Wise choice",
    description:
      "If you're looking for a professional, honest, knowledgeable and respectful craftsman and home improvement contractor, look no further than E&L home improvement and Luis Lopez. ",
    sourceLink:
      "https://www.yelp.com/biz/e-and-l-home-improvements-silver-spring-4?hrid=bk_gKb9EGlX96YiBoJ-6qA&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)",
    sourceName: "Yelp",
    authorName: "Meryl K.",
    authorImage: author2Image,
  },
  {
    title: "Exceptional renovation",
    description:
      "My experience wit E&l was excellent. The crew of workers were very polite, hard working, efficient, articulate, worked as a team. Respected my property and my privacy. Mr Luis Lopez was on to of my project from star to finish. ",
    sourceLink:
      "https://www.thumbtack.com/profile/services/313348981601394858/reviews",
    sourceName: "Thumbtack",
    authorName: "Ibtisam A.",
    authorImage: author4Image,
  },
  {
    title: "Exceptional renovation",
    description:
      "Just had our bathroom remodeled by E&L Home Improvements and greatly appreciated the quality of work. They were on time and cleaned up every day. The bathroom is beautiful. It was a pleasure working with everyone from E&L. ",
    sourceLink:
      "https://www.angi.com/companylist/us/md/silver-spring/e-and-l-home-improvement-llc-reviews-9620681.htm#reviews-section",
    sourceName: "Angi",
    authorName: "LInda M.",
    authorImage: author7Image,
  },
  {
    title: "Comprehensive home transformations",
    description:
      "I hired E&L Home Improvements to complete 1/remodeling of three full bathrooms 2/finishing of a basement and 3/the installation of a ceramic tile around my fireplace.",
    sourceLink:
      "https://www.thumbtack.com/profile/services/313348981601394858/reviews",
    sourceName: "Thumbtack",
    authorName: "Jarrian J.",
    authorImage: author4Image,
  },
  {
    title: "Trusted remodeling choice",
    description:
      "I highly recommend E&L Home Improvements for your next home remodeling job. The owner, Luis Lopez, is trustworthy and easy to work with. His crew is also very capable and polite. ",
    sourceLink: "https://g.co/kgs/WBvxNY",
    sourceName: "Google MyBusiness",
    authorName: "Ursula C.",
    authorImage: author8Image,
  },
  {
    title: "Competitive pricing, excellent choice",
    description:
      "E&L was one of many quotes I received for a kitchen/bathroom remodel and I chose them because the price was competitive and I really liked Luis - and I’m so glad I did! ",
    sourceLink:
      "https://www.thumbtack.com/profile/services/313348981601394858/reviews",
    sourceName: "Thumbtack",
    authorName: " Kelsey B.",
    authorImage: author4Image,
  },
  {
    title: "Exemplary bathroom transformation",
    description:
      "Luis and his team did an excellent job with my bathroom remodel. The entire team was polite, hardworking, consistently showed up on time, and completed the project in a timely manner.",
    sourceLink:
      "https://www.yelp.com/biz/e-and-l-home-improvements-silver-spring-4?hrid=IwNuzTVD_rRn0KysMJHjgQ&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)",
    sourceName: "Yelp",
    authorName: "And B.",
    authorImage: author2Image,
  },
];
