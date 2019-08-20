/* eslint-disable array-callback-return */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Sidebar from "react-sidebar";
import settingsGear from './baseline_settings_white_18dp.png'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Component } from "react";
import Switch from "react-switch";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Accordion from "react-bootstrap/Accordion";
import "./UnitDB/index.js";
import {unitList} from "./UnitDB";
import Table from "react-bootstrap/Table";
//import Form from "react-bootstrap/Form"
const mql = window.matchMedia(`(min-width: 800px)`);
let units = unitList;
var curPage = 3;
class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            sidebarDocked: mql.matches,
            sidebarOpen: false,
            modalShow: false,
            header: "Units",
            search: "",
        };
        this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
        this.changeHeader = this.changeHeader.bind(this);
    }
    componentDidMount(){
        document.title = "Antnee's House | " + this.state.header;
    }
    componentWillMount(){
        mql.addListener(this.mediaQueryChanged);
    }
    componentWillUnmount() {
        this.state.mql.removeListener(this.mediaQueryChanged);
    }
    onSetSidebarOpen(open) {
        this.setState({sidebarOpen: open});
    }
    mediaQueryChanged() {
        this.setState({sidebarDocked: mql.matches, sidebarOpen: false});
    }
    changeHeader(string){
        this.setState({header: string});
        document.title = "Antnee's House | " + string;
        switch (string) {
            case "test1" : curPage = 1; break;
            case "test2" : curPage = 2; break;
            case "Units" : curPage = 3; break;
            case "blank" : curPage = 4; break;
            default : curPage = 1;
        }
    }
    render() {
        let modalClose = () => this.setState({ modalShow: false });
        return (
            <Sidebar
                sidebar={
                    <div>
                        <div className={"upperBar"}>
                            <text id = "SBheader">Menu</text>
                        </div>
                            <div id = "barcont">
                                <ul id={"vert"}>
                                    <li className={"verticalItem"}><a className={'verticalText'} href = "#test1" onClick={() => this.changeHeader("test1")}><b>test1</b></a></li>
                                    <li className={"verticalItem"}><a className={'verticalText'} href = "#test2" onClick={() => this.changeHeader("test2")}><b>test2</b></a></li>
                                    <li className={"verticalItem"}><a className={'verticalText'} href = "#Units" onClick={() => this.changeHeader("Units")}><b>Units</b></a></li>
                                    <li className={"verticalItem"}><a className={'verticalText'} href = "#blank" onClick={() => this.changeHeader("blank")}><b>blank</b></a></li>
                                </ul>
                            </div>
                    </div>
                }
                open={this.state.sidebarOpen}
                docked={this.state.sidebarDocked}
                onSetOpen={this.onSetSidebarOpen}
                styles={{
                    root: {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        overflow: "hidden"
                    },
                    sidebar: {
                        zIndex: 2,
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        transition: "transform .3s ease-out",
                        WebkitTransition: "-webkit-transform .3s ease-out",
                        willChange: "transform",
                        overflowY: "auto"
                    },
                    content: {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        overflowY: "auto",
                        WebkitOverflowScrolling: "touch",
                        transition: "left .3s ease-out, right .3s ease-out"
                    },
                    overlay: {
                        zIndex: 1,
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        opacity: 0,
                        visibility: "hidden",
                        transition: "opacity .3s ease-out, visibility .3s ease-out",
                        backgroundColor: "rgba(0,0,0,0)"
                    },
                    dragHandle: {
                        zIndex: 1,
                        position: "fixed",
                        top: 0,
                        bottom: 0
                    }
                }}
            >
                <script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin/>

                <script
                    src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
                    crossOrigin
                />

                <script
                    src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
                    crossOrigin
                />

                <script>var Alert = ReactBootstrap.Alert;</script>
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                    crossOrigin="anonymous"
                />
                <div className={"upperBar"}>
                    <text id='SBbutton' onClick={() => this.onSetSidebarOpen(true)}>
                        ≡ {this.state.header}
                    </text>
                    <img id = 'settingsGear' src={settingsGear} alt="Logo" onClick={() => this.setState({ modalShow: true })}/>
                </div>
                <div className={"content"}>
                    <Content/>
                    <ButtonToolbar>
                        <MydModalWithGrid show={this.state.modalShow} onHide={modalClose} />
                    </ButtonToolbar>

                </div>
            </Sidebar>
        );
    }
}

