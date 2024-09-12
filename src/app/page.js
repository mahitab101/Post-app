import AllPost from "@/components/Post/All-Post";
import Search from "@/components/Search";
import Tags from "@/components/Tags";


export default function Home() {
  return (
    <div className="row">
    <div className="col-lg-9">
      <AllPost />
    </div>
    <div className="col-lg-3 my-5">
   <Search />
   <Tags />
    </div>
    </div>
  );
}
