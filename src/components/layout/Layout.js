import Navigation from './Navigation';
import Footer from './Footer';


function Layout(props) {
  return(
    <div>
      <Navigation />
      <main>
        {props.children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;