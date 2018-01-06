const main = require('../..');
import * as fs from 'fs';

describe('require this module', () => {
  it('Verify module members', () => {
    // TODO: replace "main.add" to one of your module members
    expect(typeof main.add).toBe('function');
  });

  it('Verify type definition files', () => {
    expect(fs.statSync('./dist/lib/main.d.ts').isFile()).toBeTruthy();
  });
});
