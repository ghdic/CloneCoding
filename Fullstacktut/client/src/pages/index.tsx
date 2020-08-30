import { NavBar } from "../components/NavBar";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/createUrqlClient";
import { usePostsQuery } from "../generated/graphql";

const Index = () => {
    const [{ data }] = usePostsQuery();
    return (
        <>
            <NavBar />
            <div>hello world</div>
            <br />
            {!data ? (
                <div>loading...</div> // 데이터 기다리는 동안 로딩표시 ssr할 경우 바로 렌더링해서 던져주기 때문에 이거 안뜸
            ) : (
                data.posts.map((p) => <div key={p.id}>{p.title}</div>)
            )}
        </>
    );
};
export default withUrqlClient(createUrqlClient, { ssr: true })(Index); // seo 최적화 할때 server side render