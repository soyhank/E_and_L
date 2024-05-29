import mattImage from "../assets/img/testimonials/users/matt.png";
import user1Image from "../assets/img/testimonials/users/user_1.webp";
import user2Image from "../assets/img/testimonials/users/user_2.webp";
import user3Image from "../assets/img/testimonials/users/user_3.webp";
import user4Image from "../assets/img/testimonials/users/user_4.webp";
import user5Image from "../assets/img/testimonials/users/user_5.webp";
import user6Image from "../assets/img/testimonials/users/user_6.webp";
import user7Image from "../assets/img/testimonials/users/user_7.webp";
import user8Image from "../assets/img/testimonials/users/user_8.webp";
import user9Image from "../assets/img/testimonials/users/user_9.webp";
import user10Image from "../assets/img/testimonials/users/user_10.webp";
import user11Image from "../assets/img/testimonials/users/user_11.webp";
import user12Image from "../assets/img/testimonials/users/user_12.webp";
import user13Image from "../assets/img/testimonials/users/user_13.webp";
import user14Image from "../assets/img/testimonials/users/user_14.webp";
import user15Image from "../assets/img/testimonials/users/user_15.webp";
import user16Image from "../assets/img/testimonials/users/user_16.webp";
import user17Image from "../assets/img/testimonials/users/user_17.webp";
import user18Image from "../assets/img/testimonials/users/user_18.webp";
import user19Image from "../assets/img/testimonials/users/user_19.webp";
import user20Image from "../assets/img/testimonials/users/user_20.webp";
import user21Image from "../assets/img/testimonials/users/user_21.webp";
import user22Image from "../assets/img/testimonials/users/user_22.webp";
import user23Image from "../assets/img/testimonials/users/user_23.webp";
import user24Image from "../assets/img/testimonials/users/user_24.webp";
import user25Image from "../assets/img/testimonials/users/user_25.webp";
import user26Image from "../assets/img/testimonials/users/user_26.webp";
import user27Image from "../assets/img/testimonials/users/user_27.webp";
import user28Image from "../assets/img/testimonials/users/user_28.webp";
import user29Image from "../assets/img/testimonials/users/user_29.webp";
import user30Image from "../assets/img/testimonials/users/user_30.webp";
import user31Image from "../assets/img/testimonials/users/user_31.webp";
import user32Image from "../assets/img/testimonials/users/user_32.webp";
import user33Image from "../assets/img/testimonials/users/user_33.webp";
import user34Image from "../assets/img/testimonials/users/user_34.webp";
import user35Image from "../assets/img/testimonials/users/user_35.webp";
import user36Image from "../assets/img/testimonials/users/user_36.webp";
import type { ImageMetadata } from "astro";

export type TTestimonial = {
  service: string;
  stars: number;
  date: string;
  description: string;
  userImage: ImageMetadata;
  userName: string;
  sourceLink: string;
  sourceType: "thumbtack" | "google" | "yelp" | "angi";
};

