import Navigation from './Navigation';
import Footer from './Footer';
// import classes from './Layout.module.css';

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