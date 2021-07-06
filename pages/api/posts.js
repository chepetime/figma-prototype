const posts = {
  new: [
    {
      picture: "https://p-hold.com/300/300?v=0",
      avatar: "https://p-hold.com/60/63?v=2",
      name: "Ridhwan Nordin",
      username: "@ridzjcob",
    },
    {
      picture: "https://p-hold.com/400/400?v=0",
      avatar: "https://p-hold.com/60/62?v=2",
      name: "Ridhwan Nordin",
      username: "@ridzjcob",
    },
    ,
    {
      picture: "https://p-hold.com/500/600?v=0",
      avatar: "https://p-hold.com/60/61?v=2",
      name: "Ridhwan Nordin",
      username: "@ridzjcob",
    },
  ],
  all: [
    {
      picture: "https://p-hold.com/300/400?v=1",
      avatar: "https://p-hold.com/61/60?v=2",
      name: "Ridhwan Nordin",
      username: "@ridzjcob",
      height: "200",
    },
    {
      picture: "https://p-hold.com/300/340?v=2",
      avatar: "https://p-hold.com/62/60?v=2",
      name: "Ridhwan Nordin",
      username: "@ridzjcob",
      height: "300",
    },
    {
      picture: "https://p-hold.com/300/306?v=3",
      avatar: "https://p-hold.com/63/60?v=2",
      name: "Ridhwan Nordin",
      username: "@ridzjcob",
      height: "500",
    },
    {
      picture: "https://p-hold.com/300/309?v=4",
      avatar: "https://p-hold.com/64/60?v=2",
      name: "Ridhwan Nordin",
      username: "@ridzjcob",
      height: "300",
    },
    {
      picture: "https://p-hold.com/300/360?v=5",
      avatar: "https://p-hold.com/65/60?v=2",
      name: "Ridhwan Nordin",
      username: "@ridzjcob",
      height: "500",
    },
    {
      picture: "https://p-hold.com/300/313?v=6",
      avatar: "https://p-hold.com/66/60?v=2",
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
