JUNKNET · Virtual Oracle Explorer & Launchpad
JUNKNET is a playful yet powerful Solana explorer and virtual token launchpad. It provides a high-fidelity sandbox for developers, traders, and crypto-enthusiasts to experiment with tokenomics, trading strategies, and on-chain mechanics in a simulated environment without real-world financial risk.

All actions, from token creation to trading, are verified on the Solana blockchain for ultimate transparency, linking off-chain metadata to an immutable on-chain proof.

Core Features
Virtual Token Launchpad: Deploy custom virtual tokens in under a minute with a small SOL fee. No coding required.

Live Trading Environment: Buy and sell any token launched on the platform in a simulated market.

Dynamic Sell Tax: A unique tax mechanism that starts at 15% and decreases to a 5% floor as a token raises more SOL, rewarding early participation.

On-Chain Verification: Every significant action (like launching a token) is tied to a real Solana transaction, providing a verifiable on-chain footprint.

$JUNK Deflationary Tokenomics: All platform fees collected in SOL are used to periodically buy back and burn the $JUNK token, directly linking platform activity to deflationary pressure.

Gamification & Bounties: Earn JunkPoints ($JP) for trading and launching tokens, unlock achievements, and climb the leaderboards.

How It Works
Token Launchpad
Creating a token on JUNKNET is designed to be simple and transparent.

Connect Wallet: Connect any Solana-compatible wallet.

Fill in Details: Provide a name, symbol, description, and social links for your token.

Pay the Fee: Sign a transaction to pay the 0.005 SOL platform fee. This transaction also includes a memo with your token's details, creating a permanent on-chain record of your launch.

Verification & Creation: Our oracle verifies the SOL transaction. Once confirmed, your token is instantly created in the JUNKNET ecosystem and becomes available for trading.

Trading & Tokenomics
Trading on JUNKNET is free of platform fees for buying and selling. The primary economic mechanism is a dynamic sell tax applied to every token launched on the platform.

Dynamic Sell Tax: The sell tax starts at 15%. For every 1 SOL a project raises, the tax is reduced by 25% of the remaining reducible amount, until it reaches a final, fixed rate of 5%.

Fee Distribution: When a token graduates and migrates to a real Automated Market Maker (AMM) like Meteora, the collected fees are distributed:

50% to the Token Deployer

50% to the JUNKNET Treasury (used for $JUNK buybacks and burns)

This system incentivizes both token creators and the overall health of the JUNKNET ecosystem.

Local Setup & Installation
To run your own instance of JUNKNET, follow these steps:

1. Clone the repository:

git clone [https://github.com/your-username/junknet.git](https://github.com/your-username/junknet.git)
cd junknet

2. Install dependencies:

yarn install

3. Set up your environment variables:
Create a .env file by copying the example file:

cp .env.example .env

Now, open the .env file and fill in the required values:

RPC_URL: Your Solana RPC endpoint.

LP_WALLET: The public key of the wallet that will receive platform fees.

LP_SECRET_KEY: (IMPORTANT) The secret key for the LP_WALLET. This is required for the server to process sell transactions and send SOL to users. Never commit this key to a public repository.

JUNK_MINT: The mint address of the $JUNK token.

XAI_API_KEY (Optional): An API key for Grok for AI-powered features.

SMTP_* (Optional): Credentials for an SMTP server to send email notifications for curated applications.

4. Initialize the database:
This command needs to be run only once to set up the SQLite database schema.

node server.js --init-db

5. Start the server:

node server.js

The application should now be running on http://localhost:3000.

The Stack
Backend: Node.js, Express.js

Database: better-sqlite3 (lightweight and file-based)

Frontend: Vanilla HTML, CSS, and JavaScript. No frameworks.

Blockchain Interaction: @solana/web3.js for all Solana interactions.

Charting: Lightweight Charts™ by TradingView.
