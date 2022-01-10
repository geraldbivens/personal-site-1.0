'use strict';

import { AB } from './fis/a-b.js';
import { CD } from './fis/c-d.js';
import { EF } from './fis/e-f.js';
import { GH } from './fis/g-h.js';
import { IJ } from './fis/i-j.js';
import { KL } from './fis/k-l.js';
import { MN } from './fis/m-n.js';
import { OP } from './fis/o-p.js';
import { QR } from './fis/q-r.js';
import { ST } from './fis/s-t.js';
import { UV } from './fis/u-v.js';
import { WX } from './fis/w-x.js';
import { YZ } from './fis/y-z.js';

const main = document.querySelector('main');

const users = [
  ...AB,
  ...CD,
  ...EF,
  ...GH,
  ...IJ,
  ...KL,
  ...MN,
  ...OP,
  ...QR,
  ...ST,
  ...UV,
  ...WX,
  ...YZ,
];

for (const user of users) {
  const contactCard = document.createElement('div');
  contactCard.classList.add('contact-card');

  const name = document.createElement('h4');
  name.textContent = user.name;

  // const website = document.createElement('p');
  // website.classList.add('website');
  // if (user.website === null) website.classList.add('hide');
  // website.innerHTML = `<a href="https://${user.website}/" target="_blank" rel="noreferrer noopener">
  //     ${user.website}
  //   </a>`;

  const contactInfoList = document.createElement('ul');
  contactInfoList.classList.add('contact-info-list');

  const email = document.createElement('li');
  if (user.email === null) email.classList.add('hide');
  email.innerHTML = `<a href="mailto: ${user.email}">
      <img src="/images/icons/email.png" width="16" height="16" title="Email" alt="Email" />
    </a>`;

  const github = document.createElement('li');
  if (user.github === null) github.classList.add('hide');
  github.innerHTML = `<a href="${user.github}" target="_blank" rel="noreferrer noopener">
      <img src="/images/icons/github.png" width="16" height="16" title="GitHub" alt="GitHub" />
    </a>`;

  const linkedin = document.createElement('li');
  if (user.linkedin === null) linkedin.classList.add('hide');
  linkedin.innerHTML = `<a href="${user.linkedin}" target="_blank" rel="noreferrer noopener">
      <img src="/images/icons/linkedin.png" width="16" height="16" title="LinkedIn" alt="LinkedIn" />
    </a>`;

  const medium = document.createElement('li');
  if (user.medium === null) medium.classList.add('hide');
  medium.innerHTML = `<a href="${user.medium}" target="_blank" rel="noreferrer noopener">
      <img src="/images/icons/medium.png" width="16" height="16" title="Medium" alt="Medium" />
    </a>`;

  const website = document.createElement('li');
  if (user.website === null) website.classList.add('hide');
  website.innerHTML = `<a href="${user.website}" target="_blank" rel="noreferrer noopener">
      <img src="/images/icons/website.png" width="16" height="16" title="Portfolio" alt="Portfolio" />
    </a>`;

  contactInfoList.append(github, linkedin, medium, website, email);

  contactCard.append(name, contactInfoList);

  main.append(contactCard);
}
