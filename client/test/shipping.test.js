// Copyright 2023 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../src/pages/shipping.js';

describe('Shipping', () => {
  let element;

  beforeEach(async () => {
    element = await fixture(html`<app-shipping></app-shipping>`);
  });

  it('renders main text element', () => {
    const shippingElement = element.shadowRoot.querySelector(
      '.shippingContainer > .shippingWrapper'
    );
    expect(shippingElement).to.exist;
    expect(shippingElement.textContent).to.equal(
      '\n          This website ships no products, but this website was shipped through\n          Google Cloud automation.\n          Learn more.\n        '
    );
  });
});
