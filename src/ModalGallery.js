import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route, Switch, withRouter } from 'react-router-dom'
const IMAGES = [
    { id: 0, title: "Dark Orchid", color: "DarkOrchid" },
    { id: 1, title: "Lime Green", color: "LimeGreen" },
    { id: 2, title: "Tomato", color: "Tomato" },
    { id: 3, title: "Seven Ate Nine", color: "#789" },
    { id: 4, title: "Crimson", color: "Crimson" }
  ];
function ModalExample() {
    const ModalSwitchRouter = withRouter(ModalSwitch)
    return (
        <Router>
            <ModalSwitchRouter></ModalSwitchRouter>
        </Router>
    )
}
class ModalSwitch extends Component {
    
    previousLocation = this.props.location
    componentWillUpdate(nextProps) {
        let { location } = this.props;
        console.log(nextProps);
        // set previousLocation if props.location is not modal
        if (
            nextProps.history.action !== "POP" &&
            (!location.state || !location.state.isModal)
            ) {
                this.previousLocation = this.props.location;
                }
    }
    render() {
        let { location } = this.props
        
        let isModal = !!(location.state && 
        location.state.isModal&& 
        this.previousLocation !== location )
        return (
            <div>
                
                <Switch location={isModal ? this.previousLocation : location}>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/gallery" component={Gallery}></Route>
                    <Route path="/img/:id" component={ImageView}></Route>
                </Switch>
                {isModal ? <Route path="/img/:id" component={Modal}></Route> : null}
            </div>
        )
    }
}
function Modal(props) {
    let { match, history } = props
    let image = IMAGES.find(item => item.id == match.params.id)
    if(!image) return null;
    
    let back = e => {
        e.stopPropagation();
        history.goBack()
    }
    return (
        <div
            onClick={back}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                background: "rgba(0, 0, 0, 0.15)"
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    background: '#fff',
                    top: 25,
                    left: '10%',
                    right: '10%',
                    padding: 15,
                    border: '2px solid #444'
                }}
            >
                <h1>{image.title}</h1>
                <Image color={image.color}></Image>
                <button type="button" onClick={back}>
                    Close
                </button>
            </div>
        </div>
    )
}
function Image({color}) {
    return (
        <div
            style={{
                width: '100%',
                height: '500px',
                background: color
            }}
        />
    )
}
function ImageView({match}) {
    let id = match.params.id
    let item = IMAGES.find(item => item.id == id)
    let { title, color } = item
    return (
       <div>
           <h2>{title}</h2>
           <Image color={color}></Image>
       </div>
    )
}
function Home() {
    return (
        <div>
            <Link to="/gallery">To Gallery</Link>
            <h2>Featured Images</h2>
            <ul>
                <li>
                    <Link to="/img/2">Tomato</Link>
                </li>
                <li>
                    <Link to="/img/4">Crimson</Link>
                </li>
            </ul>
        </div>
    )
}

function Gallery() {
    return (
        <div>
            {IMAGES.map(image => (
                <Link
                    key={image.id}
                    to={{
                        pathname: `/img/${image.id}`,
                        state: {
                            isModal: true
                        }
                    }}
                    >
                    <Thumbnail color={image.color}></Thumbnail>
                    <p>{image.title}</p>
                </Link>
            ))}
        </div>
    )
}

function Thumbnail({color}) {
    return (
        <div
            style={{
                width: 50,
                height: 50,
                background: color
            }}
        />
    )
}
export default ModalExample