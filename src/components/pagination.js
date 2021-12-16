    import React from "react";
    import './pagination.css';



    const Pagination = ({postsPerPage, totalPosts, paginate} ) => {

        const pageNumbers = [];

        for (let i = 1; i <= Math.floor(totalPosts/ postsPerPage); i++){
            pageNumbers.push(i);
        }




        return (
            <div className="container__paginate">
                <div className="pagination">
                    {pageNumbers.map((number) => (
                        <div className="number">
                            <a onClick={() => paginate(number)} href="!#">
                                {number}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    export default Pagination; 