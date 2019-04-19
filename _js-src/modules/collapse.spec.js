/** test framework and assertion lib */
import { describe } from 'mocha';
const expect = require('chai').expect;

/** functions */
const isFunction = require('../typeChecking/isFunction').default;

import collapse from '../modules/collapse';
import collapseConfig from './collapse.config.js';

const { JSDOM } = require('jsdom');

describe('collapse...', function() {
  before(function() {
    const jsdom = new JSDOM(`
        <!doctype html><html lang="en">
            <div>
                <!-- single -->
                <button class="trigger-single" data-toggle="collapse" data-target="collapse"></button>
                <div class="collapse collapse--hidden" hidden></div>
                <!-- multi -->
                <button class="trigger-multi" data-toggle="collapse" data-target="collapse-multi"></button>
                <div class="collapse--hidden collapse-multi" hidden></div>
                <div class="collapse--hidden collapse-multi" hidden></div>
                <!-- nested collapse not supported just yet -->
                <button class="trigger" data-toggle="collapse" data-target="collapse-nested"></button>
                <div>
                    <div>
                        <div>
                            <div class="collapse--hidden collapse-nested" hidden></div>
                        </div>
                    </div>
                </div>
            </div>
        </html>`);

    global.navigator = {
      userAgent: 'node.js',
    };

    const { window } = jsdom;

    global.window = window;
    global.document = window.document;
    global.Event = window.Event;

    collapse();

    global.singleTrigger = window.document.getElementsByClassName('trigger-single')[0];
    global.singleTarget = window.document.getElementsByClassName('collapse')[0];

    global.multiTrigger = window.document.getElementsByClassName('trigger-multi')[0];
    global.multiTargets = window.document.getElementsByClassName('collapse-multi');
  });

  it(`should be a function [object Function]`, function() {
    expect(isFunction(collapse)).to.equal(true);
  });

  describe('single collapse...', function() {
    it(`trigger and collapse (pre-existing in DOM) are working`, function() {
      expect(singleTrigger.classList.contains(collapseConfig.target.show)).to.equal(false);
      expect(singleTarget.classList.contains(collapseConfig.target.hide)).to.equal(true);
      expect(singleTarget.classList.contains('show')).to.equal(false);
      expect(singleTarget.hidden).to.equal(true);
      singleTrigger.click();
      expect(singleTrigger.classList.contains(collapseConfig.trigger.show)).to.equal(true);
      expect(singleTarget.classList.contains(collapseConfig.target.show)).to.equal(true);
      expect(singleTarget.classList.contains(collapseConfig.target.hide)).to.equal(false);
      expect(singleTarget.hidden).to.equal(false);
    });
  });

  describe('multi collapse...', function() {
    it(`trigger and collapse (pre-existing in DOM) are working`, function() {
      expect(multiTrigger.classList.contains(collapseConfig.trigger.show)).to.equal(false);
      Object.values(multiTargets).forEach(target => {
        expect(target.classList.contains(collapseConfig.target.hide)).to.equal(true);
        expect(target.classList.contains(collapseConfig.target.show)).to.equal(false);
        expect(target.hidden).to.equal(true);
      });
      multiTrigger.click();
      expect(multiTrigger.classList.contains(collapseConfig.trigger.show)).to.equal(true);
      Object.values(multiTargets).forEach(target => {
        expect(target.classList.contains(collapseConfig.target.hide)).to.equal(false);
        expect(target.classList.contains(collapseConfig.target.show)).to.equal(true);
        expect(target.hidden).to.equal(false);
      });
    });
  });
});

describe.skip('skipped:', function() {
  it(`should change class on trigger element (dynamically created element)`, function() {
    // TODO: will need puppeteer (or other Headless browser for this)
    const triggerString =
      '<button class="trigger-single unique-234423" data-toggle="collapse" data-target="collapse"></button>';
    const targetString = '<div class="collapse collapse--hidden" hidden></div>';

    const container = document.createElement('div');
    container.insertAdjacentHTML('afterbegin', triggerString);
    container.insertAdjacentHTML('afterbegin', targetString);

    const trigger = container.getElementsByTagName('button')[0];
    const target = container.getElementsByTagName('div')[0];
  });
  it(`nested collapse target (not supported at the moment)`, function() {});
});
