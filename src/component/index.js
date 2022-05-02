import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./action";

const Home = () => {
    const dispatch = useDispatch();
    const selector = useSelector((data) => {
        console.log({ data });
    });

    useEffect(() => {
        dispatch(fetchUser());
    });
    return (
        <>
            <div>This is home page</div>
        </>
    );
};

export default Home;
