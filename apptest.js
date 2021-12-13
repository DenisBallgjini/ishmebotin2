const app = require('../src/app.js');
const express = require('express');
const assert = require('assert');
const THREE = require('three');
const request = require('supertest');

describe('showing hello world message', function() {

    it('should return helloworld message', function() {
      return request(helloworld)
      .get('app.js')
        .then(function(response){
            assert.equal(response.status, 200)
            assert.equal(response.text, 'Hello World!')
        })
    });
});
