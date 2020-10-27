import Application from 'in-element-ember-inspector-reproduction/app';
import config from 'in-element-ember-inspector-reproduction/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
