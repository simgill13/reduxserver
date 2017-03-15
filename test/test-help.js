import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';
import {Provider} from 'react-redux';

import store from '../js/store';
import reducer from '../js/reducers/reducers';

const should = chai.should();

import {Help} from '../js/components/help';

describe('Help component', function() {
  it('Renders the instructions and go back button', function() {

   const renderer = TestUtils.createRenderer();
   renderer.render(<Help />);
   const result = renderer.getRenderOutput();
   console.log(result);

  })
})
