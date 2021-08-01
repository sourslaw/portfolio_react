import React, { useState, useEffect } from 'react';
import { Container, Button, Row, Col, Image } from "react-bootstrap";

import BlogItem from './BlogItem';
// import classes from './BlogItem.module.css'
import classes from './BlogContent.module.css';
import classesPort from './PortfolioContent.module.css';
import classesHead from './HeadingComponent.module.css';



const BlogContent = () => {
  const rss2json = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40lawanasaurus";
  const [myBlog, setMyBlog] = useState([]);

  useEffect(() => {
    fetch(rss2json)
      .then(res => res.json())
      .then(data => {
        setMyBlog(data)
        console.log(data)
      })
  }, [rss2json]);

  function displayBlogs() {
    console.log(myBlog)
    return myBlog.items && myBlog.items.map(blog => {
      return <BlogItem key={blog.pubDate} blogData={blog} />
    })
  }

  return (
		<Container fluid className={classesHead.container}>
			<div className={classesHead.headingCard}>blog</div>

			<Container className={classesPort.container}>
				<div className={classesPort.mainRow}>
					<Row >
						<div className={classesPort.ul}>

							{displayBlogs()}

						</div>
					</Row>
				</div>
			</Container>
		</Container>
  );
}

export default BlogContent;