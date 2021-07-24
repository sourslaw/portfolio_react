import{ useState, useEffect } from 'react';

import ResumeContent from '../components/layout/ResumeContent';



function ResumePage() {

  // return (
	// 	<section>
	// 		<ResumeContent />
	// 	</section>
  // );

	const [isLoading, setIsLoading] = useState(true);
  const [loadedContent, setLoadedContent] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    fetch(
      'experience.json'
    ).then(response => {
      return response.json();
    }).then((data) => {
      const contents = [];

      for (const key in data) {
        const content = {
          id: key,
          ...data[key] // spread data
        };
        contents.push(content); // use helper
      }

      setIsLoading(false);
      setLoadedContent(contents); // here is the data now . . .
    });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>loading . .  .</p>
      </section>
    );
  }

  return (
      <section>
          {/* <h1>all meetups page</h1> */}
              <ResumeContent contents={loadedContent}/>
      </section>
  );
}

export default ResumePage;