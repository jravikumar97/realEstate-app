import agent1 from "../assets/images/agent1.png";
import agent2 from "../assets/images/agent2.jpg";
import agent3 from "../assets/images/agent3.png";

const agentsData = [
  {
    id: 1,
    name: "Sarah Connor",
    imageUrl: agent1,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt quam cumque aut odit natus optio ab corrupti ullam nam sint quibusdam, consequuntur sit inventore reprehenderit fugit voluptatibus at omnis atque dicta accusamus ex? Dicta porro deleniti, sapiente nemo dolor est enim molestias ex vitae iste voluptates voluptatibus totam non ducimus voluptatem esse minima suscipit doloremque sint repudiandae quibusdam aliquam. Ad accusamus nam aliquid id ratione ipsa provident assumenda hic quaerat? Soluta saepe, quisquam a sapiente optio rerum quibusdam? Consectetur perferendis iusto voluptates, cum deserunt voluptatum earum tenetur labore, est id minus quam recusandae suscipit unde quasi minima exercitationem repudiandae atque.",
  },
  {
    id: 2,
    name: "Lily Smith",
    imageUrl: agent2,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt quam cumque aut odit natus optio ab corrupti ullam nam sint quibusdam, consequuntur sit inventore reprehenderit fugit voluptatibus at omnis atque dicta accusamus ex? Dicta porro deleniti, sapiente nemo dolor est enim molestias ex vitae iste voluptates voluptatibus totam non ducimus voluptatem esse minima suscipit doloremque sint repudiandae quibusdam aliquam. Ad accusamus nam aliquid id ratione ipsa provident assumenda hic quaerat? Soluta saepe, quisquam a sapiente optio rerum quibusdam? Consectetur perferendis iusto voluptates, cum deserunt voluptatum earum tenetur labore, est id minus quam recusandae suscipit unde quasi minima exercitationem repudiandae atque.",
  },
  {
    id: 3,
    name: "Robert Stark",
    imageUrl: agent3,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt quam cumque aut odit natus optio ab corrupti ullam nam sint quibusdam, consequuntur sit inventore reprehenderit fugit voluptatibus at omnis atque dicta accusamus ex? Dicta porro deleniti, sapiente nemo dolor est enim molestias ex vitae iste voluptates voluptatibus totam non ducimus voluptatem esse minima suscipit doloremque sint repudiandae quibusdam aliquam. Ad accusamus nam aliquid id ratione ipsa provident assumenda hic quaerat? Soluta saepe, quisquam a sapiente optio rerum quibusdam? Consectetur perferendis iusto voluptates, cum deserunt voluptatum earum tenetur labore, est id minus quam recusandae suscipit unde quasi minima exercitationem repudiandae atque.",
  },
];

const Team = () => {
  return (
    <div className="w-full py-10">
      <div className="max-w-6xl mx-auto">
        <div className="w-full flex justify-center text-5xl">
          <h1>Your Team</h1>
        </div>
        <div className="grid lg:grid-cols-3 gap-4">
          {agentsData.map((agent) => (
            <div key={agent.id} className="flex flex-col justify-start items-center hover:shadow-xl p-6">
              <img
                src={agent.imageUrl}
                alt="agent-one"
                aria-label="Agent"
                className="object-cover rounded-full max-w-72 max-h-72"
                loading="lazy"
              />
              <h2 className="mt-6 text-3xl">{agent.name}</h2>
              <p className="text-center text-xl text-accent">Owner and Head of Sales</p>
              <p className="text-center text-sm mt-6 text-[#9199a7]">{agent.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