export const testimonials: TTestimonial[] = [
  {
    service: "Bathroom Renovation",
    stars: 5,
    date: "April 12, 2024",
    description:
      "We hired E&L for a bathroom expansion and laundry relocation. Good communication, cleaned up well every day, good workmanship, good experience overall. We had to provide our own fixtures, but we didn't mind as it was a way to control the price. I'd use E&L again.",
    userImage: mattImage,
    userName: "Matt Watkins",
    sourceLink:
      "https://g.co/kgs/hVpWJeP",
    sourceType: "google",
  },
  {
    service: "Home Renovation",
    stars: 5,
    date: "February 24, 2024",
    description:
      "The team was amazing. Always responsive, respectful, attentive, careful, just such professionalism at the highest level. I will work with them for any future projects.",
    userImage: user1Image,
    userName: "Juliana A.",
    sourceLink:
      "https://www.thumbtack.com/profile/services/313348981601394858/reviews",
    sourceType: "thumbtack",
  },
  {
    service: "Bathroom Renovation",
    stars: 5,
    date: "January 30, 2024",
    description:
      "We had our master bathroom and dressing room renovated...we couldn't",
    userImage: user2Image,
    userName: "Ron B.",
    sourceLink:
      "https://www.yelp.com/biz/e-and-l-home-improvements-silver-spring-4?hrid=a2NUTUk6E34kpcR8rXaTVA&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)",
    sourceType: "yelp",
  },
  {
    service: "General Remodeling",
    stars: 5,
    date: "December 7, 2023",
    description: "I highly recommend E&L Home Improvements. Luis and his team",
    userImage: user3Image,
    userName: "Joey B.",
    sourceLink:
      "https://www.yelp.com/biz/e-and-l-home-improvements-silver-spring-4?hrid=ZaHPFtymqnpyVe-ZL5KH8g&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)",
    sourceType: "yelp",
  },
  {
    service: "General Renovation",
    stars: 5,
    date: "November 29, 2023",
    description:
      "Outstanding work and very professional. I would recommend them to",
    userImage: user4Image,
    userName: "Rohit Rawat",
    sourceLink: "https://g.co/kgs/YA4sB6",
    sourceType: "google",
  },
  {
    service: "Bathroom Renovation",
    stars: 5,
    date: "October 20, 2023",
    description:
      "Exceptional work and very professional. I would recommend them to",
    userImage: user5Image,
    userName: "Rohit M.",
    sourceLink:
      "https://www.yelp.com/biz/e-and-l-home-improvements-silver-spring-4?hrid=0JCo38gjOsrnSo_ugjLo_A&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)",
    sourceType: "yelp",
  },
  {
    service: "Kitchen Renovation",
    stars: 5,
    date: "July 27, 2023",
    description: "I highly recommend E&L Home Improvements. Luis and his team",
    userImage: user6Image,
    userName: "Carole A.",
    sourceLink:
      "https://www.yelp.com/biz/e-and-l-home-improvements-silver-spring-4?hrid=3hycKLJLdvNp9BMglBQ9JQ&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)",
    sourceType: "yelp",
  },
  {
    service: "Bathroom Renovation",
    stars: 5,
    date: "July 10, 2023",
    description:
      "If you are looking for a high quality, professional, dependable",
    userImage: user7Image,
    userName: "Isabel M.",
    sourceLink:
      "https://www.yelp.com/biz/e-and-l-home-improvements-silver-spring-4?hrid=MuUAx3FhK9nDYEz6CRHtjA&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)",
    sourceType: "yelp",
  },
  {
    service: "Bathroom Renovation",
    stars: 5,
    date: "June 21, 2023",
    description: "We just had our hallway bathroom renovated. Luis and his",
    userImage: user8Image,
    userName: "Bathroom Renovation",
    sourceLink:
      "https://www.yelp.com/biz/e-and-l-home-improvements-silver-spring-4?hrid=UGxcJsjLH5yixwpPfCsRCA&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)",
    sourceType: "yelp",
  },
  {
    service: "Bathroom Renovation",
    stars: 5,
    date: "June 19, 2023",
    description: "After we had been in our house for a few",
    userImage: user9Image,
    userName: "Michael Coleman M.",
    sourceLink:
      "https://www.yelp.com/biz/e-and-l-home-improvements-silver-spring-4?hrid=GPyVQru56gH7UYWvzhBWMQ&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)",
    sourceType: "yelp",
  },
  {
    service: "House Remodeling",
    stars: 5,
    date: "June 19, 2023",
    description: "E&L had done the renovations to our new house just",
    userImage: user10Image,
    userName: "Michael M.",
    sourceLink:
      "https://www.thumbtack.com/profile/services/313348981601394858/reviews",
    sourceType: "thumbtack",
  },
  {
    service: "Bathroom Renovation",
    stars: 5,
    date: "March 23, 2023",
    description:
      "I've worked with several contractors on various home improvement projects.",
    userImage: user11Image,
    userName: "Bryan K.",
    sourceLink:
      "https://www.yelp.com/biz/e-and-l-home-improvements-silver-spring-4?hrid=fLEUrnWxS9Z4ZqMVD04flA&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)",
    sourceType: "yelp",
  },
  {
    service: "House Remodeling",
    stars: 5,
    date: "December 7, 2022",
    description: "It is hard to find a good, reasonably priced contractor",
    userImage: user12Image,
    userName: "Joey B.",
    sourceLink:
      "https://www.thumbtack.com/profile/services/313348981601394858/reviews",
    sourceType: "thumbtack",
  },
  {
    service: "House Remodeling",
    stars: 5,
    date: "September 8, 2022",
    description:
      "Team was extremely professional. If there were issues or concerns,",
    userImage: user13Image,
    userName: "Mr. H.",
    sourceLink:
      "https://www.thumbtack.com/profile/services/313348981601394858/reviews",
    sourceType: "thumbtack",
  },
  {
    service: "Bathroom Remodel",
    stars: 5,
    date: "August 25, 2022",
    description: "I had my master bathroom redone and had an excellent",
    userImage: user14Image,
    userName: "Raven M.",
    sourceLink:
      "https://www.thumbtack.com/profile/services/313348981601394858/reviews",
    sourceType: "thumbtack",
  },
  {
    service: "Bathroom Remodel",
    stars: 5,
    date: "August 15, 2022",
    description: "E&L renovated two of my bathrooms in a townhouse that",
    userImage: user15Image,
    userName: "Patty E.",
    sourceLink:
      "https://www.thumbtack.com/profile/services/313348981601394858/reviews",
    sourceType: "thumbtack",
  },
  {
    service: "Bathroom Renovation",
    stars: 5,
    date: "August 15, 2022",
    description: "E&L renovated two of my bathrooms in a townhouse that",
    userImage: user16Image,
    userName: "Patty E.",
    sourceLink:
      "https://yelp.com/biz/e-and-l-home-improvements-silver-spring-4?hrid=1SCQ5IMF5LDE9l1HsWMCNw&utm_medium=copy_link&utm_source=biz_post_share&l=en_US",
    sourceType: "yelp",
  },
  {
    service: "Bathroom Remodel",
    stars: 5,
    date: "July 7, 2022",
    description: "Just had our bathroom remodeled by E&L Home Improvements and",
    userImage: user17Image,
    userName: "Linda M.",
    sourceLink:
      "https://www.yelp.com/biz/e-and-l-home-improvements-silver-spring-4?hrid=-Eo86r-N5lqzEVH3hgV3BA&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)",
    sourceType: "yelp",
  },
  {
    service: "Bathroom Remodel",
    stars: 5,
    date: "July 7, 2022",
    description: "They just remodeled a large section of our house and",
    userImage: user18Image,
    userName: "Linda M.",
    sourceLink:
      "https://www.thumbtack.com/profile/services/313348981601394858/reviews",
    sourceType: "thumbtack",
  },
  {
    service: "Bathroom Remodel",
    stars: 5,
    date: "June 22, 2022",
    description: "Working with Luis and team on my (full) basement bath",
    userImage: user19Image,
    userName: "Lisa T.",
    sourceLink:
      "https://www.angi.com/companylist/us/md/silver-spring/e-and-l-home-improvement-llc-reviews-9620681.htm#reviews-section",
    sourceType: "angi",
  },
  {
    service: "House Remodeling",
    stars: 5,
    date: "June 18, 2022",
    description: "OUTSTANDING experience. Fair price, exceptional",
    userImage: user20Image,
    userName: "Govind R.",
    sourceLink:
      "https://www.thumbtack.com/profile/services/313348981601394858/reviews",
    sourceType: "thumbtack",
  },
  {
    service: "Bathroom Remodel",
    stars: 5,
    date: "June 15, 2022",
    description: "Just had our bathroom remodeled by E&L Home Improvements and",
    userImage: user21Image,
    userName: "LInda M.",
    sourceLink:
      "https://www.angi.com/companylist/us/md/silver-spring/e-and-l-home-improvement-llc-reviews-9620681.htm#reviews-section",
    sourceType: "angi",
  },
  {
    service: "Bathroom Remodel",
    stars: 5,
    date: "April 19, 2022",
    description: "E&L was wonderful to work with for our bathroom remodeling",
    userImage: user22Image,
    userName: "Luc N.",
    sourceLink:
      "https://www.thumbtack.com/profile/services/313348981601394858/reviews",
    sourceType: "thumbtack",
  },
  {
    service: "Bathroom Remodel",
    stars: 5,
    date: "March 12, 2022",
    description:
      "I hired E&L Home Improvements to complete 1/remodeling of three",
    userImage: user23Image,
    userName: "Jarrian J.",
    sourceLink:
      "https://www.thumbtack.com/profile/services/313348981601394858/reviews",
    sourceType: "thumbtack",
  },
  {
    service: "Bathroom Remodel",
    stars: 5,
    date: "February 28, 2022",
    description: "My experience wit E&l was excellent. The crew of workers",
    userImage: user24Image,
    userName: "Ibtisam A.",
    sourceLink:
      "https://www.thumbtack.com/profile/services/313348981601394858/reviews",
    sourceType: "thumbtack",
  },
  {
    service: "Bathroom Remodel",
    stars: 5,
    date: "December 17, 2021",
    description: "E and L home improvements were unbelievable, they were covid",
    userImage: user25Image,
    userName: "Beth B.",
    sourceLink:
      "https://www.yelp.com/biz/e-and-l-home-improvements-silver-spring-4?hrid=PR7r_lRRz91nC6QtkunTFw&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)",
    sourceType: "yelp",
  },
  {
    service: "Kitchen Renovation",
    stars: 5,
    date: "August 15, 2021",
    description:
      "Luis and his crew were very knowledgeable, professional, and lovely",
    userImage: user26Image,
    userName: "Lanre F.",
    sourceLink:
      "https://www.yelp.com/biz/e-and-l-home-improvements-silver-spring-4?hrid=_V-SVoT-KUFPpyVB5sRE1g&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)",
    sourceType: "yelp",
  },
  {
    service: "Bathroom Remodel",
    stars: 5,
    date: "August 2, 2021",
    description: "I hired E&L for a bathroom remodel. In addition to",
    userImage: user27Image,
    userName: "Barbara A.",
    sourceLink:
      "https://www.yelp.com/biz/e-and-l-home-improvements-silver-spring-4?hrid=bHsQKPjHobK8KHzXBmwNzQ&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)",
    sourceType: "yelp",
  },
  {
    service: "Kitchen Remodel",
    stars: 5,
    date: "July 27, 2021",
    description: "We recently had our kitchen renovated by E and L",
    userImage: user28Image,
    userName: "Ron M.",
    sourceLink:
      "https://www.yelp.com/biz/e-and-l-home-improvements-silver-spring-4?hrid=hcAgKs7tsXo2OtN4fsasWg&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)",
    sourceType: "yelp",
  },
  {
    service: "Bathroom Remodel",
    stars: 5,
    date: "June 13, 2021",
    description: "Luis and his team did an amazing job with our",
    userImage: user29Image,
    userName: "Ado T.",
    sourceLink:
      "https://www.yelp.com/biz/e-and-l-home-improvements-silver-spring-4?hrid=2k1PwTbGOh81gIq1xFr5-Q&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)",
    sourceType: "yelp",
  },
  {
    service: "Kitchen Renovation",
    stars: 5,
    date: "May 26, 2021",
    description: "E and L, and the owner, Luis, did an amazing",
    userImage: user30Image,
    userName: "Andrea B.",
    sourceLink:
      "https://www.yelp.com/biz/e-and-l-home-improvements-silver-spring-4?hrid=WB0D4wF8x_PF_4k1SVmC9Q&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)",
    sourceType: "yelp",
  },
  {
    service: "Kitchen Remodel",
    stars: 5,
    date: "May 12, 2021",
    description: "I would like to thank Loius and crew from E",
    userImage: user31Image,
    userName: "Susan Lucas",
    sourceLink: "https://g.co/kgs/6uSZbh",
    sourceType: "google",
  },
  {
    service: "Bathroom Remodel",
    stars: 5,
    date: "March 24, 2021",
    description:
      "If you're looking for a professional, honest, knowledgeable and respectful",
    userImage: user32Image,
    userName: "Meryl K.",
    sourceLink:
      "https://www.yelp.com/biz/e-and-l-home-improvements-silver-spring-4?hrid=bk_gKb9EGlX96YiBoJ-6qA&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)",
    sourceType: "yelp",
  },
  {
    service: "Kitchen Remodel",
    stars: 5,
    date: "December 1, 2020",
    description: "E&L was one of many quotes I received for a",
    userImage: user33Image,
    userName: "Kelsey B.",
    sourceLink:
      "https://www.thumbtack.com/profile/services/313348981601394858/reviews",
    sourceType: "thumbtack",
  },
  {
    service: "Home Remodeling",
    stars: 5,
    date: "December 1, 2020",
    description: "I highly recommend E&L Home Improvements for your next home",
    userImage: user34Image,
    userName: "Ursula P.",
    sourceLink:
      "https://yelp.com/biz/e-and-l-home-improvements-silver-spring-4?hrid=5vW4G9nR7oDO9Ni5twDvMA&utm_medium=copy_link&utm_source=biz_post_share&l=en_US",
    sourceType: "yelp",
  },
  {
    service: "Home Remodeling",
    stars: 5,
    date: "July 15, 2020",
    description: "I highly recommend E&L Home Improvements for your next home",
    userImage: user35Image,
    userName: "Ursula C",
    sourceLink: "https://g.co/kgs/WBvxNY",
    sourceType: "google",
  },
  {
    service: "Bathroom Remodel",
    stars: 5,
    date: "July 19, 2019",
    description: "Luis and his team did an excellent job with my",
    userImage: user36Image,
    userName: "And B.",
    sourceLink:
      "https://www.yelp.com/biz/e-and-l-home-improvements-silver-spring-4?hrid=IwNuzTVD_rRn0KysMJHjgQ&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)",
    sourceType: "yelp",
  },
];

export type TestimonialsGrouped = [
  TTestimonial[],
  TTestimonial[],
  TTestimonial[]
];

export const testimonialsGrouped = testimonials.reduce(
  (acc: TestimonialsGrouped, curr: TTestimonial, index) => {
    if (index % 3 === 0) {
      acc[0].push(curr);
    } else if (index % 3 === 1) {
      acc[1].push(curr);
    } else if (index % 3 === 2) {
      acc[2].push(curr);
    }

    return acc;
  },
  [[], [], []] as TestimonialsGrouped
);
