/* eslint-disable array-callback-return */
import React, {Component} from 'react';
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
import Switch from "react-switch";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Accordion from "react-bootstrap/Accordion";
import "./UnitDB/index.js";
import {unitList} from "./UnitDB";
import Table from "react-bootstrap/Table";
import {Dropdown} from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
//import Form from "react-bootstrap/Form"
const mql = window.matchMedia(`(min-width: 800px)`);
let units = unitList;
var curUnit = 1;
var curEnemyMates = 1;
var curBoost = 1;
var curMovePower = 0;
var curMoveType = "";
var curAtk = 0;
var curDefBoost = 0;
var curPage = 3;
var curLevel = 0;
var curtype = "";
class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            sidebarDocked: mql.matches,
            sidebarOpen: false,
            modalShow: false,
            header: "Units",
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
            case "Calc" : curPage = 4; break;
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
                                    <li className={"verticalItem"}><a className={'verticalText'} href = "#Units" onClick={() => this.changeHeader("Units")}><b>Units</b></a></li>
                                    <li className={"verticalItem"}><a className={'verticalText'} href = "#Calc" onClick={() => this.changeHeader("Calc")}><b>Calc</b></a></li>
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
        this.unitChanged = this.unitChanged.bind(this);
    }
    unitChanged(value){
        this.setState({search : value});
    }
    render() {
        switch (curPage) {
            case 1: return(
                <Test/>
            );
            case 2: return(
                <Test/>
            );
            case 3: return(
                <div>
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
    constructor(props) {
        super(props);
        this.state = {
            searchQueryA: '',
            searchQueryB: '',
            selectedA: null,
            selectedB: null,
            unitRefA: 1,
            unitRefB: 1,
            bitFlip: false
        };
        this.changeState = this.changeState.bind(this);
    }
    onChangeAttacker = (e, data) => {
        console.log(data.value);
        var id = 1;
        curUnit = data.value;
        curAtk = units[curUnit].pokemon.stats[1];
        curtype = units[curUnit].type;
        if(units[curUnit].rarity === 5){
            curLevel = 100;
        }else if(units[curUnit].rarity === 4){
            curLevel = 95;
        }else if(units[curUnit].rarity === 3){
            curLevel = 90;
        }
        for(var x in units){
            if((units[x].name + " & " + units[x].pokemon.name) === (units[data.value].name + " & " + units[data.value].pokemon.name)){
                id = units[x].id
            }
        }
        this.setState({ selectedA: data.value, unitRefA: id});
    };
    onChangeDefender = (e, data) => {
        console.log(data.value);
        var id = 1;
        for(var x in units){
            if((units[x].name + " & " + units[x].pokemon.name) === (units[data.value].name + " & " + units[data.value].pokemon.name)){
                id = units[x].id
            }
        }
        this.setState({ selectedB: data.value, unitRefB: id});
    };

    onSearchChangeAttacker = (e, data) => {
        console.log(data.searchQueryA);
        this.setState({ searchQueryA: data.searchQueryA });
    };
    onSearchChangeDefender = (e, data) => {
        console.log(data.searchQueryB);
        this.setState({ searchQueryB: data.searchQueryB });
    };

    changeState(){
        this.setState({bitFlip: !this.state.bitFlip});
    };

    render() {
        const { searchQueryA, selectedA, searchQueryB, selectedB } = this.state;
        return(
            <div>
                <Card>
                    <Card.Body>
                        <Row>
                            <Col>
                                <Dropdown
                                    placeholder='Attacker'
                                    button
                                    className='icon'
                                    fluid
                                    labeled
                                    options={dropdownSelection()}
                                    search
                                    text={searchQueryA}
                                    searchQuery={searchQueryA}
                                    value={selectedA}
                                    onChange={this.onChangeAttacker}
                                    onSearchChange={this.onSearchChangeAttacker}
                                />
                                <br/>
                                <div>
                                    <Card>
                                        <Card.Body>
                                            <Card>
                                                <Card.Body>
                                                    <CardDeck>
                                                        <Card>
                                                            <div className={"imageContainerCalc"}>
                                                                <img className={"imageCalc"} src={(units[this.state.unitRefA].name === "MC")?"https://www.serebii.net/pokemonmasters/syncpairs/maincharacter.png":"https://www.serebii.net/pokemonmasters/syncpairs/" + units[this.state.unitRefA].name.toLowerCase() + ".png"} alt={"alt"}/>
                                                            </div>
                                                        </Card>
                                                        <Card>
                                                            <Card.Body>
                                                                <Table bordered hover size="sm">
                                                                    <tbody>
                                                                    <tr>
                                                                        <td><b>HP</b></td>
                                                                        <td>{units[this.state.unitRefA].pokemon.stats[0]}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td><b>ATK</b></td>
                                                                        <td>{units[this.state.unitRefA].pokemon.stats[1]}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td><b>DEF</b></td>
                                                                        <td>{units[this.state.unitRefA].pokemon.stats[2]}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td><b>SPATK</b></td>
                                                                        <td>{units[this.state.unitRefA].pokemon.stats[3]}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td><b>SPDEF</b></td>
                                                                        <td>{units[this.state.unitRefA].pokemon.stats[4]}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td><b>SPD</b></td>
                                                                        <td>{units[this.state.unitRefA].pokemon.stats[5]}</td>
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
                                                                        <td><b>Type</b></td>
                                                                        <td>{units[this.state.unitRefA].type}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td><b>Weakness</b></td>
                                                                        <td>{units[this.state.unitRefA].weakness}</td>
                                                                    </tr>
                                                                    </tbody>
                                                                </Table>
                                                            </Card.Body>
                                                        </Card>
                                                    </CardDeck>
                                                    <br/>
                                                    <MoveDisplay action={this.changeState}/>
                                                </Card.Body>
                                            </Card>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <br/>
                                <Row>
                                    <Col>
                                        <Dropdown
                                            placeholder='# enemies'
                                            button
                                            className='icon'
                                            fluid
                                            labeled
                                            options={[
                                                {key: 1, value: 1, text: 1},
                                                {key: 2, value: 2, text: 2},
                                                {key: 3, value: 3, text: 3}
                                            ]}
                                            search
                                            onChange={(e, data)=>{
                                                curEnemyMates = data.value;
                                                this.setState({bitFlip: !this.state.bitFlip});
                                            }}
                                        />
                                    </Col>
                                    <Col>
                                        <Dropdown
                                            placeholder='ATK/SPAtk Boost'
                                            button
                                            className='icon'
                                            fluid
                                            labeled
                                            options={[
                                                {key: 1, value: 1, text: 1},
                                                {key: 2, value: 2, text: 2},
                                                {key: 4, value: 4, text: 4},
                                                {key: 6, value: 6, text: 6},
                                            ]}
                                            search
                                            onChange={(e, data)=>{
                                                curBoost = data.value;
                                                this.setState({bitFlip: !this.state.bitFlip});
                                            }}
                                        />
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <Dropdown
                                    placeholder='Defender'
                                    button
                                    className='icon'
                                    fluid
                                    labeled
                                    options={dropdownSelection()}
                                    search
                                    text={searchQueryB}
                                    searchQuery={searchQueryB}
                                    value={selectedB}
                                    onChange={this.onChangeDefender}
                                    onSearchChange={this.onSearchChangeDefender}
                                />
                                <br/>
                                {damageReading(units[this.state.unitRefB])}
                                <Row>
                                    <Col>
                                        <Dropdown
                                            placeholder='Def/SPDef Boost'
                                            button
                                            className='icon'
                                            fluid
                                            labeled
                                            options={[
                                                {key: 1, value: 1, text: 1},
                                                {key: 2, value: 2, text: 2},
                                                {key: 4, value: 4, text: 4},
                                                {key: 6, value: 6, text: 6},
                                            ]}
                                            search
                                            onChange={(e, data)=>{
                                                curDefBoost = data.value;
                                                this.setState({bitFlip: !this.state.bitFlip});
                                            }}
                                        />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
class MoveDisplay extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            searchMove: '',
            selectedMove: null,
            moveRef: 1,
            bitFlip: false,
        }
    }

    onChangeMove = (e, data) => {
        console.log(data.value);
        curMovePower = units[curUnit].moves[data.value].power;
        curMoveType = units[curUnit].moves[data.value].type;
        this.setState({ selectedMove: data.value, moveRef: data.value});

    };

    onSearchChangeMove = (e, data) => {
        console.log(data.searchMove);
        this.setState({ searchMove: data.searchMove });
    };

    render() {
        const { searchMove, selectedMove} = this.state;
        return(
            <Card>
                <Card.Body>
                    <Row>
                        <Col>
                            <Dropdown
                                placeholder='Move'
                                button
                                className='icon'
                                fluid
                                labeled
                                options={moveMap()}
                                search
                                text={searchMove}
                                searchQuery={searchMove}
                                value={selectedMove}
                                onChange={this.onChangeMove}
                                onSearchChange={this.onSearchChangeMove}
                            />
                        </Col>
                        <Col>
                            <Button size={"sm"} onClick={this.props.action} className={"submitButton"}>
                                Calculate
                            </Button>
                        </Col>
                    </Row>
                    {moveReading(units[curUnit].moves[this.state.moveRef])}
                </Card.Body>
            </Card>
        );
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

const dropdownSelection = ()=>{
    var count = -1;
    return units.map((unit) => {
        count++;
        return{
            key: count,
            value: count,
            text: unit.name + " & " + unit.pokemon.name
        }
    });
};
function moveMap(){
    var count = -1;
    var moves = units[curUnit].moves;
    return moves.map((move)=>{
        count++;
        return({
            key: count,
            value: count,
            text: move.name
        })
    })
}
function UTom(props){
    const search = props.search;
    const units = props.units;
    const listItems = units.map((unit)=>{
            if(unit.name === search || search === ""){
                return(
                    UnitAccordion(unit)
                )
            }
        }
    );
    return(
        <div>{listItems}</div>
    )
}

function moveReading(move){
    return(
        <div>
            <Card>
                <Card.Body>
                    <Table bordered hover size="sm">
                        <tbody>
                        <tr>
                            <td><b>Type</b></td>
                            <td>{(move.type === "0")?"Trainer Move":move.type}</td>
                        </tr>
                        <tr>
                            <td><b>Effect</b></td>
                            <td>{(move.effect === "0")?"None":move.effect}</td>
                        </tr>
                        <tr>
                            <td><b>Effect%</b></td>
                            <td>{(move.chance === 0.0)?"N/A":move.chance}</td>
                        </tr>
                        <tr>
                            <td><b>Power</b></td>
                            <td>{(move.power === 0)?"N/A":move.power}</td>
                        </tr>
                        <tr>
                            <td><b>Accuracy</b></td>
                            <td>{(move.accuracy === 0)?"N/A":move.accuracy}</td>
                        </tr>
                        <tr>
                            <td><b>Cost</b></td>
                            <td>{(move.cost === 0)?"N/A":move.cost}</td>
                        </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </div>
    )
}
function calcDamage(unit){
    var atkBoost = 1;
    if(curBoost === 2){
        atkBoost = 1.4;
    }else if(curBoost === 4){
        atkBoost = 1.6;
    }else if(curBoost === 6){
        atkBoost = 1.8;
    }
    var realATK = curAtk * atkBoost;
    var defBoost = 1;
    if(curDefBoost === 2){
        defBoost = 1.4;
    }else if(curDefBoost === 4){
        defBoost = 1.6;
    }else if(curDefBoost === 6){
        defBoost = 1.8;
    }
    var realDEF = defBoost * unit.pokemon.stats[2];
    var targetmult = 1;
    if(curEnemyMates === 2){
        targetmult = 0.67;
    }else if(curEnemyMates === 3){
        targetmult = 0.5
    }
    var effective = 1;
    if(curtype === unit.weakness){
        effective = 2;
    }
    var part1 = (((2*curLevel)/5)+2);
    var part2 = part1 * curMovePower * (realATK/realDEF);
    var part3 = (part2/50)+2;
    var damage = part3 * targetmult * effective;
    return Math.round(damage);
}
function damageReading(unit){
    return(
        <div>
            <Card>
                <Card.Body>
                    <Card>
                        <Card.Body>
                            <CardDeck>
                                <Card>
                                    <div className={"imageContainerCalc"}>
                                        <img className={"imageCalc"} src={(unit.name === "MC")?"https://www.serebii.net/pokemonmasters/syncpairs/maincharacter.png":"https://www.serebii.net/pokemonmasters/syncpairs/" + unit.name.toLowerCase() + ".png"} alt={"alt"}/>
                                    </div>
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
                                            </tbody>
                                        </Table>
                                    </Card.Body>
                                </Card>
                            </CardDeck>
                            <Card>
                                <Card.Header>
                                    Results
                                </Card.Header>
                                <Card.Body>
                                    {calcDamage(unit) + " damage dealt."}
                                </Card.Body>
                            </Card>
                        </Card.Body>
                    </Card>
                </Card.Body>
            </Card>
        </div>
    )
}

function UnitAccordion(unit){
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

ReactDOM.render(<Home/>, document.getElementById("root"));