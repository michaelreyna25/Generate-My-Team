const fs = require('fs');
const path = require('path');
const express = require('express');
const jest = require('jest');
const manager = require('./manager');


const app = express();

describe('manager', () => {
    it('should manage')