class MydModalWithGrid extends React.Component {
    render() {
        return(
            <Modal {...this.props}
                   dialogClassName="modal-90w"
                   aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Options
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Col className = "show-grid">
                            <Row xs={12} md={8}>
                                <text>Option</text><SwitchExample/>
                            </Row>
                        </Col>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
class Content extends React.Component{
    constructor() {
        super();
        this.state = { search : ""};
        this.searchChanged = this.searchChanged.bind(this);
    }
    searchChanged(value){
        this.setState({search : value});
    }
    render() {
        switch (curPage) {
            case 1: return(
                <UnitBuilder/>
            );
            case 2: return(
                <Test/>
            );
            case 3: return(
                <div>
                    {/*
                    <Form>
                        <Form.Row>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="search" placeholder="Unit Name" inputRef={(ref) => { this.email = ref }} required onChange={()=>console.log(this.props.inputRef)}/>
                            </Form.Group>
                            <Button variant="primary" type="submit" size="sm">
                                Search
                            </Button>
                        </Form.Row>
                    </Form>
                    */}
                    <UTom units={units} search={this.state.search}/>
                </div>
            );
            case 4: return(
                <UnitBuilder/>
            );
            default: return(
                <text className = 'content'>{curPage}</text>
            )
        }

    }
}

class UnitBuilder extends React.Component{
    constructor() {
        super();
        this.state = { button : 1};
        this.incrementClicked = this.incrementClicked.bind(this);
        this.resetClicked = this.resetClicked.bind(this);
    }
    incrementClicked(){
        curPage += 1;
        this.setState({button : curPage});
    }
    resetClicked(){
        curPage = 1;
        this.setState({button: curPage});
    }
    render() {
        return(
            <div>
                <div>
                    <text>{curPage}</text><nl/>
                </div>
                <div>
                    <Button
                        variant={"primary"}
                        onClick={() => this.incrementClicked()}
                        size={"sm"}
                    >+1</Button>
                    <Button
                        variant={"danger"}
                        onClick={() => this.resetClicked()}
                        size={"sm"}
                    >reset</Button>
                </div>
            </div>
        )
    }
}
class Test extends React.Component{
    render(){
        return(
            <div>
                <Row>
                    <Col>
                        <Container className={"container"}>
                            <text>This is a column</text>
                            <br/>
                            <text>This is a column</text>
                        </Container>
                    </Col>
                    <Col>
                        <Container className={"container"}>
                            <Card>
                                <Row>
                                    <Col>
                                        <div className={"imageContainer"}>
                                            <img className={"image"} height="75" width="75" src="https://www.serebii.net/pokemonmasters/syncpairs/barry.png" alt={"alt"}/>
                                        </div>
                                    </Col>
                                    <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                                        <Container>
                                            <Card.Text className = {"image"}>Name</Card.Text> <br/>
                                            <Card.Text className = {"image"}>sub-Name</Card.Text>
                                        </Container>
                                    </Col>
                                    <Col>
                                        <Container>
                                            <Button className={"TrainerButton"} variant={"primary"} size={"sm"}>Select</Button>
                                        </Container>

                                    </Col>
                                </Row>
                            </Card>
                        </Container>
                    </Col>
                </Row>
            </div>
        )
    }
}
// eslint-disable-next-line
class Carddeck extends React.Component{
    render(){
        return(
            <CardDeck>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardDeck>
        )
    }
}

class SwitchExample extends Component {
    constructor() {
        super();
        this.state = { checked: true };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(checked) {
        this.setState({ checked });
    }

    render() {
        return (
            <label>
                <Switch
                    checked={this.state.checked}
                    onChange={this.handleChange}
                    onColor="#86d3ff"
                    onHandleColor="#2693e6"
                    handleDiameter={30}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                    height={20}
                    width={48}
                    id="material-switch"
                />
            </label>
        );
    }
}

ReactDOM.render(<Home/>, document.getElementById("root"));

function UTom(props){
    const search = props.search;
    const units = props.units;
    const listItems = units.map((unit)=>{
            if(unit.name === search || search === ""){
                return(
                    <div>
                        <Accordion>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                    {(unit.name.includes("Sygna Suit"))?unit.name.substring("Sygna Suit ".length,unit.name.length) + " & " + unit.pokemon.name:unit.name + " & " + unit.pokemon.name}
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <Card>
                                            <Card.Body>
                                                <CardDeck>
                                                    <Card>
                                                        <div className={"imageContainer"}>
                                                            <img className={"image"} src={(unit.name === "MC")?"https://www.serebii.net/pokemonmasters/syncpairs/maincharacter.png":"https://www.serebii.net/pokemonmasters/syncpairs/" + unit.name.toLowerCase() + ".png"} alt={"alt"}/>
                                                        </div>
                                                    </Card>
                                                    <Card>
                                                        <Card.Body>
                                                            <Table bordered hover size="sm">
                                                                <tbody>
                                                                <tr>
                                                                    <td><b>Type</b></td>
                                                                    <td>{unit.type}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td><b>Weakness</b></td>
                                                                    <td>{unit.weakness}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td><b>Rarity</b></td>
                                                                    <td>{unit.rarity} stars</td>
                                                                </tr>
                                                                <tr>
                                                                    <td><b>Role</b></td>
                                                                    <td>{unit.role}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td><b>Passives</b></td>
                                                                    <td>{unit.passives.join()}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td><b>Sync Strength</b></td>
                                                                    <td>{unit.syncMove.basePower} - {unit.syncMove.maxPower}</td>
                                                                </tr>
                                                                </tbody>
                                                            </Table>
                                                        </Card.Body>
                                                    </Card>
                                                    <Card>
                                                        <Card.Body>
                                                            <Table bordered hover size="sm">
                                                                <tbody>
                                                                <tr>
                                                                    <td><b>HP</b></td>
                                                                    <td>{unit.pokemon.stats[0]}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td><b>ATK</b></td>
                                                                    <td>{unit.pokemon.stats[1]}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td><b>DEF</b></td>
                                                                    <td>{unit.pokemon.stats[2]}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td><b>SPATK</b></td>
                                                                    <td>{unit.pokemon.stats[3]}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td><b>SPDEF</b></td>
                                                                    <td>{unit.pokemon.stats[4]}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td><b>SPD</b></td>
                                                                    <td>{unit.pokemon.stats[5]}</td>
                                                                </tr>
                                                                </tbody>
                                                            </Table>
                                                        </Card.Body>
                                                    </Card>
                                                </CardDeck>
                                            </Card.Body>
                                        </Card>
                                        <br/>
                                        <CardDeck>
                                            <Card>
                                                <Card.Header>
                                                    {unit.moves[0].name}
                                                </Card.Header>
                                                <Card.Body>
                                                    <Table bordered hover size="sm">
                                                        <tbody>
                                                        <tr>
                                                            <td><b>Type</b></td>
                                                            <td>{(unit.moves[0].type === "0")?"Trainer Move":unit.moves[0].type}</td>
                                                        </tr>
                                                        <tr>
                                                            <td><b>Effect</b></td>
                                                            <td>{(unit.moves[0].effect === "0")?"None":unit.moves[0].effect}</td>
                                                        </tr>
                                                        <tr>
                                                            <td><b>Effect%</b></td>
                                                            <td>{(unit.moves[0].chance === 0.0)?"N/A":unit.moves[0].chance}</td>
                                                        </tr>
                                                        <tr>
                                                            <td><b>Power</b></td>
                                                            <td>{(unit.moves[0].power === 0)?"N/A":unit.moves[0].power}</td>
                                                        </tr>
                                                        <tr>
                                                            <td><b>Accuracy</b></td>
                                                            <td>{(unit.moves[0].accuracy === 0)?"N/A":unit.moves[0].accuracy}</td>
                                                        </tr>
                                                        <tr>
                                                            <td><b>Cost</b></td>
                                                            <td>{(unit.moves[0].cost === 0)?"N/A":unit.moves[0].cost}</td>
                                                        </tr>
                                                        </tbody>
                                                    </Table>
                                                </Card.Body>
                                            </Card>
                                            <Card>
                                                <Card.Header>
                                                    {unit.moves[1].name}
                                                </Card.Header>
                                                <Card.Body>
                                                    <Table bordered hover size="sm">
                                                        <tbody>
                                                        <tr>
                                                            <td><b>Type</b></td>
                                                            <td>{(unit.moves[1].type === "0")?"Trainer Move":unit.moves[1].type}</td>
                                                        </tr>
                                                        <tr>
                                                            <td><b>Effect</b></td>
                                                            <td>{(unit.moves[1].effect === "0")?"None":unit.moves[1].effect}</td>
                                                        </tr>
                                                        <tr>
                                                            <td><b>Effect%</b></td>
                                                            <td>{(unit.moves[1].chance === 0.0)?"N/A":unit.moves[1].chance}</td>
                                                        </tr>
                                                        <tr>
                                                            <td><b>Power</b></td>
                                                            <td>{(unit.moves[1].power === 0)?"N/A":unit.moves[1].power}</td>
                                                        </tr>
                                                        <tr>
                                                            <td><b>Accuracy</b></td>
                                                            <td>{(unit.moves[1].accuracy === 0)?"N/A":unit.moves[1].accuracy}</td>
                                                        </tr>
                                                        <tr>
                                                            <td><b>Cost</b></td>
                                                            <td>{(unit.moves[1].cost === 0)?"N/A":unit.moves[1].cost}</td>
                                                        </tr>
                                                        </tbody>
                                                    </Table>
                                                </Card.Body>
                                            </Card>
                                            <Card>
                                                <Card.Header>
                                                    {unit.moves[2].name}
                                                </Card.Header>
                                                <Card.Body>
                                                    <Table bordered hover size="sm">
                                                        <tbody>
                                                        <tr>
                                                            <td><b>Type</b></td>
                                                            <td>{(unit.moves[2].type === "0")?"Trainer Move":unit.moves[2].type}</td>
                                                        </tr>
                                                        <tr>
                                                            <td><b>Effect</b></td>
                                                            <td>{(unit.moves[2].effect === "0")?"None":unit.moves[2].effect}</td>
                                                        </tr>
                                                        <tr>
                                                            <td><b>Effect%</b></td>
                                                            <td>{(unit.moves[2].chance === 0.0)?"N/A":unit.moves[2].chance}</td>
                                                        </tr>
                                                        <tr>
                                                            <td><b>Power</b></td>
                                                            <td>{(unit.moves[2].power === 0)?"N/A":unit.moves[2].power}</td>
                                                        </tr>
                                                        <tr>
                                                            <td><b>Accuracy</b></td>
                                                            <td>{(unit.moves[2].accuracy === 0)?"N/A":unit.moves[2].accuracy}</td>
                                                        </tr>
                                                        <tr>
                                                            <td><b>Cost</b></td>
                                                            <td>{(unit.moves[2].cost === 0)?"N/A":unit.moves[2].cost}</td>
                                                        </tr>
                                                        </tbody>
                                                    </Table>
                                                </Card.Body>
                                            </Card>
                                            <Card>
                                                <Card.Header>
                                                    {unit.moves[3].name}
                                                </Card.Header>
                                                <Card.Body>
                                                    <Table bordered hover size="sm">
                                                        <tbody>
                                                        <tr>
                                                            <td><b>Type</b></td>
                                                            <td>{(unit.moves[3].type === "0")?"Trainer Move":unit.moves[3].type}</td>
                                                        </tr>
                                                        <tr>
                                                            <td><b>Effect</b></td>
                                                            <td>{(unit.moves[3].effect === "0")?"None":unit.moves[3].effect}</td>
                                                        </tr>
                                                        <tr>
                                                            <td><b>Effect%</b></td>
                                                            <td>{(unit.moves[3].chance === 0.0)?"N/A":unit.moves[3].chance}</td>
                                                        </tr>
                                                        <tr>
                                                            <td><b>Power</b></td>
                                                            <td>{(unit.moves[3].power === 0)?"N/A":unit.moves[3].power}</td>
                                                        </tr>
                                                        <tr>
                                                            <td><b>Accuracy</b></td>
                                                            <td>{(unit.moves[3].accuracy === 0)?"N/A":unit.moves[3].accuracy}</td>
                                                        </tr>
                                                        <tr>
                                                            <td><b>Cost</b></td>
                                                            <td>{(unit.moves[3].cost === 0)?"N/A":unit.moves[3].cost}</td>
                                                        </tr>
                                                        </tbody>
                                                    </Table>
                                                </Card.Body>
                                            </Card>
                                        </CardDeck>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </div>
                )
            }
        }
    );
    return(
        <div>{listItems}</div>
    )
}