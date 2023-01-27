const fs = require('fs');
const path = require('path');
const express = require('express');
const jest = require('jest');
const manager = require('./manager');


const app = express();

describe('manager', () => {
    it('Should display the manager prompt', () => {
        expect(manager.displayPrompt()).toBe(true);
    });

    it('should ', () => {
        expect(new manager().displayPrompt()).toBe(true); 

    });
    it('should ', () => {
        
});