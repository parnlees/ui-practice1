import React from "react";
import "./Home.css";
import {
  Card,
  CardImg,
  CardText,
  CardSubtitle,
  CardBody,
  CardTitle,
  CardGroup,
} from "reactstrap";
import { button } from "bootstrap";
import Frenchfries from "../image/Frenchfries.jpg";
import Hamburger from "../image/Hamburger.jpg";

function Home() {
  return (
    <div className=" body">
      <CardGroup>
        <Card style={{ width: "300px", height: "350px" }}>
          <div className="d-flex align-items-center justify-content-center">
            <CardImg
              alt="Frenchfries"
              src={Frenchfries}
              style={{ width: "150px", height: "100px" }}
            />
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <CardBody>
              <CardTitle tag="h5"> Frenchfries</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                hot dishes!
              </CardSubtitle>
              <CardText>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
                harum consequuntur, ipsa illum ut a? Suscipit illum enim cumque
                deserunt?
              </CardText>
              <button
                type="button"
                className="d-flex align-items-center justify-content-center btn btn-outline-dark btn-small"
              >
                Bucket
              </button>
            </CardBody>
          </div>
        </Card>

        <Card style={{ width: "300px", height: "350px" }}>
          <div className="d-flex align-items-center justify-content-center">
            <CardImg
              alt="Hamburger"
              src={Hamburger}
              style={{ width: "150px", height: "100px" }}
            />
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <CardBody>
              <CardTitle tag="h5"> Frenchfries</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                hot dishes!
              </CardSubtitle>
              <CardText>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
                harum consequuntur, ipsa illum ut a? Suscipit illum enim cumque
                deserunt?
              </CardText>
              <button
                type="button"
                className="d-flex align-items-center justify-content-center btn btn-outline-dark btn-small"
              >
                Bucket
              </button>
            </CardBody>
          </div>
        </Card>
      </CardGroup>
    </div>
  );
}

export default Home;
