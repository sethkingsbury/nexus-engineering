import Alister from '../assets/business-card-alister.png'
import Marc from '../assets/business-card-marc.png'
import { Settings } from "lucide-react";

import '../styles/home.css';

export default function Home() {
    return (
        <div className="home-container">
            <h1>Nexus Engineering</h1>
            <div className="spin-element">
                <Settings size={100} />
            </div>
            <h2>Site Under Construction</h2>
            <div className='business-card-container'>
                <img src={Alister} className="business-card" alt="alister@nexusengineering.co.nz" />
                <img src={Marc} className="business-card" alt="alister@nexusengineering.co.nz" />
            </div>
        </div>
    );
}