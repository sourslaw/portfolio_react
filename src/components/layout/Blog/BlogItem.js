import { Button, Card, Col } from "react-bootstrap";

import React from "react";
import classes from './BlogItem.module.css'

const BlogItem = (props) => {
  const { title, link, thumbnail, content, pubDate, description } = props.blogData;

  function blogPost() {
    return (
      // <Col md={{ span: 10, offset: 1 }}>
      <Col>
        {/* <Card style={{ width: '55rem' }} className={classes.card}> */}
        <Card className={classes.card}>
          <div className={classes.imageParent}>
            <a href={`${link}`} target="_blank" rel="noreferrer"><Card.Img className={classes.image} variant="top" src={ getThumb(`${description}`) } /></a>
          </div>
          <Card.Body>
            <Card.Title className={classes.title}>{truncateText(cleanTitle(title), 0, 20) + " . . ."}</Card.Title>
            <Card.Text className={classes.desc}>{truncateText(toText(content), 48, 300) + " . . ."}</Card.Text>
            <Card.Text className={classes.date}>{convertDate(pubDate)}</Card.Text>
            <a href={`${link}`} target="_blank" rel="noreferrer"><Button className={classes.buttons} variant="outline-secondary">view on medium</Button></a>
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
  // Getting those thumbnails from Medium RSS Feed
  // https://medium.com/@kartikyathakur/getting-those-thumbnails-from-medium-rss-feed-183f74aefa8c
  function getThumb(src) {
    let thumbnail = src.toString().match(/<img[^>]+src="([^">]+)"/)[1]
    return thumbnail
  }

  return (
    <div className={classes.PostContainer}>
      {blogPost()}
    </div>
  );
}

export default BlogItem;