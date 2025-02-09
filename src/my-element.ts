import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import logo from './assets/logo.jpg';
import background from './assets/minecraft-bg.png';

@customElement('fishys-paradise')
export class FishysParadise extends LitElement {
    @property({ type: String })
    welcomeMessage = "Welcome to Fishy's Paradise!";

    @property({ type: String })
    discordInvite = 'https://discord.gg/zRPmkbRFkG';

    @property({ type: String })
    serverInvite = 'minecraft://?addExternalServer=FishysParadise|fishysparadise.com:25565';

    render() {
        return html`
            <div class="container">
                <div class="hero">
                    <img src="${logo}" alt="Fishy's Paradise Logo" class="logo" />
                    <h1>${this.welcomeMessage}</h1>
                    <button @click="${this._connectToServer}">Join Now</button>
                </div>
                <div class="features">
                    <div class="feature">
                        <h2>Custom Quests & Lore</h2>
                        <p>Experience story-driven quests crafted by our team. Uncover hidden lore, delve into ancient ruins, and shape the future of our realm.</p>
                    </div>
                    <div class="feature">
                        <h2>Innovative Builds & Redstone Marvels</h2>
                        <p>Push your creativity with advanced building contests and mind-boggling redstone contraptions. There's always something groundbreaking around the corner!</p>
                    </div>
                    <div class="feature">
                        <h2>Seasonal Events & Tournaments</h2>
                        <p>Join epic seasonal events, show off your skills in PvE & PvP tournaments, and earn exclusive rewards—only found here at Fishy's Paradise.</p>
                    </div>
                </div>
            </div>
            <div class="info-container">
                <section class="info-section">
                    <h2>Who We Are</h2>
                    <p>We are a passionate community of adventurers, builders, and storytellers. Our goal is to provide a unique Minecraft experience that combines custom content, immersive gameplay, and a friendly player base.</p>
                </section>
                <section class="info-section">
                    <h2>What We Provide</h2>
                    <ul>
                        <li>Cutting-edge Plug-ins & Custom Items</li>
                        <li>Welcoming & Active Community</li>
                        <li>Regular Content Updates & Surprises</li>
                        <li>Dedicated Staff & Support</li>
                    </ul>
                </section>
                <section class="info-section">
                    <h2>Join Our Discord</h2>
                    <p>Stay connected with the community, find allies, get quick support, and participate in exclusive giveaways and events on our official Discord server.</p>
                    <button @click="${this._joinDiscord}">Discord Invite</button>
                </section>
            </div>
        `;
    }

    connectedCallback() {
        super.connectedCallback();
        this.style.setProperty('--bg-image', `url(${background})`);
    }

    private _connectToServer() {
        window.location.href = this.serverInvite;
    }

    private _joinDiscord() {
        window.open(this.discordInvite, '_blank');
    }

    static styles = css`
        :host {
            display: block;
            text-align: center;
            background-color: #111;
            background-image: var(--bg-image);
            background-repeat: no-repeat;
            background-position: center top;
            background-size: 100% auto;
            color: white;
            font-family: 'Minecraftia', sans-serif;
            overflow-x: hidden;
        }
        .container {
            min-height: 100vh;
            width: 100%;
            backdrop-filter: blur(5px);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        .hero {
            padding: 20px;
            background: rgba(0, 0, 0, 0.7);
            border-radius: 10px;
            margin: 20px;
        }
        .logo {
            width: 150px;
        }
        h1 {
            font-size: 2.5rem;
            margin: 10px 0;
        }
        p {
            font-size: 1.2rem;
        }
        button {
            background-color: #4caf50;
            color: white;
            border: none;
            padding: 15px 30px;
            font-size: 1.2rem;
            cursor: pointer;
            border-radius: 5px;
            margin-top: 20px;
            transition: background-color 0.3s ease;
        }
        button:hover {
            background-color: #45a049;
        }
        .features {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
            margin-top: 50px;
            width: 80%;
        }
        .feature {
            background: rgba(0, 0, 0, 0.7);
            padding: 20px;
            border-radius: 10px;
            max-width: 300px;
            flex: 1 1 300px;
        }
        .feature h2 {
            margin-bottom: 10px;
            font-size: 1.5rem;
        }
        .info-container {
            width: 100%;
            min-height: 100vh;
            padding: 50px 20px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 40px;
            background: rgba(0, 0, 0, 0.5);
        }
        .info-section {
            background: rgba(0, 0, 0, 0.7);
            border-radius: 10px;
            padding: 30px;
            width: 80%;
            text-align: left;
        }
        .info-section h2 {
            margin-bottom: 15px;
            font-size: 2rem;
            text-align: center;
        }
        .info-section p {
            margin-bottom: 10px;
            line-height: 1.6;
        }
        .info-section ul {
            list-style: none;
            padding: 0;
        }
        .info-section ul li {
            margin: 5px 0;
            padding-left: 1.2em;
            position: relative;
        }
        .info-section ul li::before {
            content: "•";
            position: absolute;
            left: 0;
            color: #4caf50;
        }
		.info-section button {
			display: block;
			margin: 20px auto 0 auto;
		}
        .signup form {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            margin-top: 20px;
        }
        .signup input[type="email"] {
            padding: 10px;
            border-radius: 5px;
            border: none;
            width: 60%;
            font-size: 1rem;
        }
        .signup form button {
            margin-top: 10px;
            font-size: 1rem;
            padding: 10px 20px;
        }
        @media (max-width: 768px) {
            .features {
                flex-direction: column;
                align-items: center;
            }
        }
    `;
}
