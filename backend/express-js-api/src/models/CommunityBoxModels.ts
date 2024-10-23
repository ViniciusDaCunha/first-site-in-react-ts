type CommunityBoxItem = {
  image: string;
  title: string;
  description: string;
};

export default CommunityBoxItem;

const mockCommunityBox: CommunityBoxItem[] = [
  {
    image: "/membership.png",
    title: "Membership Organizatios",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    image: "/nationalassociations.png",
    title: "National Associations",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    image: "/clubs.png",
    title: "Clubs And Groups",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
  },
];

export { mockCommunityBox };
