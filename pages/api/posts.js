const posts = {
  new: {
    picture: "https://p-hold.com/300/300?v=0",
    avatar: "https://p-hold.com/60/60?v=2",
    name: "Ridhwan Nordin",
    username: "@ridzjcob",
  },
  all: [
    {
      picture: "https://p-hold.com/300/400?v=1",
      avatar: "https://p-hold.com/60/60?v=2",
      name: "Ridhwan Nordin",
      username: "@ridzjcob",
      height: "200",
    },
    {
      picture: "https://p-hold.com/300/340?v=2",
      avatar: "https://p-hold.com/60/60?v=2",
      name: "Ridhwan Nordin",
      username: "@ridzjcob",
      height: "300",
    },
    {
      picture: "https://p-hold.com/300/306?v=3",
      avatar: "https://p-hold.com/60/60?v=2",
      name: "Ridhwan Nordin",
      username: "@ridzjcob",
      height: "500",
    },
    {
      picture: "https://p-hold.com/300/309?v=4",
      avatar: "https://p-hold.com/60/60?v=2",
      name: "Ridhwan Nordin",
      username: "@ridzjcob",
      height: "300",
    },
    {
      picture: "https://p-hold.com/300/360?v=5",
      avatar: "https://p-hold.com/60/60?v=2",
      name: "Ridhwan Nordin",
      username: "@ridzjcob",
      height: "500",
    },
    {
      picture: "https://p-hold.com/300/313?v=6",
      avatar: "https://p-hold.com/60/60?v=2",
      name: "Ridhwan Nordin",
      username: "@ridzjcob",
      height: "300",
    },
  ],
};

const handleRoute = async (req, res) => {
  res.status(200).json({ posts });
};

export default handleRoute;
