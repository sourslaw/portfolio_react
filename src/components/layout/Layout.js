import Navigation from './Navigation';
import Footer from './Footer';
import classes from './Layout.module.css';


function Layout(props) {
  return(
    <div>
      <Navigation />
      <main className={classes.pageContainer}>
        {props.children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;