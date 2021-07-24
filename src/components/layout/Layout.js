import Navbar from './Navbar';
// import classes from './Layout.module.css';

function Layout(props) {
    return(
        <div>
            <Navbar />
            <main>
                {props.children}
            </main>
        </div>
    );
}

export default Layout;