import React from 'react';
import Banner from '../../Component/Banner/Banner';
import FeaturedCard from '../../Component/FeaturedCard/FeaturedCard';
import Friends from '../../Component/Friends/Friends';
import { useLoaderData } from "react-router-dom";

const Homepage = () => {

const friends = useLoaderData();




  

    return (
      
      <div>

        <Banner/>
        <FeaturedCard/>
        <Friends/>
      </div>
    );
};

export default Homepage;