import react, { useEffect, useState } from "react";
import axios from "axios";
import Posts from "./components/posts";
import Pagination from "./components/pagination";
import './App.css';

const App = () => {
    const [data, setData] = useState();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostPerPage] = useState(6);

    const url = "https://www.pinkvilla.com";

    const pageOne = `http://www.pinkvilla.com/photo-gallery-feed-page`;
    const pageTwo = `https://www.pinkvilla.com/photo-gallery-feed-page/page/2`;
    const pageThree = `https://www.pinkvilla.com/photo-gallery-feed-page/page/3`;

    const requestOne = axios.get(pageOne);
    const requestTwo = axios.get(pageTwo);
    const requestThree = axios.get(pageThree);

    const getData = async () => {

        setLoading(true);

        axios.all([requestOne, requestTwo, requestThree]).then(axios.spread((...responses) => {
            const responseOne = responses[0].data.nodes;
            const responseTwo = responses[1].data.nodes;
            const responesThree = responses[2].data.nodes;

            const concatenatedResponses = [
                ...responseOne,
                ...responseTwo,
                ...responesThree,
            ];

            const mappedData = concatenatedResponses.map((node) => ({
                title: node.node.title,
                image: url + node.node.field_photo_image_section,
                PageUrl: url + node.node.path,
            }));
                setPosts(mappedData);
                setLoading(false);

        }))

    };

    useEffect(() => {
        console.log(data);
        if (data) { 
            console.log(data);
        } else {
            getData();
        }
    }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost) 


    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <h1 className="app__header">My interview page</h1>
            <Posts posts={currentPost} loading={loading} />
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate}
            />
        </div>
    );
};

export default App;
