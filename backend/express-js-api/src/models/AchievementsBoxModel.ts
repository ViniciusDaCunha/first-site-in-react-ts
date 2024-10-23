type achievementsBoxItem = {
  image: string;
  title: string;
  description: string;
};

export default achievementsBoxItem;

const mockAchievemetsBoxItems: achievementsBoxItem[] = [
  {
    image: "/row1.png",
    title: "2,245,341",
    description: "Members",
  },
  {
    image: "/row2.png",
    title: "46,328",
    description: "Clubs",
  },
  {
    image: "/row3.png",
    title: "828,867",
    description: "Event Bookings",
  },
  {
    image: "/row4.png",
    title: "1,926,436",
    description: "Payments",
  },
];

export { mockAchievemetsBoxItems };
