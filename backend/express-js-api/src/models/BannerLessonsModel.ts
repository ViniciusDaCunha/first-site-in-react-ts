 type BannerLessonsType = {
  mainTitle: string;
  description: string;
  buttonLabel: string;
  buttonUrl: string;
};

export type BannerLessonsTypeDb = {
  main_title: string;
  description: string;
  button_label: string;
  button_url: string;
};

export default BannerLessonsType;

 const bannerLessonsMock: BannerLessonsType =  {
    mainTitle: "Lessons and insights from 8 years",
    description:
      "Where to grow your business as a photographer: site or social media?",
    buttonLabel: "Register",
    buttonUrl: "https://google.com",
  };

export {bannerLessonsMock}
