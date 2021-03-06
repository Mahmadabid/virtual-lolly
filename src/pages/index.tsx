import React from 'react';
import { Lolly } from "../components/Lolly"
import Header from "../components/Header";
import Button from '../components/Button/Button';
import { Link } from 'gatsby';

const IndexPage = () => {

  return (
    <div>
      <Header />
      <div className="Lollies">
        <Lolly LollyTop="khaki" LollyMiddle="rgb(170, 245, 135)" LollyBottom="rgb(135, 245, 245)" />
        <Lolly LollyTop="rgb(205, 5, 255)" LollyMiddle="rgb(163, 5, 255)" LollyBottom="rgb(5, 176, 255)" />
        <Lolly LollyTop="rgb(47, 216, 216)" LollyMiddle="rgb(81, 93, 255)" LollyBottom="rgb(181, 66, 235)" />
        <Lolly LollyTop="rgb(111, 25, 151)" LollyMiddle="rgb(151, 25, 109)" LollyBottom="rgb(151, 25, 52)" />
      </div>
      <Link to='/create'>
        <Button value="Create a Lolly" />
      </Link>
    </div>
  );
}
export default IndexPage
