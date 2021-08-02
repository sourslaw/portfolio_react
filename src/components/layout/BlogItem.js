import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import classes from './BlogItem.module.css'


const BlogItem = (props) => {
  const { title, link, thumbnail, content, pubDate } = props.blogData;

  function blogPost() {
    return (
      <Col>
        <Card style={{ width: '55rem' }} className={classes.card}>
          <div className={classes.imageParent}>
            <a href={`${link}`} target="_blank"><Card.Img className={classes.image} variant="top" src={`${thumbnail}`} /></a>
          </div>
          <Card.Body>
            <Card.Title className={classes.title}>{truncateText(cleanTitle(title), 0, 20)}</Card.Title>
            <Card.Text className={classes.desc}>{truncateText(toText(content), 48, 300) + "..."}</Card.Text>
            <Card.Text className={classes.date}>{convertDate(pubDate)}</Card.Text>
            <a href={`${link}`} target="_blank"><Button className={classes.buttons} variant="outline-secondary">view on medium</Button></a>
          </Card.Body>
        </Card>
      </Col>
		);
  }

  // a little sanitizing from these functions . . .
  function cleanTitle(checkTitle) {
    checkTitle = checkTitle.replace("amp;", "");
    return checkTitle
  }
  function truncateText(text, start, len) {
    return text.length > len ? text.slice(start, len) : text;
  }
  function toText(block) {
    let tag = document.createElement('div');
    tag.innerHTML = block;
    block = tag.innerText;
    return block
  }
  function convertDate(date) {
    let dateArray = date.slice(0, 10).split("-")
    let year = dateArray.pop();
    dateArray.push(year);
    // console.log(date);
    return `Published: ${dateArray.join(".")}`;
  }

  return (
    <div className={classes.PostContainer}>
      {blogPost()}
    </div>
  );
}

export default BlogItem;