// we need to first import the library and then using symmetric encryption and randombytes for salt

import crypto from 'crypto';
import { Buffer } from 'buffer';

const ALGORITHM = 'aes-256-cbc';
const IV_LENGTH = 16; // AES block size