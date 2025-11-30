// import image from "../../../src/assets/images.jpg";
import { useGetTodos } from "../Apihooks/useGetTodos";

type TodoModel={
  todo:string ,
id:number,
}
type BlogCardProps = {
  reverse: boolean;
  todo: string;
};
const BlogCard = ({ reverse, todo }:BlogCardProps) => {
  return (
    <div className="flex gap-4 text-black bg-white mx-auto max-w-5xl">
       <div className={`w-1/3 p-2 ${reverse ?  "order-2" : "order-1" } `}>
        <img src="" alt="#" className="w-full h-auto" />
      </div>

      <div className={`w-2/3 flex flex-col gap-2 ${reverse ? "order-1" : "order-2"}`}>
        <p className="flex justify-center text-2xl font-bold">{todo}</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam magnam doloremque quas consequatur ipsum quisquam? Sapiente, facere porro nihil id modi velit tempore, iste cupiditate rem dolore exercitationem suscipit, totam labore hic in unde laborum non deserunt sunt natus atque. Sunt deserunt rem cupiditate mollitia neque dolores inventore blanditiis, possimus saepe praesentium, alias numquam voluptate aliquam, nesciunt facere dolor. Ea a deleniti enim autem id voluptatem. Modi maxime, fugit dolore voluptas tempora odio vero quaerat vitae aliquam, voluptatem, deleniti mollitia? Sequi vel similique voluptatum adipisci aliquam ea ad nihil, excepturi aspernatur suscipit, blanditiis esse incidunt molestiae iusto ex architecto quos!
        </p>
      </div>
   </div>
  );
};


export const Blog = () => {
  const { data: todos = [], isLoading } = useGetTodos();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="flex flex-col gap-10 bg-white p-3">
      <h1 className="flex justify-center items-center text-2xl font-bold text-black">
        Blog Post
      </h1>

      <div className="text-amber-300">
        {/* Show all todos */}
        {todos.map((todo:TodoModel, index:number) => (
          <BlogCard key={todo.id} todo={todo.todo} reverse={index % 2 === 1} />
        ))}
      </div>
    </div>
  );
};
