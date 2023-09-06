import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI Powered Propmt</span>
      </h1>
      <p className="desc text-center">
        AI Powered Propmt is an AI powered platform that allows you to discover
        and share your ideas with the world.
      </p>

      <Feed />
    </section>
  );
};

export default Home;
