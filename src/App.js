import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import ButtonInline from "./components/Button/ButtonInline";
import PaperInline from "./components/Paper/PaperInline";
import AvatarInline from "./components/Avatar/AvatarInline";
import AlertInline from "./components/Alert/AlertInline";

class App extends Component {
    render() {
        return (
            <div>
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
            </div>
        );
    }
}

export default App;
