import React, { Component } from 'react';
import './App.css';

/* CSS Modules */
import ButtonCM from './components/Button/ButtonCM';
import PaperCM from './components/Paper/PaperCM';

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <h2>Css modules</h2>
                    <h3>ButtonCM</h3>
                    <ButtonCM
                        onClick={() => {}}
                        type="success"> Success btn </ButtonCM>
                    <ButtonCM
                        onClick={() => {}}
                        type="warning"> Warning btn </ButtonCM>
                    <ButtonCM
                        onClick={() => {}}
                        type="danger"> Danger btn </ButtonCM>
                </div>

                <div>
                    <h3>PaperCM</h3>
                    <PaperCM shadowSize="small">Small</PaperCM>
                    <PaperCM shadowSize="medium">Medium</PaperCM>
                    <PaperCM shadowSize="large">Large</PaperCM>
                </div>
            </div>
        );
    }
}

export default App;




/*

                <Modal
                    isOpen={this.state.isOpen}
                    onClose={() => this.setState({ isOpen: false })}>
                    <Modal.Title>My Modal Title</Modal.Title>
                    <Modal.Body>My Modal Body</Modal.Body>
                    <Modal.Footer>My Modal Footer</Modal.Footer>
                </Modal>

                <ProgressBar
                    progress={50}
                    striped={true}
                    animated={true}
                    state="success" />

                <NameCard
                    name="Þorlákur S. Lyngmo"
                    email="thorlakur16@ru.is"
                    telephone="+354-867-7810"
                    imageUrl="https://78.media.tumblr.com/8b3d7f28995d48ae714076140a0178c8/tumblr_mqg78sIALY1swnmv6o1_400.png" />

                <Carousel
                    images={[
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Nicolas_Cage_Deauville_2013.jpg/220px-Nicolas_Cage_Deauville_2013.jpg',
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Nicolas_Cage_-_66%C3%A8me_Festival_de_Venise_%28Mostra%29.jpg/220px-Nicolas_Cage_-_66%C3%A8me_Festival_de_Venise_%28Mostra%29.jpg'
                    ]}
                    size="medium" />

                <Row>
                    <Col size={4}></Col>
                    <Col size={4}></Col>
                    <Col size={4}></Col>
                </Row>

                <TimePicker
                    onTimePick={time => this.setState({ time })}
                    format={24} />

                <DatePicker
                    onDatePick={date => this.setState({ date })}
                    locale={"en-EN"} />

                <Tabs
                    theme="dark"
                    layout="horizontal"
                    onSelect={newTab => this.setState({ tagb: newTab })}
                    currentSelectedTabe={this.state.tab}>
                    <Tab selectionKey={1} title="Tab 1">
                        Content 1
                    </Tab>
                    <Tab selectionKey={2} title="Tab 2">
                        Content 2
                    </Tab>
                    <Tab selectionKey={3} title="Tab 3">
                        Content 3
                    </Tab>
                </Tabs>

                <CartoonNetworkSpinner
                    interval={4} />
 */




/* Inline styles
import ButtonInline from "./components/Button/ButtonInline";
import PaperInline from "./components/Paper/PaperInline";
import AvatarInline from "./components/Avatar/AvatarInline";
import AlertInline from "./components/Alert/AlertInline";
*/

/* Radium styles

import ButtonRadium from "./components/Button/ButtonRadium";

*/

/*
<div>
                    <h2>Inline styles</h2>
                    <h3>ButtonInline</h3>
                        <ButtonInline
                            onClick={() => {}}
                            type="success"> Success btn </ButtonInline>
                    <ButtonInline
                        onClick={() => {}}
                        type="warning"> Warning btn </ButtonInline>
                    <ButtonInline
                        onClick={() => {}}
                        type="danger"> Danger btn </ButtonInline>
                </div>
                <div>
                    <h3>PaperInline</h3>
                    <PaperInline shadowSize="small">Small</PaperInline>
                    <PaperInline shadowSize="medium">Medium</PaperInline>
                    <PaperInline shadowSize="large">Large</PaperInline>
                </div>
                <div>
                    <h3>AvatarInline</h3>
                    <AvatarInline size="small" avatarUrl="https://78.media.tumblr.com/8b3d7f28995d48ae714076140a0178c8/tumblr_mqg78sIALY1swnmv6o1_400.png"/>
                    <AvatarInline size="medium" avatarUrl="https://78.media.tumblr.com/8b3d7f28995d48ae714076140a0178c8/tumblr_mqg78sIALY1swnmv6o1_400.png"/>
                    <AvatarInline size="large" avatarUrl="https://78.media.tumblr.com/8b3d7f28995d48ae714076140a0178c8/tumblr_mqg78sIALY1swnmv6o1_400.png"/>
                </div>
                <div>
                    <h3>AlertInline</h3>
                    <AlertInline type="info" title="info" message="Remember the Alamo!" />
                    <AlertInline type="success" title="success" message="Great success my friend." />
                    <AlertInline type="warning" title="warning" message="Last warning!" />
                    <AlertInline type="danger" title="danger" message="Bombs away!" />
                </div>
                <div>
                    <h2>Radium styles</h2>
                    <h3>ButtonRadium</h3>
                    <ButtonRadium
                        onClick={() => {}}
                        type="success"> Success btn </ButtonRadium>
                    <ButtonRadium
                        onClick={() => {}}
                        type="warning"> Warning btn </ButtonRadium>
                    <ButtonRadium
                        onClick={() => {}}
                        type="danger"> Danger btn </ButtonRadium>
                </div>
 */