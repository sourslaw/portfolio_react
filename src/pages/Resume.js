import{ useState, useEffect } from 'react';
import ResumeContent from '../components/layout/Resume/ResumeContent';


function ResumePage() {
	const [isLoading, setIsLoading] = useState(true);
  const [loadedContent, setLoadedContent] = useState([]);

  useEffect(() => {
    setIsLoading(true); // initially set to true . .

    fetch(
      'experience.json' // fetching from public folder. it just looks there
    ).then(response => {
      return response.json();
    }).then((data) => {
      const contents = [];

      for (const key in data) { //loop through . . .
        const content = {
          id: key,
          ...data[key] // spread data
        };
        contents.push(content); // use content as helper
      }
      
      setIsLoading(false); // . . now false
      setLoadedContent(contents); // here is the data now . . .

      console.log(contents);

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
			<ResumeContent contents={loadedContent}/>
		</section>
  );
}

export default ResumePage;