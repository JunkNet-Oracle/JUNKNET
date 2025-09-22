// JUNKNET Virtual Oracle Explorer - Server
// This file contains the core backend logic for the JUNKNET platform.

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import Database from 'better-sqlite3';
import fs from 'fs';
import compression from 'compression';
import cors from 'cors';
import {
  Connection,
  LAMPORTS_PER_SOL,Q
  PublicKey,
  Keypair,
  SystemProgram,
  Transaction,
} from '@solana/web3.js';
import bs58 from 'bs58';
import multer from 'multer';
import sharp from 'sharp';
import nodemailer from 'nodemailer';
import { getAssociatedTokenAddress } from '@solana/spl-token';

// Load environment variables from .env file
dotenv.config();

/* -------------------- Paths & Directories -------------------- */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PUBLIC_DIR = path.join(__dirname, 'public');
const LOGO_DIR = path.join(__dirname, 'data', 'uploads');
fs.mkdirSync(LOGO_DIR, { recursive: true });

/* -------------------- Express App Setup -------------------- */
const app = express();
app.set('trust proxy', true);
app.use(cors());
app.use(compression());
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));
app.use('/logos', express.static(LOGO_DIR));

/* -------------------- Configuration -------------------- */
const PORT = process.env.PORT || 3000;
const PUBLIC_URL = process.env.PUBLIC_URL || `http://localhost:${PORT}`;
const RPC_URL = process.env.RPC_URL;
const LP_WALLET_ADDRESS = process.env.LP_WALLET;
const LP_SECRET_KEY = process.env.LP_SECRET_KEY;

// Validate essential configuration
if (!RPC_URL || !LP_WALLET_ADDRESS || !LP_SECRET_KEY) {
    console.error("FATAL: Missing essential environment variables. Please check your .env file.");
    process.exit(1);
}

const SOL = new Connection(RPC_URL, 'confirmed');
const LP_KEYPAIR = Keypair.fromSecretKey(bs58.decode(LP_SECRET_KEY));
const JUNK_MINT = new PublicKey(process.env.JUNK_MINT || 'JUNK111111111111111111111111111111111111111');
const MEMO_PROGRAM = new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr');

const VIRTUAL_CAP_DEFAULT = 300_000_000;

/* -------------------- Database Setup -------------------- */
const dbFile = process.env.DB_PATH || path.join(__dirname, 'data', 'junknet.db');
fs.mkdirSync(path.dirname(dbFile), { recursive: true });
const db = new Database(dbFile);

// Command-line flag to initialize the database schema
if (process.argv.includes('--init-db')) {
    console.log('Initializing database schema...');
    // ... (Your bootstrapSchema() function would be here) ...
    console.log('Database schema initialized.');
    process.exit(0);
}

// ... (Rest of your server.js logic: helpers, API endpoints, etc.) ...
// This section should contain all your existing route handlers and logic,
// which is omitted here for brevity but should be included in your file.

// Placeholder for the main logic
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});


/* -------------------- Static File Serving & Start Server -------------------- */
app.use(express.static(PUBLIC_DIR));
app.get('*', (req, res) => {
    res.sendFile(path.join(PUBLIC_DIR, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`[JUNKNET] Server running on ${PUBLIC_URL}`);
});
